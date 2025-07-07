import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Smartphone, Code, Shield, Database, Zap, GitBranch } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: [
        "Android OS/iOS", "Java", "Kotlin", "Android Studio", "Eclipse", 
        "Android SDK", "MVVM/MVP", "Retrofit", "Room Database", "SQLite",
        "Firebase", "Google Analytics", "Clevertap"
      ]
    },
    {
      title: "Payment & Cybersecurity",
      icon: <Shield className="w-6 h-6" />,
      skills: [
        "Promon", "Lookout", "RASP", "SIM/Device Binding", 
        "Multi-factor Authentication", "UPI SDK", "UPI FOR SDK", 
        "Banking Applications", "Cybersecurity Implementation"
      ]
    },
    {
      title: "Programming & Frameworks",
      icon: <Code className="w-6 h-6" />,
      skills: [
        "Kotlin-Coroutines", "RxJava", "Butter Knife", "Jetpack", 
        "LiveData", "Dagger 2.0", "Vertex AI", "Gemini", "Mistral LLM"
      ]
    },
    {
      title: "Database & Backend",
      icon: <Database className="w-6 h-6" />,
      skills: [
        "SQLite", "Room Database", "Firebase", "Smack", 
        "Ejabberd", "XMPP Protocol", "Agora Audio/Video SDK"
      ]
    },
    {
      title: "Project Management",
      icon: <Zap className="w-6 h-6" />,
      skills: [
        "SDLC", "Team Leadership", "Troubleshooting", "Issue Resolution",
        "Stakeholder Coordination", "RBI DPSC Compliance", "Production Support"
      ]
    },
    {
      title: "Version Control & Deployment",
      icon: <GitBranch className="w-6 h-6" />,
      skills: [
        "Git", "SVN", "CI/CD", "Play Store", "App Store", 
        "Mobile App Rollouts", "Production Support"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills</h2>
          <p className="text-xl text-muted-foreground">Technical expertise and competencies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 rounded-full text-primary">
                    {category.icon}
                  </div>
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="text-xs hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Achievements Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">16M</div>
                <div className="text-sm text-muted-foreground">Active Installs Managed</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">36K</div>
                <div className="text-sm text-muted-foreground">Peak Concurrency</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">16+</div>
                <div className="text-sm text-muted-foreground">Android Apps Developed</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">1Cr+</div>
                <div className="text-sm text-muted-foreground">Users Across 6 Countries</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;