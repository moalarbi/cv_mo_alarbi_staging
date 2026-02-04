import { Phone, Mail, Linkedin, Heart, Instagram } from 'lucide-react';

// Custom TikTok icon since lucide-react might not have it in this version
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

const footerLinks = [
  { href: '#hero', label: 'الرئيسية' },
  { href: '#experience', label: 'الخبرات' },
  { href: '#skills', label: 'المهارات' },
  { href: '#projects', label: 'المشاريع' },
  { href: '#contact', label: 'التواصل' },
];

const socialLinks = [
  { icon: Phone, href: 'tel:+966537311886', label: 'هاتف' },
  { icon: Mail, href: 'mailto:dr.al3rbi@gmail.com', label: 'بريد' },
  { icon: Linkedin, href: 'https://linkedin.com/in/moal3rbi', label: 'لينكدإن' },
  { icon: Instagram, href: 'https://www.instagram.com/ecom_alarbi/', label: 'إنستجرام' },
  { icon: TikTokIcon, href: 'https://www.tiktok.com/@ecom_alarbi', label: 'تيك توك' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center">
          {/* Name & Title */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-1">
              محمد العربي
            </h3>
            <p className="text-gray-500 text-sm">Digital Marketing & Creative Director</p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8">
            {footerLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-3 mb-8">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={
                  social.href.startsWith('http')
                    ? 'noopener noreferrer'
                    : undefined
                }
                className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gray-200 mb-6"></div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm mb-2">
            © 2025 محمد العربي. جميع الحقوق محفوظة
          </p>

          {/* Made with love */}
          <p className="text-gray-400 text-sm flex items-center gap-1">
            صنع بـ <Heart className="w-4 h-4 text-red-500 fill-red-500" /> في
            الرياض
          </p>
        </div>
      </div>
    </footer>
  );
}
