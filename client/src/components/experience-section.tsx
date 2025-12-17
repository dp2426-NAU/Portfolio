import { Building2, Calendar, MapPin, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/portfolio-data";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 lg:py-32"
      data-testid="section-experience"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Work Experience
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey building enterprise-grade solutions
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative md:flex items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
                data-testid={`experience-item-${exp.id}`}
              >
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />

                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className={`hidden md:flex items-center gap-2 text-muted-foreground mb-2 ${index % 2 === 0 ? "justify-end" : ""}`}>
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm font-medium">{exp.period}</span>
                  </div>
                </div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="md:hidden flex items-center gap-2 text-muted-foreground mb-3">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm font-medium">{exp.period}</span>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground" data-testid={`text-exp-title-${exp.id}`}>
                            {exp.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-2 mt-2">
                            <div className="flex items-center gap-1.5 text-primary">
                              <Building2 className="h-4 w-4" />
                              <span className="font-medium" data-testid={`text-exp-company-${exp.id}`}>{exp.company}</span>
                            </div>
                            {exp.client && (
                              <Badge variant="secondary" className="text-xs" data-testid={`badge-exp-client-${exp.id}`}>
                                Client: {exp.client}
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1.5">
                            <MapPin className="h-3.5 w-3.5" />
                            <span data-testid={`text-exp-location-${exp.id}`}>{exp.location}</span>
                          </div>
                          {exp.role && (
                            <div className="flex items-center gap-1.5 text-sm text-muted-foreground mt-1">
                              <Briefcase className="h-3.5 w-3.5" />
                              <span data-testid={`text-exp-role-${exp.id}`}>{exp.role}</span>
                            </div>
                          )}
                        </div>

                        <ul className="space-y-2" data-testid={`list-achievements-${exp.id}`}>
                          {exp.achievements.slice(0, 5).map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-sm text-muted-foreground"
                              data-testid={`text-achievement-${exp.id}-${i}`}
                            >
                              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
