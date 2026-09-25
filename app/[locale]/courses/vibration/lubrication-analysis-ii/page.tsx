'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft, Sparkles, Bell } from 'lucide-react';

interface CoursePageProps {
  // يمكنك تمرير هذه القيمة من الـ Server Component أو ملف البيانات لتحديد حالة الدورة ديناميكياً
  initialIsComingSoon?: boolean;
}

export default function LubricationLevel2CoursePage({ initialIsComingSoon = true }: CoursePageProps) {
  const locale = useLocale();
  const isArabic = locale === 'ar';

  // 💡 [مكان التحكم بالحالة]: true = قريباً (معطل)، false = متاح للتسجيل
  const isComingSoon = initialIsComingSoon;

  return (
    <main className="min-h-screen bg-[#0B1628] text-white py-12 px-6 md:px-12" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-5xl mx-auto space-y-12">

        {/* شريط التنقل العلوي (Breadcrumb) */}
        <div className="flex items-center gap-2 text-xs text-[#B8C2D1]">
          <Link href="/courses" className="hover:text-[#D9A62E] transition-colors">
            {isArabic ? 'الدورات التدريبية' : 'Courses'}
          </Link>
          <span>/</span>
          <span className="text-[#D9A62E]">
            {isArabic ? 'تحليل الزيوت والتزييت المستوى الثاني' : 'Lubrication & Oil Analysis Level II'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
              {isArabic ? 'قسم التشخيص المتقدم وصيانة الموثوقية التنبؤية' : 'Advanced Diagnostics & Predictive Maintenance'}
            </div>

            {/* شارة قريباً (Coming Soon Badge) */}
            {isComingSoon && (
              <div className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-lg border border-amber-500/20">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>{isArabic ? 'قريباً جداً في المنصة' : 'Coming Soon'}</span>
              </div>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'تحليل الزيوت والتزييت المستوى الثاني (Lubrication & Oil Analysis II - ICML Aligned)' : 'Lubrication & Oil Analysis Level II (ICML Aligned)'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة مهندسي الصيانة والموثوقية، أخصائيي مراقبة الحالة، ومحليلي الزيوت المتقدمين الراغبين في التعمق في تحليل الزيوت والتزييت المستوى الثاني للتمكن من التشخيص الدقيق لجزيئات التآكل، تدهور الإضافات، وإدارة برامج التزييت التنبؤية المتقدمة.'
              : 'This course targets maintenance and reliability engineers, condition monitoring specialists, and advanced oil analysts wanting to master Level II oil analysis for precise wear debris diagnostics, additive depletion tracking, and managing advanced predictive lubrication programs.'
            }
          </p>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 text-xs text-[#B8C2D1]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D9A62E]" />
              <span>{isArabic ? 'المدة: 4 أيام مكثفة' : 'Duration: 4 Intensive Days'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#D9A62E]" />
              <span>{isArabic ? 'شهادة إتمام معتمدة (توافق ICML MLA II)' : 'Verified Certificate (ICML Aligned)'}</span>
            </div>
          </div>

          {/* التحكم في زر التسجيل والحجز بناءً على حالة الدورة */}
          <div className="pt-4 flex flex-col gap-3">
            {isComingSoon ? (
              <div className="space-y-2">
                <button 
                  disabled 
                  className="bg-gray-700/50 text-gray-400 font-bold px-8 py-3 rounded-xl text-sm cursor-not-allowed border border-white/5 flex items-center gap-2 opacity-70 w-fit"
                >
                  <Bell className="w-4 h-4" />
                  {isArabic ? 'التسجيل غير متاح حالياً' : 'Registration Currently Unavailable'}
                </button>
                <p className="text-xs text-amber-400/90 flex items-center gap-1.5 font-medium">
                  <span>✨</span>
                  {isArabic 
                    ? 'هذه الدورة ستتوفر قريباً في المنصة، ترقبوا فتح باب الحجز.' 
                    : 'This course is coming soon. Registration will open shortly.'}
                </p>
              </div>
            ) : (
              <Link 
                href="/checkout?course=lubrication-analysis-2"
                className="bg-[#D9A62E] hover:bg-[#F2C75C] text-[#0B1628] font-bold px-8 py-3 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2 w-fit"
              >
                {isArabic ? 'احجز مقعدك في الدورة' : 'Enroll in Course'}
                {isArabic ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </Link>
            )}
          </div>
        </div>

        {/* الجمهور المستهدف */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
            <Users className="w-5 h-5 text-[#D9A62E]" />
            {isArabic ? 'الجمهور المستهدف' : 'Target Audience'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              isArabic ? 'مهندسو ومحللو الموثوقية والصيانة التنبؤية (Reliability & PdM Engineers).' : 'Reliability & Predictive Maintenance Engineers.',
              isArabic ? 'أخصائيو ومحللو معامل تحليل الزيوت الصناعية (Oil Analysis Technicians & Analysts).' : 'Industrial oil analysis lab technicians and analysts.',
              isArabic ? 'مهندسو صيانة المعدات الحرجة في قطاعات الطاقة، النفط والغاز، والمصانع الكبرى.' : 'Critical equipment maintenance engineers in energy, oil & gas, and major plants.',
              isArabic ? 'المتقدمون للحصول على الشهادات المعتمدة عالمياً مثل (ICML MLA II / MLT II).' : 'Candidates preparing for global certifications like ICML MLA II / MLT II.'
            ].map((item, index) => (
              <div key={index} className="bg-[#142238]/60 border border-white/5 p-4 rounded-xl flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D9A62E] shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm text-[#B8C2D1] leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ماذا ستتعلم؟ */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
            <BookOpen className="w-5 h-5 text-[#D9A62E]" />
            {isArabic ? 'ماذا ستتعلم؟' : 'What You Will Learn'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: isArabic ? 'تحليل مورفولوجيا جزيئات التآكل (WDA)' : 'Wear Debris Analysis (WDA)',
                desc: isArabic ? 'التمييز بين أشكال الجسيمات (Cutting, Sliding, Fatigue, Severe Wear) لتحديد المكون المتآكل بدقة.' : 'Differentiate particle morphologies to precisely identify the worn machine component.'
              },
              {
                title: isArabic ? 'الفحوصات الطيفية والمتقدمة (FTIR)' : 'FTIR & Advanced Spectroscopy',
                desc: isArabic ? 'استخدام المطيافية الذرية للتعرف على معادن التآكل والملوثات ونفاذ الإضافات الكيميائية.' : 'Use atomic emission spectroscopy to track wear metals, contaminants, and additive depletion.'
              },
              {
                title: isArabic ? 'تقييم الثبات الأكسدي واستهلاك الإضافات' : 'Oxidation Stability & Additive Life',
                desc: isArabic ? 'إجراء اختبارات الاستقرار ضد الأكسدة (RPVOT) واختبارات قياس استهلاك الإضافات النشطة (RULER).' : 'Perform oxidation stability tests (RPVOT) and active additive depletion tests (RULER).'
              },
              {
                title: isArabic ? 'الفيروغرافي التحليلي (Analytical Ferrography)' : 'Analytical Ferrography',
                desc: isArabic ? 'استخدام المجهر المغناطيسي لفصل وتصنيف الجسيمات الحديدية وغير الحديدية لتشخيص جذور الأعطال.' : 'Use magnetic microscopy to separate and classify ferrous and non-ferrous debris.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#142238] border border-white/10 p-5 rounded-xl space-y-2">
                <h3 className="font-bold text-sm text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D9A62E]"></span>
                  {item.title}
                </h3>
                <p className="text-xs text-[#B8C2D1] leading-relaxed pl-4">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* مواضيع الدورة (الجدول) */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
            <Award className="w-5 h-5 text-[#D9A62E]" />
            {isArabic ? 'مواضيع الدورة والجدول الزمني' : 'Course Topics & Syllabus'}
          </h2>
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#142238]">
            <table className={`w-full ${isArabic ? 'text-right' : 'text-left'} border-collapse`}>
              <thead>
                <tr className="bg-[#0b1628] text-[#D9A62E] text-xs uppercase tracking-wider border-b border-white/10">
                  <th className="p-4 font-bold w-1/4">{isArabic ? 'المحور' : 'Module'}</th>
                  <th className="p-4 font-bold w-3/4">{isArabic ? 'الموضوع التفصيلي' : 'Detailed Topic'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs text-[#B8C2D1]">
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'أنماط وآليات التآكل الميكانيكي' : 'Mechanical Wear Mechanisms'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'دراسة آليات التآكل: التآكل بالاحتكاك (Abrasive)، التآكل بالالتصاق (Adhesive)، والتعب السطحي (Fatigue).' : 'Study wear mechanisms: abrasive, adhesive, and surface fatigue.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'فحص جزيئات التآكل (WDA)' : 'Wear Debris Analysis (WDA)'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'استخدام أدوات Direct Reading (DR) Ferrography والتمييز المجهري بين أصناف وبرادة التآكل.' : 'Using Direct Reading (DR) tools and microscopic differentiation of wear particles.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تقنيات FTIR والمطيافية الذرية' : 'FTIR & Atomic Spectroscopy'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'قياس النيتروجة (Nitration)، الأكسدة (Oxidation)، الكبرتة (Sulfation)، ونفاذ إضافات الضغط العالي (EP).' : 'Measuring nitration, oxidation, sulfation, and Extreme Pressure (EP) additive depletion.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'فحوصات استقرار الزيت والمياه' : 'Advanced Oil Stability Tests'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'اختبارات RPVOT، اختبار Karl Fischer الدقيق (Coulometric)، واختبار فصل المياه (Demulsibility).' : 'RPVOT tests, coulometric Karl Fischer testing, and demulsibility tests.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تحديد الحدود الإنذارية (Alarming)' : 'Alarm Limits Setting'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'بناء الحدود الحرجية التراكمية والإحصائية (Trend vs Absolute Limits) الخاصة بكل أصل.' : 'Building statistical and trend-based absolute/relative alarm limits for each asset.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'التكامل مع مراقبة الحالة' : 'PdM Technologies Integration'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'دمج نتائج تحليل الزيت مع تحليل الاهتزازات (Vibration) والتصوير الحراري (Thermography) لتحديد أصل العطل.' : 'Integrating oil analysis results with vibration and thermography to pinpoint root causes.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}