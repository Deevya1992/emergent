import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Users, Award, TrendingUp, Globe, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { teamMembers } from '../data/mock';

const About = () => {
  const values = [
    {
      title: 'Innovation',
      description: 'Pushing boundaries with cutting-edge technology and creative solutions',
      icon: TrendingUp
    },
    {
      title: 'Excellence',
      description: 'Committed to delivering the highest quality in everything we do',
      icon: Award
    },
    {
      title: 'Collaboration',
      description: 'Working together with clients as partners to achieve shared success',
      icon: Users
    },
    {
      title: 'Integrity',
      description: 'Building trust through transparency, honesty, and ethical practices',
      icon: CheckCircle
    }
  ];

  const milestones = [
    { year: '2015', event: 'Deaxautt founded with a vision to transform businesses digitally' },
    { year: '2017', event: 'Expanded services to include comprehensive digital marketing' },
    { year: '2019', event: 'Crossed 100+ clients milestone and expanded to international markets' },
    { year: '2021', event: 'Launched enterprise software division serving Fortune 500 companies' },
    { year: '2023', event: 'Achieved 500+ project deliveries across 15+ countries' },
    { year: '2025', event: 'Leading IT services provider with 50+ expert team members' }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Deaxautt</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Innovate | Connect | Inspire
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1603201667141-5a2d4c673378"
                alt="Team collaboration"
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2015, Deaxautt emerged from a simple yet powerful vision: to help businesses leverage technology for transformative growth. What started as a small team of passionate developers has evolved into a leading IT services and digital marketing company serving clients across the globe.
                </p>
                <p>
                  Today, we are proud to be a trusted partner for startups, SMEs, and enterprises across 15+ countries. Our comprehensive suite of services encompasses everything from custom software development and mobile apps to cutting-edge digital marketing strategies that drive real business results.
                </p>
                <p>
                  With over 500 successful projects delivered and 250+ satisfied clients, we continue to push the boundaries of what's possible in the digital realm. Our team of 50+ experts brings together diverse skills, industry knowledge, and unwavering commitment to excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower businesses of all sizes with innovative technology solutions and strategic digital marketing that drive measurable growth, enhance competitiveness, and create lasting value. We are committed to being more than just a service provider—we are your partner in digital transformation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be recognized globally as the premier IT services and digital marketing partner that businesses trust for innovation, reliability, and results. We envision a future where technology barriers dissolve, and every organization—regardless of size—has access to world-class digital solutions that propel them forward.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">From humble beginnings to industry leadership - here's how we've grown</p>
          </div>
          <div className="max-w-5xl mx-auto relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200 dark:bg-blue-900/30"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-background z-10"></div>
                  
                  {/* Content - Alternating left and right */}
                  <div className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                      <Card className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-600">
                        <CardContent className="p-6">
                          <div className={`text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                            <div className="text-3xl font-bold text-blue-600 mb-3">
                              {milestone.year}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground">
                              {milestone.event.split('-')[0].trim()}
                            </h3>
                            <p className="text-muted-foreground">
                              {milestone.event.includes('-') ? milestone.event.split('-').slice(1).join('-').trim() : milestone.event}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Leadership</h2>
            <p className="text-xl text-muted-foreground">Experienced leaders driving innovation and excellence</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <Card key={member.id} className="text-center">
                <CardContent className="p-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Work with Us?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join 250+ satisfied clients who have transformed their businesses with our solutions
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;
