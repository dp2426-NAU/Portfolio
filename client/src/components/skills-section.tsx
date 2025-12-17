import { Code2, Palette, Server, Database, Cloud, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/portfolio-data";

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: skills.languages,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
  },
  {
    title: "Frontend",
    icon: Palette,
    skills: skills.frontend,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
  },
  {
    title: "Backend",
    icon: Server,
    skills: skills.backend,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
  {
    title: "Databases",
    icon: Database,
    skills: skills.databases,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: skills.cloud,
    color: "text-chart-5",
    bgColor: "bg-chart-5/10",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: skills.tools,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 lg:py-32"
      data-testid="section-skills"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Technical Skills
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            
            return (
              <Card
                key={category.title}
                className="group hover-elevate transition-all duration-300"
                data-testid={`skill-category-${category.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-lg ${category.bgColor} transition-colors`}
                    >
                      <IconComponent className={`h-5 w-5 ${category.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground" data-testid={`text-skill-category-${category.title.toLowerCase().replace(/\s+/g, "-")}`}>
                      {category.title}
                    </h3>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex flex-wrap gap-2" data-testid={`list-skills-${category.title.toLowerCase().replace(/\s+/g, "-")}`}>
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-sm px-3 py-1 font-normal"
                        data-testid={`badge-skill-${skill.toLowerCase().replace(/[.\s/]/g, "-")}-${skillIndex}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
