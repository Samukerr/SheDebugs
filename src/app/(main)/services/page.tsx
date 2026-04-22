import { services } from '@/lib/data';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { ServiceRecommendationForm } from '@/components/ai/service-recommendation-form';

export default function ServicesPage() {
  return (
    <div className="animate-fade-in">
      <section className="bg-card py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Our Services</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer a comprehensive suite of development services to bring your vision to life, from concept to launch.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 animate-fade-in-up mx-4 md:mx-16 my-16 rounded-lg border-2 border-primary shadow-section overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="items-center text-center">
                    <div className="bg-primary/10 p-4 rounded-full mb-4">
                       <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-headline">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    {service.tiers && (
                      <div className="space-y-4">
                        {service.tiers.map(tier => (
                          <div key={tier.name} className="flex items-center justify-between p-3 bg-background rounded-lg">
                            <span className="font-semibold">{tier.name}</span>
                            <span className="text-accent font-bold">{tier.price}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </CardContent>
                  <CardFooter className="justify-center">
                    <Button asChild>
                      <Link href="/contact">Get a Quote</Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-card animate-fade-in-up mx-4 md:mx-16 my-16 rounded-lg border-2 border-primary shadow-section overflow-hidden">
        <div className="container mx-auto px-4">
            <ServiceRecommendationForm />
        </div>
      </section>
    </div>
  );
}
