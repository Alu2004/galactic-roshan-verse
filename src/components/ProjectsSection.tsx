
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory, payment processing, and advanced analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      liveUrl: "#",
      githubUrl: "#",
      status: "Featured",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Digital Healthcare System",
      description: "Comprehensive healthcare management platform with patient records, appointment scheduling, and telemedicine integration.",
      technologies: ["Next.js", "PostgreSQL", "WebRTC", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      status: "Enterprise",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Machine learning driven analytics platform providing predictive insights and automated report generation.",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
      status: "Innovation",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Blockchain Voting System",
      description: "Secure, transparent voting platform built on blockchain technology ensuring immutable election records.",
      technologies: ["Solidity", "Web3.js", "React", "IPFS"],
      liveUrl: "#",
      githubUrl: "#",
      status: "Research",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Smart City IoT Platform",
      description: "IoT-based smart city management system monitoring traffic, air quality, and energy consumption in real-time.",
      technologies: ["Vue.js", "Node.js", "InfluxDB", "MQTT"],
      liveUrl: "#",
      githubUrl: "#",
      status: "Government",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "Educational VR Experience",
      description: "Virtual reality educational platform making complex scientific concepts accessible through immersive 3D experiences.",
      technologies: ["Three.js", "WebXR", "React", "WebGL"],
      liveUrl: "#",
      githubUrl: "#",
      status: "EdTech",
      gradient: "from-violet-500 to-purple-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Galactic Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="bg-black/40 border-cyan-400/30 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300 hover:transform hover:scale-105 group relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-400/30">
                    {project.status}
                  </Badge>
                </div>
                <CardTitle className="text-xl text-cyan-300 group-hover:text-cyan-100 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-cyan-100/80 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline" 
                      className="text-xs text-cyan-300 border-cyan-400/30 hover:border-cyan-400/60 transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white flex-1"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-400/20"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
