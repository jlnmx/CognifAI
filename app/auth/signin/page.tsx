import Link from 'next/link';
import { Button } from '@/components/Button';
import { Card } from '@/components/Card';

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-100">
      <Card className="w-full max-w-md border-white/10 bg-white/5 backdrop-blur-md" title="Sign in" description="Use Google, GitHub, or email once Auth.js is connected.">
        <div className="space-y-3">
          <Button className="w-full">Continue with Google</Button>
          <Button variant="secondary" className="w-full">Continue with GitHub</Button>
          <Button variant="ghost" className="w-full">Continue with email</Button>
        </div>
        <p className="mt-4 text-sm text-slate-400">
          Protected routes will redirect here once authentication is wired up.
        </p>
        <Link href="/" className="mt-6 inline-block text-sm font-medium text-cyan-300 hover:text-cyan-200">
          Back to landing
        </Link>
      </Card>
    </main>
  );
}
