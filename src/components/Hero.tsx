import React from 'react';
import { ArrowDown, Code, Brain, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImg from '/public/uploads/my_photo.jpg'; // Update with your actual image filename

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with enhanced gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-muted/20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-accent/5"></div>
      </div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-gradient-to-tr from-accent/15 to-primary/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 right-1/3 w-24 h-24 bg-primary/10 rounded-lg rotate-45 animate-bounce delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-16 h-16 bg-accent/20 rounded-full animate-bounce delay-3000"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Profile Image with your photo */}
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <div className="relative w-52 h-52 rounded-full overflow-hidden shadow-2xl backdrop-blur-sm border border-border/50">
                <img 
                  src={heroImg}
                  alt="Ujjal Basnet" 
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Floating icons around profile */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-border/30 animate-bounce delay-500">
                <Code size={20} className="text-primary" />
              </div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-accent/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-border/30 animate-bounce delay-1000">
                <Brain size={20} className="text-accent" />
              </div>
            </div>
          </div>

          {/* Enhanced heading with gradient text */}
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                Ujjal
              </span>
              <br />
              <span className="bg-gradient-to-r from-accent via-primary to-foreground bg-clip-text text-transparent">
                Basnet
              </span>
            </h1>
          </div>
          
          {/* Enhanced tagline with typing effect styling */}
          <div className="mb-8">
            <p className="text-2xl md:text-3xl text-muted-foreground font-medium mb-4">
              Web Developer & ML Enthusiast
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          {/* Enhanced description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Crafting innovative digital solutions with{' '}
            <span className="text-primary font-medium">clean code</span> and{' '}
            <span className="text-accent font-medium">intelligent algorithms</span>
          </p>

          {/* Enhanced CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button 
              onClick={() => scrollToSection('#projects')}
              className="group relative px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('#contact')}
              className="px-8 py-4 text-lg font-semibold border-2 border-border hover:border-primary/50 bg-background/50 backdrop-blur-sm hover:bg-primary/5 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Contact Me
            </Button>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-6 mb-12">
            <a href="#" className="group p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110">
              <Github size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="#" className="group p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110">
              <Linkedin size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="#" className="group p-3 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 hover:scale-110">
              <Mail size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Enhanced scroll arrow */}
          <button 
            onClick={() => scrollToSection('#about')}
            className="group relative animate-bounce hover:animate-none transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-border/30 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-300">
              <ArrowDown size={24} className="text-primary group-hover:text-accent transition-colors duration-300" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
