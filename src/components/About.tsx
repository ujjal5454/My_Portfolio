import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, GraduationCap, Code2, Brain } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I am a final-year Computer Science student at Jain University, specializing in building 
                  user-friendly web applications and exploring the world of machine learning and AI tools. 
                  I enjoy turning ideas into functional digital solutions.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  My journey in technology has been driven by curiosity and a passion for creating 
                  impactful solutions that bridge the gap between human needs and technological possibilities.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <Code2 size={16} className="text-primary" />
                  <span className="text-sm font-medium">Web Development</span>
                </div>
                <div className="flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                  <Brain size={16} className="text-accent" />
                  <span className="text-sm font-medium">Machine Learning</span>
                </div>
              </div>

              <Button className="group bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                <Download size={16} className="mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>

            <div className="grid gap-6">
              <Card className="bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <GraduationCap size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-2 text-foreground">Education</h3>
                      <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/30 rounded-lg">
                      <h4 className="text-xl font-medium text-foreground mb-2">
                        B.Tech in Computer Science Engineering (General)
                      </h4>
                      <p className="text-primary font-medium">Jain University</p>
                      <p className="text-muted-foreground">2022 – 2026</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-accent/10 to-primary/10 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">💡</span>
                    </div>
                    <p className="text-muted-foreground italic leading-relaxed">
                      "Learning is a continuous journey, and every project is an opportunity to grow and make a meaningful impact."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
