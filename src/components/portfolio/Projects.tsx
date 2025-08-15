
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";


interface ProjectTech {
  core: string[];
  tools?: string[];
  domain?: string[];
}

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: ProjectTech;
  live: string;
}

interface Research {
  title: string;
  description: string;
  image: string;
  technologies: ProjectTech;
  live: string;
}

const Projects = () => {
  // Projects (non-research, non-internship)
  const projects: Project[] = [
    {
      title: "VFS Autonomous Vehicle System (Drone)",
      description: `Software Lead (Nov'24–Present). Leading avionics integration: ensured ground station, Jetson, flight controller communication for off-board controls. Developing sensor fusion and autonomy pipeline integrating LiDAR, stereo cameras, RTK GNSS on Jetson for real-time navigation and obstacle avoidance using CV and depth estimation. Leveraging computer vision algorithms for obstacle avoidance using stereo imagery and depth estimation. Working on the avionics team to drive hardware–software integration, component selection, battery management.`,
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop",
      technologies: {
        core: ["Python", "ROS", "PX4"],
        tools: ["OpenCV", "LiDAR", "RTK GNSS"],
        domain: ["Computer Vision", "Sensor Fusion", "Navigation"]
      },
      live: "/projects/vfs-autonomous-vehicle-system"
    },
    {
      title: "FAIL: Analyzing Software Failures Using LLMs",
      description: `Aug'24–Present. Interviewed engineers and found limited learning from software failures; identified need for automated tools. Created a database of failure cases by extracting insights from news articles using LLMs and NLP techniques. Developed softwarefailures.com to visualize incident trends and currently building an RAG-based chatbot to assist engineers in learning from historical failures.`,
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&h=400&fit=crop",
      technologies: {
        core: ["HTML/CSS", "Django"],
        tools: ["OpenAI", "AWS", "PostgreSQL"],
        domain: ["NLP", "Full Stack", "Cloud"]
      },
      live: "https://softwarefailures.com/"
    },
    {
      title: "USB Receiver for AHB-Lite SoC",
      description: `Designed and implemented modular hardware components for a USB Receiver in AHB-Lite SoC. Developed NRZI decoding, bit de-stuffing, and error detection logic. Used QuestaSim and Altium for simulation and PCB design, and performed detailed waveform analysis for debugging.`,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&h=400&fit=crop",
      technologies: {
        core: ["Verilog"],
        tools: ["QuestaSim", "Altium", "LTspice"],
        domain: ["Hardware Design", "Signal Analysis", "SoC"]
      },
      live: "/projects/usb-receiver-ahb-lite"
    }
  ];

  // Research Projects
  const research: Research[] = [
    {
      title: "Software Signing Research",
      description: `May'23–Aug'24. Analyzed data, developing a coding scheme to classify key insights on software signing practices. Investigated software signing adoption trends and challenges for 2 papers accepted at USENIX’25 & ASE’26.`,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      technologies: {
        core: ["Data Analysis", "Security"],
        tools: ["Python", "Survey"],
        domain: ["Software Signing", "Supply Chain"]
      },
      live: "/projects/software-signing-research"
    },
    {
      title: "Zero Trust Architecture Research",
      description: "Conducted comparative analysis on JSM and ZT JAVA based on NIST ZTA principles for software security. Research accepted at ICSE'25 and contributed to multiple USENIX papers.",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
      technologies: {
        core: ["Java", "Zero Trust"],
        tools: ["NIST ZTA"],
        domain: ["Cybersecurity", "Security Analysis"]
      },
      live: "/projects/zero-trust-architecture"
    },
    {
      title: "LLM Software Security Analysis",
      description: "First author of empirical study using GPT and Bard to analyze historical software supply chain security failures. Achieved 68% accuracy in classification, accepted at ACM CCS SCORED'23.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      technologies: {
        core: ["Python", "GPT"],
        tools: ["OpenAI"],
        domain: ["LLMs", "Machine Learning", "Security Analysis"]
      },
      live: "/projects/llm-security-analysis"
    }
  ];

  // Work/Internship Projects
  const workProjects: Project[] = [
    {
      title: "Software Engineering Intern",
      description: `Lennox International, Carrollton, TX (Jun'25–Present). Automated firmware testing and release pipelines for thermostat & control boards. Built a GUI tool with a local LLM-powered chatbot that uses natural language to trigger these pipelines, generate release notes/wiki docs, and answer user queries. Added OTA updates, timeout detection, and multi-session support to improve reliability and efficiency. Implemented real-time pipeline failure detection with suggested fixes and conversational troubleshooting support.`,
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
      technologies: {
        core: ["Python", "C/C++"],
        tools: ["STM32Cube", "OTA", "LLM"],
        domain: ["Embedded Systems", "Firmware", "Automation"]
      },
      live: "/projects/thermostat-firmware-pipeline"
    },
    {
      title: "Embedded Software Engineering Intern",
      description: `Rheem Manufacturing, Atlanta, GA (May'24–Aug'24). Designed a modular controls algorithm for Heating Control System for various Water Heaters; created simulation environment; performed test-driven development and validated the models using Simulink and C. Coded the synthesis files for MATLAB-generated code to test the modules on hardware and internal tools. Developed controls designs for new products based on the systems requirements, validated and tested the systems.`,
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=400&fit=crop",
      technologies: {
        core: ["MATLAB", "Simulink", "C"],
        tools: ["PCB Testing"],
        domain: ["Control Systems", "Hardware Testing", "System Design"]
      },
      live: "/projects/water-heater-control-system"
    },
    {
      title: "Hardware Engineering Intern",
      description: `Rheem Manufacturing, Indianapolis, IN (Aug'23–Dec'23). Collaborated with test engineers to design and construct test fixtures for PCB testing; gained exposure to controls hardware failure diagnostics, electrical validation testing, and component qualification processes. Prepared and released engineering specifications, design schematics, and qualification documents.`,
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600&h=400&fit=crop",
      technologies: {
        core: ["PCB Testing", "Diagnostics"],
        tools: ["Test Fixtures", "Schematics"],
        domain: ["Hardware", "Validation"]
      },
      live: "/MoreInfo"
    }
  ];

  return (
    <>
      <section id="projects" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
              Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Selected technical and engineering projects in embedded systems, AI, and hardware design.
            </p>
          </div>
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary/20">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" style={{ height: '400px' }} />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80" />
                  </div>
                  <div className="p-8 relative">
                    <div className="mb-3">
                      <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.core.map((tech, techIndex) => (
                          <Badge key={techIndex} className="bg-primary/10 hover:bg-primary/20 text-primary border-none">{tech}</Badge>
                        ))}
                      </div>
                      {project.technologies.tools && (
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.tools.map((tech, techIndex) => (
                            <Badge key={techIndex} className="bg-accent/10 hover:bg-accent/20 text-accent border-none">{tech}</Badge>
                          ))}
                        </div>
                      )}
                      {project.technologies.domain && (
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.domain.map((tech, techIndex) => (
                            <Badge key={techIndex} className="bg-muted hover:bg-muted/80 text-muted-foreground border-none">{tech}</Badge>
                          ))}
                        </div>
                      )}
                    </div>
                    {/* More Info link removed as per user request */}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="work-projects" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
              Work & Internship Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Projects completed during industry internships and work experience.
            </p>
          </div>
          <div className="grid gap-8">
            {workProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary/20">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" style={{ height: '400px' }} />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80" />
                  </div>
                  <div className="p-8 relative">
                    <div className="mb-3">
                      <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.core.map((tech, techIndex) => (
                          <Badge key={techIndex} className="bg-primary/10 hover:bg-primary/20 text-primary border-none">{tech}</Badge>
                        ))}
                      </div>
                      {project.technologies.tools && (
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.tools.map((tech, techIndex) => (
                            <Badge key={techIndex} className="bg-accent/10 hover:bg-accent/20 text-accent border-none">{tech}</Badge>
                          ))}
                        </div>
                      )}
                      {project.technologies.domain && (
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.domain.map((tech, techIndex) => (
                            <Badge key={techIndex} className="bg-muted hover:bg-muted/80 text-muted-foreground border-none">{tech}</Badge>
                          ))}
                        </div>
                      )}
                    </div>
                    {/* More Info link removed as per user request */}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="research" className="py-20 px-6 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
              Research
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Research projects and publications in software security, LLMs, and cybersecurity.
            </p>
          </div>
          <div className="grid gap-8">
            {research.map((item, index) => (
              <Card key={index} className="overflow-hidden bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary/20">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" style={{ height: '400px' }} />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background/80" />
                  </div>
                  <div className="p-8 relative">
                    <div className="mb-3">
                      <h3 className="text-2xl font-semibold text-foreground">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{item.description}</p>
                    <div className="space-y-2 mb-6">
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.core.map((tech, techIndex) => (
                          <Badge key={techIndex} className="bg-primary/10 hover:bg-primary/20 text-primary border-none">{tech}</Badge>
                        ))}
                      </div>
                      {item.technologies.tools && (
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.tools.map((tech, techIndex) => (
                            <Badge key={techIndex} className="bg-accent/10 hover:bg-accent/20 text-accent border-none">{tech}</Badge>
                          ))}
                        </div>
                      )}
                      {item.technologies.domain && (
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.domain.map((tech, techIndex) => (
                            <Badge key={techIndex} className="bg-muted hover:bg-muted/80 text-muted-foreground border-none">{tech}</Badge>
                          ))}
                        </div>
                      )}
                    </div>
                    {/* More Info link removed as per user request */}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;