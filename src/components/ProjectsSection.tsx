import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Honeypot ELK",
    description:
      "SSH honeypot confined with AppArmor & Seccomp, capturing intrusion attempts and visualizing them in real-time via the ELK stack (Elasticsearch, Logstash, Kibana).",
    tech: ["Python", "Docker", "ELK Stack", "AppArmor", "Seccomp"],
    github: "https://github.com/ZaikOSS/honeypot-elk",
    featured: true,
  },
  {
    title: "SQLi Lab SecOps",
    description:
      "A hands-on SQL injection lab environment for security training, demonstrating common SQLi vulnerabilities and defenses.",
    tech: ["PHP", "MySQL", "Security", "Docker"],
    github: "https://github.com/ZaikOSS/SQLi_Lab_SecOps",
    featured: true,
  },
  {
    title: "Nmap Docker Lab",
    description:
      "Educational Docker-based lab for practicing Nmap scanning, banner grabbing, and service enumeration with multiple vulnerable targets.",
    tech: ["Docker", "HTML", "Nmap", "Networking"],
    github: "https://github.com/ZaikOSS/nmap-docker-lab-secops",
    featured: true,
  },
  {
    title: "SNMP Dashboard",
    description:
      "Network monitoring dashboard leveraging SNMP protocols to display real-time device metrics and status.",
    tech: ["JavaScript", "SNMP", "Node.js", "Charts"],
    github: "https://github.com/ZaikOSS/SNMP_Dashboard",
  },
  {
    title: "Movie React App",
    description:
      "A React-based movie browsing application with search and filtering capabilities, consuming a movie API.",
    tech: ["React", "CSS", "REST API"],
    github: "https://github.com/ZaikOSS/Movie-react",
  },
  {
    title: "Zaikos Media Player",
    description:
      "A custom-built media player for Windows with a clean interface and essential playback features.",
    tech: ["C++", "Qt", "Windows"],
    github: "https://github.com/ZaikOSS/ZaikosMediaPlayer",
  },
  {
    title: "Arabic Subtitle Converter",
    description:
      "A tool to fix Arabic subtitle encoding issues, ensuring correct display of right-to-left text.",
    tech: ["CSS", "JavaScript", "Encoding"],
    github: "https://github.com/ZaikOSS/arabic-subtitle-converter",
  },
  {
    title: "CP1 ENSA Fès Website",
    description:
      "Official website for the CP1 program at ENSA Fès, providing information about the curriculum and campus life.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ZaikOSS/CP1-ENSAF-WEBSITE",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-primary text-sm mb-2">// Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            What I've <span className="gradient-text">Built</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className={`group relative bg-card border border-border rounded-xl p-6 card-hover ${
                project.featured ? "border-glow" : ""
              }`}
            >
              {project.featured && (
                <span className="absolute top-4 right-4 px-2 py-0.5 bg-primary/10 text-primary text-xs font-mono rounded">
                  Featured
                </span>
              )}

              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 bg-secondary text-secondary-foreground text-xs font-mono rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={16} /> Source
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
