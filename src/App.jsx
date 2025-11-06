import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Journey from './components/Journey';
import Roadmap from './components/Roadmap';
import Dashboard from './components/Dashboard';

function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0b0b11]/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <a href="#" className="flex items-center gap-2 text-white">
          <div className="h-6 w-6 rounded bg-indigo-500" />
          <span className="text-sm font-semibold tracking-tight">Financial Fitness</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          <a href="#dashboard" className="hover:text-white">Dashboard</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#roadmap" className="hover:text-white">Roadmap</a>
          <a href="#dashboard" className="rounded-lg bg-white/10 px-3 py-1.5 text-white hover:bg-white/20">Get Started</a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 text-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} Financial Fitness Companion — Built with love for healthy money habits.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b11] text-white">
      <Header />
      <main>
        <Hero />
        <Dashboard />
        <Features />
        <Journey />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
}
