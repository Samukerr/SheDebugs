'use server';

/**
 * @fileOverview This file defines a Genkit flow for recommending service packages based on a client's business profile described in natural language.
 *
 * - recommendServicePackage - A function that takes a business profile description and returns a recommended service package.
 * - AIServiceRecommendationInput - The input type for the recommendServicePackage function, representing the business profile description.
 * - AIServiceRecommendationOutput - The output type for the recommendServicePackage function, representing the recommended service package.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AIServiceRecommendationInputSchema = z.object({
  businessProfile: z
    .string()
    .describe("A description of the client's business profile in natural language."),
});
export type AIServiceRecommendationInput = z.infer<
  typeof AIServiceRecommendationInputSchema
>;

const AIServiceRecommendationOutputSchema = z.object({
  recommendedPackage: z
    .string()
    .describe('The recommended service package for the client.'),
  justification: z
    .string()
    .describe('The reasoning behind the service package recommendation.'),
});
export type AIServiceRecommendationOutput = z.infer<
  typeof AIServiceRecommendationOutputSchema
>;

export async function recommendServicePackage(
  input: AIServiceRecommendationInput
): Promise<AIServiceRecommendationOutput> {
  return recommendServicePackageFlow(input);
}

const prompt = ai.definePrompt({
  name: 'recommendServicePackagePrompt',
  input: {schema: AIServiceRecommendationInputSchema},
  output: {schema: AIServiceRecommendationOutputSchema},
  prompt: `You are an expert AI assistant that specializes in recommending the most appropriate service package (web development, software development, or mobile app development) and level (Starter, Business, or AI-Enhanced for web development, and corresponding levels for other service packages) for businesses based on their profile.

  Analyze the following business profile and recommend the best service package and level, along with a brief justification.  The service packages SheDebugs offers are: web development (Starter: R4000+, Business: R6000+, AI-Enhanced: R12000+), software development, and mobile app development.

  Business Profile: {{{businessProfile}}}`,
});

const recommendServicePackageFlow = ai.defineFlow(
  {
    name: 'recommendServicePackageFlow',
    inputSchema: AIServiceRecommendationInputSchema,
    outputSchema: AIServiceRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

