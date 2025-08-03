import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Course {
  code: string;
  name: string;
  description: string;
  tags: string[];
}

const Courses = () => {
  const courses: Course[] = [
    {
      code: "ECE 559",
      name: "VLSI Design Laboratory",
      description: "Design of Very Large Scale Integrated Circuits, CMOS technology, circuit characterization, logic design and simulation.",
      tags: ["Hardware", "VLSI", "Digital Design"]
    },
    {
      code: "ECE 573",
      name: "Compilers and Translator Writing Systems",
      description: "Modern compiler design, parsing techniques, code generation and optimization strategies.",
      tags: ["Systems", "Programming Languages"]
    },
    {
      code: "ECE 437",
      name: "Computer Design and Prototyping",
      description: "Principles of computer architecture, focusing on processor, memory, and I/O organization with hardware description languages.",
      tags: ["Computer Architecture", "Hardware Design"]
    },
    {
      code: "ECE 301",
      name: "Signals and Systems",
      description: "Signal representation, continuous and discrete-time systems, frequency response, and filtering.",
      tags: ["Signal Processing", "Systems"]
    },
    {
      code: "ECE 337",
      name: "ASIC Design Laboratory",
      description: "Application-specific integrated circuit design using VHDL and synthesis tools, verification methods.",
      tags: ["Hardware", "ASIC", "Digital Design"]
    },
    {
      code: "ECE 463",
      name: "Networks and Security",
      description: "Computer network architecture, security protocols, and network performance analysis.",
      tags: ["Networks", "Security"]
    },
    {
      code: "ECE 570",
      name: "Artificial Intelligence",
      description: "Fundamental concepts in AI, machine learning, and their applications in engineering systems.",
      tags: ["AI", "Machine Learning"]
    },
    {
      code: "ECE 362",
      name: "Microprocessor Systems and Interfacing",
      description: "Microprocessor architecture, assembly language programming, and I/O interfacing techniques.",
      tags: ["Embedded Systems", "Computer Architecture"]
    },
    {
      code: "CS 251",
      name: "Data Structures and Algorithms",
      description: "Algorithm design and analysis, fundamental data structures, and problem-solving techniques.",
      tags: ["Algorithms", "Programming"]
    }
  ];

  return (
    <section id="courses" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
            Relevant Coursework
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Advanced coursework in computer engineering, covering hardware design, systems, networks, and software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, index) => (
            <Card 
              key={index}
              className="p-6 bg-card-gradient border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <div className="mb-2">
                <h3 className="text-xl font-semibold text-foreground">
                  {course.code}: {course.name}
                </h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {course.tags.map((tag, tagIndex) => (
                  <Badge 
                    key={tagIndex}
                    className="bg-accent/10 hover:bg-accent/20 text-accent border-none"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
