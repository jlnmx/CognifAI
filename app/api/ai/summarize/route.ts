import { NextRequest, NextResponse } from 'next/server';
import { Groq } from 'groq-sdk';

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(request: NextRequest) {
  try {
    const { content, maxLength = 300 } = await request.json();

    if (!content) {
      return NextResponse.json({ error: 'Content is required' }, { status: 400 });
    }

    const prompt = `Summarize the following study material concisely in approximately ${maxLength} words.
Focus on key concepts and main points.

Material:
${content}

Provide only the summary, no additional text.`;

    const completion = await groq.chat.completions.create({
      messages: [{ role: 'user' as const, content: prompt }],
      model: 'mixtral-8x7b-32768',
      temperature: 0.5,
      max_tokens: 1000,
    });

    const summary = completion.choices[0]?.message?.content || '';

    return NextResponse.json({
      summary,
      generatedAt: new Date(),
    });
  } catch (error) {
    console.error('Summarization Error:', error);
    return NextResponse.json({ error: 'Failed to summarize content' }, { status: 500 });
  }
}
