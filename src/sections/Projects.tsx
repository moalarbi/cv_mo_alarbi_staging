import { TrendingUp } from 'lucide-react';

const projects = [
  {
    name: 'Golden Ultra',
    pill: 'تطبيق خدمة غسيل سيارات متنقل',
    pillColor: 'bg-amber-100 text-amber-700',
    description:
      'تسويق تطبيق لخدمة غسيل السيارات المتنقلة وزيادة قاعدة المستخدمين',
    results: [
      'نمو %70 في المتابعين خلال 6 أشهر',
      'ظهور العلامة التجارية بشكل احترافي من متابعة التصاميم المطبوعة على السيارات والدبابات المخصصة للغسيل ونمو العلامة التجارية وظهور التطبيق بأفضل صورة احترافية من إنتاج محتوى مرئي ومسموع وصوري وتصاميم وإعلانات ونمو العائد الإعلاني',
    ],
  },
  {
    name: 'BATAL',
    pill: 'تطبيق صيانة ونظافة',
    pillColor: 'bg-blue-100 text-blue-700',
    description:
      'تسويق تطبيق خدمات الصيانة والنظافة لجذب شرائح مختلفة من العملاء',
    results: [
      'زيادة عدد الحجوزات بشكل مستمر',
      'التركيز على الإعلانات الممولة + الحضور الرقمي الاحترافي والظهور بشكل احترافي في الميديا والإعلانات والزي الموحد والهوية الموحدة ورفع ولاء العملاء',
    ],
  },
  {
    name: 'EMDADAT ALATTA',
    pill: 'نمو B2B',
    pillColor: 'bg-emerald-100 text-emerald-700',
    description:
      'بناء محتوى احترافي لخدمات إدارة المرافق والتشغيل في قطاع B2B',
    results: [
      'الإشراف على إعلانات ممولة B2B وتصوير محتوى احترافي لرفع الولاء واستدامة العملاء',
      'الإشراف على الهوية البصرية (مطبوعات، أزياء، حضور رقمي) والمشاركة في المؤتمر والمعرض الدولي لإدارة المرافق',
    ],
  },
  {
    name: 'Shift X',
    pill: 'وكالة تسويق إلكتروني',
    pillColor: 'bg-purple-100 text-purple-700',
    description:
      'تقديم خدمات التسويق الإلكتروني للمتاجر الإلكترونية (تجهيز هويات بصرية، إشراف على مطبوعات، إنشاء متاجر، تسويق ومتابعة على منصات سلة، زد، شوبيفاي، ووكمرس، ماجنتو)',
    results: ['زيادة عدد العملاء الجدد وتحسين معدلات التحويل', 'ظهور البراند بشكل احترافي والاشراف على المطبوعات'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            المشاريع البارزة
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            نبذة عن بعض المشاريع التي عملت عليها وحققت فيها نتائج ملموسة
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-soft transition-shadow"
            >
              {/* Pill */}
              <span
                className={`inline-block px-3 py-1.5 text-sm font-medium rounded-full mb-4 ${project.pillColor}`}
              >
                {project.pill}
              </span>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.name}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Results */}
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center gap-2 mb-3">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">
                    النتائج
                  </span>
                </div>
                <ul className="space-y-2">
                  {project.results.map((result, resultIndex) => (
                    <li
                      key={resultIndex}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="w-1 h-1 rounded-full bg-green-500 mt-2 flex-shrink-0"></span>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
