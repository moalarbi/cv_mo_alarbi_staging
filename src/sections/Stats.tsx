import { TrendingUp, Calendar, Building2, Target } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '70%',
    label: 'نمو العلامات التجارية',
    description: 'متوسط نمو العلامات التي عملت معها',
    color: 'bg-blue-500/30 text-blue-300',
    borderColor: 'border-blue-500/30',
  },
  {
    icon: Target,
    value: '80%',
    label: 'نجاح الحملات الاعلانية',
    description: 'معدل نجاح وتحقيق الأهداف',
    color: 'bg-cyan-500/30 text-cyan-300',
    borderColor: 'border-cyan-500/30',
  },
  {
    icon: Calendar,
    value: '+12',
    label: 'سنة خبرة',
    description: 'في مجال التسويق الرقمي',
    color: 'bg-purple-500/30 text-purple-300',
    borderColor: 'border-purple-500/30',
  },
  {
    icon: Building2,
    value: '+60',
    label: 'علامة تجارية',
    description: 'مشاريع منفذة بنجاح',
    color: 'bg-emerald-500/30 text-emerald-300',
    borderColor: 'border-emerald-500/30',
  },
];

export default function Stats() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`bg-slate-800/50 backdrop-blur-md rounded-2xl p-6 border ${stat.borderColor} hover:bg-slate-800/80 hover:border-blue-400/50 transition-all shadow-lg hover:shadow-blue-500/20`}
            >
              <div
                className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center mb-4`}
              >
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-blue-300 mb-1">{stat.label}</div>
              <div className="text-xs text-blue-200/60">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
