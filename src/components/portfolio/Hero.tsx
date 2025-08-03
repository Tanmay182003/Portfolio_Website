import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-7xl mx-auto px-16">
        <div className="animate-fade-in-up py-12">
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-bold bg-hero-gradient bg-clip-text text-transparent animate-glow-pulse tracking-tight px-8 py-4">
              Tanmay Singla
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-fade-in-up [animation-delay:0.2s]">
              Computer Engineering Graduate Student
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up [animation-delay:0.4s]">
              Passionate about embedded systems, AI, and software security. Currently pursuing M.S. in Computer Engineering at Purdue University with expertise in firmware development, autonomous systems, and cybersecurity research.
            </p>
          </div>

          {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in-up [animation-delay:0.6s]">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow-primary hover:shadow-glow-accent transition-all duration-300"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/50 text-foreground hover:bg-primary/10 transition-all duration-300"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12 animate-fade-in-up [animation-delay:0.8s]">
          <a 
            href="https://github.com/Tanmay182003" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 group"
          >
            <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="https://www.linkedin.com/in/tanmay-singla/" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 group"
          >
            <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="https://scholar.google.com/citations?user=3x6UeZIAAAAJ&hl=en&oi=ao" 
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 group"
          >
            <svg className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M10.93 2.045c-.547.366-3.22 2.14-5.938 3.945C2.272 7.794.05 9.286.05 9.304c0 .019.136.11.305.2.167.096 2.85 1.583 5.965 3.31l5.656 3.143.144-.074c.082-.04 2.169-1.232 4.642-2.642l4.493-2.568.027 7.947h2.668V9.319l-3.46-2.32c-4.664-3.124-8.392-5.586-8.484-5.606-.045-.008-.527.287-1.076.652M5.355 16.633l.014 2.005 3.31 1.987 3.31 1.982 3.337-2 3.332-2.005V16.62c0-1.092-.013-1.983-.027-1.983s-1.318.782-2.9 1.741l-3.306 1.996-.431.256-1.32-.791a604.12 604.12 0 0 1-3.286-1.979l-2.005-1.21c-.024-.008-.027.897-.027 1.983"/>
            </svg>
          </a>
          <a 
            href="mailto:singlat@purdue.edu" 
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 group"
          >
            <Mail className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="animate-float cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          <ChevronDown className="w-8 h-8 text-muted-foreground hover:text-primary transition-colors mx-auto" />
        </div>
      </div>
      </div>
    </section>
  );
};

export default Hero;