import { useState, useEffect, useRef } from "react";
import { Code2, Palette, Server, Database, Cloud, Wrench } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { skills, type Skill } from "@/lib/portfolio-data";
import { Progress } from "@/components/ui/progress";

interface SkillCategory {
  title: string;
  icon: typeof Code2;
  skills: Skill[];
  color: string;
  bgColor: string;
  progressColor: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    skills: skills.languages,
    color: "text-chart-1",
    bgColor: "bg-chart-1/10",
    progressColor: "bg-chart-1",
  },
  {
    title: "Frontend",
    icon: Palette,
    skills: skills.frontend,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    progressColor: "bg-chart-2",
  },
  {
    title: "Backend",
    icon: Server,
    skills: skills.backend,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    progressColor: "bg-chart-3",
  },
  {
    title: "Databases",
    icon: Database,
    skills: skills.databases,
    color: "text-chart-4",
    bgColor: "bg-chart-4/10",
    progressColor: "bg-chart-4",
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: skills.cloud,
    color: "text-chart-5",
    bgColor: "bg-chart-5/10",
    progressColor: "bg-chart-5",
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: skills.tools,
    color: "text-primary",
    bgColor: "bg-primary/10",
    progressColor: "bg-primary",
  },
];

function AnimatedProgressBar({ 
  value, 
  color, 
  delay = 0,
  isVisible 
}: { 
  value: number; 
  color: string; 
  delay?: number;
  isVisible: boolean;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(value);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setProgress(0);
    }
  }, [value, delay, isVisible]);

  return (
    <div className="relative h-2 w-full rounded-full bg-muted overflow-hidden">
      <div
        className={`h-full rounded-full transition-all duration-1000 ease-out ${color}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

function SkillItem({ 
  skill, 
  index, 
  progressColor,
  isVisible,
  categoryId 
}: { 
  skill: Skill; 
  index: number; 
  progressColor: string;
  isVisible: boolean;
  categoryId: string;
}) {
  return (
    <div 
      className="space-y-2"
      data-testid={`skill-item-${skill.name.toLowerCase().replace(/[.\s/+]/g, "-")}-${categoryId}`}
    >
      <div className="flex justify-between items-center">
        <span 
          className="text-sm font-medium text-foreground"
          data-testid={`text-skill-name-${skill.name.toLowerCase().replace(/[.\s/+]/g, "-")}`}
        >
          {skill.name}
        </span>
        <span 
          className="text-xs text-muted-foreground tabular-nums"
          data-testid={`text-skill-proficiency-${skill.name.toLowerCase().replace(/[.\s/+]/g, "-")}`}
        >
          {skill.proficiency}%
        </span>
      </div>
      <AnimatedProgressBar 
        value={skill.proficiency} 
        color={progressColor} 
        delay={index * 100}
        isVisible={isVisible}
      />
    </div>
  );
}

export function SkillsSection() {
  const [visibleCategories, setVisibleCategories] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const categoryId = entry.target.getAttribute('data-category');
          if (categoryId && entry.isIntersecting) {
            setVisibleCategories((prev) => new Set([...prev, categoryId]));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-category]');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 lg:py-32"
      data-testid="section-skills"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center mb-16">
          <h2 
            className="text-3xl sm:text-4xl font-bold text-foreground"
            data-testid="text-skills-title"
          >
            Technical Skills
          </h2>
          <p 
            className="text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-skills-description"
          >
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            const categoryId = category.title.toLowerCase().replace(/\s+/g, "-");
            const isVisible = visibleCategories.has(categoryId);
            
            return (
              <Card
                key={category.title}
                className="group hover-elevate transition-all duration-300"
                data-testid={`skill-category-${categoryId}`}
                data-category={categoryId}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2.5 rounded-lg ${category.bgColor} transition-colors`}
                    >
                      <IconComponent className={`h-5 w-5 ${category.color}`} />
                    </div>
                    <h3 
                      className="text-lg font-semibold text-foreground" 
                      data-testid={`text-skill-category-${categoryId}`}
                    >
                      {category.title}
                    </h3>
                  </div>
                </CardHeader>
                
                <CardContent className="pt-0 space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillItem
                      key={skill.name}
                      skill={skill}
                      index={skillIndex}
                      progressColor={category.progressColor}
                      isVisible={isVisible}
                      categoryId={categoryId}
                    />
                  ))}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
