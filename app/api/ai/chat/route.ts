import { NextRequest, NextResponse } from 'next/server';
import { getGroqClient } from '@/lib/groq';

export async function POST(request: NextRequest) {
  try {
    const groq = getGroqClient();
    const { message, context, conversationHistory } = await request.json();

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 });
    }

    const systemPrompt = `You are CognifAI, an expert AI tutor helping students understand concepts deeply.
${context ? `Context from student notes:\n${context}` : ''}

Your responsibilities:
- Explain concepts clearly and concisely
- Provide examples when helpful
- Ask clarifying questions to assess understanding
- Suggest practice questions or flashcards when appropriate
- Be encouraging and supportive
- Adapt explanations to the student's level`;

    const messages = [
      ...(conversationHistory || []),
      { role: 'user' as const, content: message },
    ];

    const completion = await groq.chat.completions.create({
      messages: [
        { role: 'system' as const, content: systemPrompt },
        ...messages,
      ],
      model: 'mixtral-8x7b-32768',
      temperature: 0.7,
      max_tokens: 1024,
    });

    const content = completion.choices[0]?.message?.content || '';

    return NextResponse.json({
      response: content,
      timestamp: new Date(),
    });
  } catch (error) {
    console.error('AI Chat Error:', error);
    return NextResponse.json({ error: 'Failed to get AI response' }, { status: 500 });
  }
}
