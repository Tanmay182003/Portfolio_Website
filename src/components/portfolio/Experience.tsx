import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Experience {
  title: string;
  organization: string;
  location: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
}

const Experience = () => {
  const experiences: Experience[] = [
    {
      title: "Graduate Research Assistant",
      organization: "Purdue University",
      location: "West Lafayette, IN",
      date: "Aug 2023 – Present",
      description: "Research in software security, LLMs, and autonomous systems. Published at ICSE, USENIX, and ACM CCS. Led projects on zero-trust architecture and software supply chain security.",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?w=600&h=400&fit=crop",
      tags: ["Research", "Security", "LLMs", "Autonomous Systems"]
    },
    {
      title: "Firmware Engineering Intern",
      organization: "Lennox International",
      location: "Carrollton, TX",
      date: "May 2023 – Aug 2023",
      description: "Developed automated test and software release pipeline for thermostat firmware. Improved runtime reliability with multithreading, timeout detection, and OTA functionality.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=400&fit=crop",
      tags: ["Firmware", "Automation", "Embedded"]
    },
    {
      title: "Controls Engineering Intern",
      organization: "Rheem Manufacturing",
      location: "Montgomery, AL",
      date: "May 2022 – Aug 2022",
      description: "Designed modular controls algorithm for Heating Control System. Created simulation environment and performed test-driven development using Simulink and C.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
      tags: ["Controls", "Simulation", "Embedded"]
    },
    {
      title: "Teaching Assistant",
      organization: "Purdue University",
      location: "West Lafayette, IN",
      date: "Aug 2022 – Present",
      description: "TA for ECE courses: Embedded Systems, Computer Architecture, and Digital Design. Mentored students and led lab sessions.",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=600&h=400&fit=crop",
      tags: ["Teaching", "Mentoring", "Embedded"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Work & Research Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hands-on experience in research, firmware, controls, and teaching across academia and industry.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300">
              <div className="mb-4 relative overflow-hidden rounded-lg">
                <img src={exp.image} alt={exp.title} className="w-full h-48 object-cover" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
              <div className="text-muted-foreground mb-2">{exp.organization} &bull; {exp.location}</div>
              <div className="text-sm text-muted-foreground mb-2">{exp.date}</div>
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} className="bg-accent/10 hover:bg-accent/20 text-accent border-none">{tag}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
