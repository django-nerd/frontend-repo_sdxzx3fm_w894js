import React from 'react';
import { BarChart3, Target, BookOpen, CalendarCheck } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Budget & Analytics',
    desc: 'Track spending by category, get monthly reports, and forecast cash flow with AI suggestions.'
  },
  {
    icon: Target,
    title: 'Habit Challenges',
    desc: 'Turn goals into daily streaks. Replace overspending triggers with simple, positive actions.'
  },
  {
    icon: BookOpen,
    title: 'Micro‑Lessons',
    desc: 'Learn the essentials: budgeting, debt, savings, and investing in 3–5 minute lessons.'
  },
  {
    icon: CalendarCheck,
    title: 'Smart Coach',
    desc: 'Ask questions anytime. Get plain‑English answers tailored to your situation.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative border-t border-white/10 bg-gradient-to-b from-transparent to-white/[0.02]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">Core features</h2>
          <p className="mt-3 text-white/70">
            Everything you need to build sustainable financial habits—organized around awareness, action, and progress.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.06]">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/20 text-indigo-300">
                <Icon size={18} />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
