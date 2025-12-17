import { Award, Briefcase, GraduationCap, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { aboutContent, education, certifications, personalInfo } from "@/lib/portfolio-data";

export function AboutSection() {
  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-muted/30"
      data-testid="section-about"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate software engineer dedicated to building scalable solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-primary" />
                  Professional Summary
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6" data-testid="text-about-summary">
                  {aboutContent.summary}
                </p>
                <div className="space-y-3" data-testid="list-about-highlights">
                  {aboutContent.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 text-sm text-foreground"
                      data-testid={`text-highlight-${index}`}
                    >
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      {highlight}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 lg:p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <GraduationCap className="h-5 w-5 text-primary" />
                  Education
                </h3>
                <div className="space-y-6" data-testid="list-education">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className="relative pl-6 border-l-2 border-primary/30 last:border-l-primary"
                      data-testid={`education-item-${index}`}
                    >
                      <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-primary" />
                      <h4 className="font-medium text-foreground" data-testid={`text-education-degree-${index}`}>
                        {edu.degree}
                      </h4>
                      <p className="text-muted-foreground text-sm" data-testid={`text-education-school-${index}`}>
                        {edu.school}
                      </p>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                        <MapPin className="h-3 w-3" />
                        <span data-testid={`text-education-location-${index}`}>{edu.location}</span>
                        <span className="mx-2">•</span>
                        <span data-testid={`text-education-period-${index}`}>{edu.period}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  Certifications
                </h3>
                <div className="space-y-3" data-testid="list-certifications">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3"
                      data-testid={`certification-item-${index}`}
                    >
                      <div className="mt-1.5 h-2 w-2 rounded-full bg-chart-2 flex-shrink-0" />
                      <span className="text-sm text-foreground" data-testid={`text-certification-${index}`}>{cert}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-quick-facts">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4" data-testid="text-quick-facts-heading">
                  Quick Facts
                </h3>
                <div className="space-y-4">
                  <div data-testid="quick-fact-location">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Location
                    </p>
                    <p className="text-sm text-foreground flex items-center gap-2" data-testid="text-quick-fact-location">
                      <MapPin className="h-4 w-4 text-primary" />
                      {personalInfo.location}
                    </p>
                  </div>
                  <div data-testid="quick-fact-experience">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Experience
                    </p>
                    <p className="text-sm text-foreground" data-testid="text-quick-fact-experience">
                      3+ Years Professional
                    </p>
                  </div>
                  <div data-testid="quick-fact-specialization">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      Specialization
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-1" data-testid="list-specializations">
                      <Badge variant="secondary" className="text-xs" data-testid="badge-specialization-fullstack">
                        Full-Stack
                      </Badge>
                      <Badge variant="secondary" className="text-xs" data-testid="badge-specialization-aws">
                        AWS Cloud
                      </Badge>
                      <Badge variant="secondary" className="text-xs" data-testid="badge-specialization-ml">
                        ML/NLP
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
