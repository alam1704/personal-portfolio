import { GitBranch, Link, Mail } from "lucide-react";

const contactLinks = [
  {
    label: "alexlam1994@live.com",
    href: "mailto:alexlam1994@live.com",
    icon: Mail,
  },
  {
    label: "linkedin.com/in/alexlam94",
    href: "https://www.linkedin.com/in/alexlam94/",
    icon: Link,
  },
  {
    label: "github.com/alam1704",
    href: "https://github.com/alam1704",
    icon: GitBranch,
  },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
          Feel free to reach out through any of the channels below.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {contactLinks.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-card border border-border card-hover text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              <Icon className="h-5 w-5" />
              {label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
