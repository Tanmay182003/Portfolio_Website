import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const LLMSecurityAnalysis = () => (
  <div className="min-h-screen py-20 px-6">
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
          LLM Software Security Analysis
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          First author of empirical study using GPT and Bard to analyze historical software supply chain security failures. Achieved 68% accuracy in classification, accepted at ACM CCS SCORED'23.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid gap-8">
        <Card className="overflow-hidden bg-card-gradient border-primary/20">
          <div className="relative h-[400px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200&h=800&fit=crop"
              alt="LLM Security Analysis"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
          </div>
        </Card>

        {/* Project Details */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card-gradient border-primary/20">
            <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
            <div className="flex flex-wrap gap-2">
              {["LLMs", "GPT", "Cybersecurity", "Machine Learning", "Research"].map((tech) => (
                <Badge key={tech} variant="outline" className="border-accent/50 text-accent hover:bg-accent/10">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-8 bg-card-gradient border-primary/20">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• 68% classification accuracy</li>
              <li>• GPT and Bard integration</li>
              <li>• Supply chain security analysis</li>
              <li>• Published at ACM CCS SCORED'23</li>
              <li>• Historical failure patterns</li>
            </ul>
          </Card>
        </div>

        {/* Links */}
        <Card className="p-8 bg-card-gradient border-primary/20">
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="border-primary/50 text-foreground hover:bg-primary/10" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                View Code
              </a>
            </Button>
            <Button className="bg-primary hover:bg-primary-glow text-primary-foreground" asChild>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  </div>
);

export default LLMSecurityAnalysis;
