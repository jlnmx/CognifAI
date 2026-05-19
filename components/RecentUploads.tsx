'use client';

import { Card } from './Card';
import { FileText, MoreVertical } from 'lucide-react';
import { formatDate } from '@/lib/utils';

interface RecentUploadProps {
  id: string;
  title: string;
  subject: string;
  uploadedAt: Date;
  fileSize: number;
}

export function RecentUploads({ uploads = [] }: { uploads?: RecentUploadProps[] }) {
  const mockUploads: RecentUploadProps[] = uploads.length
    ? uploads
    : [
        {
          id: '1',
          title: 'Biology Chapter 5 - Photosynthesis',
          subject: 'Biology',
          uploadedAt: new Date(),
          fileSize: 2.3,
        },
        {
          id: '2',
          title: 'Chemistry Formulas',
          subject: 'Chemistry',
          uploadedAt: new Date(Date.now() - 86400000),
          fileSize: 1.5,
        },
      ];

  return (
    <Card title="Recent Uploads">
      <div className="space-y-3">
        {mockUploads.map((upload) => (
          <div key={upload.id} className="flex items-center justify-between rounded-lg bg-gray-50 p-3">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">{upload.title}</p>
                <p className="text-xs text-gray-500">
                  {upload.subject} · {formatDate(upload.uploadedAt)}
                </p>
              </div>
            </div>
            <button className="rounded p-1 hover:bg-gray-200">
              <MoreVertical className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        ))}
      </div>
    </Card>
  );
}
