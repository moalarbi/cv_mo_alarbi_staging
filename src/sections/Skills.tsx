import {
  TrendingUp,
  Target,
  Smartphone,
  Filter,
  FileText,
  BarChart3,
  Users,
  Bot,
} from 'lucide-react';

const skillCategories = [
  {
    icon: TrendingUp,
    title: 'Brand Growth Strategy',
    chips: ['Retention', 'Conversion', 'Consideration', 'Awareness'],
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Target,
    title: 'Performance Marketing',
    chips: ['Snapchat Ads', 'Google Ads', 'TikTok Ads', 'Meta Ads'],
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Smartphone,
    title: 'App Marketing',
    chips: ['App Installs', 'ASO', 'Retention', 'User Acquisition'],
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Filter,
    title: 'Funnel Optimization',
    chips: ['Conversion Rate', 'Landing Pages', 'Offer Strategy', 'A/B Testing'],
    color: 'bg-amber-50 text-amber-600',
  },
  {
    icon: FileText,
    title: 'Content Systems',
    chips: ['UGC', 'Creative Pipeline', 'Content Calendar', 'Short-form Video'],
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Reporting',
    chips: ['Data Analysis', 'Insights', 'KPIs', 'Dashboards'],
    color: 'bg-cyan-50 text-cyan-600',
  },
  {
    icon: Users,
    title: 'Team Management',
    chips: ['Media Buying', 'Content Teams', 'Design Teams', 'Production'],
    color: 'bg-indigo-50 text-indigo-600',
  },
  {
    icon: Bot,
    title: 'AI Tools & Automation',
    chips: ['n8n/Zapier', 'Midjourney', 'ChatGPT', 'Prompt Engineering'],
    color: 'bg-violet-50 text-violet-600',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            المهارات الأساسية
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            مجموعة متكاملة من المهارات التقنية والاستراتيجية في مجال التسويق الرقمي
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-card hover:shadow-soft transition-shadow"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-xl ${category.color} flex items-center justify-center mb-4`}
              >
                <category.icon className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {category.title}
              </h3>

              {/* Chips */}
              <div className="flex flex-wrap gap-2">
                {category.chips.map((chip, chipIndex) => (
                  <span
                    key={chipIndex}
                    className="px-3 py-1.5 bg-gray-100 text-gray-600 text-sm rounded-lg"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
