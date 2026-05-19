'use client';

import { Card } from './Card';
import { Activity, TrendingUp, BookOpen, Clock } from 'lucide-react';

interface DashboardStatProps {
  title: string;
  value: string | number;
  change?: number;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
}

export function DashboardStat({ title, value, change, icon, trend = 'neutral' }: DashboardStatProps) {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
          {change !== undefined && (
            <p
              className={`mt-2 flex items-center text-sm font-medium ${
                trend === 'up'
                  ? 'text-green-600'
                  : trend === 'down'
                    ? 'text-red-600'
                    : 'text-gray-600'
              }`}
            >
              <TrendingUp className="mr-1 h-4 w-4" />
              {trend === 'up' ? '+' : ''}{change}% vs last week
            </p>
          )}
        </div>
        <div className="text-4xl text-blue-600 opacity-20">{icon}</div>
      </div>
    </Card>
  );
}

export function DashboardStatRow() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <DashboardStat
        title="Study Streak"
        value="7 days"
        change={14}
        trend="up"
        icon={<Activity size={40} />}
      />
      <DashboardStat
        title="Total Study Hours"
        value="24h"
        change={8}
        trend="up"
        icon={<Clock size={40} />}
      />
      <DashboardStat
        title="Subjects"
        value="5"
        icon={<BookOpen size={40} />}
      />
      <DashboardStat
        title="Quiz Average"
        value="85%"
        change={5}
        trend="up"
        icon={<TrendingUp size={40} />}
      />
    </div>
  );
}
