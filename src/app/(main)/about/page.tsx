import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { about, values } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us-image');

  return (
    <div className="animate-fade-in">
      <section className="bg-card py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">About SheDebugs</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a passionate team of developers, designers, and strategists dedicated to building the future of digital products.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 animate-fade-in-up mx-4 md:mx-16 my-16 rounded-lg border-2 border-primary shadow-section overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="prose prose-invert max-w-none text-muted-foreground">
              <h2 className="text-2xl md:text-3xl font-headline font-bold text-foreground mb-4">Who We Are</h2>
              <p className="text-lg">
                SheDebugs is a premier IT services company, proudly founded and solely owned by a Black African female. Our model is built on empowerment and social impact; we exclusively partner with unemployed tech individuals, outsourcing skills to create opportunities while delivering exceptional web, app, and software solutions. We are dedicated to turning ambitious ideas into reality and driving success for our clients.
              </p>
              <div className="space-y-6 mt-8">
                <div>
                  <h3 className="text-xl md:text-2xl font-headline font-semibold text-foreground mb-2">Our Mission</h3>
                  <p>{about.mission}</p>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-headline font-semibold text-foreground mb-2">Our Vision</h3>
                  <p>{about.vision}</p>
                </div>
              </div>
            </div>
            <div>
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                  data-ai-hint={aboutImage.imageHint}
                />
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-card animate-fade-in-up mx-4 md:mx-16 my-16 rounded-lg border-2 border-primary shadow-section overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide our work and define our culture.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 p-4 rounded-full w-max mb-4">
                      <Icon className="h-10 w-10 text-primary" />
                    </div>
                    <CardTitle className="text-xl md:text-2xl font-headline">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
