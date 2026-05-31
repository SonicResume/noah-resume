import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface FormSectionProps {
  title: string;
  icon: LucideIcon;
  children: ReactNode;
  action?: ReactNode;
}

export default function FormSection({ title, icon: Icon, children, action }: FormSectionProps) {
  return (
    <div className="bg-card rounded-xl border border-border p-5 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <Icon className="w-4 h-4 text-primary" />
          </div>
          <h2 className="font-semibold text-foreground">{title}</h2>
        </div>
        {action}
      </div>
      {children}
    </div>
  );
}
