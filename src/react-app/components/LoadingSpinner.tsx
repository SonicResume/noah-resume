import { Loader2 } from "lucide-react";

interface LoadingSpinnerProps {
  text?: string;
}

export default function LoadingSpinner({ text = "Generating..." }: LoadingSpinnerProps) {
  return (
    <div className="flex items-center justify-center space-x-3 py-8">
      <Loader2 className="w-6 h-6 animate-spin text-blue-500" />
      <span className="text-slate-600 font-medium">{text}</span>
    </div>
  );
}
