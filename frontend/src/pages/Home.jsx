import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, TrendingUp, Users, Globe, Zap, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { testimonials, clients, servicesList } from '../data/mock';

const Home = () => {
  const whatsappLink = `https://wa.me/+919848000876?text=Hi, I would like to discuss a project`;

  const stats = [
    { label: 'Projects Delivered', value: '500+', icon: CheckCircle },
    { label: 'Happy Clients', value: '250+', icon: Users },
    { label: 'Countries Served', value: '15+', icon: Globe },
    { label: 'Team Members', value: '50+', icon: Award }
  ];

  const features = [
    {
      title: 'Enterprise-Grade Solutions',
      description: 'Scalable, secure, and reliable solutions built for businesses of all sizes',
      icon: Award
    },
    {
      title: 'Proven Track Record',
      description: '500+ successful projects delivered across diverse industries',
      icon: TrendingUp
    },
    {
      title: 'Expert Team',
      description: 'Skilled professionals with 10+ years of industry experience',
      icon: Users
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'Latest tech stacks and best practices for optimal results',
      icon: Zap
    }
  ];

  const itServices = servicesList.filter(s => s.category !== 'Digital Marketing').slice(0, 6);
  const marketingServices = servicesList.filter(s => s.category === 'Digital Marketing').slice(0, 6);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20"></div>
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-medium text-blue-600 dark:text-blue-400">
                Trusted by 250+ Global Clients
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Transform Your Business with
                <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent"> World-Class IT & Marketing Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                From innovative software development to results-driven digital marketing, we help startups, SMEs, and enterprises achieve their digital transformation goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                  <Link to="/contact">
                    Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </Button>
              </div>
              <div className="mt-8 flex items-center space-x-6">
                <div className="flex -space-x-2">
                  {testimonials.slice(0, 4).map((testimonial, index) => (
                    <div key={index} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden">
                      <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Rated 4.9/5 by clients</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1709715357520-5e1047a2b691"
                  alt="Professional team collaboration"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-8 w-8" />
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive IT and digital marketing solutions to accelerate your business growth
            </p>
          </div>

          {/* IT Services */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">IT Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {itServices.map((service) => (
                <Link key={service.id} to={`/services/${service.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-blue-600">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                        <div className="text-blue-600 text-2xl">💻</div>
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{service.name}</h4>
                      <p className="text-muted-foreground text-sm">{service.shortDescription}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Digital Marketing Services */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">Digital Marketing Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {marketingServices.map((service) => (
                <Link key={service.id} to={`/services/${service.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-blue-600">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                        <div className="text-blue-600 text-2xl">📈</div>
                      </div>
                      <h4 className="text-lg font-semibold mb-2">{service.name}</h4>
                      <p className="text-muted-foreground text-sm">{service.shortDescription}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">
                View All Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Deaxautt?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Trusted by leading companies worldwide</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <Card key={testimonial.id}>
                <CardContent className="p-6">
                  <div className="flex items-center text-yellow-500 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6">{testimonial.content}</p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.position}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/testimonials">View All Testimonials</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">Trusted by Leading Companies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {clients.map((client) => (
              <div key={client.id} className="flex items-center justify-center">
                <div className="w-20 h-20 bg-background rounded-lg flex items-center justify-center border shadow-sm">
                  <div className="text-2xl font-bold text-blue-600">{client.logo}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital goals. Book a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
