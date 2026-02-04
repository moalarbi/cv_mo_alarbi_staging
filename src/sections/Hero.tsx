import { motion } from 'framer-motion';
import { Download, MessageCircle, Sparkles, TrendingUp, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FloatingElement } from '@/components/AnimatedSection';

const stats = [
  { icon: TrendingUp, value: '+12', label: 'سنة خبرة', color: 'from-blue-500 to-blue-600' },
  { icon: Users, value: '+60', label: 'علامة تجارية', color: 'from-cyan-500 to-cyan-600' },
  { icon: Award, value: '80%', label: 'نجاح الحملات', color: 'from-purple-500 to-purple-600' },
];

const floatingIcons = [
  { icon: '💼', delay: 0, x: '5%', y: '15%' },
  { icon: '📊', delay: 0.5, x: '90%', y: '10%' },
  { icon: '🎯', delay: 1, x: '85%', y: '65%' },
  { icon: '🚀', delay: 1.5, x: '8%', y: '70%' },
];

export default function Hero() {
  const handleContactClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadClick = () => {
    window.open('/cv.pdf', '_blank');
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 sm:pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50" />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-1/2 -right-1/2 w-[600px] sm:w-[1000px] h-[600px] sm:h-[1000px] bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-1/2 -left-1/2 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] bg-gradient-to-br from-purple-200/20 to-blue-200/20 rounded-full blur-3xl"
        />
      </div>

      {/* Floating Icons - Hidden on small mobile */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.12, scale: 1 }}
          transition={{ delay: item.delay + 1, duration: 0.5 }}
          className="absolute text-2xl sm:text-4xl hidden md:block"
          style={{ left: item.x, top: item.y }}
        >
          <FloatingElement duration={3 + index} distance={12}>
            {item.icon}
          </FloatingElement>
        </motion.div>
      ))}

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02] sm:opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#3b82f6 1px, transparent 1px), linear-gradient(90deg, #3b82f6 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-6 sm:mb-8"
          >
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>متاح للعمل</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6"
          >
            <span className="text-gray-900">محمد</span>{' '}
            <span className="gradient-text">العربي</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-700 mb-4 sm:mb-6"
          >
            Digital Marketing & Creative Director
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
          >
            قائد تسويق رقمي بخبرة +12 عام في بناء استراتيجيات نمو العلامات التجارية 
            وتحقيق نتائج ملموسة في السوق السعودي
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-16"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Button
                onClick={handleContactClick}
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl sm:rounded-2xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                تواصل معي
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.95 }} className="w-full sm:w-auto">
              <Button
                onClick={handleDownloadClick}
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-blue-200 text-blue-700 hover:bg-blue-50 px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg rounded-xl sm:rounded-2xl transition-all"
              >
                <Download className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                تحميل السيرة PDF
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8 max-w-lg sm:max-w-2xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 lg:p-6 shadow-lg shadow-blue-500/5 border border-blue-100"
              >
                <div className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mx-auto rounded-lg sm:rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-2 sm:mb-3`}>
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text mb-0.5 sm:mb-1">{stat.value}</div>
                <div className="text-[10px] sm:text-xs lg:text-sm text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
