import React from 'react';
import { ArrowRight, Handshake, Code2, Rocket, GraduationCap } from 'lucide-react';


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-poppins selection:bg-zinc-800">
      
      {/* Navbar */}
      <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-bold text-xl tracking-tight">SheDebugs</div>
          <div className="flex gap-4">
          <nav className="hidden md:flex gap-6 text-sm text-zinc-400">
            <a href ="#" className = "hover:text-flex-pink transition-colors">About Us</a>
            <a href ="#" className = "hover:text-flex-pink transition-colors">Services</a>
            <a href ="#" className = "hover:text-flex-pink transition-colors">Partnership</a>
            <a href ="#" className = "hover:text-flex-pink transition-colors">Students and Graduates</a>
            <a href ="/login" className = "hover:text-flex-pink transition-colors">Signin/Signup</a>
            <a href ="#" className = "hover:text-flex-pink transition-colors">Contact Us</a>
          </nav>
            <button className="text-zinc-400 hover:text-white"></button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6">
        
        {/* Hero Section */}
        <section className="py-32 md:py-32 flex flex-col items-center text-center max-w-4xl mx-auto">
          <a href="#" className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm text-zinc-300 hover:bg-zinc-800 transition-colors mb-8">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
            Learn More about SheDebugs <ArrowRight size={14} />
          </a>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-transparent bg-clip-text bg-linear-to-b from-white to-zinc-500">
            Where Technology Meets Opportunity.
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
            SheDebugs is redefining how talent meets opportunity. Through Skills and Software Development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="px-8 py-3 rounded-md bg-white text-zinc-950 font-medium hover:bg-zinc-200 transition-colors">
              I'm a Graduate
            </button>
            <button className="px-8 py-3 rounded-md bg-zinc-900 border border-zinc-800 text-white font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2">
               Become a Partner
            </button>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-12 border-y border-zinc-800/50">
          <p className="text-center text-sm text-zinc-500 mb-6">Building Connections Across the Skills Ecosystem</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            {/* Replace with actual SVGs */}
            <span className="font-bold text-xl">Graduates</span>
            <span className="font-bold text-xl">Employers</span>
            <span className="font-bold text-xl">Universities/Colleges</span>
            <span className="font-bold text-xl">Training Providers</span>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-24 max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Empowering Talent Through Technology</h2>
            <p className="text-zinc-400 max-w-2xl mx-auto">
              We build innovative software solutions while connecting graduates, employers, and training providers through technology-driven skills development programmes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Card 1 */}
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col h-full">
              <GraduationCap className="mb-4 text-emerald-400" size={32} />
              <h3 className="text-xl font-semibold mb-2">Connecting Talent with Opportunity</h3>
              <p className="text-zinc-400">Connecting graduates with internships, learnerships, and employment opportunities through strategic employer partnerships.</p>
            </div>
            
            {/* Card 2 */}
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col h-full md:col-span-2">
              <Code2 className="mb-4 text-blue-400" size={32} />
              <h3 className="text-xl font-semibold mb-2">Build Digital Solutions That Scale</h3>
              <p className="text-zinc-400 max-w-md">We design and develop scalableweb applications, business systems, and digital platforms tailored to your organisation's needs.</p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col h-full md:col-span-2">
              <Handshake className="mb-4 text-amber-400" size={32} />
              <h3 className="text-xl font-semibold mb-2">Employer Solutions</h3>
              <p className="text-zinc-400">Helping businesses recruit, manage, and develop future talent through streamlined workforce development programmes.</p>
            </div>

            {/* Card 4 */}
            <div className="p-8 rounded-2xl bg-zinc-900/50 border border-zinc-800 flex flex-col h-full">
              <Rocket className="mb-4 text-purple-400" size={32} />
              <h3 className="text-xl font-semibold mb-2">Digital Transformation</h3>
              <p className="text-zinc-400">Modernising organisations with cloud solutions, automation, and custom software that improves efficiency and drives growth</p>
            </div>
          </div>
        </section>

      </main>
      
      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12 mt-12">
        <div className="container mx-auto px-6 text-center text-zinc-500 text-sm">
          <p>Built with industry-standard tools. SheDebugs</p>
        </div>
      </footer>
    </div>
  );
}