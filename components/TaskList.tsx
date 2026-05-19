'use client';

import { Card } from './Card';
import { Button } from './Button';
import { CheckCircle, Circle, Trash2 } from 'lucide-react';

interface TaskItem {
  id: string;
  title: string;
  dueDate: Date;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
}

export function TaskList({ tasks = [] }: { tasks?: TaskItem[] }) {
  const mockTasks: TaskItem[] = tasks.length
    ? tasks
    : [
        {
          id: '1',
          title: 'Complete Biology Chapter 5',
          dueDate: new Date(Date.now() + 86400000),
          priority: 'high',
          completed: false,
        },
        {
          id: '2',
          title: 'Review Math formulas',
          dueDate: new Date(Date.now() + 172800000),
          priority: 'medium',
          completed: true,
        },
      ];

  const priorityColor = {
    high: 'text-red-600 bg-red-50',
    medium: 'text-yellow-600 bg-yellow-50',
    low: 'text-green-600 bg-green-50',
  };

  return (
    <Card title="Today's Tasks">
      <div className="space-y-2">
        {mockTasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 hover:bg-gray-50"
          >
            <button className="flex-shrink-0">
              {task.completed ? (
                <CheckCircle className="h-5 w-5 text-green-600" />
              ) : (
                <Circle className="h-5 w-5 text-gray-400" />
              )}
            </button>

            <div className="flex-1 min-w-0">
              <p
                className={`font-medium text-gray-900 ${
                  task.completed ? 'line-through text-gray-500' : ''
                }`}
              >
                {task.title}
              </p>
              <p className="text-xs text-gray-500">
                Due {task.dueDate.toLocaleDateString()}
              </p>
            </div>

            <span
              className={`flex-shrink-0 rounded-full px-2 py-1 text-xs font-medium ${
                priorityColor[task.priority]
              }`}
            >
              {task.priority}
            </span>

            <button className="flex-shrink-0 text-gray-400 hover:text-red-600">
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
}
