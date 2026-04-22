'use client';

import type { FormEvent } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { LiveChat } from '@/components/ai/live-chat';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';


export default function ContactPage() {
  const phoneNumber = '+27665789659';
  const emailAddress = 'techniquesbyher@gmail.com';

  const handleSendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const message = formData.get('message');
    if (message) {
      const smsUri = `sms:${phoneNumber}?body=${encodeURIComponent(message.toString())}`;
      window.location.href = smsUri;
    }
  };

  return (
    <div className="animate-fade-in">
      <section className="bg-card py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline mb-4">Get In Touch</h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind or just want to say hello? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 animate-fade-in-up mx-4 md:mx-16 my-16 rounded-lg border-2 border-primary shadow-section overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-12">
            <div className="md:col-span-3">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl font-headline">Send us a Message</CardTitle>
                  <CardDescription>
                    Clicking &apos;Send Message&apos; will open your default SMS app.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSendMessage} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Input name="name" placeholder="Your Name" />
                      <Input name="email" type="email" placeholder="Your Email" />
                    </div>
                    <Textarea name="message" placeholder="Your Message" required className="min-h-[150px]" />
                    <Button type="submit" className="w-full">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl font-headline">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <Mail className="h-6 w-6 text-primary" />
                    <a href={`mailto:${emailAddress}`} className="hover:underline">{emailAddress}</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone className="h-6 w-6 text-primary" />
                    <a href={`tel:${phoneNumber}`} className="hover:underline">{phoneNumber}</a>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <span>161 Zondi Mapanga Street, Polokwane, South Africa</span>
                  </div>
                </CardContent>
              </Card>

              <div className="lg:hidden">
                <LiveChat />
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="hidden lg:block pt-16 pb-24 animate-fade-in-up mx-4 md:mx-16 my-16 rounded-lg border-2 border-primary shadow-section overflow-hidden">
        <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <LiveChat />
            </div>
        </div>
      </section>
    </div>
  );
}
