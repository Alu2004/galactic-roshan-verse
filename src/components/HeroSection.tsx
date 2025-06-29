
import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = "Roshan Khanal";
  const subtitle = "Full Stack Developer & Digital Innovation Expert";

  useEffect(() => {
    let i = 0;
    const typeWriter = () => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
        setTimeout(typeWriter, 150);
      }
    };
    typeWriter();
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              {text}
            </span>
            <span className="animate-ping text-cyan-400">|</span>
          </h1>
          <div className="relative">
            <p className="text-xl md:text-2xl text-cyan-300 mb-8 animate-fade-in">
              {subtitle}
            </p>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent animate-pulse"></div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(34,211,238,0.3)]"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </Button>
          <Button 
            variant="outline"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
        </div>

        <div className="animate-bounce">
          <ChevronDown 
            className="mx-auto text-cyan-400 w-8 h-8 cursor-pointer hover:text-cyan-300 transition-colors"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
