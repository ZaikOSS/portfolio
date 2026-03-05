import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-primary text-sm mb-2">// Contact</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Open to internships, collaborations, and interesting projects. Feel
            free to reach out!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-center gap-6"
        >
          <a
            href="mailto:zakaria.ouadifi@usmba.ac.ma"
            className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 card-hover group"
          >
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <Mail className="text-primary" size={20} />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">Email</div>
              <div className="text-xs text-muted-foreground">
                zakaria.ouadifi@usmba.ac.ma
              </div>
            </div>
          </a>

          <a
            href="https://github.com/ZaikOSS"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 card-hover group"
          >
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <Github className="text-primary" size={20} />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">
                GitHub
              </div>
              <div className="text-xs text-muted-foreground">@ZaikOSS</div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/zakaria-ouadifi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 card-hover group"
          >
            <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <Linkedin className="text-primary" size={20} />
            </div>
            <div>
              <div className="text-sm font-semibold text-foreground">
                LinkedIn
              </div>
              <div className="text-xs text-muted-foreground">
                in/zakaria-ouadifi
              </div>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
