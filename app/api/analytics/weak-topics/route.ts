import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Placeholder - implement weak topic analysis in production
    return NextResponse.json({
      weakTopics: [
        { topic: 'Photosynthesis', accuracy: 52, quizzesAttempted: 3 },
        { topic: 'Osmosis', accuracy: 65, quizzesAttempted: 2 },
        { topic: 'Mitosis', accuracy: 72, quizzesAttempted: 4 },
      ],
    });
  } catch (error) {
    console.error('Weak Topics Error:', error);
    return NextResponse.json({ error: 'Failed to fetch weak topics' }, { status: 500 });
  }
}
