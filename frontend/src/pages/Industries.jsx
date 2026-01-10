import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight } from 'lucide-react';
import { industries } from '../data/mock';

const Industries = () => {
  return (
    <div className="flex flex-col">
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Industries We <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Serve</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Delivering tailored solutions across diverse industries with deep domain expertise
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry) => (
              <Card key={industry.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                    <div className="text-4xl text-blue-600">🏢</div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{industry.name}</h3>
                  <p className="text-muted-foreground text-sm">{industry.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Industry Not Listed?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            We work with businesses across all sectors. Let's discuss your specific needs.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Contact Us <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Industries;
