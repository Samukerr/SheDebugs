'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { recommendServicePackage } from '@/ai/flows/ai-service-recommendation.ts';
import type { AIServiceRecommendationOutput } from '@/ai/flows/ai-service-recommendation.ts';
import { useToast } from '@/hooks/use-toast';
import { useFirestore } from '@/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Sparkles, BrainCircuit } from 'lucide-react';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

const formSchema = z.object({
  businessProfile: z.string().min(50, 'Please describe your business in at least 50 characters.'),
});

export function ServiceRecommendationForm() {
  const [recommendation, setRecommendation] = useState<AIServiceRecommendationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { firestore } = useFirestore();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      businessProfile: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setRecommendation(null);
    try {
      const result = await recommendServicePackage(values);
      setRecommendation(result);

      if (firestore) {
        const recommendationsCollection = collection(firestore, 'recommendations');
        addDoc(recommendationsCollection, {
          ...values,
          ...result,
          createdAt: serverTimestamp(),
        }).catch(async (serverError) => {
            const permissionError = new FirestorePermissionError({
                path: recommendationsCollection.path,
                operation: 'create',
                requestResourceData: { ...values, ...result },
            });
            errorEmitter.emit('permission-error', permissionError);
        });
      }

    } catch (error) {
      console.error('Error getting recommendation:', error);
      toast({
        title: 'An error occurred.',
        description: 'Failed to get a service recommendation. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      <Card className="border-accent border-2">
        <CardHeader className="text-center">
          <div className="mx-auto w-max mb-4 bg-accent/10 p-3 rounded-full">
            <Sparkles className="h-10 w-10 text-accent"/>
          </div>
          <CardTitle className="text-2xl md:text-3xl font-headline">AI-Powered Recommendation</CardTitle>
          <CardDescription className="text-base md:text-lg">
            Not sure which service is right for you? Describe your business, and our AI will suggest the perfect package.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="businessProfile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base md:text-lg">Your Business Profile</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., We are a startup building a social media platform for artists to showcase their work. We need a website to attract users and an app for on-the-go access..."
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  'Get Recommendation'
                )}
              </Button>
            </form>
          </Form>

          {recommendation && (
            <Card className="mt-8 bg-background">
              <CardHeader>
                 <div className="flex items-center gap-4">
                    <BrainCircuit className="h-8 w-8 text-primary"/>
                    <CardTitle className="text-xl md:text-2xl font-headline">Our Recommendation</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg text-primary">{recommendation.recommendedPackage}</h3>
                  <p className="text-muted-foreground">{recommendation.justification}</p>
                </div>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
