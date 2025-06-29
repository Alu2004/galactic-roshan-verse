
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          About the Developer
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-black/40 border-cyan-400/30 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-cyan-300 mb-4">Digital Innovation Pioneer</h3>
                <p className="text-cyan-100 leading-relaxed">
                  I'm Roshan Khanal, a passionate Full Stack Developer with expertise in cutting-edge web technologies. 
                  My journey spans from crafting elegant user interfaces to architecting robust backend systems, 
                  always with a focus on digital transformation and innovation.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-purple-400/30 backdrop-blur-sm hover:border-purple-400/60 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-purple-300 mb-4">Mission & Vision</h3>
                <p className="text-cyan-100 leading-relaxed">
                  Dedicated to bridging the gap between complex technology and user-friendly solutions. 
                  I believe in creating digital experiences that not only function flawlessly but also 
                  inspire and empower users to achieve their goals.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="bg-black/40 border-blue-400/30 backdrop-blur-sm hover:border-blue-400/60 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-blue-300 mb-4">Core Expertise</h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    'React/Next.js', 'Node.js', 'Python', 'TypeScript',
                    'AWS Cloud', 'MongoDB', 'PostgreSQL', 'Docker'
                  ].map((skill) => (
                    <Badge key={skill} className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border-cyan-400/30">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-green-400/30 backdrop-blur-sm hover:border-green-400/60 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-green-300 mb-4">Beyond Code</h3>
                <p className="text-cyan-100 leading-relaxed">
                  When I'm not coding, you'll find me exploring emerging technologies, contributing to open-source projects, 
                  or sharing knowledge through technical writing and community engagement. I'm passionate about mentoring 
                  the next generation of developers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
