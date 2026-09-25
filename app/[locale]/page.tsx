'use client';

import { useState, useEffect, use } from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { 
  ShieldCheck, 
  Activity, 
  ClipboardCheck, 
  Cpu, 
  SearchCode, 
  GraduationCap,
  Users, 
  Wrench, 
  Globe, 
  Award,
  Layers,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2
} from 'lucide-react';

interface HomePageProps {
  params: Promise<{
    locale: string;
  }>;
}

export default function HomePage({ params }: HomePageProps) {
  const resolvedParams = use(params);
  const locale = resolvedParams.locale;
  const isArabic = locale === 'ar';

  // لوحة التحكم الإدارية البرمجية (لإظهار/إخفاء قسم الخدمات)
  const adminSettings = {
    showServicesSection: false, 
  };

  // خلفيات الهيرو المتحركة بسلاسة
  const heroImages = [
    '/hero-bg.jpg', 
    '/hero-bg-2.jpg', 
  ];
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  // ميزات المنصة الـ 4 الأساسية
  const features = [
    {
      icon: <Users size={26} className="text-[#D9A62E]" />,
      titleEn: "Expert Instructors",
      titleAr: "خبراء متخصصون",
      descEn: "Learn from industry professionals",
      descAr: "تعلم من نخبة من محترفي الصناعة"
    },
    {
      icon: <Wrench size={26} className="text-[#D9A62E]" />,
      titleEn: "Practical Training",
      titleAr: "تدريب عملي",
      descEn: "Hands-on experience with real-world applications",
      descAr: "خبرة عملية تطبيقية مع حالات واقعية"
    },
    {
      icon: <Globe size={26} className="text-[#D9A62E]" />,
      titleEn: "Global Standards",
      titleAr: "معايير عالمية",
      descEn: "Courses aligned with international standards",
      descAr: "دورات متوافقة مع أحدث المعايير الدولية"
    },
    {
      icon: <Award size={26} className="text-[#D9A62E]" />,
      titleEn: "Certification",
      titleAr: "شهادات معتمدة",
      descEn: "Earn recognized certificates",
      descAr: "احصل على شهادات معتمدة ومعترف بها"
    }
  ];

  // قائمة الدورات كاملة
  const [coursesList, setCoursesList] = useState([
    {
      titleAr: 'مفهوم وتعريفات MLE',
      titleEn: 'MLE Concepts & Definition',
      descAr: 'تغطية شاملة لفهم تقدير الإمكانية الأعظم (MLE) رياضياً وهندسياً في أنظمة التعلم الآلي.',
      descEn: 'Comprehensive coverage of Maximum Likelihood Estimation mathematically and in ML engineering.',
      categoryAr: 'إحصاء وأنظمة',
      categoryEn: 'Statistics & Systems',
      slug: 'vibration/mle',
      available: true,
      image: '/courses/mle.jpeg',
      duration: isArabic ? '3 أيام' : '3 Days',
      level: isArabic ? 'متقدم' : 'Advanced',
    },
    {
      titleAr: 'تحليل الاهتزازات المتقدم',
      titleEn: 'Advanced Vibration Analysis',
      descAr: 'تحليل الطيف الترددي، كشف الأعطال المبكرة في المحامل (Bearings) والسيور للآلات الدوارة.',
      descEn: 'Spectrum analysis, early fault detection in bearings and rotating machinery.',
      categoryAr: 'مراقبة الحالة',
      categoryEn: 'Condition Monitoring',
      slug: 'vibration/vibration-analysis-cat-ii',
      available: true,
      image: '/courses/vibration-analysis-2.jpeg',
      duration: isArabic ? '5 أيام' : '5 Days',
      level: isArabic ? 'متوسط' : 'Intermediate',
    },
    {
      titleAr: 'الصيانة المعتمدة على الموثوقية (RCM)',
      titleEn: 'Reliability Centered Maintenance',
      descAr: 'استراتيجيات تخطيط الصيانة المتقدمة وتقليل الأعطال غير المخططة للأصول الصناعية.',
      descEn: 'Advanced maintenance planning strategies and reducing unplanned downtime for industrial assets.',
      categoryAr: 'هندسة الموثوقية',
      categoryEn: 'Reliability Engineering',
      slug: 'reliability/rcm',
      available: true,
      image: '/courses/rcm.jpeg',
      duration: isArabic ? '3 أيام' : '3 Days',
      level: isArabic ? 'متوسط' : 'Intermediate',
    },
    {
      titleAr: 'تحليل السبب الجذري (RCA)',
      titleEn: 'Root Cause Analysis',
      descAr: 'المنهجيات الهندسية الحديثة للتحقيق في الأعطال ومنع تكرارها بشكل جذري.',
      descEn: 'Modern engineering methodologies to investigate failures and prevent their recurrence.',
      categoryAr: 'تحليل الأعطال',
      categoryEn: 'Failure Analysis',
      slug: 'reliability/rca',
      available: true, 
      image: '/courses/rca..jpeg',
      duration: isArabic ? '3 أيام' : '3 Days',
      level: isArabic ? 'مبتدئ' : 'Beginner',
    },
    {
      titleAr: 'تحليل أنماط الفشل وآثاره (FMEA)',
      titleEn: 'FMEA Analysis',
      descAr: 'تقييم المخاطر الهندسية وتحديد نقاط الضعف في التصاميم والعمليات التشغيلية.',
      descEn: 'Engineering risk assessment and identifying vulnerabilities in designs and operations.',
      categoryAr: 'إدارة المخاطر',
      categoryEn: 'Risk Management',
      slug: 'reliability/fmea',
      available: true, 
      image: '/courses/fmea.jpeg',
      duration: isArabic ? '4 أيام' : '4 Days',
      level: isArabic ? 'متقدم' : 'Advanced',
    },
  ]);

  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCoursesList(prev => [...prev].sort(() => 0.5 - Math.random()));
        setIsFading(false);
      }, 400);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // الخدمات الهندسية الست الأساسية
  const services = [
    {
      title: isArabic ? 'استشارات الموثوقية' : 'Reliability Consulting',
      description: isArabic ? 'تحسين الموثوقية وأداء الأصول الصناعية.' : 'Improving reliability and asset performance.',
      icon: <ShieldCheck className="w-6 h-6 text-[#D9A62E]" />,
      slug: 'consulting',
    },
    {
      title: isArabic ? 'مراقبة الحالة' : 'Condition Monitoring',
      description: isArabic ? 'تقنيات متقدمة للصيانة التنبؤية.' : 'Advanced techniques for predictive maintenance.',
      icon: <Activity className="w-6 h-6 text-[#D9A62E]" />,
      slug: 'condition-monitoring',
    },
    {
      title: isArabic ? 'تدقيق الموثوقية' : 'Reliability Audit',
      description: isArabic ? 'تقييمات لتحسين نظم الصيانة.' : 'Assessments to improve maintenance systems.',
      icon: <ClipboardCheck className="w-6 h-6 text-[#D9A62E]" />,
      slug: 'audit',
    },
    {
      title: isArabic ? 'تحليل RCM' : 'RCM Analysis',
      description: isArabic ? 'دراسات الصيانة المرتكزة على الموثوقية.' : 'Reliability Centered Maintenance studies.',
      icon: <Cpu className="w-6 h-6 text-[#D9A62E]" />,
      slug: 'rcm',
    },
    {
      title: isArabic ? 'تحليل الأعطال' : 'Failure Analysis',
      description: isArabic ? 'تحليل الأسباب الجذرية والتحقيق في الأعطال.' : 'Root cause analysis and failure investigation.',
      icon: <SearchCode className="w-6 h-6 text-[#D9A62E]" />,
      slug: 'failure-analysis',
    },
    {
      title: isArabic ? 'التدريب والتطوير' : 'Training & Development',
      description: isArabic ? 'حلول تدريبية مخصصة لفريقك.' : 'Custom training solutions for your team.',
      icon: <GraduationCap className="w-6 h-6 text-[#D9A62E]" />,
      slug: 'training-development',
    },
  ];

  return (
    <main className="min-h-screen bg-[#0B1628] text-white w-full overflow-x-hidden" dir={isArabic ? 'rtl' : 'ltr'}>
      
      {/* 1. قسم البطل (Hero Section) */}
      <section className="relative text-white py-24 md:py-32 px-6 md:px-12 bg-[#0B1628] min-h-[85vh] flex flex-col justify-between">
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden">
          {heroImages.map((img, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                currentBg === idx ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
              } transition-transform duration-1000`}
            >
              <Image
                src={img}
                alt="Hero Background"
                fill
                sizes="100vw"
                priority={idx === 0}
                className="object-cover object-center w-full h-full"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1628]/95 via-[#0B1628]/85 to-[#0B1628]/50 z-10" />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-20 my-auto py-8 space-y-6">
          <div className="inline-flex items-center gap-2 bg-[#D9A62E]/20 text-[#D9A62E] text-sm font-bold px-4 py-2 rounded-xl border border-[#D9A62E]/30 backdrop-blur-md">
            <Sparkles className="w-4 h-4" />
            {isArabic ? 'منصة ReliNova للتعلم المتقدم وهندسة الموثوقية' : 'ReliNova Advanced Learning Platform'}
          </div>

          <div className="max-w-3xl space-y-6">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-lg">
              {isArabic ? (
                <>تقاطع هندسة الموثوقية مع <span className="text-[#D9A62E]">الأنظمة الهندسية.</span></>
              ) : (
                <>Empowering <span className="text-[#D9A62E]">Reliability.</span> Driving <span className="text-[#D9A62E]">Performance.</span></>
              )}
            </h1>
            <p className="text-[#B8C2D1] text-lg md:text-2xl leading-relaxed drop-shadow-md max-w-2xl font-medium">
              {isArabic 
                ? 'منصتك الاحترافية لاستكشاف دورات متقدمة في تحليل الاهتزازات، الصيانة المرتكزة على الموثوقية، وهندسة النظم والبيانات.'
                : 'World-class training and consulting in Reliability Engineering, Condition Monitoring, and Asset Management.'
              }
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="/courses"
                className="bg-[#D9A62E] hover:bg-[#F2C75C] text-[#0B1628] font-bold text-base px-8 py-4 rounded-xl shadow-xl transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                {isArabic ? 'دورات المنصة' : 'Explore Courses'}
                {isArabic ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
              </Link>
              
              <Link
                href="/services"
                className="border border-[#D9A62E] bg-black/40 backdrop-blur-md text-[#D9A62E] hover:bg-[#D9A62E]/10 font-bold text-base px-8 py-4 rounded-xl transition-all shadow-lg cursor-pointer"
              >
                {isArabic ? 'استشارات هندسية' : 'Our Services'}
              </Link>

              <Link
                href="/contact"
                className="border border-white/20 bg-black/40 backdrop-blur-md text-white hover:bg-white/10 font-bold text-base px-8 py-4 rounded-xl transition-all shadow-lg cursor-pointer"
              >
                {isArabic ? 'تواصل معنا' : 'Contact Us'}
              </Link>
            </div>
          </div>
        </div>

        {/* قسم المميزات الـ 4 */}
        <div className="max-w-7xl mx-auto w-full pt-12 border-t border-white/20 relative z-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-[#142238]/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/10 space-y-4 hover:border-[#D9A62E]/50 transition-all group"
              >
                <div className="w-12 h-12 bg-[#0B1628] rounded-xl flex items-center justify-center border border-white/10 group-hover:bg-[#D9A62E] group-hover:text-[#0B1628] transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#D9A62E]">
                  {isArabic ? feature.titleAr : feature.titleEn}
                </h3>
                <p className="text-gray-300 text-sm md:text-base font-medium leading-relaxed">
                  {isArabic ? feature.descAr : feature.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. قسم الأقسام الرئيسية للمنصة */}
      <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white flex items-center gap-3">
            <Layers className="w-7 h-7 text-[#D9A62E]" />
            {isArabic ? 'أقسام المنصة الرئيسية' : 'Platform Main Categories'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 space-y-4 hover:border-[#D9A62E]/50 transition-all">
            <div className="w-14 h-14 rounded-xl bg-[#D9A62E]/10 flex items-center justify-center text-[#D9A62E]">
              <Wrench className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">
              {isArabic ? 'هندسة الموثوقية والصيانة' : 'Reliability & Maintenance'}
            </h3>
            <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed font-medium">
              {isArabic 
                ? 'دراسة استراتيجيات الصيانة، مراقبة الحالة، التحليل الاهتزازي، وإدارة الأصول الصناعية.'
                : 'Study maintenance strategies, condition monitoring, vibration analysis, and asset management.'
              }
            </p>
          </div>

          <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 space-y-4 hover:border-[#D9A62E]/50 transition-all">
            <div className="w-14 h-14 rounded-xl bg-[#D9A62E]/10 flex items-center justify-center text-[#D9A62E]">
              <Cpu className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">
              {isArabic ? 'هندسة النظم المتقدمة' : 'Advanced Systems Engineering'}
            </h3>
            <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed font-medium">
              {isArabic 
                ? 'تطبيقات النماذج الإحصائية، تقدير الإمكانية الأعظم (MLE)، وهندسة النظم للإنتاج.'
                : 'Statistical model applications, Maximum Likelihood Estimation (MLE), and production systems engineering.'
              }
            </p>
          </div>

          <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 space-y-4 hover:border-[#D9A62E]/50 transition-all">
            <div className="w-14 h-14 rounded-xl bg-[#D9A62E]/10 flex items-center justify-center text-[#D9A62E]">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-white">
              {isArabic ? 'هندسة البرمجيات والويب' : 'Software & Web Engineering'}
            </h3>
            <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed font-medium">
              {isArabic 
                ? 'بناء وتطوير تطبيقات الويب الحديثة باستخدام Next.js، TypeScript، وأحدث التقنيات البرمجية.'
                : 'Building modern web apps using Next.js, TypeScript, and modern engineering practices.'
              }
            </p>
          </div>
        </div>
      </section>

      {/* 3. قسم الدورات التدريبية */}
      <section className="py-16 px-6 md:px-12 bg-[#142238]/60 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 gap-4 border-b border-white/10 pb-6">
            <div>
              <span className="text-[#D9A62E] font-bold text-sm uppercase tracking-wider">OUR TRAINING</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">
                {isArabic ? 'الدورات التدريبية المميزة' : 'Popular Courses'}
              </h2>
            </div>
          </div>

          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 transition-all duration-500 transform ${isFading ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'}`}>
            {coursesList.map((course, idx) => (
              <div key={idx}>
                {course.available ? (
                  <Link 
                    href={`/courses/${course.slug}`}
                    className="rounded-2xl p-4 flex flex-col justify-between shadow-xl transition-all group block cursor-pointer bg-[#1B2D46] border border-white/10 hover:border-[#D9A62E] hover:-translate-y-1 h-full"
                  >
                    <div>
                      <div className="h-32 bg-slate-800 rounded-xl mb-3 relative overflow-hidden">
                        <Image
                          src={course.image}
                          alt={isArabic ? course.titleAr : course.titleEn}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-2 right-2 z-10">
                          <span className="inline-flex items-center gap-1 bg-emerald-500/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-lg shadow backdrop-blur-md">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            {isArabic ? 'متاحة' : 'Available'}
                          </span>
                        </div>
                      </div>

                      <div className="inline-block text-xs px-2 py-0.5 rounded bg-[#0B1628] text-[#D9A62E] mb-2 border border-white/5 font-medium">
                        {isArabic ? course.categoryAr : course.categoryEn}
                      </div>

                      <h3 className="font-bold text-base mb-1 line-clamp-2 text-white group-hover:text-[#F2C75C]">
                        {isArabic ? course.titleAr : course.titleEn}
                      </h3>

                      <p className="text-[#B8C2D1] text-xs mb-3 font-medium">
                        {course.duration} • {course.level}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 text-xs text-[#D9A62E] font-bold group-hover:underline">
                        {isArabic ? 'استعراض المحتوى' : 'View Content'}
                        {isArabic ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                      </span>
                    </div>
                  </Link>
                ) : (
                  <div className="rounded-2xl p-4 flex flex-col justify-between shadow-xl transition-all group block bg-[#1B2D46]/60 border border-white/10 border-dashed hover:border-white/30 hover:-translate-y-1 h-full">
                    <div>
                      <div className="h-32 bg-slate-800 rounded-xl mb-3 relative overflow-hidden">
                        <Image
                          src={course.image}
                          alt={isArabic ? course.titleAr : course.titleEn}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-2 right-2 z-10">
                          <span className="inline-flex items-center gap-1 bg-amber-500/90 text-[#0B1628] text-[11px] font-extrabold px-2.5 py-1 rounded-lg shadow backdrop-blur-md">
                            {isArabic ? 'قريباً' : 'Coming Soon'}
                          </span>
                        </div>
                      </div>

                      <div className="inline-block text-xs px-2 py-0.5 rounded bg-[#0B1628] text-[#D9A62E] mb-2 border border-white/5 font-medium">
                        {isArabic ? course.categoryAr : course.categoryEn}
                      </div>

                      <h3 className="font-bold text-base mb-1 line-clamp-2 text-white/90">
                        {isArabic ? course.titleAr : course.titleEn}
                      </h3>

                      <p className="text-[#B8C2D1] text-xs mb-3 font-medium">
                        {course.duration} • {course.level}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-white/15 flex items-center justify-between">
                      <span className="inline-flex items-center gap-1 text-xs text-amber-400 font-semibold">
                        {isArabic ? 'قريباً جداً' : 'Coming Soon'}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 bg-[#1B2D46] border border-[#D9A62E]/40 hover:bg-[#D9A62E] hover:text-[#0B1628] text-[#D9A62E] font-bold px-8 py-4 rounded-xl transition-all text-base cursor-pointer shadow-md"
            >
              {isArabic ? 'عرض كافة الدورات التدريبية' : 'View All Training Courses'}
              {isArabic ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </Link>
          </div>

        </div>
      </section>

      {/* 4. قسم الخدمات الهندسية (يظهر أو يختفي حسب إعدادات المشرف) */}
      {adminSettings.showServicesSection && (
        <section className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <span className="text-[#D9A62E] font-bold text-sm uppercase tracking-wider">WHAT WE DO</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mt-1">
                {isArabic ? 'خدماتنا الهندسية' : 'Our Services'}
              </h2>
            </div>
            <Link href="/services" className="text-[#D9A62E] font-bold text-base hover:underline cursor-pointer">
              {isArabic ? 'عرض كافة الخدمات ←' : 'View All Services →'}
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-[#142238] border border-white/10 rounded-2xl p-8 space-y-4 hover:border-[#D9A62E]/50 transition-all group">
                <div className="w-14 h-14 rounded-xl bg-[#0B1628] flex items-center justify-center border border-white/10 group-hover:bg-[#D9A62E] group-hover:text-[#0B1628] transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed font-medium">{service.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

    </main>
  );
}