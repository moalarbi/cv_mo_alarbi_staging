import { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const contactInfo = [
  {
    icon: Mail,
    label: 'البريد الإلكتروني',
    value: 'dr.al3rbi@gmail.com',
    href: 'mailto:dr.al3rbi@gmail.com',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Phone,
    label: 'رقم الهاتف',
    value: '+966 53 731 1886',
    href: 'tel:+966537311886',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/moal3rbi',
    href: 'https://linkedin.com/in/moal3rbi',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: MapPin,
    label: 'الموقع',
    value: 'الرياض، المملكة العربية السعودية',
    href: '#',
    color: 'bg-amber-50 text-amber-600',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success('تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            تواصل معي
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            هل لديك مشروع أو فرصة عمل؟ أنا متحمس للسماع منك
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {contactInfo.map((info, index) => (
            <a
              key={index}
              href={info.href}
              target={info.href.startsWith('http') ? '_blank' : undefined}
              rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="bg-white rounded-2xl p-5 shadow-card hover:shadow-soft transition-shadow group"
            >
              <div
                className={`w-12 h-12 rounded-xl ${info.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <info.icon className="w-6 h-6" />
              </div>
              <p className="text-sm text-gray-500 mb-1">{info.label}</p>
              <p className="font-medium text-gray-900">{info.value}</p>
            </a>
          ))}
        </div>

        {/* Availability Box */}
        <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <h3 className="text-xl font-bold text-white">متاح للعمل</h3>
          </div>
          <p className="text-gray-300 leading-relaxed">
            أنا حاليًا أبحث عن فرص جديدة في مجال التسويق الرقمي والنمو. إذا كنت
            تبحث عن شخص يمكنه قيادة استراتيجيات النمو لديك، فأنا هنا للمساعدة.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-card">
          <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
            <Send className="w-5 h-5" />
            أرسل رسالة
          </h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">الاسم</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="أدخل اسمك"
                  className="rounded-xl"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="أدخل بريدك الإلكتروني"
                  className="rounded-xl"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">الموضوع</Label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="موضوع الرسالة"
                className="rounded-xl"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">الرسالة</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="اكتب رسالتك هنا..."
                rows={5}
                className="rounded-xl resize-none"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white rounded-xl py-6 text-base font-medium"
            >
              {isSubmitting ? (
                'جاري الإرسال...'
              ) : (
                <>
                  إرسال الرسالة
                  <Send className="w-4 h-4 mr-2" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
