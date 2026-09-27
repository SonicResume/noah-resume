import React from 'react';
import { Button } from '../ui/button';
import { FileText, Info, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <header className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gradient">Resume Maker</h1>
              <p className="text-xs text-text-secondary -mt-1">Professional Resume Builder</p>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-4">
            <Button asChild variant="ghost" size="sm">
              <Link to="/about" className="flex items-center gap-2">
                <Info className="w-4 h-4" />
                <span className="hidden sm:inline">About</span>
              </Link>
            </Button>
            
            <Button asChild variant="ghost" size="sm">
              <a 
                href="https://github.com/Afif718" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};