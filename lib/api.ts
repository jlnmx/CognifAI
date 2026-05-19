import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api',
});

export const apiClient = {
  // Notes API
  uploadNote: (data: FormData) =>
    api.post('/notes/upload', data, { headers: { 'Content-Type': 'multipart/form-data' } }),
  getNotes: () => api.get('/notes'),
  getNote: (id: string) => api.get(`/notes/${id}`),
  updateNote: (id: string, data: any) => api.put(`/notes/${id}`, data),
  deleteNote: (id: string) => api.delete(`/notes/${id}`),

  // AI Chat API
  chatWithAI: (message: string, context?: string) =>
    api.post('/ai/chat', { message, context }),
  generateQuiz: (noteId: string) => api.post('/ai/generate-quiz', { noteId }),
  generateFlashcards: (noteId: string) => api.post('/ai/generate-flashcards', { noteId }),
  summarizeNote: (noteId: string) => api.post('/ai/summarize', { noteId }),

  // Quizzes API
  getQuizzes: () => api.get('/quizzes'),
  submitQuiz: (quizId: string, answers: Record<string, string>) =>
    api.post(`/quizzes/${quizId}/submit`, { answers }),

  // Flashcards API
  getFlashcards: (subjectId?: string) =>
    api.get('/flashcards', { params: { subjectId } }),
  updateFlashcard: (id: string, data: any) => api.put(`/flashcards/${id}`, data),
  markFlashcardAsReviewed: (id: string) => api.put(`/flashcards/${id}/review`),

  // Subjects API
  getSubjects: () => api.get('/subjects'),
  createSubject: (data: any) => api.post('/subjects', data),
  updateSubject: (id: string, data: any) => api.put(`/subjects/${id}`, data),
  deleteSubject: (id: string) => api.delete(`/subjects/${id}`),

  // Tasks API
  getTasks: () => api.get('/tasks'),
  createTask: (data: any) => api.post('/tasks', data),
  updateTask: (id: string, data: any) => api.put(`/tasks/${id}`, data),
  deleteTask: (id: string) => api.delete(`/tasks/${id}`),

  // Analytics API
  getStudyStats: () => api.get('/analytics/study-stats'),
  getWeakTopics: () => api.get('/analytics/weak-topics'),
};

export default api;
