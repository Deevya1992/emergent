import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { servicesList } from '../data/mock';

const Services = () => {
  const websiteDev = servicesList.filter(s => s.category === 'Website Development');
  const mobileDev = servicesList.filter(s => s.category === 'Mobile App Development');
  const softwareDev = servicesList.filter(s => s.category === 'Software Development');
  const otherIT = servicesList.filter(s => s.category === 'Other IT Services');
  const digitalMarketing = servicesList.filter(s => s.category === 'Digital Marketing');

  const ServiceCard = ({ service }) => (
    <Link to={`/services/${service.slug}`}>
      <Card className="h-full hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border-2 hover:border-blue-600">
        <CardContent className="p-6">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
            <div className="text-blue-600 text-2xl">{service.category === 'Digital Marketing' ? '📈' : '💻'}</div>
          </div>
          <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
          <p className="text-muted-foreground text-sm mb-4">{service.shortDescription}</p>
          <div className="text-blue-600 font-medium flex items-center text-sm">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive IT services and digital marketing solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">IT Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Cutting-edge technology solutions for your digital transformation
            </p>
          </div>

          {/* Website Development */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Website Development</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {websiteDev.map(service => <ServiceCard key={service.id} service={service} />)}
            </div>
          </div>

          {/* Mobile App Development */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Mobile App Development</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mobileDev.map(service => <ServiceCard key={service.id} service={service} />)}
            </div>
          </div>

          {/* Software Development */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-6">Software Development</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {softwareDev.map(service => <ServiceCard key={service.id} service={service} />)}
            </div>
          </div>

          {/* Other IT Services */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Other IT Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherIT.map(service => <ServiceCard key={service.id} service={service} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Digital Marketing */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Digital Marketing Services</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Data-driven marketing strategies that deliver measurable results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {digitalMarketing.map(service => <ServiceCard key={service.id} service={service} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss your unique requirements and create a tailored solution
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">Get in Touch <ArrowRight className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
