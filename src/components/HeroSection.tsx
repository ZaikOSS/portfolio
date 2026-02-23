import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-primary text-sm mb-4 tracking-widest uppercase">
            <span className="animate-blink">▌</span> Hello, World
          </p>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            <span className="text-foreground">Zakaria </span>
            <span className="gradient-text">Ouadifi</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Full-Stack Developer & Cybersecurity Enthusiast — building secure, scalable, and elegant digital experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
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

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-5 h-8 border-2 border-muted-foreground/40 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-2 bg-primary rounded-full mt-1"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
