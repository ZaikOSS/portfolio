import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import profileImg from "@/assets/profile.jpg";

const CARD_WIDTH = 280;
const CARD_HEIGHT = 340;
const REVEAL_THRESHOLD = 55;

const ScratchCard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScratching, setIsScratching] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);
  const lastPos = useRef<{ x: number; y: number } | null>(null);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = CARD_WIDTH * 2;
    canvas.height = CARD_HEIGHT * 2;
    ctx.scale(2, 2);

    // Silver scratch overlay
    const gradient = ctx.createLinearGradient(0, 0, CARD_WIDTH, CARD_HEIGHT);
    gradient.addColorStop(0, "#b8b8b8");
    gradient.addColorStop(0.3, "#d4d4d4");
    gradient.addColorStop(0.5, "#c0c0c0");
    gradient.addColorStop(0.7, "#d8d8d8");
    gradient.addColorStop(1, "#a8a8a8");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, CARD_WIDTH, CARD_HEIGHT);

    // Add texture noise
    for (let i = 0; i < 8000; i++) {
      const x = Math.random() * CARD_WIDTH;
      const y = Math.random() * CARD_HEIGHT;
      const brightness = Math.random() * 40 + 160;
      ctx.fillStyle = `rgba(${brightness},${brightness},${brightness},0.3)`;
      ctx.fillRect(x, y, 1, 1);
    }

    // Subtle scratch line hints
    ctx.strokeStyle = "rgba(200,200,200,0.4)";
    ctx.lineWidth = 0.5;
    for (let i = 0; i < 12; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * CARD_WIDTH, Math.random() * CARD_HEIGHT);
      ctx.lineTo(Math.random() * CARD_WIDTH, Math.random() * CARD_HEIGHT);
      ctx.stroke();
    }

    // "Scratch me" text
    ctx.fillStyle = "rgba(100,100,100,0.5)";
    ctx.font = "600 14px 'Inter', sans-serif";
    ctx.textAlign = "center";
    ctx.fillText("✦ Scratch to reveal ✦", CARD_WIDTH / 2, CARD_HEIGHT / 2);
  }, []);

  useEffect(() => {
    initCanvas();
  }, [initCanvas]);

  const getPos = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = CARD_WIDTH / rect.width;
    const scaleY = CARD_HEIGHT / rect.height;

    if ("touches" in e) {
      return {
        x: (e.touches[0].clientX - rect.left) * scaleX,
        y: (e.touches[0].clientY - rect.top) * scaleY,
      };
    }
    return {
      x: (e.clientX - rect.left) * scaleX,
      y: (e.clientY - rect.top) * scaleY,
    };
  };

  const scratch = (pos: { x: number; y: number }) => {
    const canvas = canvasRef.current;
    if (!canvas || revealed) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.globalCompositeOperation = "destination-out";
    ctx.lineWidth = 36;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (lastPos.current) {
      ctx.beginPath();
      ctx.moveTo(lastPos.current.x, lastPos.current.y);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    }

    // Soft edges
    ctx.beginPath();
    ctx.arc(pos.x, pos.y, 18, 0, Math.PI * 2);
    ctx.fill();

    lastPos.current = pos;
    checkReveal();
  };

  const checkReveal = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;
    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparent++;
    }
    const percent = (transparent / (imageData.data.length / 4)) * 100;
    setScratchPercent(percent);

    if (percent > REVEAL_THRESHOLD && !revealed) {
      setRevealed(true);
    }
  };

  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    if (revealed) return;
    e.preventDefault();
    setIsScratching(true);
    lastPos.current = getPos(e);
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isScratching || revealed) return;
    e.preventDefault();
    scratch(getPos(e));
  };

  const handleEnd = () => {
    setIsScratching(false);
    lastPos.current = null;
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="relative flex-shrink-0"
    >
      <div
        className="relative rounded-2xl overflow-hidden border border-border/50 select-none"
        style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
      >
        {/* Profile image underneath */}
        <img
          src={profileImg}
          alt="Zakaria Ouadifi"
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Canvas scratch overlay */}
        <AnimatePresence>
          {!revealed && (
            <motion.canvas
              ref={canvasRef}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing touch-none"
              style={{ width: CARD_WIDTH, height: CARD_HEIGHT }}
              onMouseDown={handleStart}
              onMouseMove={handleMove}
              onMouseUp={handleEnd}
              onMouseLeave={handleEnd}
              onTouchStart={handleStart}
              onTouchMove={handleMove}
              onTouchEnd={handleEnd}
            />
          )}
        </AnimatePresence>

        {/* Revealed glow */}
        {revealed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: "inset 0 0 40px hsl(160 100% 45% / 0.15), 0 0 60px hsl(160 100% 45% / 0.1)",
            }}
          />
        )}
      </div>

      {/* Progress hint */}
      <AnimatePresence>
        {!revealed && scratchPercent > 5 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center text-xs text-muted-foreground font-mono mt-3"
          >
            {Math.round(scratchPercent)}% revealed
          </motion.p>
        )}
      </AnimatePresence>

      {revealed && (
        <motion.p
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center text-xs text-primary font-mono mt-3 text-glow"
        >
          ✦ Zakaria Ouadifi ✦
        </motion.p>
      )}
    </motion.div>
  );
};

export default ScratchCard;
