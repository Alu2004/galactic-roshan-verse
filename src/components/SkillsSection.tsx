
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillsSection: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Vue.js", level: 85 },
        { name: "CSS/Tailwind", level: 92 },
      ],
      color: "cyan"
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "Node.js", level: 88 },
        { name: "Python/Django", level: 82 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
      ],
      color: "purple"
    },
    {
      title: "Cloud & DevOps",
      skills: [
        { name: "AWS Services", level: 78 },
        { name: "Docker", level: 75 },
        { name: "CI/CD", level: 72 },
        { name: "Kubernetes", level: 68 },
      ],
      color: "blue"
    },
    {
      title: "Digital Innovation",
      skills: [
        { name: "AI/ML Integration", level: 80 },
        { name: "Blockchain", level: 70 },
        { name: "IoT Solutions", level: 65 },
        { name: "Data Analytics", level: 75 },
      ],
      color: "green"
    }
  ];

  const getGradientClass = (color: string) => {
    const gradients = {
      cyan: "from-cyan-500 to-cyan-300",
      purple: "from-purple-500 to-purple-300",
      blue: "from-blue-500 to-blue-300",
      green: "from-green-500 to-green-300"
    };
    return gradients[color as keyof typeof gradients];
  };

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Technical Arsenal
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="bg-black/40 border-cyan-400/30 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300 hover:transform hover:scale-105"
            >
              <CardHeader>
                <CardTitle className={`text-2xl bg-gradient-to-r ${getGradientClass(category.color)} bg-clip-text text-transparent`}>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-cyan-100 font-medium">{skill.name}</span>
                      <span className="text-cyan-300 text-sm">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-gray-800"
                      />
                      <div 
                        className={`absolute top-0 left-0 h-2 bg-gradient-to-r ${getGradientClass(category.color)} rounded-full transition-all duration-1000 animate-pulse`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
