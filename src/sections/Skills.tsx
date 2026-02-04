import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  TrendingUp, Target, Smartphone, Funnel, 
  FileText, BarChart3, Users, Bot,
  Megaphone, ShoppingCart, Palette, Video
} from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

interface SkillCategory {
  title: string;
  icon: React.ElementType;
  color: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: 'استراتيجيات نمو العلامة التجارية',
    icon: TrendingUp,
    color: 'from-blue-500 to-blue-600',
    skills: ['ولاء العملاء', 'زيادة التحويل', 'الوعي بالعلامة التجارية', 'رحلة العميل'],
  },
  {
    title: 'التسويق بالأداء والنتائج',
    icon: Target,
    color: 'from-cyan-500 to-cyan-600',
    skills: ['إعلانات ميتا', 'إعلانات تيك توك', 'إعلانات جوجل', 'إعلانات سناب شات', 'تسويق تطبيقات الجوال'],
  },
  {
    title: 'الاستحواذ على العملاء',
    icon: Smartphone,
    color: 'from-purple-500 to-purple-600',
    skills: ['زيادة التحميلات', 'تحسين متجر التطبيقات ASO', 'الاحتفاظ بالمستخدمين'],
  },
  {
    title: 'تحسين قمع المبيعات',
    icon: Funnel,
    color: 'from-emerald-500 to-emerald-600',
    skills: ['معدل التحويل CRO', 'صفحات الهبوط', 'استراتيجيات العروض', 'اختبارات A/B Testing'],
  },
  {
    title: 'أنظمة صناعة المحتوى',
    icon: FileText,
    color: 'from-amber-500 to-amber-600',
    skills: ['محتوى المستخدم UGC', 'إدارة الإنتاج الإبداعي', 'التقويم المحتوي', 'الفيديوهات القصيرة'],
  },
  {
    title: 'التحليل والتقارير الرقمية',
    icon: BarChart3,
    color: 'from-rose-500 to-rose-600',
    skills: ['تحليل البيانات', 'استخراج الرؤى', 'مؤشرات الأداء KPIs', 'لوحات البيانات'],
  },
  {
    title: 'إدارة الفرق والعمليات',
    icon: Users,
    color: 'from-indigo-500 to-indigo-600',
    skills: ['شراء المساحات الإعلانية', 'إدارة فرق المحتوى', 'إدارة فرق التصميم', 'إدارة الإنتاج'],
  },
  {
    title: 'أدوات الذكاء الاصطناعي والأتمتة',
    icon: Bot,
    color: 'from-teal-500 to-teal-600',
    skills: ['أتمتة العمليات (n8n/Zapier)', 'توليد الصور بالذكاء الاصطناعي', 'ChatGPT', 'هندسة الأوامر Prompting'],
  },
];

function SkillCard({ category, index }: { category: SkillCategory; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const Icon = category.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg shadow-blue-500/5 border border-blue-100 overflow-hidden"
    >
      {/* Gradient Background on Hover */}
      <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      {/* Icon */}
      <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 sm:mb-5 shadow-lg group-hover:shadow-xl transition-shadow`}>
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
      </div>

      {/* Title */}
      <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors line-clamp-2">
        {category.title}
      </h3>

      {/* Skills */}
      <div className="flex flex-wrap gap-1 sm:gap-2">
        {category.skills.map((skill, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: index * 0.08 + i * 0.04 + 0.15 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-50 text-gray-600 rounded-lg text-xs sm:text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            {skill}
          </motion.span>
        ))}
      </div>

      {/* Decorative Element */}
      <div className={`absolute -bottom-6 -right-6 w-20 sm:w-32 h-20 sm:h-32 bg-gradient-to-br ${category.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
    </motion.div>
  );
}

const tools = [
  { name: 'Meta Ads', icon: Megaphone, color: 'text-blue-600' },
  { name: 'Google Ads', icon: Target, color: 'text-red-500' },
  { name: 'TikTok Ads', icon: Video, color: 'text-cyan-600' },
  { name: 'Snapchat Ads', icon: Smartphone, color: 'text-yellow-500' },
  { name: 'Shopify', icon: ShoppingCart, color: 'text-emerald-600' },
  { name: 'Adobe Suite', icon: Palette, color: 'text-purple-600' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[90%] sm:w-[800px] h-[200px] sm:h-[400px] bg-gradient-to-b from-blue-100/30 to-transparent rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            ما أتميز به
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            المهارات <span className="gradient-text">الأساسية</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
            مجموعة متكاملة من المهارات التقنية والاستراتيجية في مجال التسويق الرقمي
          </p>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-10 sm:mb-16">
          {skillCategories.map((category, index) => (
            <SkillCard key={index} category={category} index={index} />
          ))}
        </div>

        {/* Tools Section */}
        <AnimatedSection delay={0.3} className="text-center">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-6 sm:mb-8">الأدوات التي أستخدمها</h3>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-3 bg-white rounded-xl sm:rounded-2xl shadow-lg shadow-blue-500/5 border border-blue-100"
              >
                <tool.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${tool.color}`} />
                <span className="font-medium text-gray-700 text-sm sm:text-base">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
