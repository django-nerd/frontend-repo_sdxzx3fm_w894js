import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    title: 'Self‑assessment',
    desc: 'Identify weak spots across budgeting, debt, savings, and mindset.'
  },
  {
    title: 'Personalized insights',
    desc: 'AI highlights patterns and recommends your first habit playbook.'
  },
  {
    title: 'Action tools',
    desc: 'Daily habit tracker, goals, and nudges that keep you on track.'
  },
  {
    title: 'Progress & community',
    desc: 'See trends, celebrate streaks, and get encouragement from peers.'
  }
];

export default function Journey() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Your learning journey</h2>
          <p className="mt-3 text-white/70">A simple, guided flow from awareness to action—built for momentum.</p>
        </div>

        <ol className="mx-auto mt-10 max-w-3xl space-y-5">
          {steps.map((s, i) => (
            <li key={s.title} className="relative rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-sm font-semibold text-indigo-300">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-medium">{s.title}</h3>
                    <ArrowRight size={16} className="text-white/30" />
                  </div>
                  <p className="mt-1 text-sm text-white/70">{s.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
