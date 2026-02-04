import { motion } from 'framer-motion';
import { Heart, Linkedin, Mail, Phone } from 'lucide-react';

const navLinks = [
  { href: '#hero', label: 'الرئيسية' },
  { href: '#experience', label: 'الخبرات' },
  { href: '#skills', label: 'المهارات' },
  { href: '#projects', label: 'المشاريع' },
  { href: '#education', label: 'التعليم' },
  { href: '#contact', label: 'التواصل' },
];

const socialLinks = [
  { icon: Linkedin, href: 'https://linkedin.com/in/moal3rbi', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:dr.al3rbi@gmail.com', label: 'Email' },
  { icon: Phone, href: 'tel:+966537311886', label: 'Phone' },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-10 sm:py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
            {/* Brand */}
            <div className="sm:col-span-2 lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6"
              >
                <div className="w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
                  <span className="text-white font-bold text-lg sm:text-xl lg:text-2xl">م</span>
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-lg lg:text-xl">محمد العربي</h3>
                  <p className="text-gray-400 text-xs sm:text-sm">Digital Marketing & Creative Director</p>
                </div>
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-400 leading-relaxed max-w-md mb-5 sm:mb-6 text-xs sm:text-sm"
              >
                قائد تسويق رقمي بخبرة +12 عام في بناء استراتيجيات نمو العلامات التجارية 
                وتحقيق نتائج ملموسة في السوق السعودي.
              </motion.p>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex gap-2 sm:gap-3"
              >
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-lg sm:rounded-xl bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-bold text-sm sm:text-base lg:text-lg mb-4 sm:mb-6"
              >
                روابط سريعة
              </motion.h4>
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-2 sm:space-y-3"
              >
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group text-xs sm:text-sm"
                    >
                      <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-gray-600 group-hover:bg-blue-400 transition-colors" />
                      {link.label}
                    </button>
                  </li>
                ))}
              </motion.ul>
            </div>

            {/* Contact Info */}
            <div>
              <motion.h4
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-bold text-sm sm:text-base lg:text-lg mb-4 sm:mb-6"
              >
                تواصل معي
              </motion.h4>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="space-y-3 sm:space-y-4"
              >
                <a
                  href="mailto:dr.al3rbi@gmail.com"
                  className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="truncate">dr.al3rbi@gmail.com</span>
                </a>
                <a
                  href="tel:+966537311886"
                  className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-blue-400 transition-colors text-xs sm:text-sm"
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>+966 53 731 1886</span>
                </a>
                <div className="flex items-center gap-2 sm:gap-3 text-gray-400 text-xs sm:text-sm">
                  <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>متاح للعمل</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-500 text-[10px] sm:text-xs flex items-center gap-1"
            >
              © 2025 محمد العربي. جميع الحقوق محفوظة
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-gray-500 text-[10px] sm:text-xs flex items-center gap-1"
            >
              صنع بـ <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-rose-500 fill-rose-500" /> في الرياض
            </motion.p>
          </div>
        </div>
      </div>
    </footer>
  );
}
