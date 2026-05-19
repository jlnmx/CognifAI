'use client';

import { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Check, X } from 'lucide-react';

interface Flashcard {
  id: string;
  front: string;
  back: string;
  difficulty: string;
}

interface FlashcardFlipperProps {
  flashcards?: Flashcard[];
}

export function FlashcardFlipper({ flashcards = [] }: FlashcardFlipperProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const mockFlashcards: Flashcard[] = flashcards.length
    ? flashcards
    : [
        {
          id: '1',
          front: 'What is photosynthesis?',
          back: 'The process by which plants convert light energy into chemical energy.',
          difficulty: 'medium',
        },
        {
          id: '2',
          front: 'Define osmosis',
          back: 'The movement of water molecules across a semipermeable membrane from high to low solute concentration.',
          difficulty: 'hard',
        },
      ];

  const current = mockFlashcards[currentIndex];
  const progress = ((currentIndex + 1) / mockFlashcards.length) * 100;

  const handleNext = () => {
    if (currentIndex < mockFlashcards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  return (
    <Card title="Practice Flashcards">
      <div className="space-y-4">
        <div className="relative h-2 overflow-hidden rounded-full bg-gray-200">
          <div
            className="h-full bg-blue-600 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="cursor-pointer"
        >
          <div
            className={`relative h-48 rounded-lg p-6 shadow-lg transition-transform duration-500 flex items-center justify-center ${
              isFlipped
                ? 'bg-gradient-to-br from-green-50 to-teal-50'
                : 'bg-gradient-to-br from-blue-50 to-indigo-50'
            }`}
          >
            <div className="text-center">
              <p className="mb-2 text-xs font-medium text-gray-500">
                {isFlipped ? 'Answer' : 'Question'}
              </p>
              <p className="text-lg font-semibold text-gray-900">
                {isFlipped ? current?.back : current?.front}
              </p>
              <p className="mt-4 text-xs text-gray-400">Click to flip</p>
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            variant="secondary"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex-1"
          >
            ← Previous
          </Button>
          <Button
            variant="secondary"
            onClick={handleNext}
            disabled={currentIndex === mockFlashcards.length - 1}
            className="flex-1"
          >
            Next →
          </Button>
        </div>

        <div className="flex gap-2">
          <Button variant="ghost" className="flex-1">
            <X className="mr-2 h-4 w-4" />
            Hard
          </Button>
          <Button variant="ghost" className="flex-1">
            <Check className="mr-2 h-4 w-4" />
            Got it
          </Button>
        </div>

        <p className="text-center text-sm text-gray-600">
          Card {currentIndex + 1} of {mockFlashcards.length}
        </p>
      </div>
    </Card>
  );
}
