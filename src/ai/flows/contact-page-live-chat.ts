'use server';

/**
 * @fileOverview A Genkit flow for providing live chat support on the contact page.
 *
 * - liveChat - A function that handles the live chat interaction.
 * - LiveChatInput - The input type for the liveChat function.
 * - LiveChatOutput - The return type for the liveChat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const LiveChatInputSchema = z.object({
  message: z.string().describe('The user message to be processed by the live chat.'),
});
export type LiveChatInput = z.infer<typeof LiveChatInputSchema>;

const LiveChatOutputSchema = z.object({
  response: z.string().describe('The AI-generated response to the user message.'),
});
export type LiveChatOutput = z.infer<typeof LiveChatOutputSchema>;

export async function liveChat(input: LiveChatInput): Promise<LiveChatOutput> {
  return liveChatFlow(input);
}

const liveChatPrompt = ai.definePrompt({
  name: 'liveChatPrompt',
  input: {schema: LiveChatInputSchema},
  output: {schema: LiveChatOutputSchema},
  prompt: `You are a helpful AI assistant for SheDebugs, an IT services company. You have two main roles:

1.  **General Inquiries:** Answer general questions about the services offered (web, app, and software development). Be concise and informative.
2.  **Technical Support:** Provide assistance with common errors and questions related to website and mobile app development. Act as a knowledgeable developer support agent.

If a question is outside these scopes, politely redirect the user to contact the company directly at techniquesbyher@gmail.com.

User's message:
{{{message}}}
  `,
});

const liveChatFlow = ai.defineFlow(
  {
    name: 'liveChatFlow',
    inputSchema: LiveChatInputSchema,
    outputSchema: LiveChatOutputSchema,
  },
  async input => {
    const {output} = await liveChatPrompt(input);
    return output!;
  }
);
