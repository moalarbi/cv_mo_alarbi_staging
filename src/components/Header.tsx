import { useState, useEffect } from 'react';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navLinks = [
  { href: '#hero', label: 'الرئيسية' },
  { href: '#experience', label: 'الخبرات' },
  { href: '#skills', label: 'المهارات' },
  { href: '#projects', label: 'المشاريع' },
  { href: '#education', label: 'التعليم' },
  { href: '#contact', label: 'التواصل' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/80 backdrop-blur-md shadow-lg shadow-blue-500/10 border-b border-blue-500/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Hamburger Menu - Left side in RTL */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className="p-2 rounded-full hover:bg-blue-500/20 transition-colors text-blue-300 hover:text-blue-200"
                aria-label="فتح القائمة"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] bg-slate-900/95 backdrop-blur-md p-0 border-r border-blue-500/20">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 border-b border-blue-500/20">
                  <span className="font-bold text-lg text-blue-300">القائمة</span>
                </div>
                <nav className="flex flex-col p-4 gap-2">
                  {navLinks.map((link) => (
                    <button
                      key={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="text-right py-3 px-4 rounded-xl hover:bg-blue-500/20 transition-colors text-blue-200 hover:text-blue-100 font-medium"
                    >
                      {link.label}
                    </button>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>

          {/* Avatar - Right side in RTL */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            className="w-10 h-10 rounded-full overflow-hidden bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/50 transition-all border border-blue-400/50"
          >
            <img src="/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
          </a>
        </div>
      </div>
    </header>
  );
}
