import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About</h2>
          <p className="text-xl text-muted-foreground">My introduction</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="flex justify-center">
            <div className="relative max-w-md">
              <img
                src="/lovable-uploads/0f48a73f-d245-4994-9bdc-a7f32049b766.png"
                alt="Raviraj Kisan Desai"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experienced AVP at HDFC Bank managing one of India's largest retail mobile banking applications 
              across Android and iOS platforms, serving over 4 crore users. Proven expertise in techno-functional 
              analysis, mobile engineering, and AI-driven banking innovation.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Contributed to projects like HDFC Intelligence using Vertex AI, Gemini, and Mistral LLM to deliver 
              automation, compliance, and customer insights. Adept at leading cross-functional initiatives involving 
              cybersecurity, payments, and GenAI to modernize the digital banking experience.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">4+</div>
                  <div className="text-muted-foreground">Crore Users Served</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">16+</div>
                  <div className="text-muted-foreground">Android Apps Developed</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">16M</div>
                  <div className="text-muted-foreground">Active Installs</div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">6</div>
                  <div className="text-muted-foreground">Countries</div>
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