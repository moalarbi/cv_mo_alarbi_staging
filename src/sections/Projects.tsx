import { motion } from 'framer-motion';
import { useState } from 'react';
import { ExternalLink, Award } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  description: string;
  achievements: string[];
  tools: string[];
  color: string;
  icon: string;
  stats: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    id: 'golden-ultra',
    title: 'Golden Ultra',
    subtitle: 'تطبيق خدمة غسيل سيارات متنقل',
    role: 'مدير التسويق الرقمي والإبداعي',
    description: 'تسويق تطبيق لخدمة غسيل السيارات المتنقلة وزيادة قاعدة المستخدمين من خلال استراتيجيات تسويقية متكاملة',
    achievements: [
      'نمو 70% في المتابعين خلال 6 أشهر',
      'تحسين الهوية البصرية على السيارات والدبابات',
      'زيادة العائد الإعلاني بشكل ملحوظ',
      'بناء قاعدة عملاء وفية',
    ],
    tools: ['Meta Ads', 'TikTok', 'Google Ads', 'Adobe Suite', 'Figma'],
    color: 'from-amber-500 to-orange-600',
    icon: '🚗',
    stats: [
      { label: 'نمو المتابعين', value: '70%' },
      { label: 'تحسين العائد', value: '2x' },
    ],
  },
  {
    id: 'batal',
    title: 'BATAL',
    subtitle: 'تطبيق صيانة ونظافة',
    role: 'مدير التسويق والنمو',
    description: 'تسويق تطبيق خدمات الصيانة والنظافة لجذب شرائح مختلفة من العملاء وزيادة معدلات الحجز',
    achievements: [
      'زيادة عدد الحجوزات بشكل مستمر',
      'تحسين الحضور الرقمي الاحترافي',
      'رفع معدل ولاء العملاء',
      'توسيع قاعدة مقدمي الخدمات',
    ],
    tools: ['Snapchat Ads', 'Meta Ads', 'Content Production', 'Branding'],
    color: 'from-blue-500 to-cyan-600',
    icon: '🏠',
    stats: [
      { label: 'زيادة الحجوزات', value: '150%' },
      { label: 'ولاء العملاء', value: '85%' },
    ],
  },
  {
    id: 'emdadat',
    title: 'EMDADAT ALATTA',
    subtitle: 'نمو B2B',
    role: 'مدير التسويق الرقمي والهوية البصرية',
    description: 'بناء محتوى احترافي لخدمات إدارة المرافق والتشغيل في قطاع B2B',
    achievements: [
      'إطلاق حملات B2B ممولة ناجحة',
      'إنتاج محتوى احترافي لرفع الولاء',
      'المشاركة في المؤتمر الدولي لإدارة المرافق',
      'بناء شراكات استراتيجية',
    ],
    tools: ['LinkedIn Ads', 'Video Production', 'Brand Identity', 'Event Marketing'],
    color: 'from-purple-500 to-purple-600',
    icon: '🏢',
    stats: [
      { label: 'حملات ناجحة', value: '12+' },
      { label: 'شراكات', value: '8' },
    ],
  },
  {
    id: 'shiftx',
    title: 'Shift X',
    subtitle: 'وكالة تسويق إلكتروني',
    role: 'مؤسس ومدير الوكالة',
    description: 'تقديم خدمات التسويق الإلكتروني للمتاجر الإلكترونية مع التركيز على تحسين معدلات التحويل',
    achievements: [
      'زيادة عدد العملاء الجدد',
      'تحسين معدلات التحويل للمتاجر',
      'بناء هويات بصرية احترافية',
      'تطوير استراتيجيات نمو مخصصة',
    ],
    tools: ['Shopify', 'WooCommerce', 'Salla', 'Zid', 'Magento', 'Adobe Suite'],
    color: 'from-emerald-500 to-emerald-600',
    icon: '🚀',
    stats: [
      { label: 'عملاء', value: '50+' },
      { label: 'معدل التحويل', value: '3.5%' },
    ],
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsDialogOpen(true)}
        whileHover={{ y: -5 }}
        whileTap={{ scale: 0.98 }}
        className="group relative bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-blue-500/5 border border-blue-100 cursor-pointer"
      >
        {/* Header with Gradient */}
        <div className={`relative h-24 sm:h-28 lg:h-32 bg-gradient-to-br ${project.color} p-4 sm:p-5 lg:p-6 overflow-hidden`}>
          {/* Animated Background Pattern */}
          <motion.div
            animate={{ rotate: isHovered ? 180 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute -right-8 -top-8 w-28 sm:w-32 h-28 sm:h-32 bg-white/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: isHovered ? -180 : 0 }}
            transition={{ duration: 0.5 }}
            className="absolute -left-6 -bottom-6 w-20 sm:w-24 h-20 sm:h-24 bg-white/10 rounded-full"
          />
          
          {/* Icon */}
          <motion.div
            animate={{ scale: isHovered ? 1.15 : 1, rotate: isHovered ? 5 : 0 }}
            className="relative text-3xl sm:text-4xl lg:text-5xl"
          >
            {project.icon}
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 lg:p-6">
          <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-0.5 sm:mb-1 group-hover:text-blue-600 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mb-3 sm:mb-4 line-clamp-1">{project.subtitle}</p>
          
          <div className="flex items-center gap-2 text-xs sm:text-sm text-blue-600 mb-3 sm:mb-4">
            <span className="font-medium line-clamp-1">{project.role}</span>
          </div>

          {/* Stats Preview */}
          <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
            {project.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className={`text-lg sm:text-xl lg:text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Tools Tags */}
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {project.tools.slice(0, 2).map((tool, i) => (
              <span
                key={i}
                className="px-2 py-0.5 sm:py-1 bg-gray-100 text-gray-600 rounded-lg text-[10px] sm:text-xs"
              >
                {tool}
              </span>
            ))}
            {project.tools.length > 2 && (
              <span className="px-2 py-0.5 sm:py-1 bg-blue-100 text-blue-600 rounded-lg text-[10px] sm:text-xs">
                +{project.tools.length - 2}
              </span>
            )}
          </div>
        </div>

        {/* Hover Overlay - Desktop only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="hidden lg:flex absolute inset-0 bg-gradient-to-t from-blue-600/90 to-blue-500/80 items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0 }}
            className="text-center text-white"
          >
            <ExternalLink className="w-8 h-8 mx-auto mb-2" />
            <span className="font-medium">عرض التفاصيل</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Detail Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-lg sm:max-w-2xl max-h-[85vh] overflow-y-auto p-4 sm:p-6">
          <DialogHeader className="space-y-3">
            <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center text-2xl sm:text-3xl`}>
              {project.icon}
            </div>
            <DialogTitle className="text-xl sm:text-2xl font-bold">{project.title}</DialogTitle>
            <DialogDescription className="text-sm sm:text-base text-gray-600">
              {project.subtitle}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 sm:space-y-6 mt-4">
            {/* Role */}
            <div>
              <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-1.5 sm:mb-2">الدور</h4>
              <p className="text-blue-600 font-medium text-sm sm:text-base">{project.role}</p>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-1.5 sm:mb-2">نبذة عن المشروع</h4>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">{project.description}</p>
            </div>

            {/* Stats */}
            <div>
              <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-2 sm:mb-3">الإحصائيات</h4>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                {project.stats.map((stat, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-3 sm:p-4 text-center">
                    <div className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div>
              <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-2 sm:mb-3">أبرز الإنجازات</h4>
              <ul className="space-y-2">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 sm:gap-3">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm sm:text-base">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-xs sm:text-sm font-medium text-gray-500 mb-2 sm:mb-3">التقنيات والأدوات</h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {project.tools.map((tool, i) => (
                  <span
                    key={i}
                    className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-100 text-gray-700 rounded-lg text-xs sm:text-sm font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50/50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/3 left-0 w-32 sm:w-64 h-32 sm:h-64 bg-blue-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-32 sm:w-64 h-32 sm:h-64 bg-cyan-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            أعمالي
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            المشاريع <span className="gradient-text">البارزة</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
            نبذة عن بعض المشاريع التي عملت عليها وحققت فيها نتائج ملموسة
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
