import { Navigation } from '@/components/Navigation';
import { WeeklyStudyChart } from '@/components/WeeklyStudyChart';
import { WeakTopicsChart } from '@/components/WeakTopicsChart';
import { Card } from '@/components/Card';

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navigation />
      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-2">
          <WeeklyStudyChart />
          <WeakTopicsChart />
          <Card title="Top metrics" description="Quick view of your learning performance.">
            <div className="grid gap-3 sm:grid-cols-2">
              <Metric label="Quiz accuracy" value="85%" />
              <Metric label="Study streak" value="7 days" />
              <Metric label="Most studied" value="Biology" />
              <Metric label="Weak topics" value="3" />
            </div>
          </Card>
          <Card title="Insights" description="AI can recommend review items automatically.">
            <div className="space-y-3 text-sm text-slate-300">
              <p>Photosynthesis needs another revision pass.</p>
              <p>Mitosis accuracy is improving after quiz practice.</p>
              <p>Try a shorter Pomodoro block for chemistry review.</p>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
      <p className="mt-2 text-xl font-semibold text-white">{value}</p>
    </div>
  );
}
