import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
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
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-xl shadow-lg shadow-blue-500/5 border-b border-blue-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                className="md:hidden p-2.5 rounded-xl hover:bg-blue-50 active:bg-blue-100 transition-colors text-blue-600"
                aria-label="فتح القائمة"
              >
                <Menu className="w-5 h-5" />
              </motion.button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px] sm:w-[300px] bg-white border-r border-blue-100 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-4 sm:p-6 border-b border-blue-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                      <span className="text-white font-bold">م</span>
                    </div>
                    <div>
                      <span className="font-bold text-gray-900">محمد العربي</span>
                      <p className="text-xs text-gray-500">Digital Marketing</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-xl hover:bg-blue-50 active:bg-blue-100 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-500" />
                  </button>
                </div>
                <nav className="flex flex-col p-3 sm:p-4 gap-1">
                  {navLinks.map((link, index) => (
                    <motion.button
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                      onClick={() => handleNavClick(link.href)}
                      className="text-right py-3 px-4 rounded-xl hover:bg-blue-50 active:bg-blue-100 transition-all text-gray-700 hover:text-blue-600 font-medium group"
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
                      </span>
                    </motion.button>
                  ))}
                </nav>
                
                {/* Mobile Contact Info */}
                <div className="mt-auto p-4 sm:p-6 border-t border-blue-100">
                  <p className="text-sm text-gray-500 mb-3">تواصل معي</p>
                  <div className="flex gap-2">
                    <a 
                      href="mailto:dr.al3rbi@gmail.com" 
                      className="flex-1 py-2.5 px-3 bg-blue-50 text-blue-600 rounded-xl text-sm font-medium text-center hover:bg-blue-100 active:bg-blue-200 transition-colors"
                    >
                      بريد
                    </a>
                    <a 
                      href="https://wa.me/966537311886" 
                      className="flex-1 py-2.5 px-3 bg-emerald-50 text-emerald-600 rounded-xl text-sm font-medium text-center hover:bg-emerald-100 active:bg-emerald-200 transition-colors"
                    >
                      واتساب
                    </a>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                onClick={() => handleNavClick(link.href)}
                className="relative px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-500 rounded-full transition-all duration-300 group-hover:w-4/5" />
              </motion.button>
            ))}
          </nav>

          {/* Logo */}
          <motion.a
            href="#hero"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="text-white font-bold text-base sm:text-lg md:text-xl">م</span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-gray-800 text-sm md:text-base">محمد العربي</p>
              <p className="text-[10px] sm:text-xs text-gray-500">Digital Marketing</p>
            </div>
          </motion.a>
        </div>
      </div>
    </motion.header>
  );
}
