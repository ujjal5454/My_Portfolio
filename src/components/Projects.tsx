import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Police App Project',
      description: 'A functional web application aiding law enforcement data management and process optimization with modern UI/UX design.',
      techStack: ['React', 'Node.js', 'Express.js', 'MongoDB'],
      gradient: 'from-blue-500/20 to-cyan-500/20',
      image: '/placeholder.svg',
    },
    {
      title: 'Number Plate Detection using ML',
      description: 'An intelligent system using machine learning to recognize and extract vehicle registration data with high accuracy.',
      techStack: ['Python', 'OpenCV', 'TensorFlow', 'YOLO'],
      gradient: 'from-green-500/20 to-emerald-500/20',
      image: '/placeholder.svg',
    },
    {
      title: 'Face Detection-Based Attendance System',
      description: 'A real-time application using AI to track student attendance through facial recognition technology.',
      techStack: ['Python', 'OpenCV', 'Face Recognition', 'SQLite'],
      gradient: 'from-purple-500/20 to-pink-500/20',
      image: '/placeholder.svg',
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-48 h-48 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing my expertise through innovative solutions and creative problem-solving
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border-border/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className={`aspect-video bg-gradient-to-br ${project.gradient} relative flex items-center justify-center overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/10 to-background/30"></div>
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full flex items-center justify-center mx-auto mb-3 backdrop-blur-sm">
                      <Eye size={28} className="text-primary" />
                    </div>
                    <div className="text-2xl font-bold text-muted-foreground/60">
                      {project.title.split(' ').map(word => word[0]).join('').slice(0, 3)}
                    </div>
                  </div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white font-semibold">View Project</div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs px-2 py-1 bg-muted/50 hover:bg-primary/10 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button size="sm" className="w-full group/btn bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary">
                      <ExternalLink size={14} className="mr-2 group-hover/btn:scale-110 transition-transform" />
                      Live Demo
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

export default Projects;
