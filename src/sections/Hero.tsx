import { ArrowLeft, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-600/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Availability Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-md rounded-full shadow-lg border border-blue-400/30 hover:border-blue-400/50 transition-all">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-400"></span>
            </span>
            <span className="text-sm font-medium text-blue-200">متاح للعمل</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-blue-200 via-blue-100 to-cyan-200 bg-clip-text text-transparent mb-3">
          محمد العربي
        </h1>

        {/* Title */}
        <p className="text-xl sm:text-2xl text-center text-blue-300 mb-4">
          Digital Marketing & Creative Director
        </p>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-center text-blue-200/80 max-w-2xl mx-auto mb-8 leading-relaxed">
          قائد تسويق رقمي بخبرة +12 عام في بناء استراتيجيات نمو العلامات التجارية وتحقيق نتائج ملموسة في السوق السعودي
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => handleScroll('#contact')}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-full px-8 py-6 text-base font-medium flex items-center gap-2 group shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            تواصل معي
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          </Button>
          <Button
            onClick={() => window.open('/cv_mo_alarbi/cv.pdf', '_blank')}
            className="bg-white/10 hover:bg-white/20 text-white rounded-full px-8 py-6 text-base font-medium border border-white/30 hover:border-white/50 flex items-center gap-2 backdrop-blur-md transition-all"
          >
            <Download className="w-4 h-4" />
            تحميل السيرة PDF
          </Button>
        </div>
      </div>
    </section>
  );
}
