import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { portfolioProjects } from '@/lib/data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function PortfolioPage() {
  return (
    <div className="animate-fade-in">
      <section className="bg-card py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Our Portfolio</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of our dedication to quality, innovation, and client success.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 animate-fade-in-up mx-4 md:mx-16 my-16 rounded-lg border-2 border-primary shadow-section overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-8">
            {portfolioProjects.map((project) => {
              const projectImage = PlaceHolderImages.find(p => p.id === project.image);
              return (
                <Card key={project.id} className="overflow-hidden group flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300">
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
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl md:text-2xl font-headline">{project.title}</CardTitle>
                      <Badge variant="secondary">{project.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-muted-foreground">{project.description}</p>
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
