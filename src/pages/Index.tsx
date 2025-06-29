
import React, { useState, useEffect } from 'react';
import StarfieldBackground from '@/components/StarfieldBackground';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import BlogSection from '@/components/BlogSection';
import ContactSection from '@/components/ContactSection';
import ChatBot from '@/components/ChatBot';
import Footer from '@/components/Footer';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    // Set initial theme
    document.documentElement.classList.add('dark');
    
    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-[#131024] to-black text-white overflow-x-hidden">
      <StarfieldBackground />
      
      <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
      </main>
      
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Index;
