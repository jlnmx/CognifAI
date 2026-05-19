// User Types
export interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  createdAt: Date;
  studyStreak: number;
  totalStudyHours: number;
}

// Subject Types
export interface Subject {
  id: string;
  userId: string;
  name: string;
  color: string;
  createdAt: Date;
  updatedAt: Date;
}

// Notes Types
export interface Note {
  id: string;
  userId: string;
  subjectId: string;
  title: string;
  content: string;
  fileUrl?: string;
  createdAt: Date;
  updatedAt: Date;
  tags: string[];
}

// Quiz Types
export interface Quiz {
  id: string;
  userId: string;
  noteId: string;
  title: string;
  questions: Question[];
  createdAt: Date;
  updatedAt: Date;
  averageScore?: number;
}

export interface Question {
  id: string;
  type: 'multiple-choice' | 'true-false' | 'identification';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation?: string;
}

// Flashcard Types
export interface Flashcard {
  id: string;
  userId: string;
  subjectId: string;
  front: string;
  back: string;
  difficulty: 'easy' | 'medium' | 'hard';
  reviewCount: number;
  lastReviewed?: Date;
  createdAt: Date;
  isFavorite: boolean;
}

// Task Types
export interface Task {
  id: string;
  userId: string;
  title: string;
  description?: string;
  dueDate: Date;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
  subjectId?: string;
  createdAt: Date;
}

// Study Session Types
export interface StudySession {
  id: string;
  userId: string;
  subject: string;
  duration: number; // in minutes
  type: 'reading' | 'quiz' | 'flashcards' | 'ai-chat';
  timestamp: Date;
  score?: number;
}

// Analytics Types
export interface WeakTopic {
  topic: string;
  accuracy: number;
  quizzesAttempted: number;
}

export interface StudyStats {
  weeklyHours: number[];
  mostStudiedSubject: string;
  weakTopics: WeakTopic[];
  averageQuizScore: number;
  totalQuizzesCompleted: number;
  currentStreak: number;
}
