import { Navigation } from '@/components/Navigation';
import { DashboardStatRow } from '@/components/DashboardStats';
import { RecentUploads } from '@/components/RecentUploads';
import { WeeklyStudyChart } from '@/components/WeeklyStudyChart';
import { WeakTopicsChart } from '@/components/WeakTopicsChart';
import { AIChatWidget } from '@/components/AIChatWidget';
import { NoteUploadWidget } from '@/components/NoteUploadWidget';
import { FlashcardFlipper } from '@/components/FlashcardFlipper';
import { TaskList } from '@/components/TaskList';

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navigation />

      <main className="mx-auto max-w-7xl space-y-8 px-6 py-8 lg:px-10">
        <section className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Dashboard</p>
            <h1 className="mt-2 text-3xl font-semibold text-white">Your study command center</h1>
            <p className="mt-2 max-w-2xl text-sm text-slate-300">
              Track study habits, review weak topics, organize subjects, and generate practice material from your notes.
            </p>
          </div>
          <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-4 py-3 text-sm text-cyan-100">
            Groq-backed AI tutor + Firebase data layer + Next.js full-stack routes
          </div>
        </section>

        <DashboardStatRow />

        <section className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid gap-6 xl:grid-cols-2">
              <WeeklyStudyChart />
              <WeakTopicsChart />
            </div>
            <div className="grid gap-6 xl:grid-cols-2">
              <AIChatWidget />
              <NoteUploadWidget />
            </div>
          </div>

          <div className="space-y-6">
            <TaskList />
            <RecentUploads />
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <FlashcardFlipper />
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Workflow</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">Suggested study flow</h2>
            <ol className="mt-6 space-y-4 text-sm text-slate-300">
              <li>1. Upload notes or PDFs into a subject.</li>
              <li>2. Generate summaries, quizzes, and flashcards.</li>
              <li>3. Study with AI chat using subject context.</li>
              <li>4. Review scores, habits, and weak topics in analytics.</li>
            </ol>
          </div>
        </section>
      </main>
    </div>
  );
}
