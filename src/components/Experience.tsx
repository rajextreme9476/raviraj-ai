import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Assistant Vice President (BSG IT)",
      company: "HDFC Bank Ltd.",
      duration: "Sept 2023 - Present",
      location: "Mumbai",
      description: "Leading HDFC Bank MobileBanking App with 16M active installs and 36k peak concurrency. Managing critical payment and cybersecurity projects including RASP implementation, Multi-factor authentication, and Lookout SDK integration.",
      achievements: [
        "Led high-performing team managing mobile banking app",
        "Delivered critical payment and cybersecurity projects",
        "Successfully managed production queries and support",
        "Ensured adherence to RBI DPSC circulars"
      ]
    },
    {
      title: "Assistant Vice President (IT)",
      company: "Axis Bank Ltd.",
      duration: "July 2019 - Sept 2023",
      location: "Mumbai",
      description: "Managed Axis Mobile Fund Transfer, UPI, Recharge & Payment modules. Led end-to-end project management and stakeholder coordination across various teams.",
      achievements: [
        "Developed UPI SDK using NPCI common library",
        "Successfully delivered Android Java to Kotlin migration",
        "Implemented Firebase analytics and crash reporting",
        "Optimized app performance and user experience"
      ]
    },
    {
      title: "Senior Mobile Application Developer",
      company: "Indigo Consulting Pvt Ltd.",
      duration: "Sept 2016 - July 2018",
      location: "Mumbai",
      description: "Led development of groundbreaking mobile applications including Loan Assist (HDFC Bank Loan App) and Vkaao (PVR movie platform).",
      achievements: [
        "Developed HDFC Bank Loan App improving loan accessibility",
        "Built feature-rich movie screening platform for PVR",
        "Implemented location-based features and payment integrations",
        "Managed UI design and customer onboarding processes"
      ]
    },
    {
      title: "Android Developer",
      company: "Interactive Sun Pvt Ltd.",
      duration: "March 2015 - Sept 2016",
      location: "Mumbai",
      description: "Developed multiple mobile applications including Lucky Stars, SportO, and Inke Powerchat with focus on UI design and team management.",
      achievements: [
        "Developed chat applications using XMPP protocol",
        "Created location-based deal search applications",
        "Implemented media transfer and authentication systems",
        "Led team management and code optimization"
      ]
    },
    {
      title: "Android Developer",
      company: "GJ CAMBRiCK Software Pvt Ltd.",
      duration: "Sept 2013 - Mar 2015",
      location: "Ahmedabad",
      description: "Developed instant messaging applications and mobile solutions including Feel, Chatoor, and AutoHelp with expertise in XMPP protocol and location-based services.",
      achievements: [
        "Developed instant messaging applications using XMPP",
        "Created Point-of-Sale applications",
        "Implemented location-based functionalities",
        "Developed promotional and devotional content apps"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground">My professional journey</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="bg-gradient-hero">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl font-bold text-foreground mb-2">
                      {exp.title}
                    </CardTitle>
                    <p className="text-lg font-semibold text-primary">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Badge variant="outline" className="flex items-center gap-1">
                      <Calendar size={14} />
                      {exp.duration}
                    </Badge>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MapPin size={14} />
                      {exp.location}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;