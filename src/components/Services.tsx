import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Monitor, Brain, Users, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Web Application Development',
      description: 'Designing and building responsive, intuitive web applications that deliver exceptional user experiences and modern functionality.',
      features: ['Responsive Design', 'Modern UI/UX', 'Performance Optimization', 'Cross-browser Compatibility'],
      icon: Monitor,
      gradient: 'from-blue-500/20 to-cyan-500/20',
      iconGradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'ML/AI Projects',
      description: 'Creating solutions powered by machine learning and deep learning techniques for real-world problems and innovative applications.',
      features: ['Computer Vision', 'Data Analysis', 'Predictive Modeling', 'AI Integration'],
      icon: Brain,
      gradient: 'from-purple-500/20 to-pink-500/20',
      iconGradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Collaborative Projects',
      description: 'Open to academic or personal collaborations in tech, bringing fresh perspectives to innovative solutions and team projects.',
      features: ['Team Collaboration', 'Agile Methodology', 'Code Reviews', 'Knowledge Sharing'],
      icon: Users,
      gradient: 'from-green-500/20 to-emerald-500/20',
      iconGradient: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-56 h-56 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/3 w-40 h-40 bg-gradient-to-tr from-accent/5 to-primary/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles size={32} className="text-primary animate-pulse" />
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
                What I Love Building
              </h2>
              <Sparkles size={32} className="text-accent animate-pulse delay-500" />
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              While I'm focused on my studies, these are the areas where I channel my passion for technology and innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="group bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border-border/50 hover:shadow-2xl transition-all duration-500 hover:scale-105 overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  {/* Card header with gradient background */}
                  <div className={`bg-gradient-to-br ${service.gradient} p-6 relative`}>
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-background/5 to-background/10"></div>
                    <CardHeader className="p-0 relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-3 bg-gradient-to-br ${service.iconGradient} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent size={24} className="text-white" />
                        </div>
                        <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors">
                          {service.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                  </div>
                  
                  <CardContent className="p-6 space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide">Key Features</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            <div className="w-2 h-2 bg-gradient-to-r from-primary to-accent rounded-full mr-3 group-hover:scale-125 transition-transform"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
