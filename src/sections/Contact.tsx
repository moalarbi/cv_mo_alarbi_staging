import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Mail, Phone, MessageCircle, Linkedin, 
  Send, Sparkles 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { AnimatedSection } from '@/components/AnimatedSection';
import { toast } from 'sonner';

interface ContactMethod {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
  color: string;
  bgColor: string;
}

const contactMethods: ContactMethod[] = [
  {
    icon: Mail,
    label: 'البريد الإلكتروني',
    value: 'dr.al3rbi@gmail.com',
    href: 'mailto:dr.al3rbi@gmail.com',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    icon: Phone,
    label: 'رقم الهاتف',
    value: '+966 53 731 1886',
    href: 'tel:+966537311886',
    color: 'text-cyan-600',
    bgColor: 'bg-cyan-100',
  },
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: '+966 53 731 1886',
    href: 'https://wa.me/966537311886',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/moal3rbi',
    href: 'https://linkedin.com/in/moal3rbi',
    color: 'text-blue-700',
    bgColor: 'bg-blue-100',
  },
];

function ContactCard({ method, index }: { method: ContactMethod; index: number }) {
  return (
    <motion.a
      href={method.href}
      target={method.href.startsWith('http') ? '_blank' : undefined}
      rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -3, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="group flex items-center gap-3 sm:gap-4 p-4 sm:p-5 bg-white rounded-xl sm:rounded-2xl shadow-lg shadow-blue-500/5 border border-blue-100 hover:border-blue-300 transition-all"
    >
      <div className={`w-11 h-11 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl sm:rounded-2xl ${method.bgColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
        <method.icon className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 ${method.color}`} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs sm:text-sm text-gray-500 mb-0.5">{method.label}</p>
        <p className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors text-sm sm:text-base truncate">
          {method.value}
        </p>
      </div>
    </motion.a>
  );
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast.success('تم إرسال رسالتك بنجاح! سأتواصل معك قريباً.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50/50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-32 sm:w-96 h-32 sm:h-96 bg-blue-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-32 sm:w-96 h-32 sm:h-96 bg-cyan-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
            تواصل معي
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            هل لديك مشروع أو <span className="gradient-text">فرصة عمل؟</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl sm:max-w-2xl mx-auto">
            أنا متاح للتواصل عبر القنوات التالية. لا تتردد في التواصل معي
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Methods */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">طرق التواصل</h3>
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {contactMethods.map((method, index) => (
                <ContactCard key={index} method={method} index={index} />
              ))}
            </div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl sm:rounded-3xl p-4 sm:p-6 text-white"
            >
              <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base">متاح للعمل</h4>
                  <p className="text-xs sm:text-sm text-white/80">أبحث عن فرص جديدة</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                أنا حالياً أبحث عن فرص جديدة في مجال التسويق الرقمي والنمو. 
                إذا كنت تبحث عن شخص يمكنه قيادة استراتيجيات النمو لديك، فأنا هنا للمساعدة.
              </p>
            </motion.div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">أرسل لي رسالة</h3>
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-lg shadow-blue-500/5 border border-blue-100"
            >
              <div className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      الاسم
                    </label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="اسمك الكريم"
                      required
                      className="rounded-lg sm:rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base h-10 sm:h-11"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      البريد الإلكتروني
                    </label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="rounded-lg sm:rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base h-10 sm:h-11"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    الموضوع
                  </label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="موضوع الرسالة"
                    required
                    className="rounded-lg sm:rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 text-sm sm:text-base h-10 sm:h-11"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    الرسالة
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="اكتب رسالتك هنا..."
                    required
                    rows={4}
                    className="rounded-lg sm:rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500 resize-none text-sm sm:text-base"
                  />
                </div>

                <motion.div
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-5 sm:py-6 rounded-xl sm:rounded-2xl text-sm sm:text-base font-medium shadow-lg shadow-blue-500/30"
                  >
                    {isSubmitting ? (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
                        إرسال الرسالة
                      </>
                    )}
                  </Button>
                </motion.div>
              </div>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}
