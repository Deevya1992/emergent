import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { caseStudies } from '../data/mock';

const CaseStudies = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Case <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Studies</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results for real clients. See how we've helped businesses transform digitally.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <Card key={study.id} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <img src={study.image} alt={study.title} className="w-full h-full object-cover min-h-[300px]" />
                    </div>
                    <div className="p-8 lg:p-12">
                      <div className="text-sm font-medium text-blue-600 mb-2">{study.industry}</div>
                      <h2 className="text-3xl font-bold mb-4">{study.title}</h2>
                      <p className="text-muted-foreground mb-6">{study.client}</p>
                      
                      <div className="space-y-6">
                        <div>
                          <h3 className="font-semibold mb-2">Challenge</h3>
                          <p className="text-muted-foreground">{study.challenge}</p>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold mb-2">Solution</h3>
                          <p className="text-muted-foreground">{study.solution}</p>
                        </div>
                        
                        <div>
                          <h3 className="font-semibold mb-4">Results</h3>
                          <div className="grid grid-cols-2 gap-4">
                            {study.results.map((result, idx) => (
                              <div key={idx} className="flex items-start space-x-2">
                                <TrendingUp className="h-5 w-5 text-blue-600 flex-shrink-0 mt-1" />
                                <span className="text-sm">{result}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-semibold mb-2">Technologies Used</h3>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech, idx) => (
                              <span key={idx} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-full text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4">
                          <p className="text-sm text-muted-foreground">Project Duration: {study.duration}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Achieve Similar Results?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with our proven solutions.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link to="/contact">
              Start Your Success Story <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
