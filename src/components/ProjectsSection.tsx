import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Star,
  Calendar,
  Loader2,
  AlertCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useEffect, useState, useMemo } from "react";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  html_url: string;
  updated_at: string;
  fork: boolean;
}

type SortMode = "updated" | "stars";

const FEATURED = ["honeypot-elk", "SQLi_Lab_SecOps", "nmap-docker-lab-secops"];
const INITIAL_VISIBLE = 6; // Number of projects to show initially

const ProjectsSection = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeLang, setActiveLang] = useState("All");
  const [sort, setSort] = useState<SortMode>("updated");

  // New state for handling how many projects are visible
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE);

  useEffect(() => {
    fetch(
      "https://api.github.com/users/ZaikOSS/repos?per_page=100&sort=updated",
    )
      .then((r) => {
        if (!r.ok) throw new Error("Failed to fetch repositories");
        return r.json();
      })
      .then((data: GitHubRepo[]) => setRepos(data.filter((r) => !r.fork)))
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const languages = useMemo(() => {
    const langs = new Set<string>();
    repos.forEach((r) => r.language && langs.add(r.language));
    return ["All", ...Array.from(langs).sort()];
  }, [repos]);

  const filtered = useMemo(() => {
    let list =
      activeLang === "All"
        ? repos
        : repos.filter((r) => r.language === activeLang);
    list = [...list].sort((a, b) =>
      sort === "stars"
        ? b.stargazers_count - a.stargazers_count
        : new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime(),
    );
    return list;
  }, [repos, activeLang, sort]);

  // Reset visible count whenever the user changes the filter or sort
  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE);
  }, [activeLang, sort]);

  const formatDate = (d: string) =>
    new Date(d).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

  // Slice the filtered array to only show the visible count
  const displayedProjects = filtered.slice(0, visibleCount);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <p className="font-mono text-primary text-sm mb-2">// Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            What I've <span className="gradient-text">Built</span>
          </h2>
        </motion.div>

        {/* Loading */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-20 gap-3">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
            <p className="text-muted-foreground font-mono text-sm">
              Fetching repositories…
            </p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="flex flex-col items-center justify-center py-20 gap-3 text-center">
            <AlertCircle className="w-8 h-8 text-destructive" />
            <p className="text-destructive font-mono text-sm">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 px-4 py-2 text-sm font-mono rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
            >
              Retry
            </button>
          </div>
        )}

        {/* Filters & Sort */}
        {!loading && !error && (
          <>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              {/* Language filters */}
              <div className="flex flex-wrap gap-2 justify-center">
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLang(lang)}
                    className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all duration-200 ${
                      activeLang === lang
                        ? "bg-primary text-primary-foreground border-primary shadow-[0_0_12px_hsl(var(--primary)/0.3)]"
                        : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <div className="flex gap-2">
                {(["updated", "stars"] as SortMode[]).map((mode) => (
                  <button
                    key={mode}
                    onClick={() => setSort(mode)}
                    className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all duration-200 flex items-center gap-1.5 ${
                      sort === mode
                        ? "bg-primary/10 text-primary border-primary/30"
                        : "bg-card text-muted-foreground border-border hover:border-primary/50"
                    }`}
                  >
                    {mode === "updated" ? (
                      <Calendar size={12} />
                    ) : (
                      <Star size={12} />
                    )}
                    {mode === "updated" ? "Recent" : "Stars"}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-xs text-muted-foreground font-mono text-center mb-6">
              Showing {displayedProjects.length} of {filtered.length} repositor
              {filtered.length === 1 ? "y" : "ies"}
            </p>

            {/* Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {displayedProjects.map((repo) => {
                  const isFeatured = FEATURED.includes(repo.name);
                  return (
                    <motion.div
                      key={repo.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className={`group relative bg-card border border-border rounded-xl p-6 card-hover ${
                        isFeatured ? "border-glow" : ""
                      }`}
                    >
                      {isFeatured && (
                        <span className="absolute top-4 right-4 px-2 py-0.5 bg-primary/10 text-primary text-xs font-mono rounded">
                          Featured
                        </span>
                      )}

                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {repo.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                        {repo.description || "No description provided."}
                      </p>

                      <div className="flex flex-wrap items-center gap-3 mb-5 text-xs font-mono">
                        {repo.language && (
                          <span className="px-2 py-1 bg-secondary text-secondary-foreground rounded">
                            {repo.language}
                          </span>
                        )}
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Star size={12} /> {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1 text-muted-foreground">
                          <Calendar size={12} /> {formatDate(repo.updated_at)}
                        </span>
                      </div>

                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={16} /> Source
                      </a>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Pagination Controls */}
            <div className="mt-12 flex justify-center gap-4">
              {visibleCount < filtered.length && (
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="flex items-center gap-2 px-6 py-2.5 bg-primary/10 text-primary hover:bg-primary/20 rounded-lg font-mono text-sm transition-colors border border-primary/20"
                >
                  See More <ChevronDown size={16} />
                </button>
              )}
              {visibleCount > INITIAL_VISIBLE && (
                <button
                  onClick={() => setVisibleCount(INITIAL_VISIBLE)}
                  className="flex items-center gap-2 px-6 py-2.5 bg-card text-muted-foreground hover:text-foreground rounded-lg font-mono text-sm transition-colors border border-border hover:border-primary/50"
                >
                  Show Less <ChevronUp size={16} />
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
