import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Placeholder - implement Firestore fetch in production
    return NextResponse.json({
      subjects: [],
      total: 0,
    });
  } catch (error) {
    console.error('Fetch Error:', error);
    return NextResponse.json({ error: 'Failed to fetch subjects' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, color } = body;

    return NextResponse.json({
      subject: {
        id: `subject-${Date.now()}`,
        name,
        color,
        createdAt: new Date(),
      },
    });
  } catch (error) {
    console.error('Create Error:', error);
    return NextResponse.json({ error: 'Failed to create subject' }, { status: 500 });
  }
}
