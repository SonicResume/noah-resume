import { Link, useLocation } from "react-router-dom";
import { FileText } from "lucide-react";

export default function Navigation() {
  const location = useLocation();

  const navItems = [
    {
      path: "/bullet-points",
      label: "Bullet Points Generator",
    },
    {
      path: "/summary",
      label: "Résumé Summary Generator", 
      icon: <FileText className="w-5 h-5" />
    }
  ];

  return (
    <nav className="bg-slate-800 border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-amber-500 p-2 rounded-lg">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold text-white">
              LegalEdge AI Résumé Tools
            </h1>
          </div>
          
          <div className="flex space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === item.path
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:text-white hover:bg-slate-700"
                }`}
              >
                {item.icon}
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
