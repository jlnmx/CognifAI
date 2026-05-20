import { Navigation } from '@/components/Navigation';
import { FlashcardFlipper } from '@/components/FlashcardFlipper';
import { Card } from '@/components/Card';

export default function FlashcardsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navigation />
      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.75fr]">
          <FlashcardFlipper />
          <Card title="Spaced repetition" description="Track difficulty, favorites, and review cadence.">
            <div className="space-y-3 text-sm text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Easy cards: review every 3 days</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Medium cards: review every 2 days</div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Hard cards: review daily</div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
