'use client';

import { useState, useRef, useEffect } from 'react';
import { liveChat } from '@/ai/flows/contact-page-live-chat.ts';
import { useToast } from '@/hooks/use-toast';
import { useFirestore } from '@/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Loader2, Send, MessageSquare, User, Bot } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

export function LiveChat() {
  const [chatId] = useState(() => Math.random().toString(36).substring(2));
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { firestore } = useFirestore();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollAreaRef.current) {
        scrollAreaRef.current.scrollTo({
            top: scrollAreaRef.current.scrollHeight,
            behavior: 'smooth'
        });
    }
  }, [messages]);

  const saveMessage = (message: Message) => {
    if (!firestore) return;
    const messagesCollection = collection(firestore, 'chats', chatId, 'messages');
    addDoc(messagesCollection, {
      ...message,
      createdAt: serverTimestamp(),
    }).catch(async (serverError) => {
      const permissionError = new FirestorePermissionError({
        path: messagesCollection.path,
        operation: 'create',
        requestResourceData: message,
      });
      errorEmitter.emit('permission-error', permissionError);
    });
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading || !firestore) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    saveMessage(userMessage);
    setInput('');
    setIsLoading(true);

    try {
      const response = await liveChat({ message: input });
      const assistantMessage: Message = { role: 'assistant', content: response.response };
      setMessages((prev) => [...prev, assistantMessage]);
      saveMessage(assistantMessage);
    } catch (error) {
      console.error('Error with live chat:', error);
      toast({
        title: 'Chat Error',
        description: 'Could not get a response. Please try again.',
        variant: 'destructive',
      });
      // remove the user message if the API fails
      setMessages((prev) => prev.slice(0, prev.length -1));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-4">
            <MessageSquare className="h-8 w-8 text-primary"/>
            <div>
                <CardTitle className="text-2xl font-headline">Live Chat</CardTitle>
                <CardDescription>Ask our AI about our services or get help with development questions.</CardDescription>
            </div>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-72 w-full pr-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.length === 0 && (
                <div className="text-center text-muted-foreground p-8">
                    <p>Welcome! How can I help you today?</p>
                </div>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  'flex items-start gap-3',
                  message.role === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {message.role === 'assistant' && (
                    <Avatar className="w-8 h-8">
                        <AvatarFallback><Bot className="w-5 h-5"/></AvatarFallback>
                    </Avatar>
                )}
                <div
                  className={cn(
                    'max-w-[75%] rounded-lg p-3 text-sm',
                    message.role === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  )}
                >
                  {message.content}
                </div>
                 {message.role === 'user' && (
                    <Avatar className="w-8 h-8">
                        <AvatarFallback><User className="w-5 h-5"/></AvatarFallback>
                    </Avatar>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex items-start gap-3 justify-start">
                <Avatar className="w-8 h-8">
                    <AvatarFallback><Bot className="w-5 h-5"/></AvatarFallback>
                </Avatar>
                <div className="bg-muted text-muted-foreground rounded-lg p-3">
                  <Loader2 className="h-5 w-5 animate-spin" />
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <form onSubmit={handleSendMessage} className="flex w-full items-center space-x-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading || !firestore}
          />
          <Button type="submit" disabled={isLoading || !input.trim() || !firestore} size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
}
