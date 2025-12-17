import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { personalInfo } from "@/lib/portfolio-data";
import { useEffect, useState } from "react";

// ✅ IMPORTANT: match EXACT filename + case
import profileImg from "@/assets/Profile.png";

export function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    window.open("/api/resume/download", "_blank");
  };

  /* =========================
     AUTO-TYPE CONTENT
     ========================= */
  const fullText = [
    "Hi, I'm Divya",
    "Software Engineer",
    "3+ years of professional experience at Capgemini specializing in Python, full-stack development,Java,Spring boot, AWS cloud, and machine learning applications."
  ];

  const [displayLines, setDisplayLines] = useState<string[]>([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (lineIndex >= fullText.length) return;

    const currentLine = fullText[lineIndex];

    if (charIndex < currentLine.length) {
      const timer = setTimeout(() => {
        setDisplayLines((prev) => {
          const updated = [...prev];
          updated[lineIndex] =
            (updated[lineIndex] || "") + currentLine[charIndex];
          return updated;
        });
        setCharIndex((prev) => prev + 1);
      }, 60);

      return () => clearTimeout(timer);
    } else {
      const pause = setTimeout(() => {
        setCharIndex(0);
        setLineIndex((prev) => prev + 1);
      }, 500);

      return () => clearTimeout(pause);
    }
  }, [charIndex, lineIndex]);

  const featuredTech = [
    "React",
    "Node.js",
    "AWS",
    "Python",
    "PostgreSQL",
    "TypeScript",
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
        <div className="text-center space-y-8">

          {/* PROFILE IMAGE */}
          <div className="flex justify-center">
            <img
              src={profileImg}
              alt="Profile"
              className="w-40 h-40 rounded-full object-cover shadow-xl border-4 border-primary/20"
            />
          </div>

          <Badge variant="secondary" className="px-4 py-1.5 text-sm">
            Available for opportunities
          </Badge>

          {/* AUTO-TYPED TEXT */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground">
              {displayLines[0]}
              {lineIndex === 0 && <span className="animate-pulse">|</span>}
            </h1>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium text-primary">
              {displayLines[1]}
              {lineIndex === 1 && <span className="animate-pulse">|</span>}
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {displayLines[2]}
              {lineIndex === 2 && <span className="animate-pulse">|</span>}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {featuredTech.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" onClick={scrollToProjects}>
              View Projects <ArrowDown className="h-4 w-4 ml-1" />
            </Button>

            <Button size="lg" variant="outline" onClick={handleDownloadResume}>
              <Download className="h-4 w-4 mr-1" />
              Download Resume
            </Button>

            <Button size="lg" variant="secondary" onClick={scrollToContact}>
              <Mail className="h-4 w-4 mr-1" />
              Contact Me
            </Button>
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin />
              </Button>
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer">
              <Button variant="ghost" size="icon">
                <Github />
              </Button>
            </a>
            <a href={`mailto:${personalInfo.email}`}>
              <Button variant="ghost" size="icon">
                <Mail />
              </Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
