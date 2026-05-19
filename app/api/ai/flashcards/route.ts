import { NextRequest, NextResponse } from 'next/server';
import { Groq } from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

interface Flashcard {
  front: string;
  back: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export async function POST(request: NextRequest) {
  try {
    const { content, numberOfCards = 10 } = await request.json();

    if (!content) {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 });
    }

    const prompt = `Based on the following study material, generate exactly ${numberOfCards} flashcards in JSON format.
Each flashcard must have:
- front: question or concept to memorize
- back: answer or definition
- difficulty: "easy" | "medium" | "hard"

Make flashcards that test key concepts and are appropriate for spaced repetition learning.

Study Material:
${content}

Return ONLY valid JSON array of flashcards, no other text.`;

    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user' as const, content: prompt }],
      model: 'mixtral-8x7b-32768',
      temperature: 0.7,
      max_tokens: 2000,
    });

    const responseText = completion.choices[0]?.message?.content || '[]';
    
    const flashcards: Flashcard[] = JSON.parse(responseText);

    return NextResponse.json({
      flashcards,
      generatedAt: new Date(),
    });
  } catch (error) {
    console.error('Flashcard Generation Error:', error);
    return NextResponse.json({ error: 'Failed to generate flashcards' }, { status: 500 });
  }
}
