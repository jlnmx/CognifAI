import { create } from 'zustand';
import { Subject, Note, Task } from '../types';

interface AppStore {
  subjects: Subject[];
  notes: Note[];
  tasks: Task[];
  selectedSubject: Subject | null;
  
  // Subject actions
  addSubject: (subject: Subject) => void;
  removeSubject: (id: string) => void;
  setSubjects: (subjects: Subject[]) => void;
  setSelectedSubject: (subject: Subject | null) => void;
  
  // Note actions
  addNote: (note: Note) => void;
  removeNote: (id: string) => void;
  setNotes: (notes: Note[]) => void;
  
  // Task actions
  addTask: (task: Task) => void;
  removeTask: (id: string) => void;
  setTasks: (tasks: Task[]) => void;
  updateTask: (id: string, task: Task) => void;
}

export const useAppStore = create<AppStore>((set) => ({
  subjects: [],
  notes: [],
  tasks: [],
  selectedSubject: null,
  
  addSubject: (subject) => set((state) => ({ subjects: [...state.subjects, subject] })),
  removeSubject: (id) => set((state) => ({ subjects: state.subjects.filter((s) => s.id !== id) })),
  setSubjects: (subjects) => set({ subjects }),
  setSelectedSubject: (subject) => set({ selectedSubject: subject }),
  
  addNote: (note) => set((state) => ({ notes: [...state.notes, note] })),
  removeNote: (id) => set((state) => ({ notes: state.notes.filter((n) => n.id !== id) })),
  setNotes: (notes) => set({ notes }),
  
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (id) => set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) })),
  setTasks: (tasks) => set({ tasks }),
  updateTask: (id, task) => set((state) => ({
    tasks: state.tasks.map((t) => (t.id === id ? task : t)),
  })),
}));
