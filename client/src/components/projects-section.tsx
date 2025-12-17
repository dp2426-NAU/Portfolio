import { ExternalLink, Github, Sparkles, Server, Cloud } from "lucide-react";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/lib/portfolio-data";

const projectIcons: { [key: number]: typeof Sparkles } = {
  1: Sparkles,
  2: Server,
  3: Cloud,
};

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 lg:py-32 bg-muted/30"
      data-testid="section-projects"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work showcasing full-stack development, cloud architecture, and machine learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => {
            const IconComponent = projectIcons[project.id] || Sparkles;
            
            return (
              <Card
                key={project.id}
                className="group flex flex-col overflow-hidden hover-elevate transition-all duration-300"
                data-testid={`project-card-${project.id}`}
              >
                <div className="h-48 bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <IconComponent className="h-16 w-16 text-primary/40 group-hover:scale-110 transition-transform duration-300" />
                </div>
                
                <CardHeader className="pb-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors" data-testid={`text-project-title-${project.id}`}>
                    {project.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="flex-1 space-y-4 pt-0">
                  <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-project-description-${project.id}`}>
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1.5" data-testid={`list-project-tech-${project.id}`}>
                    {project.techStack.slice(0, 6).map((tech, techIndex) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs px-2 py-0.5"
                        data-testid={`badge-project-tech-${project.id}-${techIndex}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 6 && (
                      <Badge variant="secondary" className="text-xs px-2 py-0.5" data-testid={`badge-project-more-${project.id}`}>
                        +{project.techStack.length - 6} more
                      </Badge>
                    )}
                  </div>

                  {project.highlights && (
                    <ul className="space-y-1.5 pt-2" data-testid={`list-project-highlights-${project.id}`}>
                      {project.highlights.slice(0, 2).map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-xs text-muted-foreground"
                          data-testid={`text-project-highlight-${project.id}-${i}`}
                        >
                          <div className="mt-1.5 h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </CardContent>
                
                <CardFooter className="pt-4 gap-3">
                  {project.liveUrl && (
                    <Button
                      variant="default"
                      size="sm"
                      className="gap-2 flex-1"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`link-live-demo-${project.id}`}
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 flex-1"
                      asChild
                    >
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid={`link-github-${project.id}`}
                      >
                        <Github className="h-3.5 w-3.5" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
