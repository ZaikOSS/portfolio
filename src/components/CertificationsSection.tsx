import { motion } from "framer-motion";
import { Shield, Network, Database, ExternalLink, Trophy } from "lucide-react";

interface Certification {
  name: string;
  org: string;
  description: string;
  tag: "Cybersecurity" | "Networking" | "Database";
  link: string;
}

const certifications: Certification[] = [
  {
    name: "Jr Penetration Tester",
    org: "TryHackMe",
    description: "Hands-on junior penetration testing methodologies and tools.",
    tag: "Cybersecurity",
    link: "/assets/certificates/THM-LK93NYWAM3.pdf",
  },
  {
    name: "Web Fundamentals",
    org: "TryHackMe",
    description: "Core web technologies and common vulnerability exploitation.",
    tag: "Cybersecurity",
    link: "/assets/certificates/THM-B5QNCERFWZ.pdf",
  },
  {
    name: "Pre Security",
    org: "TryHackMe",
    description:
      "Foundational knowledge in cybersecurity concepts and practices.",
    tag: "Cybersecurity",
    link: "/assets/certificates/THM-6GQCCKF92Y.pdf",
  },
  {
    name: "Enterprise Security: AI & Generative AI",
    org: "Codecademy",
    description:
      "Comprehensive course on the intersection of AI, Generative AI, and Enterprise Cybersecurity.",
    tag: "Cybersecurity",
    link: "/assets/certificates/cerif.pdf",
  },
  {
    name: "Introduction à la cybersécurité",
    org: "Cisco Networking Academy",
    description:
      "Essential cybersecurity principles and network defense strategies.",
    tag: "Networking",
    link: "/assets/certificates/_certificate_zakaria-ouadifi-usmba-ac-ma_46e9e07e-b93f-4dbf-a70b-69fbc563c451.pdf",
  },
  {
    name: "AWS Security Fundamentals",
    org: "AWS Training & Certification",
    description:
      "Fundamental cloud security concepts, access control, and shared responsibility on AWS.",
    tag: "Cybersecurity",
    link: "/assets/certificates/AWS Security Fundamentals Second Edition.pdf",
  },
  {
    name: "Introduction to Kali Linux Basics",
    org: "Simplilearn",
    description:
      "Essential navigation and operational skills for utilizing Kali Linux.",
    tag: "Cybersecurity",
    link: "/assets/certificates/kali linux.pdf",
  },
];

const tagConfig: Record<string, { icon: typeof Shield; color: string }> = {
  Cybersecurity: { icon: Shield, color: "text-primary" },
  Networking: { icon: Network, color: "text-accent" },
  Database: { icon: Database, color: "text-accent" },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4, ease: "easeOut" as const },
  }),
};

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="font-mono text-primary text-sm mb-2">
            // Certifications
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Verified <span className="gradient-text">Credentials</span>
          </h2>
        </motion.div>

        {/* TryHackMe Featured Card */}
        <motion.a
          href="https://tryhackme.com/p/Z4ik0S"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group block mb-10 relative bg-card border border-primary/30 rounded-xl p-6 sm:p-8 card-hover border-glow"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="p-3 rounded-lg bg-primary/10">
              <Trophy className="w-7 h-7 text-primary" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                TryHackMe Profile
              </h3>
              <p className="text-muted-foreground text-sm font-mono mt-1">
                @Z4ik0S
              </p>
              <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                Active cybersecurity learner completing practical offensive and
                defensive labs.
              </p>
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm text-primary font-mono shrink-0">
              View Full Profile <ExternalLink size={14} />
            </span>
          </div>
        </motion.a>

        {/* Certifications Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, i) => {
            const TagIcon = tagConfig[cert.tag]?.icon ?? Shield;
            const tagColor = tagConfig[cert.tag]?.color ?? "text-primary";

            return (
              <motion.div
                key={cert.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group relative bg-card border border-border rounded-xl p-6 card-hover flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <TagIcon size={18} className={tagColor} />
                  <span className={`text-xs font-mono ${tagColor}`}>
                    {cert.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {cert.name}
                </h3>
                <p className="text-xs font-mono text-muted-foreground mb-2">
                  {cert.org}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {cert.description}
                </p>

                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors font-mono"
                >
                  View Certificate <ExternalLink size={14} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
