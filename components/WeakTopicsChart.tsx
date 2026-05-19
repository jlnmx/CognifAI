'use client';

import { Card } from './Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const performanceData = [
  { topic: 'Photosynthesis', accuracy: 52, attempts: 3 },
  { topic: 'Osmosis', accuracy: 65, attempts: 2 },
  { topic: 'Mitosis', accuracy: 72, attempts: 4 },
  { topic: 'DNA', accuracy: 88, attempts: 5 },
  { topic: 'Evolution', accuracy: 78, attempts: 3 },
];

export function WeakTopicsChart() {
  return (
    <Card title="Performance by Topic" className="col-span-2">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={performanceData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis dataKey="topic" angle={-45} textAnchor="end" height={100} stroke="#6b7280" />
          <YAxis stroke="#6b7280" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#fff',
              border: '1px solid #e5e7eb',
              borderRadius: '8px',
            }}
          />
          <Legend />
          <Bar dataKey="accuracy" fill="#3b82f6" radius={[8, 8, 0, 0]} />
          <Bar dataKey="attempts" fill="#ef4444" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
