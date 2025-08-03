import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const UsbReceiverAhbLite = () => (
  <div className="min-h-screen py-20 px-6">
    <div className="max-w-6xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-hero-gradient bg-clip-text text-transparent">
          USB Receiver for AHB-Lite SoC
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          A comprehensive hardware design project implementing a USB receiver with NRZI decoding, bit de-stuffing, and error detection capabilities for AHB-Lite SoC architecture.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid gap-8">
        <Card className="overflow-hidden bg-card-gradient border-primary/20">
          <div className="relative h-[400px] overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop"
              alt="USB Receiver Hardware Design"
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
              {[
                "Verilog",
                "QuestaSim",
                "Hardware Design",
                "Signal Analysis",
                "SoC",
                "USB Protocol",
                "NRZI Decoding",
                "Error Detection"
              ].map((tech) => (
                <Badge key={tech} variant="outline" className="border-accent/50 text-accent hover:bg-accent/10">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-8 bg-card-gradient border-primary/20">
            <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>• Modular design with 7 key components</li>
              <li>• NRZI decoding implementation</li>
              <li>• Bit de-stuffing mechanism</li>
              <li>• Error detection for sync bytes</li>
              <li>• PID and CRC validation</li>
              <li>• Waveform analysis capabilities</li>
              <li>• Signal timing validation</li>
            </ul>
          </Card>
        </div>

        {/* Technical Details */}
        <Card className="p-8 bg-card-gradient border-primary/20">
          <h2 className="text-2xl font-semibold mb-4">Technical Implementation</h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              The USB Receiver project implements a complete USB 1.1 validation system integrated into an AHB-Lite SoC architecture. 
              The design features comprehensive signal processing capabilities including NRZI decoding, bit de-stuffing, and robust error detection mechanisms.
            </p>
            <p>
              Key technical achievements include:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Implementation of seven modular components working in harmony</li>
              <li>Robust error detection system for sync bytes, PID, and CRC</li>
              <li>Advanced waveform analysis for precise timing validation</li>
              <li>Integration with AHB-Lite SoC architecture</li>
            </ul>
          </div>
        </Card>

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
                Technical Documentation
              </a>
            </Button>
          </div>
        </Card>
      </div>
    </div>
  </div>
);

export default UsbReceiverAhbLite;
