import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { personalInfo, skills } from "@/lib/portfolio-data";

export function HeroSection() {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadResume = () => {
    window.open("/api/resume/download", "_blank");
  };

  const featuredTech = ["React", "Node.js", "AWS", "Python", "PostgreSQL", "TypeScript"];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 dark:from-primary/10 dark:to-accent/10" />
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <Badge variant="secondary" className="px-4 py-1.5 text-sm" data-testid="badge-availability">
              Available for opportunities
            </Badge>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground tracking-tight" data-testid="text-hero-headline">
              Hi, I'm{" "}
              <span className="text-primary">{personalInfo.name.split(" ")[0]}</span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-muted-foreground" data-testid="text-hero-title">
              {personalInfo.title}
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed" data-testid="text-hero-description">
              3+ years of professional experience at{" "}
              <span className="text-foreground font-medium">Capgemini</span>{" "}
              specializing in full-stack development, AWS cloud, and machine learning applications.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2" data-testid="tech-badges-container">
            {featuredTech.map((tech, index) => (
              <Badge
                key={tech}
                variant="outline"
                className="px-3 py-1 text-sm font-medium"
                data-testid={`badge-tech-${tech.toLowerCase().replace(/[.\s]/g, "-")}-${index}`}
              >
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="gap-2 min-w-[160px]"
              data-testid="button-view-projects"
            >
              View Projects
              <ArrowDown className="h-4 w-4" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              onClick={handleDownloadResume}
              className="gap-2 min-w-[160px]"
              data-testid="button-download-resume"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
            
            <Button
              size="lg"
              variant="secondary"
              onClick={scrollToContact}
              className="gap-2 min-w-[160px]"
              data-testid="button-contact-cta"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 pt-4" data-testid="container-hero-social">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
              data-testid="link-linkedin-hero"
            >
              <Button variant="ghost" size="icon" aria-label="LinkedIn" data-testid="button-linkedin-hero">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              data-testid="link-github-hero"
            >
              <Button variant="ghost" size="icon" aria-label="GitHub" data-testid="button-github-hero">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send email"
              data-testid="link-email-hero"
            >
              <Button variant="ghost" size="icon" aria-label="Email" data-testid="button-email-hero">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
