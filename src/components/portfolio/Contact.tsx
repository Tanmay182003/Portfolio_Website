import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MapPin, Phone, Github, Linkedin, Globe } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "singlat@purdue.edu",
      link: "mailto:singlat@purdue.edu"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "765-771-9582",
      link: "tel:+17657719582"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      details: "West Lafayette, IN",
      link: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/Tanmay182003",
      color: "hover:text-[#333]"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tanmay-singla/",
      color: "hover:text-[#0077B5]"
    },
    {
      icon: <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10.93 2.045c-.547.366-3.22 2.14-5.938 3.945C2.272 7.794.05 9.286.05 9.304c0 .019.136.11.305.2.167.096 2.85 1.583 5.965 3.31l5.656 3.143.144-.074c.082-.04 2.169-1.232 4.642-2.642l4.493-2.568.027 7.947h2.668V9.319l-3.46-2.32c-4.664-3.124-8.392-5.586-8.484-5.606-.045-.008-.527.287-1.076.652M5.355 16.633l.014 2.005 3.31 1.987 3.31 1.982 3.337-2 3.332-2.005V16.62c0-1.092-.013-1.983-.027-1.983s-1.318.782-2.9 1.741l-3.306 1.996-.431.256-1.32-.791a604.12 604.12 0 0 1-3.286-1.979l-2.005-1.21c-.024-.008-.027.897-.027 1.983"/>,
      </svg>,
      name: "Google Scholar",
      url: "https://scholar.google.com/citations?user=3x6UeZIAAAAJ&hl=en&oi=ao",
      color: "hover:text-[#4285F4]"
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent" style={{ lineHeight: '1.3' }}>
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Interested in collaboration, research opportunities, or discussing embedded systems and AI? 
            I'd love to connect and explore how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-card-gradient border-primary/20">
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-foreground">Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-2 bg-background/50 border-primary/30 focus:border-primary"
                  placeholder="Your name"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-2 bg-background/50 border-primary/30 focus:border-primary"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <Label htmlFor="message" className="text-foreground">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-2 bg-background/50 border-primary/30 focus:border-primary min-h-[120px]"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow-primary hover:shadow-glow-accent transition-all duration-300"
              >
                Send Message
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-foreground">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="flex items-center gap-4 p-4 rounded-lg bg-card-gradient border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary/20 group"
                  >
                    <div className="p-2 rounded-lg bg-primary/20 text-primary group-hover:bg-primary/30 transition-colors">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{info.title}</h4>
                      <p className="text-muted-foreground">{info.details}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-foreground">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 rounded-lg bg-card-gradient border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow-primary/20 text-muted-foreground ${social.color} group`}
                  >
                    <div className="group-hover:animate-float">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Additional Info */}
            <Card className="p-6 bg-card-gradient border-primary/20">
              <h4 className="text-lg font-semibold mb-3 text-foreground">Let's Collaborate</h4>
              <p className="text-muted-foreground mb-4">
                Currently pursuing M.S. in Computer Engineering at Purdue University. 
                Open to research collaborations, internships, and full-time opportunities.
              </p>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Available for research collaborations</li>
                <li>• Open to embedded systems projects</li>
                <li>• Interested in AI/ML applications</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;