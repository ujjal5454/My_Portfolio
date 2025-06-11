import React from 'react';
import { Code, Coffee } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'Email', href: 'mailto:ujjalbasnet869@gmail.com' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/ujjalbasnet69' },
    { name: 'GitHub', href: 'https://github.com/ujjal5454' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-card via-card/95 to-muted/20 border-t border-border/50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 right-1/4 w-24 h-24 bg-accent/5 rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Code size={20} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Ujjal Basnet
              </h3>
            </div>
            <p className="text-lg text-muted-foreground font-medium">
              Web Developer & Machine Learning Enthusiast
            </p>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Building the future, one line of code at a time. Passionate about creating innovative solutions that make a difference.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full"></div>
              Quick Links
            </h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-foreground flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-accent to-primary rounded-full"></div>
              Connect
            </h4>
            <div className="space-y-2">
              {socialLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200 hover:translate-x-1 transform"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-center md:text-left">
              © {currentYear} Ujjal Basnet. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Portfolio v2.0</span>
              <div className="w-1 h-1 bg-muted-foreground rounded-full"></div>
              <span>Built with React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
