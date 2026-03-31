// components/Navbar.tsx
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="w-full border-b border-default-200 bg-background/70 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg tracking-tight">
          ExchangePlatform
        </Link>
        
        {/* Core Auth Links */}
        <div className="flex gap-4 items-center text-sm font-medium">
          <Link href="/login" className="text-default-600 hover:text-foreground transition-colors">
            Log In
          </Link>
          <Link 
            href="/register" 
            className="bg-foreground text-background px-4 py-1.5 rounded-md hover:opacity-90 transition-opacity"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}