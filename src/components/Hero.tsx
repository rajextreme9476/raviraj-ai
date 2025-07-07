import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-hero pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Hi, I'm <span className="text-primary">Raviraj</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Experienced AVP at HDFC Bank | Mobile Banking Expert | AI Innovation Leader
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
                <Mail size={16} />
                <span>ravirajdesai501@gmail.com</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
                <Phone size={16} />
                <span>+91 7021126828</span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
                <MapPin size={16} />
                <span>Navi Mumbai</span>
              </div>
            </div>
            
            <Button 
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Contact Me
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>

          {/* Right side - Profile photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-primary p-1">
                <img
                  src="/lovable-uploads/0f48a73f-d245-4994-9bdc-a7f32049b766.png"
                  alt="Raviraj Kisan Desai"
                  className="w-full h-full rounded-full object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="text-primary text-sm">Scroll down</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;