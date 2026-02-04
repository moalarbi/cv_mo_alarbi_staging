import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react';
import { AnimatedSection } from '@/components/AnimatedSection';

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  status: string;
  icon: string;
  color: string;
}

interface Certificate {
  name: string;
  issuer: string;
  year: string;
}

const education: EducationItem[] = [
  {
    degree: 'ماجستير إدارة الأعمال (MBA)',
    institution: 'Midocean University',
    period: 'قيد الدراسة',
    location: 'أونلاين',
    status: 'جاري',
    icon: '🎓',
    color: 'from-blue-500 to-blue-600',
  },
  {
    degree: 'بكالوريوس التسويق الرقمي',
    institution: 'Midocean University',
    period: '2022 — 2026',
    location: 'أونلاين',
    status: 'قيد الدراسة',
    icon: '📚',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    degree: 'ليسانس آداب قسم إعلام',
    institution: 'جامعة طنطا، مصر',
    period: '2015 — 2019',
    location: 'طنطا، مصر',
    status: 'مكتمل',
    icon: '📰',
    color: 'from-purple-500 to-purple-600',
  },
];

const certificates: Certificate[] = [
  { name: 'Google Ads Certification', issuer: 'Google', year: '2023' },
  { name: 'Meta Blueprint Certification', issuer: 'Meta', year: '2022' },
  { name: 'HubSpot Content Marketing', issuer: 'HubSpot', year: '2022' },
  { name: 'Google Analytics Certification', issuer: 'Google', year: '2021' },
];

function EducationCard({ item, index }: { item: EducationItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.99 }}
      className="group relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-lg shadow-blue-500/5 border border-blue-100 overflow-hidden"
    >
      {/* Gradient Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
      
      <div className="flex items-start gap-3 sm:gap-4">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 5, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-lg`}
        >
          <span className="text-xl sm:text-2xl lg:text-3xl">{item.icon}</span>
        </motion.div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1.5 sm:mb-2">
            <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
              {item.degree}
            </h3>
            <span className={`px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium flex-shrink-0 ${
              item.status === 'مكتمل' 
                ? 'bg-emerald-100 text-emerald-700' 
                : 'bg-blue-100 text-blue-700'
            }`}>
              {item.status}
            </span>
          </div>

          <p className="text-blue-600 font-medium text-xs sm:text-sm lg:text-base mb-2 sm:mb-3">{item.institution}</p>

          <div className="flex flex-wrap gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500">
            <div className="flex items-center gap-1 sm:gap-1.5">
              <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>{item.period}</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="line-clamp-1">{item.location}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className={`absolute -bottom-4 -left-4 w-16 sm:w-24 h-16 sm:h-24 bg-gradient-to-br ${item.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`} />
    </motion.div>
  );
}

export default function Education() {
  return (
    <section id="education" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-blue-100/30 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-cyan-100/30 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            تعليمي
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            التعليم <span className="gradient-text">والشهادات</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
            مؤهلاتي الأكاديمية والشهادات الاحترافية في مجال التسويق الرقمي
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Education Column */}
          <div className="lg:col-span-2">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
              التعليم
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {education.map((item, index) => (
                <EducationCard key={index} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Certificates Column */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <Award className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-500" />
              الشهادات
            </h3>
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-blue-100">
              <div className="space-y-3 sm:space-y-4">
                {certificates.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: -3 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                      <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-900 text-xs sm:text-sm line-clamp-1">{cert.name}</h4>
                      <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs text-gray-500 mt-0.5">
                        <span>{cert.issuer}</span>
                        <span className="w-1 h-1 rounded-full bg-gray-300" />
                        <span>{cert.year}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-500/10 rounded-xl sm:rounded-2xl text-center"
              >
                <p className="text-xs sm:text-sm text-blue-700">
                  +10 شهادات احترافية أخرى في مجالات التسويق الرقمي المختلفة
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
