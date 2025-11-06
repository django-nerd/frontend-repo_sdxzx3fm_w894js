import React from 'react';
import { Wallet, PiggyBank, Flame, BookOpen, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Monthly Budget', value: '$3,200', change: '+3.2%', icon: Wallet, tone: 'indigo' },
  { label: 'Emergency Fund', value: '62% funded', change: '+8% this month', icon: PiggyBank, tone: 'emerald' },
  { label: 'Habit Streak', value: '12 days', change: 'Keep it going!', icon: Flame, tone: 'orange' },
  { label: 'Next Lesson', value: 'Debt Snowball 101', change: '3 min micro‑lesson', icon: BookOpen, tone: 'sky' }
];

const toneMap = {
  indigo: { bg: 'bg-indigo-500/20', text: 'text-indigo-300' },
  emerald: { bg: 'bg-emerald-500/20', text: 'text-emerald-300' },
  orange: { bg: 'bg-orange-500/20', text: 'text-orange-300' },
  sky: { bg: 'bg-sky-500/20', text: 'text-sky-300' }
};

export default function Dashboard() {
  return (
    <section id="dashboard" className="relative border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">Your dashboard</h2>
            <p className="mt-2 text-sm text-white/70">A quick snapshot of your money habits and progress.</p>
          </div>
          <button className="hidden rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-sm text-white transition hover:bg-white/20 md:block">
            Customize
          </button>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ label, value, change, icon: Icon, tone }) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-lg ${toneMap[tone].bg} ${toneMap[tone].text}`}>
                <Icon size={18} />
              </div>
              <p className="mt-4 text-sm text-white/60">{label}</p>
              <div className="mt-1 flex items-baseline gap-2">
                <p className="text-xl font-semibold text-white">{value}</p>
                <span className="text-xs text-white/50">{change}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 lg:col-span-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-white">Spending trend</h3>
              <span className="text-xs text-white/50">Last 30 days</span>
            </div>
            <div className="mt-4 h-40 rounded-lg bg-gradient-to-tr from-white/5 to-white/10 p-4">
              <div className="flex h-full items-center justify-center text-white/40">
                <TrendingUp className="mr-2" size={16} />
                <span className="text-xs">Chart placeholder — hook up analytics next</span>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
            <h3 className="text-sm font-semibold text-white">Today’s focus</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              <li>• Log expenses for groceries</li>
              <li>• Transfer $50 to emergency fund</li>
              <li>• Complete: Debt Snowball 101</li>
            </ul>
            <button className="mt-4 w-full rounded-lg bg-indigo-500 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-400">Start focus</button>
          </div>
        </div>
      </div>
    </section>
  );
}
