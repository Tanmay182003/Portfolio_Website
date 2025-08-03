import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Code2, 
  Globe, 
  Cpu,
  Microchip,
  Brain,
  Wrench,
  GitBranch,
  Settings
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Core Languages",
      icon: <Code2 className="w-6 h-6" />,
      skills: [
        "C/C++",
        "Python",
        "MATLAB",
        "Verilog/VHDL",
        "JavaScript",
        "HTML/CSS"
      ]
    },
    {
      title: "Hardware & Embedded",
      icon: <Microchip className="w-6 h-6" />,
      skills: [
        "STM32",
        "RTOS",
        "PCB Design",
        "Signal Analysis",
        "RTK GNSS",
        "LTspice"
      ]
    },
    {
      title: "Platforms & Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: [
        "Linux/Unix",
        "Git",
        "Docker",
        "AWS",
        "QuestaSim/ModelSim",
        "Altium Designer"
      ]
    },
    {
      title: "AI & Robotics",
      icon: <Brain className="w-6 h-6" />,
      skills: [
        "ROS/PX4",
        "Computer Vision",
        "LLMs",
        "Sensor Fusion",
        "OpenCV",
        "TensorFlow"
      ]
    }
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
        <div className="grid md:grid-cols-2 gap-8">
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
                  <li key={skillIndex} className="text-sm text-muted-foreground">
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;