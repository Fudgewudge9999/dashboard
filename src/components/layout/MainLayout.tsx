import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { Menu } from "lucide-react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Mobile menu button */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-background border"
      >
        <Menu size={20} />
      </button>

      {/* Sidebar with mobile overlay */}
      <div
        className={`${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 fixed inset-0 z-40 lg:relative transition-transform duration-300 ease-in-out`}
      >
        <div
          className="absolute inset-0 bg-black/50 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <Sidebar onMobileClose={() => setIsMobileMenuOpen(false)} />
      </div>

      {/* Main content */}
      <main className="flex-1 overflow-auto w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8">
          {/* Add padding to account for mobile menu button */}
          <div className="lg:hidden h-12" />
          {children}
        </div>
      </main>
    </div>
  );
}
