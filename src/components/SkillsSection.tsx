const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      "C#",
      ".NET Framework 4.8",
      ".NET 8",
      ".NET 10",
      "WPF (XAML)",
      "Windows Services",
      "TypeScript",
      "React",
    ],
  },
  {
    title: "APIs & Protocols",
    skills: [
      "REST APIs (HTTPS)",
      "AWS API Gateway",
      "Third-Party Integrations (PBS, MIMS, ERX)",
      "ActiveX / TCP-IP (PCEFTPOS)",
      "WCF",
      "Model Context Protocol (MCP)",
    ],
  },
  {
    title: "Databases",
    skills: ["Microsoft SQL Server (SSMS)", "MySQL (Workbench)", "Dapper"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS Lambda (.NET)", "CloudWatch", "IAM / Policies", "AWS IoT", "TeamCity"],
  },
  {
    title: "Tools & Version Control",
    skills: [
      "Visual Studio 2026",
      "VS Code",
      "Bitbucket",
      "SourceTree",
      "Git Submodules",
      "npm",
    ],
  },
  {
    title: "Testing",
    skills: ["NUnit", "Moq"],
  },
  {
    title: "AI & Agentic Development",
    skills: [
      "GitHub Copilot",
      "GitHub Copilot CLI",
      "Claude Code (Agents, Skills, Plans)",
      "Agent Configuration (CLAUDE.md, Rules, Slash Commands)",
      "Context Engineering",
      "AI-Assisted Development",
    ],
  },
  {
    title: "Reporting",
    skills: ["Crystal Reports"],
  },
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-card p-6 rounded-lg card-hover border border-border"
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-primary/10 text-foreground/80 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
