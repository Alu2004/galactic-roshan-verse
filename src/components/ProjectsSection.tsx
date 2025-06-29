
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: "E-Commerce Platform Revolution",
      description: "Advanced full-stack e-commerce solution with AI-powered recommendations, real-time inventory management, and seamless payment integration using cutting-edge technologies.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "AI/ML"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Web Development",
      image: "/placeholder.svg",
      featured: true
    },
    {
      title: "Digital Healthcare Ecosystem",
      description: "Revolutionary healthcare management platform with telemedicine capabilities, patient record management, and IoT device integration for remote monitoring.",
      technologies: ["Next.js", "PostgreSQL", "WebRTC", "AWS", "IoT"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Healthcare Tech",
      image: "/placeholder.svg",
      featured: true
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Intelligent business analytics platform with machine learning algorithms for predictive insights and automated report generation.",
      technologies: ["Python", "TensorFlow", "React", "FastAPI", "D3.js"],
      liveUrl: "#",
      githubUrl: "#",
      category: "AI & Analytics",
      image: "/placeholder.svg",
      featured: false
    },
    {
      title: "Blockchain Governance System",
      description: "Transparent voting and governance platform built on blockchain technology ensuring security, immutability, and democratic participation.",
      technologies: ["Solidity", "Web3.js", "React", "IPFS", "Ethereum"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Blockchain",
      image: "/placeholder.svg",
      featured: false
    },
    {
      title: "Smart City IoT Network",
      description: "Comprehensive IoT-based smart city management system monitoring environmental data, traffic patterns, and energy consumption in real-time.",
      technologies: ["Vue.js", "Node.js", "InfluxDB", "MQTT", "Arduino"],
      liveUrl: "#",
      githubUrl: "#",
      category: "IoT Solutions",
      image: "/placeholder.svg",
      featured: false
    },
    {
      title: "VR Educational Universe",
      description: "Immersive virtual reality educational platform making complex scientific and historical concepts accessible through interactive 3D experiences.",
      technologies: ["Three.js", "WebXR", "React", "WebGL", "Unity"],
      liveUrl: "#",
      githubUrl: "#",
      category: "EdTech VR",
      image: "/placeholder.svg",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-[#131024] to-black">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#FFA500] to-orange-300 bg-clip-text text-transparent">
            MY WORK
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore my journey through the digital galaxy, where innovation meets execution. 
            Each project represents a unique mission to solve real-world challenges with cutting-edge technology.
          </p>
        </div>
        
        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#FFA500] mb-8 text-center">Featured Missions</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <Card 
                key={project.title}
                className="bg-gradient-to-br from-[#131024] to-black border-[#FFA500]/30 backdrop-blur-sm hover:border-[#FFA500]/60 transition-all duration-500 hover:transform hover:scale-105 group relative overflow-hidden h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFA500]/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <CardHeader className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <Badge className="bg-[#FFA500]/20 text-[#FFA500] border-[#FFA500]/30 hover:bg-[#FFA500]/30 transition-colors">
                      {project.category}
                    </Badge>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="text-[#FFA500] hover:bg-[#FFA500]/20 p-2">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-[#FFA500] group-hover:text-orange-300 transition-colors mb-4">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6 relative z-10">
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs text-gray-300 border-gray-600 hover:border-[#FFA500]/60 hover:text-[#FFA500] transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-[#FFA500] to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Launch Mission
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-[#FFA500]/50 text-[#FFA500] hover:bg-[#FFA500]/20"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* All Projects Grid */}
        <div>
          <h3 className="text-2xl font-bold text-[#FFA500] mb-8 text-center">All Missions</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="bg-gradient-to-br from-[#131024] to-black border-[#FFA500]/20 backdrop-blur-sm hover:border-[#FFA500]/50 transition-all duration-300 hover:transform hover:scale-105 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#FFA500]/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative z-10">
                  <div className="flex justify-between items-start mb-2">
                    <Badge className="bg-[#FFA500]/10 text-[#FFA500] border-[#FFA500]/30 text-xs">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg text-[#FFA500] group-hover:text-orange-300 transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4 relative z-10">
                  <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs text-gray-400 border-gray-600 hover:border-[#FFA500]/60 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs text-gray-400 border-gray-600">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button 
                      size="sm" 
                      className="bg-gradient-to-r from-[#FFA500] to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-semibold flex-1 text-xs"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      View
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-[#FFA500]/50 text-[#FFA500] hover:bg-[#FFA500]/20"
                    >
                      <Github className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
