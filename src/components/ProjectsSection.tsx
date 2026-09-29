import { ExternalLink, GitBranch } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  githubUrl?: string;
  liveUrl?: string;
};

const projects: Project[] = [
  {
    title: "SQL MCP Server",
    description:
      "A C#/.NET 8 Model Context Protocol server that gives GitHub Copilot read-only access to SQL Server metadata, with database discovery and per-request table/schema inspection across databases on the same server.",
    tech: ["C#", ".NET 8", "SQL Server", "MCP", "GitHub Copilot"],
    githubUrl: "https://github.com/alam1704/sql-mcp",
  },
  {
    title: "LaunchDarkly Release-Flag Integration",
    description:
      "Integrated a LaunchDarkly release flag into an annual data-maintenance workflow in a legacy .NET/WPF business application. Initialized flags before startup processing and gated the new cleanup path using store context for controlled rollout.",
    tech: [".NET Framework", "WPF", "LaunchDarkly", "Feature Flags", "SQL Server"],
  },
  {
    title: "Personal Portfolio",
    description:
      "This site — built with React 19, TypeScript, Vite, Tailwind CSS v4, and TanStack Router, deployed on Cloudflare Pages.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    githubUrl: "https://github.com/alam1704/personal-portfolio",
    liveUrl: "https://personal-portfolio-52b.pages.dev/",
  },
  {
    title: "DB2S3 Backup Automation",
    description:
      "A Windows Task Scheduler process that backs up the main server's database and uploads it to an S3 bucket for offsite storage.",
    tech: [".NET", "AWS S3", "SQL Server"],
    githubUrl: "https://github.com/alam1704/DB2S3",
  },
  {
    title: "Pokémon Stock Bot",
    description:
      "A Discord bot that scrapes retailer websites for Pokémon card stock and posts an alert when new products become available.",
    tech: ["TypeScript", "Playwright", "Discord.js"],
    githubUrl: "https://github.com/alam1704/pokemon-stock-bot",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Projects</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-card p-6 rounded-lg card-hover border border-border flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground text-sm mb-4 grow">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 rounded-full bg-primary/10 text-xs text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {(project.githubUrl || project.liveUrl) && (
                <div className="flex gap-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <GitBranch className="h-4 w-4" /> Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1 text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink className="h-4 w-4" /> Live
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
