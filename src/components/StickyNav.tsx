import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Home, Briefcase, Sparkles, FolderOpen, GraduationCap, MessageCircle } from 'lucide-react';

const navItems = [
  { href: '#hero', label: 'الرئيسية', shortLabel: 'رئيسية', icon: Home },
  { href: '#experience', label: 'الخبرات', shortLabel: 'خبرات', icon: Briefcase },
  { href: '#skills', label: 'المهارات', shortLabel: 'مهارات', icon: Sparkles },
  { href: '#projects', label: 'المشاريع', shortLabel: 'مشاريع', icon: FolderOpen },
  { href: '#education', label: 'التعليم', shortLabel: 'تعليم', icon: GraduationCap },
  { href: '#contact', label: 'التواصل', shortLabel: 'تواصل', icon: MessageCircle },
];

export default function StickyNav() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky nav after scrolling past hero
      setIsVisible(window.scrollY > 300);

      // Update active section
      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-auto max-w-[calc(100%-24px)]"
        >
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl shadow-blue-500/15 border border-blue-100 px-1.5 sm:px-2 py-1.5 sm:py-2 overflow-x-auto scrollbar-hide">
            <nav className="flex items-center justify-center gap-0.5 sm:gap-1 min-w-max">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                const Icon = item.icon;
                
                return (
                  <motion.button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    className={`relative flex flex-col items-center gap-0.5 sm:gap-1 px-2 sm:px-3 py-1.5 sm:py-2 rounded-xl transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-500 text-white'
                        : 'text-gray-500 hover:text-blue-600 hover:bg-blue-50 active:bg-blue-100'
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-[9px] sm:text-[10px] font-medium whitespace-nowrap">
                      {window.innerWidth < 380 ? item.shortLabel : item.label}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-blue-500 rounded-xl -z-10"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
