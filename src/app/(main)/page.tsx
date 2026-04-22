import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { services, portfolioProjects } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

export default function HomePage() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-background');
  
  return (
    <div className="flex flex-col animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] w-full flex items-center justify-center text-center text-primary-foreground overflow-hidden">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            data-ai-hint={heroImage.imageHint}
            priority
          />
        )}
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 tracking-tight">
            SheDebugs: We Build Your Digital Future
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
            From innovative web platforms to intuitive mobile apps and robust software, we craft digital solutions that drive success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" asChild className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent">
              <Link href="/services">
                Explore Our Services <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" asChild className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24 bg-background animate-fade-in-up mx-4 md:mx-16 my-16 rounded-lg border-2 border-primary shadow-section overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">What We Do</h2>
            <p className="text-muted-foreground text-lg">
              We specialize in creating bespoke digital products that are tailored to your unique business goals.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl md:text-2xl font-headline">{service.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                  <CardFooter>
                     <Button variant="ghost" asChild>
                        <Link href="/services">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                     </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Highlight */}
      <section className="py-16 md:py-24 bg-card animate-fade-in-up mx-4 md:mx-16 my-16 rounded-lg border-2 border-primary shadow-section overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">Our Work</h2>
            <p className="text-muted-foreground text-lg">
              We are proud of the solutions we've delivered. Here's a glimpse of our work.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {portfolioProjects.slice(0, 2).map((project) => {
              const projectImage = PlaceHolderImages.find(p => p.id === project.image);
              return (
                <Card key={project.id} className="overflow-hidden group shadow-lg hover:shadow-xl transition-shadow duration-300">
                  {projectImage && (
                     <Dialog>
                      <DialogTrigger asChild>
                        <div className="aspect-video overflow-hidden cursor-zoom-in">
                          <Image
                            src={projectImage.imageUrl}
                            alt={projectImage.description}
                            width={600}
                            height={400}
                            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                            data-ai-hint={projectImage.imageHint}
                          />
                        </div>
                      </DialogTrigger>
                      <DialogContent className="max-w-[90vw] md:max-w-[80vw] lg:max-w-[60vw] p-0 bg-transparent border-none focus:outline-none">
                         <Image
                            src={projectImage.imageUrl}
                            alt={projectImage.description}
                            width={1200}
                            height={800}
                            className="object-contain w-full h-full rounded-lg"
                            data-ai-hint={projectImage.imageHint}
                          />
                      </DialogContent>
                    </Dialog>
                  )}
                  <CardHeader>
                    <CardTitle className="text-lg md:text-xl font-headline">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{project.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
           <div className="text-center mt-12">
            <Button variant="outline" asChild size="lg">
              <Link href="/portfolio">View Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
