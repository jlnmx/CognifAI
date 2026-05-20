import { Navigation } from '@/components/Navigation';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';

const questions = [
  {
    question: 'What process do plants use to convert sunlight into energy?',
    options: ['Respiration', 'Photosynthesis', 'Transpiration', 'Fermentation'],
  },
  {
    question: 'True or false: Mitosis produces identical daughter cells.',
    options: ['True', 'False'],
  },
];

export default function QuizzesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navigation />
      <main className="mx-auto max-w-7xl px-6 py-8 lg:px-10">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Card title="Generated quiz" description="Created from your uploaded notes.">
            <div className="space-y-5">
              {questions.map((question, index) => (
                <div key={question.question} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm font-medium text-cyan-300">Question {index + 1}</p>
                  <p className="mt-2 text-white">{question.question}</p>
                  <div className="mt-4 grid gap-2 sm:grid-cols-2">
                    {question.options.map((option) => (
                      <button key={option} className="rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-left text-sm text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-400/10">
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card title="Quiz controls" description="Generate, retry, and export practice sets.">
            <div className="space-y-3">
              <Button className="w-full">Generate new quiz</Button>
              <Button variant="secondary" className="w-full">Create flashcards</Button>
              <Button variant="ghost" className="w-full">Export results</Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
}
