import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "VFS Autonomous Vehicle System",
      description: "Leading avionics integration for an autonomous vehicle system with sensor fusion, real-time navigation, and obstacle avoidance using LiDAR, stereo cameras, and RTK GNSS on Jetson platform.",
      image: "https://images.unsplash.com/photo-1558618047-3c2c0cf7c9ae?w=600&h=400&fit=crop",
      technologies: ["Python", "ROS", "PX4", "OpenCV", "Computer Vision", "LiDAR"],
      github: "#",
      live: "#",
    },
    {
      title: "FAIL: Software Failures Analysis Platform",
      description: "Developed an automated tool using LLMs and NLP to analyze software failures from news articles. Created https://softwarefailures.com/ with RAG-based chatbot for learning from historical failures.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["Django", "OpenAI", "AWS", "PostgreSQL", "HTML/CSS", "NLP"],
      github: "#",
      live: "https://softwarefailures.com/"
    },
    {
      title: "Software Signing Research",
      description: "Explored software supply chain security and studied the effectiveness of JSign and keyless signing solutions. Research presented at USENIX Security'24 with contributions to secure software distribution.",
      image: "https://images.unsplash.com/photo-1633265486064-086b219458ec?w=600&h=400&fit=crop",
      technologies: ["PKI", "Software Security", "JSign", "Code Signing", "Research"],
      github: "#",
      live: "#"
    },
    {
      title: "Thermostat Firmware Automation Pipeline",
      description: "Developed automated test and software release pipeline for thermostat firmware at Lennox, improving runtime reliability with multithreading, timeout detection, and OTA functionality.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      technologies: ["C/C++", "Embedded Systems", "Automation", "OTA", "Firmware"],
      github: "#",
      live: "#"
    },
    {
      title: "Water Heater Control System",
      description: "Designed modular controls algorithm for Heating Control System at Rheem Manufacturing. Created simulation environment and performed test-driven development using Simulink and C.",
      image: "https://images.unsplash.com/photo-1581092335397-9583aa1e4c96?w=600&h=400&fit=crop",
      technologies: ["MATLAB", "Simulink", "C", "Control Systems", "Hardware Testing"],
      github: "#",
      live: "#"
    },
    {
      title: "Zero Trust Architecture Research",
      description: "Conducted comparative analysis on JSM and ZT JAVA based on NIST ZTA principles for software security. Research accepted at ICSE'25 and contributed to multiple USENIX papers.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      technologies: ["Cybersecurity", "Zero Trust", "Java", "Security Analysis", "Research"],
      github: "#",
      live: "#"
    },
    {
      title: "LLM Software Security Analysis",
      description: "First author of empirical study using GPT and Bard to analyze historical software supply chain security failures. Achieved 68% accuracy in classification, accepted at ACM CCS SCORED'23.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      technologies: ["LLMs", "GPT", "Cybersecurity", "Machine Learning", "Research"],
      github: "#",
      live: "#",
      featured: true
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work spanning embedded systems, AI research, cybersecurity, and autonomous systems. 
            Each project demonstrates practical problem-solving and innovation in computer engineering.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="overflow-hidden bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary/20"
            >
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    style={{ height: '400px' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80" />
                </div>
                
                <div className="p-8 relative">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                    <Badge variant="secondary" className="bg-primary/20 text-primary">Featured</Badge>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        className="bg-accent/10 hover:bg-accent/20 text-accent border-none"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 mt-auto">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="border-primary/50 text-foreground hover:bg-primary/10"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm"
                      className="bg-primary hover:bg-primary-glow text-primary-foreground"
                      asChild
                    >
                      <a href={
                        index === 0 ? "/projects/vfs-autonomous-vehicle-system" :
                        index === 1 ? "/projects/software-failures-platform" :
                        index === 2 ? "/projects/software-signing-research" :
                        index === 3 ? "/projects/thermostat-firmware-pipeline" :
                        index === 4 ? "/projects/water-heater-control-system" :
                        index === 5 ? "/projects/zero-trust-architecture" :
                        index === 6 ? "/projects/llm-security-analysis" :
                        "/MoreInfo"
                      }>
                        <ExternalLink className="w-4 h-4 mr-2" />
                        More Info
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;