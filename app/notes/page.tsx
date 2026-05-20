import { Navigation } from '@/components/Navigation';
import { NoteUploadWidget } from '@/components/NoteUploadWidget';
import { Card } from '@/components/Card';

export default function NotesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navigation />
      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <NoteUploadWidget />
          <Card title="Saved notes" description="Search, filter, and summarize uploaded materials.">
            <div className="space-y-4 text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Biology - Photosynthesis
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Chemistry - Atomic Structure
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                Mathematics - Trigonometry Reviewer
              </div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
