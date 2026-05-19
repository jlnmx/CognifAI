import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    // Placeholder - implement Firestore fetch in production
    return NextResponse.json({
      tasks: [],
      total: 0,
    });
  } catch (error) {
    console.error('Fetch Error:', error);
    return NextResponse.json({ error: 'Failed to fetch tasks' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, dueDate, priority } = body;

    return NextResponse.json({
      task: {
        id: `task-${Date.now()}`,
        title,
        description,
        dueDate,
        priority,
        completed: false,
        createdAt: new Date(),
      },
    });
  } catch (error) {
    console.error('Create Error:', error);
    return NextResponse.json({ error: 'Failed to create task' }, { status: 500 });
  }
}
