import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Server, Brain, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'React', level: 75 },
      ],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: [
        { name: 'Node.js', level: 70 },
        { name: 'Express.js', level: 65 },
      ],
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500'
    },
    {
      title: 'Programming',
      icon: Brain,
      skills: [
        { name: 'Python', level: 80 },
      ],
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500'
    },
    {
      title: 'Soft Skills',
      icon: Users,
      skills: [
        { name: 'Problem-solving', level: 90 },
        { name: 'Communication', level: 85 },
        { name: 'Teamwork', level: 88 },
        { name: 'Adaptability', level: 92 },
        { name: 'Continuous Learning', level: 95 },
      ],
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500'
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-gradient-to-tr from-accent/10 to-primary/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-4"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my technical abilities and soft skills
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, categoryIndex) => {
              const IconComponent = category.icon;
              return (
                <Card key={categoryIndex} className="group bg-gradient-to-br from-card/80 to-card/60 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-500 hover:scale-105 animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-3 bg-gradient-to-br ${category.color} rounded-lg shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {category.title}
                      </h3>
                    </div>
                    
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-foreground">
                              {skill.name}
                            </span>
                            <span className="text-sm text-muted-foreground font-medium">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                            <div 
                              className={`h-2 rounded-full bg-gradient-to-r ${category.color} transition-all duration-1000 ease-out shadow-sm`}
                              style={{ 
                                width: `${skill.level}%`,
                                animationDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.1)}s`
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
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

export default Skills;
