import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:zakaria.ouadifi@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
  };

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
            Open to internships, collaborations, and interesting projects. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <a
              href="mailto:zakaria.ouadifi@gmail.com"
              className="flex items-center gap-4 bg-card border border-border rounded-xl p-5 card-hover group"
            >
              <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">Email</div>
                <div className="text-xs text-muted-foreground">zakaria.ouadifi@gmail.com</div>
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
                <div className="text-sm font-semibold text-foreground">GitHub</div>
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
                <div className="text-sm font-semibold text-foreground">LinkedIn</div>
                <div className="text-xs text-muted-foreground">in/zakaria-ouadifi</div>
              </div>
            </a>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground font-mono text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
