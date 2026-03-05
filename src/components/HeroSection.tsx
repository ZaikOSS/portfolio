import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import ScratchCard from "./ScratchCard";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Added a slightly more terminal-like greeting here too */}
            <p className="font-mono text-primary text-sm mb-4 tracking-widest uppercase">
              <span className="animate-blink">▌</span> root@zakaria:~# whoami
            </p>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              <span className="text-foreground">Zakaria </span>
              <span className="gradient-text">Ouadifi</span>
            </h1>

            {/* Updated Cybersecurity Description */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
              Security Researcher & Full-Stack Engineer, exploring offensive
              security, mitigating modern exploits, and writing code that
              withstands the wild.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-mono text-sm font-semibold rounded-lg hover:bg-primary/10 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>

          {/* Scratch card */}
          <ScratchCard />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
