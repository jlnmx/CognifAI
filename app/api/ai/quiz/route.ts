import { NextRequest, NextResponse } from 'next/server';
import { getGroqClient } from '@/lib/groq';

interface QuizQuestion {
  type: 'multiple-choice' | 'true-false' | 'identification';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
}

export async function POST(request: NextRequest) {
  try {
    const groq = getGroqClient();
    const { content, numberOfQuestions = 5 } = await request.json();

    if (!content) {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 });
    }

    const prompt = `Based on the following study material, generate exactly ${numberOfQuestions} quiz questions in JSON format.
Each question must have these fields:
- type: "multiple-choice" | "true-false" | "identification"
- question: the question text
- options: array of options (for multiple-choice only)
- correctAnswer: the correct answer
- explanation: brief explanation of why it's correct

Study Material:
${content}

Return ONLY valid JSON array of questions, no other text.`;

    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user' as const, content: prompt }],
      model: 'mixtral-8x7b-32768',
      temperature: 0.7,
      max_tokens: 2000,
    });

    const responseText = completion.choices[0]?.message?.content || '[]';
    
    // Parse the JSON response
    const questions: QuizQuestion[] = JSON.parse(responseText);

    return NextResponse.json({
      questions,
      generatedAt: new Date(),
    });
  } catch (error) {
    console.error('Quiz Generation Error:', error);
    return NextResponse.json({ error: 'Failed to generate quiz' }, { status: 500 });
  }
}
