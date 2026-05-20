import Link from 'next/link';
import { ArrowRight, BrainCircuit, FileText, Sparkles, BarChart3, CalendarDays, MessageSquareText } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_30%),linear-gradient(180deg,_#020617_0%,_#0f172a_45%,_#111827_100%)]">
      <section className="mx-auto flex min-h-screen max-w-7xl flex-col justify-between px-6 py-8 lg:px-10">
        <header className="flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">CognifAI</p>
            <p className="text-sm text-slate-300">Study smarter with AI, analytics, and structured workflows.</p>
          </div>
          <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300">
            Open dashboard <ArrowRight className="h-4 w-4" />
          </Link>
        </header>

        <div className="grid gap-10 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
              <Sparkles className="h-4 w-4" />
              AI-powered student productivity platform
            </div>
            <div className="space-y-5">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                Notes, quizzes, flashcards, and study analytics in one focused workspace.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                Upload PDFs, chat with your lessons, generate practice content, track habits, and surface weak topics with clean dashboards built for real studying.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/dashboard" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">
                Launch app <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="#features" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                See features
              </a>
            </div>
          </div>

          <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl shadow-cyan-950/20 backdrop-blur-md">
            <div className="rounded-2xl bg-slate-950/60 p-5">
              <p className="text-sm text-slate-400">Today’s progress</p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <Metric label="Study streak" value="7 days" />
                <Metric label="Study hours" value="24h" />
                <Metric label="Quiz avg" value="85%" />
                <Metric label="Weak topics" value="3" />
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <FeatureChip icon={<FileText className="h-4 w-4" />} title="Notes & PDFs" desc="Upload, summarize, and search." />
              <FeatureChip icon={<MessageSquareText className="h-4 w-4" />} title="AI Tutor" desc="Context-aware chat by subject." />
              <FeatureChip icon={<BrainCircuit className="h-4 w-4" />} title="Quiz Generator" desc="Instant practice from notes." />
              <FeatureChip icon={<BarChart3 className="h-4 w-4" />} title="Analytics" desc="Track performance and weak topics." />
            </div>
          </div>
        </div>

        <section id="features" className="grid gap-4 border-t border-white/10 py-10 sm:grid-cols-2 xl:grid-cols-4">
          <BottomFeature title="Upload notes" icon={<FileText className="h-5 w-5" />} desc="PDF extraction and automatic categorization." />
          <BottomFeature title="AI chat tutor" icon={<MessageSquareText className="h-5 w-5" />} desc="Ask questions and generate explanations." />
          <BottomFeature title="Study habits" icon={<CalendarDays className="h-5 w-5" />} desc="Track sessions, tasks, and consistency." />
          <BottomFeature title="Weak topic analysis" icon={<BarChart3 className="h-5 w-5" />} desc="Spot gaps with charts and scores." />
        </section>
      </section>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-white">{value}</p>
    </div>
  );
}

function FeatureChip({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4">
      <div className="flex items-center gap-2 text-cyan-300">
        {icon}
        <span className="font-semibold text-white">{title}</span>
      </div>
      <p className="mt-2 text-sm text-slate-300">{desc}</p>
    </div>
  );
}

function BottomFeature({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
      <div className="flex items-center gap-3 text-cyan-300">
        {icon}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-300">{desc}</p>
    </div>
  );
}
