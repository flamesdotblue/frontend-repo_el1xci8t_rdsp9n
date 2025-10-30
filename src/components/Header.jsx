import { LogIn } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full max-w-md mx-auto text-center mb-8">
      <div className="mx-auto h-12 w-12 rounded-xl bg-indigo-600/10 text-indigo-600 flex items-center justify-center mb-4">
        <LogIn className="h-6 w-6" />
      </div>
      <h1 className="text-2xl font-semibold text-gray-900">Welcome back</h1>
      <p className="mt-1 text-sm text-gray-600">Sign in to your account to continue</p>
    </header>
  );
}
