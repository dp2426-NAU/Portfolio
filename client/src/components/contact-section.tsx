import { useState } from "react";
import { Send, Mail, Linkedin, Github, MapPin, Phone, Copy, Check, Loader2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { personalInfo } from "@/lib/portfolio-data";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function ContactSection() {
  const { toast } = useToast();
  const [emailCopied, setEmailCopied] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    contactMutation.mutate(data);
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setEmailCopied(true);
      toast({
        title: "Email copied!",
        description: "Email address has been copied to clipboard.",
      });
      setTimeout(() => setEmailCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please copy the email manually.",
        variant: "destructive",
      });
    }
  };

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-muted/30"
      data-testid="section-contact"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-contact-heading">
            Get In Touch
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-description">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3" data-testid="container-contact-form">
            <Card>
              <CardContent className="p-6 lg:p-8">
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                    data-testid="form-contact"
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem data-testid="form-field-name">
                            <FormLabel data-testid="label-name">Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your name"
                                {...field}
                                data-testid="input-name"
                              />
                            </FormControl>
                            <FormMessage data-testid="error-name" />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem data-testid="form-field-email">
                            <FormLabel data-testid="label-email">Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="your@email.com"
                                {...field}
                                data-testid="input-email"
                              />
                            </FormControl>
                            <FormMessage data-testid="error-email" />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem data-testid="form-field-subject">
                          <FormLabel data-testid="label-subject">Subject</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="What's this about?"
                              {...field}
                              data-testid="input-subject"
                            />
                          </FormControl>
                          <FormMessage data-testid="error-subject" />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem data-testid="form-field-message">
                          <FormLabel data-testid="label-message">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message..."
                              className="min-h-[150px] resize-none"
                              {...field}
                              data-testid="input-message"
                            />
                          </FormControl>
                          <FormMessage data-testid="error-message" />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto gap-2"
                      disabled={contactMutation.isPending}
                      data-testid="button-submit-contact"
                    >
                      {contactMutation.isPending ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-6" data-testid="container-contact-info">
            <Card data-testid="card-contact-info">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-6" data-testid="text-contact-info-heading">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4" data-testid="contact-info-email">
                    <div className="p-2.5 rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1" data-testid="label-contact-email">
                        Email
                      </p>
                      <div className="flex items-center gap-2">
                        <a
                          href={`mailto:${personalInfo.email}`}
                          className="text-sm text-foreground hover:text-primary transition-colors"
                          data-testid="link-email-contact"
                        >
                          {personalInfo.email}
                        </a>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7"
                          onClick={copyEmail}
                          data-testid="button-copy-email"
                          aria-label="Copy email address"
                        >
                          {emailCopied ? (
                            <Check className="h-3.5 w-3.5 text-chart-2" />
                          ) : (
                            <Copy className="h-3.5 w-3.5" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="contact-info-phone">
                    <div className="p-2.5 rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1" data-testid="label-contact-phone">
                        Phone
                      </p>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-sm text-foreground hover:text-primary transition-colors"
                        data-testid="link-phone-contact"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4" data-testid="contact-info-location">
                    <div className="p-2.5 rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1" data-testid="label-contact-location">
                        Location
                      </p>
                      <p className="text-sm text-foreground" data-testid="text-contact-location">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card data-testid="card-social-links">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-4" data-testid="text-social-heading">
                  Connect With Me
                </h3>
                <div className="flex gap-3" data-testid="container-social-buttons">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="link-linkedin-contact"
                    aria-label="Visit LinkedIn profile"
                  >
                    <Button variant="outline" size="icon" className="h-11 w-11" aria-label="LinkedIn" data-testid="button-linkedin-social">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-testid="link-github-contact"
                    aria-label="Visit GitHub profile"
                  >
                    <Button variant="outline" size="icon" className="h-11 w-11" aria-label="GitHub" data-testid="button-github-social">
                      <Github className="h-5 w-5" />
                    </Button>
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    data-testid="link-email-button-contact"
                    aria-label="Send email"
                  >
                    <Button variant="outline" size="icon" className="h-11 w-11" aria-label="Email" data-testid="button-email-social">
                      <Mail className="h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
