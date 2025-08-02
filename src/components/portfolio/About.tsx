import { Card } from "@/components/ui/card";
import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Code className="w-8 h-8 text-primary" />,
      title: "Embedded Systems",
      description: "Expertise in firmware development, hardware-software integration, and real-time systems."
    },
    {
      icon: <Palette className="w-8 h-8 text-accent" />,
      title: "AI & Research",
      description: "Published research in software security, LLMs, and autonomous systems with practical applications."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary-glow" />,
      title: "System Design",
      description: "Building robust, scalable solutions from concept to deployment across various domains."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a Computer Engineering graduate student at Purdue University with a passion for embedded systems, 
            AI, and cybersecurity. With hands-on experience in firmware development and research, I bridge the gap 
            between hardware and software to create innovative solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Currently pursuing M.S. in Computer Engineering at Purdue University. Graduated with B.S. in Computer Engineering from Purdue University. My journey spans embedded systems development, AI research, and 
              cybersecurity, with internships at companies like Lennox and Rheem Manufacturing.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I've contributed to cutting-edge research in software security and zero-trust architectures, 
              published papers at top-tier conferences like ICSE and USENIX, and developed innovative 
              solutions for autonomous systems and IoT devices. As a TA for multiple courses, I'm passionate 
              about sharing knowledge and mentoring the next generation of engineers.
            </p>
          </div>
          <div className="bg-card-gradient rounded-lg p-8 shadow-glow-primary/20">
            <h4 className="text-xl font-semibold mb-4 text-foreground">Current Focus</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Embedded systems & firmware development
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                AI/ML research & autonomous systems
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary-glow rounded-full"></div>
                Cybersecurity & software supply chain
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                Teaching & mentoring at Purdue University
              </li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-8 text-center bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary/20 group"
            >
              <div className="mb-4 flex justify-center group-hover:animate-float">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;