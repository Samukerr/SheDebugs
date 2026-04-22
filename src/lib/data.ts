import { CodeXml, Smartphone, Server, BrainCircuit, Sparkles, Target, Handshake, Lightbulb } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export const services = [
  {
    icon: CodeXml,
    title: 'Web Development',
    description: 'Building responsive, high-performance websites tailored to your business needs. From single-page applications to large-scale enterprise platforms.',
    tiers: [
      { name: 'Starter', price: 'R4000+' },
      { name: 'Business', price: 'R6000+' },
      { name: 'AI-Enhanced', price: 'R12000+' },
    ],
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Crafting beautiful and intuitive mobile applications for iOS and Android. We turn your ideas into engaging mobile experiences that your users will love.',
  },
  {
    icon: Server,
    title: 'Software Development',
    description: 'Developing custom software solutions to streamline your operations and drive growth. We build scalable, secure, and robust software from the ground up.',
  },
];

export const portfolioProjects = [
    {
    id: '6',
    title: 'JNI Refrigeration',
    category: 'Web Development',
    image: 'portfolio-project-6',
    description: 'A professional website for a commercial refrigeration company, featuring their services and contact information to generate business leads.'
  },
  {
    id: '5',
    title: 'SheDebugs Portfolio App',
    category: 'Web Development',
    image: 'portfolio-project-5',
    description: 'The very website you are browsing. A comprehensive portfolio showcasing our services, projects, and expertise, built with Next.js and Tailwind CSS.'
  }
];

export const testimonials: any[] = [];

export const about = {
  mission: 'To empower businesses with transformative digital solutions, leveraging cutting-edge technology and creative innovation to solve complex challenges and drive sustainable growth.',
  vision: 'To be a leading force in the tech industry, renowned for our commitment to excellence, our passion for innovation, and our dedication to building a more connected and intelligent digital world.',
};

type Value = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const values: Value[] = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We constantly explore new technologies and creative approaches to deliver forward-thinking solutions.',
  },
  {
    icon: Handshake,
    title: 'Partnership',
    description: 'We believe in building strong, collaborative relationships with our clients to achieve shared success.',
  },
  {
    icon: Target,
    title: 'Excellence',
    description: 'We are committed to the highest standards of quality, performance, and professionalism in everything we do.',
  },
];
