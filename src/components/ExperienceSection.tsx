import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";

interface Experience {
  company: string;
  role: string;
  dates: string;
  location: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    company: "SecOps ENSAF",
    role: "Technical & Training Staff Member",
    dates: "Jan 2026 – Present",
    location: "Fès, Morocco",
    responsibilities: [
      "Represented ENSA Fès at the national cybersecurity event Cyber Odyssey",
      "Delivered technical workshops on pentesting and log analysis",
      "Contributed to training and mentoring students in cybersecurity practices",
    ],
  },
  {
    company: "ONDA (Office National Des Aéroports)",
    role: "Network Monitoring Intern – SNMP Supervision Application",
    dates: "Aug 2025 – Sept 2025",
    location: "Fès, Morocco",
    responsibilities: [
      "Designed and deployed a network monitoring application using SNMP",
      "Strengthened network equipment security",
      "Simulated network architectures using GNS3 and Cisco Packet Tracer",
      "Participated in project planning and infrastructure supervision",
    ],
  },
  {
    company: "École Normale Supérieure de Fès",
    role: "Full-Stack Web Developer Intern",
    dates: "July 2025 – Aug 2025",
    location: "Fès, Morocco",
    responsibilities: [
      "Developed the official website for the WITS 2026 international conference",
      "Built dynamic frontend using React.js",
      "Developed backend services using Node.js and PHP",
      "Designed and managed MySQL database for participant management",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-primary text-sm mb-2">// Experience</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Professional <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.15,
                  duration: 0.4,
                  ease: "easeOut" as const,
                }}
                className="relative pl-12 sm:pl-16"
              >
                {/* Dot */}
                <div className="absolute left-2.5 sm:left-4.5 top-1.5 w-3 h-3 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary)/0.5)]" />

                <div className="bg-card border border-border rounded-xl p-6 card-hover">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-1">
                    <h3 className="text-lg font-bold text-foreground">
                      {exp.company}
                    </h3>
                    <span className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground shrink-0">
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>

                  <p className="text-sm text-primary font-mono mb-3 flex items-center gap-1.5">
                    <Briefcase size={13} /> {exp.role}
                  </p>

                  <p className="text-xs text-muted-foreground font-mono mb-4 flex items-center gap-1.5">
                    <Calendar size={12} /> {exp.dates}
                  </p>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((r, j) => (
                      <li
                        key={j}
                        className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-['▹'] before:absolute before:left-0 before:text-primary before:text-xs"
                      >
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
