import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, FileText } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { name: 'Home', href: '#', section: 'home' },
    { name: 'About', href: '#about', section: 'about' },
    { name: 'Projects', href: '#projects', section: 'projects' },
    { name: 'Skills', href: '#skills', section: 'skills' },
    { name: 'Contact', href: '#contact', section: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.section);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = section === 'home' ? 
          document.body : 
          document.getElementById(section);
        
        if (element) {
          const offsetTop = section === 'home' ? 0 : element.offsetTop;
          const offsetBottom = offsetTop + (section === 'home' ? window.innerHeight : element.offsetHeight);
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial active section
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string, section: string) => {
    setIsOpen(false);
    
    if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
      activeSection === 'home' ? 'bg-transparent' : 'bg-background/80 backdrop-blur-sm border-b border-primary/10'
    }`}>
      <nav className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-xl font-bold bg-hero-gradient bg-clip-text text-transparent hover:opacity-80">
            Tanmay Singla
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.name}
                variant="ghost"
                size="sm"
                className={`${
                  activeSection === item.section
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-primary/10'
                }`}
                onClick={() => scrollToSection(item.href, item.section)}
              >
                {item.name}
              </Button>
            ))}
            <Button size="sm" variant="outline" className="ml-4" asChild>
              <a href="/resume_Tanmay_Singla_sw-3.pdf" target="_blank" rel="noopener noreferrer" download>
                <FileText className="w-4 h-4 mr-2" />
                Resume
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 text-muted-foreground hover:text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 p-4 bg-background/95 backdrop-blur-sm border-b border-primary/10">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  variant="ghost"
                  size="sm"
                  className={`justify-start ${
                    activeSection === item.section
                      ? 'bg-primary/10 text-primary'
                      : 'text-muted-foreground hover:text-foreground hover:bg-primary/10'
                  }`}
                  onClick={() => scrollToSection(item.href, item.section)}
                >
                  {item.name}
                </Button>
              ))}
              <Button size="sm" variant="outline" asChild>
                <a href="/resume_Tanmay_Singla_sw-3.pdf" target="_blank" rel="noopener noreferrer" download>
                  <FileText className="w-4 h-4 mr-2" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;