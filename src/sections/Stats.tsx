import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Calendar, Building2, Target, Zap, BarChart3 } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

interface StatItemProps {
  icon: React.ElementType;
  value: string;
  label: string;
  description: string;
  color: string;
  delay: number;
}

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const hasPlus = value.includes('+');
  const hasPercent = value.includes('%');

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const startTime = Date.now();
      
      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(numericValue * easeOut));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref} className="tabular-nums">
      {hasPlus && '+'}{count}{hasPercent && '%'}{suffix}
    </span>
  );
}

function StatItem({ icon: Icon, value, label, description, color, delay }: StatItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg shadow-blue-500/5 border border-blue-100 overflow-hidden"
    >
      {/* Hover Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      {/* Icon */}
      <motion.div
        whileHover={{ rotate: 5, scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}
      >
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
      </motion.div>

      {/* Value */}
      <div className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-1 sm:mb-2 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>
        <AnimatedCounter value={value} />
      </div>

      {/* Label */}
      <div className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-1">{label}</div>

      {/* Description */}
      <div className="text-xs sm:text-sm text-gray-500">{description}</div>

      {/* Decorative Corner */}
      <div className={`absolute -bottom-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br ${color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
    </motion.div>
  );
}

const stats = [
  {
    icon: TrendingUp,
    value: '70%',
    label: 'نمو العلامات التجارية',
    description: 'متوسط نمو العلامات التي عملت معها',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Target,
    value: '80%',
    label: 'نجاح الحملات الاعلانية',
    description: 'معدل نجاح وتحقيق الأهداف',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Calendar,
    value: '+12',
    label: 'سنة خبرة',
    description: 'في مجال التسويق الرقمي',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: Building2,
    value: '+60',
    label: 'علامة تجارية',
    description: 'مشاريع منفذة بنجاح',
    color: 'from-emerald-500 to-emerald-600',
  },
];

const highlights = [
  { icon: Zap, text: 'استراتيجيات نمو مبتكرة', color: 'text-amber-500' },
  { icon: BarChart3, text: 'تحليل بيانات دقيق', color: 'text-blue-500' },
  { icon: Target, text: 'تحقيق أهداف قابلة للقياس', color: 'text-purple-500' },
];

export default function Stats() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-blue-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-cyan-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            إنجازاتي
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            أرقام تتحدث عن <span className="gradient-text">النجاح</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
            نتائج ملموسة حققتها على مدار مسيرتي المهنية في مجال التسويق الرقمي
          </p>
        </AnimatedSection>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-10 sm:mb-16">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} delay={index * 0.1} />
          ))}
        </div>

        {/* Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4"
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-2 px-3 sm:px-5 py-2 sm:py-3 bg-gray-50 rounded-full border border-gray-100"
            >
              <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${item.color}`} />
              <span className="text-xs sm:text-sm font-medium text-gray-700">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
