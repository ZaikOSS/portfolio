import { motion } from "framer-motion";

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

const categories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express", "PHP", "Python", "REST APIs", "GraphQL"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Supabase", "Firebase"],
  },
  {
    title: "Cybersecurity",
    icon: "🛡️",
    skills: ["Nmap", "Wireshark", "Burp Suite", "Docker Security", "AppArmor", "Seccomp", "CTF"],
  },
  {
    title: "DevOps & Tools",
    icon: "🔧",
    skills: ["Git", "Docker", "Linux", "CI/CD", "VS Code", "ELK Stack"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-mono text-primary text-sm mb-2">// Skills</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Tech <span className="gradient-text">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card border border-border rounded-xl p-6 card-hover"
            >
              <div className="text-2xl mb-3">{cat.icon}</div>
              <h3 className="text-lg font-bold text-foreground mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-mono rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
