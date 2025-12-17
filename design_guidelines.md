# Design Guidelines: Professional Developer Portfolio

## Design Approach
**Reference-Based Approach** - Drawing inspiration from modern developer portfolios including Brittany Chiang and Lee Robinson's sites, known for clean, minimal, recruiter-friendly layouts with excellent readability and professional presentation.

## Core Design Principles
- Recruiter-focused: Information hierarchy optimized for quick scanning
- Professional minimalism: Clean layouts with purposeful use of space
- Technical credibility: Modern design patterns that demonstrate technical sophistication
- Conversion-oriented: Clear CTAs and streamlined user journeys

## Typography
- **Primary Font**: Inter (Google Fonts)
- **Alternative**: SF Pro Display or Poppins
- **Hierarchy**:
  - Hero Headline: 4xl-6xl, font-bold
  - Section Headings: 3xl-4xl, font-semibold
  - Subsection Titles: xl-2xl, font-medium
  - Body Text: base-lg, font-normal
  - Labels/Tags: sm, font-medium

## Layout System
**Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Section padding: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Card spacing: p-6 to p-8
- Element gaps: gap-4, gap-6, gap-8
- Max container width: max-w-6xl to max-w-7xl

## Component Library

### Navigation
- Fixed header with smooth scroll navigation
- Active section indicators
- Mobile hamburger menu with slide-in drawer
- Subtle blur backdrop effect

### Hero Section
- Full-width section with professional headshot (optional circular frame, border-2 accent)
- Headline + subheadline stack
- Primary CTA: "View Projects" (filled button, primary blue)
- Secondary CTAs: "Download Resume" + "Contact" (outline buttons)
- Tech stack badges row with subtle hover lift

### Project Cards
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Card structure: Image placeholder (if available) → Title → Description → Tech stack badges → Action links
- Border radius: rounded-xl
- Hover: subtle shadow elevation, transform scale-105 transition
- Links: "Live Demo" + "GitHub" with arrow icons

### Experience Timeline
- Vertical timeline with company logos
- Left-aligned content blocks
- Bullet points for achievements
- Date ranges in muted text

### Skills Section
- Category-based organization with distinct subsections
- Badge grid layout for technologies
- Pill-style badges with subtle backgrounds
- Hover effect: slight scale and brightness increase

### Contact Form
- 2-column layout on desktop (form + contact info)
- Fields: Name, Email, Subject, Message
- Validation states with inline feedback
- Submit button with loading state
- Contact info sidebar: Email, LinkedIn, GitHub with icons

### Buttons
- Primary: Filled with primary blue, white text, smooth hover darken
- Secondary: Outline with primary blue border, hover fill
- Ghost: Text only with hover background
- All: rounded-lg, px-6 py-3, transition-all duration-200

## Responsive Behavior
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Stack columns on mobile, expand to multi-column on tablet/desktop
- Reduce spacing proportionally on smaller screens
- Collapsible navigation on mobile

## Interactions & Animations
- Smooth scroll to sections (scroll-behavior: smooth)
- Fade-in on scroll for sections (subtle, not distracting)
- Hover states on all interactive elements
- Loading spinner for resume download
- Form submission feedback (success/error states)

## Images
**Hero Section**: Professional headshot (circular or rounded square, 200-300px diameter) OR professional workspace/code editor background image (subtle, darkened overlay for text readability)
**Project Cards**: Project screenshots or placeholder graphics showcasing each application's UI
**About Section**: Optional additional professional photo or tech stack visualization

## Special Features
- Downloadable resume: Button triggers PDF download with filename tracking
- External links: Open in new tab with secure rel attributes
- Copy email functionality: Click to copy with toast notification
- Social proof: Certifications displayed as badge grid
- Smooth section transitions with intersection observer

## Accessibility
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible states on all interactive elements
- Sufficient contrast ratios throughout
- Alt text for all images