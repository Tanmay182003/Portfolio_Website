import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent animate-glow-pulse">
            Tanmay Singla
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8 animate-fade-in-up [animation-delay:0.2s]">
            Computer Engineering Graduate Student & Embedded Systems Engineer
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
            href="https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID" 
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 group"
          >
            <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
          </a>
          <a 
            href="https://www.linkedin.com/in/tanmay-singla/" 
            className="p-3 rounded-full bg-card/50 backdrop-blur-sm hover:bg-primary/20 transition-all duration-300 group"
          >
            <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
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
    </section>
  );
};

export default Hero;