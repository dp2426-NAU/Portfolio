import { Heart, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/lib/portfolio-data";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 border-t border-border"
      data-testid="footer"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground" data-testid="text-footer-credit">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-destructive fill-destructive" />
            <span>by {personalInfo.name}</span>
          </div>

          <div className="flex items-center gap-2" data-testid="container-footer-social">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit LinkedIn profile"
              data-testid="link-linkedin-footer"
            >
              <Button variant="ghost" size="icon" aria-label="LinkedIn" data-testid="button-linkedin-footer">
                <Linkedin className="h-4 w-4" />
              </Button>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit GitHub profile"
              data-testid="link-github-footer"
            >
              <Button variant="ghost" size="icon" aria-label="GitHub" data-testid="button-github-footer">
                <Github className="h-4 w-4" />
              </Button>
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send email"
              data-testid="link-email-footer"
            >
              <Button variant="ghost" size="icon" aria-label="Email" data-testid="button-email-footer">
                <Mail className="h-4 w-4" />
              </Button>
            </a>
          </div>

          <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
            &copy; {currentYear} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
