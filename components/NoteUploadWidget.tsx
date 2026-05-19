'use client';

import { useState } from 'react';
import { Card } from './Card';
import { Button } from './Button';
import { Input } from './Input';
import { Upload, Loader, CheckCircle } from 'lucide-react';

export function NoteUploadWidget() {
  const [file, setFile] = useState<File | null>(null);
  const [subject, setSubject] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUploadStatus('idle');
    }
  };

  const handleUpload = async () => {
    if (!file || !subject) {
      alert('Please select a file and subject');
      return;
    }

    setIsUploading(true);
    setUploadStatus('uploading');

    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('subjectId', subject);
      formData.append('title', file.name);

      const response = await fetch('/api/notes/upload', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setUploadStatus('success');
        setFile(null);
        setSubject('');
        setTimeout(() => setUploadStatus('idle'), 2000);
      } else {
        setUploadStatus('error');
      }
    } catch (error) {
      console.error('Upload error:', error);
      setUploadStatus('error');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <Card title="Upload Notes" description="Upload PDFs and notes to get started">
      <div className="space-y-4">
        <div className="rounded-lg border-2 border-dashed border-gray-300 p-6 text-center">
          <Upload className="mx-auto mb-2 h-8 w-8 text-gray-400" />
          <input
            type="file"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.txt"
            className="hidden"
            id="file-input"
          />
          <label htmlFor="file-input" className="cursor-pointer">
            <p className="text-sm font-medium text-gray-700">
              {file ? file.name : 'Click to upload or drag and drop'}
            </p>
            <p className="text-xs text-gray-500">PDF, DOC, or TXT</p>
          </label>
        </div>

        <Input
          label="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="e.g., Biology, Mathematics"
        />

        <Button
          onClick={handleUpload}
          isLoading={isUploading}
          disabled={!file || !subject}
          className="w-full"
        >
          {uploadStatus === 'success' && <CheckCircle className="mr-2 h-4 w-4" />}
          {isUploading ? 'Uploading...' : uploadStatus === 'success' ? 'Uploaded!' : 'Upload'}
        </Button>
      </div>
    </Card>
  );
}
