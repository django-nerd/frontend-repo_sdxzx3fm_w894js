import React from 'react';

const phases = [
  {
    name: 'Phase 1 — Core Foundation',
    items: [
      'Habit assessment quiz',
      'Dashboard + progress view',
      'Basic budgeting tool',
      'Learning section (5 lessons)',
      'Gamified streaks'
    ]
  },
  {
    name: 'Phase 2 — AI Layer',
    items: [
      'Chatbot integration',
      'Spending analysis & prediction',
      'Personalized content engine'
    ]
  },
  {
    name: 'Phase 3 — Advanced Features',
    items: [
      'Sentiment‑based interactions',
      'Fraud detection & smart forecasts',
      'Community & leaderboard'
    ]
  }
];

export default function Roadmap() {
  return (
    <section id="roadmap" className="relative border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">MVP roadmap</h2>
          <p className="mt-3 text-white/70">A pragmatic rollout from essentials to intelligence to community.</p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {phases.map((phase) => (
            <div key={phase.name} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="text-lg font-semibold text-white">{phase.name}</h3>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/70">
                {phase.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
