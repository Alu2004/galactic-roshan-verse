
import React from 'react';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:khanalroshan7393@gmail.com", label: "Email" }
  ];

  return (
    <footer className="py-12 px-6 border-t border-cyan-400/30 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
              ROSHAN.DEV
            </h3>
            <p className="text-cyan-300/80 text-sm">
              Full Stack Developer & Digital Innovation Expert
            </p>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-400/20 transition-all duration-300 hover:scale-110"
                asChild
              >
                <a href={social.href} target="_blank" rel="noopener noreferrer">
                  <social.icon className="w-5 h-5" />
                  <span className="sr-only">{social.label}</span>
                </a>
              </Button>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-cyan-400/20 text-center">
          <p className="text-cyan-300/60 text-sm flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" /> by Roshan Khanal
            <span className="mx-2">•</span>
            © 2024 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
