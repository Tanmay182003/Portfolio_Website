import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Database, 
  Palette, 
  Globe, 
  Smartphone, 
  Cloud,
  GitBranch,
  Settings
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: ["Python", "C/C++", "MATLAB", "Java"]
    },
    {
      title: "Embedded & Hardware",
      icon: <Database className="w-6 h-6" />,
      skills: ["Embedded Systems", "Firmware Development", "Verilog/ASIC Design", "STM32/Microcontrollers"]
    },
    {
      title: "AI & Frameworks",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["ROS/PX4", "OpenCV/Computer Vision", "Django", "Machine Learning"]
    },
    {
      title: "Tools & Platforms",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Git/Linux", "AWS/Cloud", "Docker", "Simulink"]
    }
  ];

  const tools = [
    { name: "STM32CubeIDE", icon: <Code2 className="w-8 h-8 text-primary" /> },
    { name: "MATLAB/Simulink", icon: <Palette className="w-8 h-8 text-accent" /> },
    { name: "TeraTerm", icon: <Globe className="w-8 h-8 text-primary-glow" /> },
    { name: "Git/Linux", icon: <GitBranch className="w-8 h-8 text-primary" /> },
    { name: "Docker", icon: <Settings className="w-8 h-8 text-accent" /> },
    { name: "AWS/PostgreSQL", icon: <Cloud className="w-8 h-8 text-primary-glow" /> }
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technical expertise spanning embedded systems, AI/ML, cybersecurity, and software engineering. 
            Developed through hands-on projects, research, and industry experience.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-8 bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary/20"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/20 text-primary">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              <ul className="list-disc ml-6 space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="text-sm text-foreground">{skill}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <div>
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">
            Tools & Technologies
          </h3>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <Card 
                key={index}
                className="p-6 text-center bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary/20 group cursor-pointer"
              >
                <div className="mb-3 flex justify-center group-hover:animate-float">
                  {tool.icon}
                </div>
                <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                  {tool.name}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;