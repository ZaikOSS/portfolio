import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="font-mono text-primary text-sm mb-2">// About</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Who <span className="gradient-text">I Am</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-card border border-border rounded-xl p-8 sm:p-10 border-glow"
        >
          <div className="font-mono text-xs text-muted-foreground mb-4">
            ~/about $ cat bio.md
          </div>

          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I'm <span className="text-foreground font-semibold">Zakaria Ouadifi</span>, known online as{" "}
              <span className="text-primary font-semibold">Zaikos</span>. I'm a Digital Development Engineering
              & Cybersecurity student at <span className="text-foreground">ENSA Fès</span> (École Nationale des
              Sciences Appliquées), pursuing my degree in{" "}
              <span className="text-foreground">GDNC (Génie du Développement Numérique et Cybersécurité)</span>.
            </p>

            <p>
              I'm passionate about building full-stack web applications and exploring the world of
              cybersecurity — from setting up SSH honeypots to participating in CTF competitions. I enjoy
              bridging the gap between development and security, creating applications that are both
              elegant and resilient.
            </p>

            <p>
              My goal is to deepen my expertise in secure software development and offensive security.
              I'm actively seeking <span className="text-primary">internship opportunities</span> and{" "}
              <span className="text-primary">collaborations</span> where I can contribute to meaningful
              projects while growing as a developer and security researcher.
            </p>
          </div>

          <div className="section-line mt-8 mb-6" />

          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary font-mono">20+</div>
              <div className="text-xs text-muted-foreground mt-1">Repositories</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary font-mono">ENSA Fès</div>
              <div className="text-xs text-muted-foreground mt-1">University</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary font-mono">GDNC</div>
              <div className="text-xs text-muted-foreground mt-1">Program</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
