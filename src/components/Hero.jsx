import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Bot } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10 md:pt-24 md:pb-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
              <Bot size={14} /> AI-driven financial fitness
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl">
              Build smarter money habits with your personal AI coach
            </h1>
            <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
              Identify weak spots, learn with bite‑sized lessons, and track habits that transform your financial life—guided by real‑time insights.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                <Rocket size={18} /> Start your assessment
              </a>
              <a
                href="#roadmap"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
              >
                See the roadmap
              </a>
            </div>
          </div>

          <div className="relative h-[360px] w-full rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur md:h-[460px]">
            <div className="absolute inset-0 rounded-xl overflow-hidden">
              <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -top-24 right-[-10%] h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl md:h-[28rem] md:w-[28rem]" />
      <div className="pointer-events-none absolute -bottom-24 left-[-10%] h-72 w-72 rounded-full bg-sky-400/10 blur-3xl md:h-[28rem] md:w-[28rem]" />
    </section>
  );
}
