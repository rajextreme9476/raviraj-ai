import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: "ravirajdesai501@gmail.com",
      link: "mailto:ravirajdesai501@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      value: "+91 7021126828",
      link: "tel:+917021126828"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: "Navi Mumbai, India",
      link: "https://maps.google.com/?q=Navi+Mumbai"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Contact</h2>
          <p className="text-xl text-muted-foreground">Get in touch with me</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always open to discussing new opportunities, innovative projects, 
                and collaborations in mobile banking, fintech, and AI-driven solutions. 
                Feel free to reach out!
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg bg-card hover:bg-card/80 transition-colors group"
                  >
                    <div className="text-primary group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{item.title}</div>
                      <div className="text-muted-foreground text-sm">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Professional Summary Card */}
            <Card className="h-fit">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-4">Professional Summary</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Current Role:</span>
                    <span className="font-medium text-foreground">AVP at HDFC Bank</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Experience:</span>
                    <span className="font-medium text-foreground">10+ Years</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Specialization:</span>
                    <span className="font-medium text-foreground">Mobile Banking & AI</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Education:</span>
                    <span className="font-medium text-foreground">MCA</span>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-3">Key Expertise</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">Mobile Banking Applications</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">AI & Machine Learning</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">Cybersecurity & Payments</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      <span className="text-muted-foreground">Team Leadership</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              Ready to discuss your next mobile banking or fintech project?
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-medium rounded-lg transition-all duration-300 transform hover:scale-105"
              onClick={() => window.open('mailto:ravirajdesai501@gmail.com', '_blank')}
            >
              <Mail className="mr-2" size={20} />
              Send Email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;