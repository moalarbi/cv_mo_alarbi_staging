import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronLeft } from 'lucide-react';
import { useState } from 'react';
import { AnimatedSection } from '@/components/AnimatedSection';

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  tools: string[];
  type: 'current' | 'previous';
}

const experiences: ExperienceItem[] = [
  {
    title: 'Digital Marketing & Creative Director',
    company: 'مجموعة إمدادات العطاء',
    period: 'يناير 2024 — حتى الآن',
    location: 'الرياض، المملكة العربية السعودية',
    description: [
      'قيادة قسم التسويق الرقمي والإبداعي لصناعة خطط نمو شاملة',
      'الإشراف على إطلاق الحملات لتطبيقات الجوال (Golden Ultra, BATAL)',
      'إدارة ميزانيات الإعلانات عبر: Meta, TikTok, Google, Snapchat',
      'بناء أنظمة داخلية لربط Creative Performance مع KPIs',
      'إدارة وتوجيه فرق متعددة (محتوى، تصميم، تصوير، إعلانات)',
      'الإشراف على جودة ظهور العلامة التجارية بشكل احترافي',
    ],
    tools: ['Meta Ads', 'TikTok Ads', 'Google Ads', 'Snapchat Ads', 'Adobe Suite', 'Figma', 'n8n'],
    type: 'current',
  },
  {
    title: 'Growth & Digital Marketing Consultant',
    company: 'مستقل',
    period: '2016 — 2023',
    location: 'المملكة العربية السعودية',
    description: [
      'تقديم استشارات وإدارة مشاريع تسويق رقمي لأكثر من 60 علامة تجارية',
      'بناء استراتيجيات علامة تجارية وهوية تسويقية',
      'كتابة وإخراج محتوى قصير يحقق مشاهدات عالية',
      'تطوير استراتيجيات عروض Funnels (وتحسين ROI)',
    ],
    tools: ['Meta Ads', 'Google Analytics', 'Shopify', 'WooCommerce', 'Adobe Premiere', 'ChatGPT'],
    type: 'previous',
  },
];

function ExperienceCard({ experience, index }: { experience: ExperienceItem; index: number }) {
  const [isExpanded, setIsExpanded] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="relative"
    >
      {/* Timeline Line - Hidden on mobile */}
      <div className="absolute right-4 sm:right-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-cyan-500 hidden lg:block" />
      
      {/* Timeline Dot - Hidden on mobile */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.15 + 0.2, type: 'spring' }}
        className={`absolute right-2 sm:right-4 top-6 sm:top-8 w-5 sm:w-7 h-5 sm:h-7 rounded-full border-2 sm:border-4 border-white shadow-lg hidden lg:flex items-center justify-center ${
          experience.type === 'current' ? 'bg-blue-500' : 'bg-cyan-500'
        }`}
      >
        <div className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full ${experience.type === 'current' ? 'bg-white animate-pulse' : 'bg-white'}`} />
      </motion.div>

      {/* Card */}
      <motion.div
        whileHover={{ y: -3 }}
        whileTap={{ scale: 0.99 }}
        className={`lg:mr-14 xl:mr-16 bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg shadow-blue-500/5 border border-blue-100 overflow-hidden transition-all duration-300 ${
          isExpanded ? 'ring-2 ring-blue-500/20' : ''
        }`}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="flex items-start gap-3 sm:gap-4">
            <div className={`w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 ${
              experience.type === 'current' 
                ? 'bg-gradient-to-br from-blue-500 to-blue-600' 
                : 'bg-gradient-to-br from-cyan-500 to-cyan-600'
            }`}>
              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1 line-clamp-2">{experience.title}</h3>
              <p className="text-blue-600 font-medium text-sm sm:text-base">{experience.company}</p>
            </div>
          </div>
          
          {experience.type === 'current' && (
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium self-start">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-blue-500 rounded-full animate-pulse" />
              حاليا
            </span>
          )}
        </div>

        {/* Meta Info */}
        <div className="flex flex-wrap gap-2 sm:gap-4 mb-4 sm:mb-6 text-xs sm:text-sm text-gray-500">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span>{experience.period}</span>
          </div>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="line-clamp-1">{experience.location}</span>
          </div>
        </div>

        {/* Description */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : '100px' }}
          className="overflow-hidden"
        >
          <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
            {experience.description.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-2 sm:gap-3"
              >
                <span className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-blue-500 mt-1.5 sm:mt-2 flex-shrink-0" />
                <span className="text-gray-600 leading-relaxed text-sm sm:text-base">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Expand Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-1.5 sm:gap-2 text-blue-600 font-medium text-xs sm:text-sm mb-4 sm:mb-6 hover:text-blue-700 transition-colors"
        >
          <span>{isExpanded ? 'عرض أقل' : 'عرض المزيد'}</span>
          <motion.div
            animate={{ rotate: isExpanded ? -90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </motion.div>
        </button>

        {/* Tools */}
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {experience.tools.map((tool, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-50 hover:text-blue-600 transition-colors"
            >
              {tool}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/4 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-cyan-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            مسيرتي المهنية
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            الخبرات <span className="gradient-text">المهنية</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
            رحلة عمل تمتد لأكثر من 12 عامًا في مجال التسويق الرقمي
          </p>
        </AnimatedSection>

        {/* Experience Cards */}
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
