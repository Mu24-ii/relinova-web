'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft, Sparkles, Bell } from 'lucide-react';

interface CoursePageProps {
  // يمكنك تمرير هذه القيمة من الـ Server Component أو ملف البيانات لتحديد حالة الدورة ديناميكياً
  initialIsComingSoon?: boolean;
}

export default function LubricationCoursePage({ initialIsComingSoon = true }: CoursePageProps) {
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
            {isArabic ? 'تحليل الزيوت والتزييت المستوى الأول' : 'Lubrication & Oil Analysis Level I'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
              {isArabic ? 'قسم مراقبة الحالة وصيانة الموثوقية الهندسية' : 'Condition Monitoring & Reliability Engineering'}
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
            {isArabic ? 'تحليل الزيوت والتزييت المستوى الأول (Lubrication & Oil Analysis I - ICML Aligned)' : 'Lubrication & Oil Analysis Level I (ICML Aligned)'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة مهندسي الصيانة والموثوقية، فنيي ومحللي الزيوت، ومسؤولي التزييت الصناعي الراغبين في التعمق في تحليل الزيوت والتزييت المستوى الأول لضمان جودة المزيتات وإطالة العمر الافتراضي للمعدات الدوارة.'
              : 'This course targets maintenance and reliability engineers, oil analysis technicians, and industrial lubrication personnel wanting to master Level I lubrication and oil analysis to ensure lubricant quality and extend rotating equipment life.'
            }
          </p>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 text-xs text-[#B8C2D1]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D9A62E]" />
              <span>{isArabic ? 'المدة: 3 أيام مكثفة' : 'Duration: 3 Intensive Days'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#D9A62E]" />
              <span>{isArabic ? 'شهادة إتمام معتمدة (توافق ICML MLA I)' : 'Verified Certificate (ICML Aligned)'}</span>
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
                href="/checkout?course=lubrication-analysis-1"
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
              isArabic ? 'مهندسو الصيانة الميكانيكية والموثوقية (Mechanical & Reliability Engineers).' : 'Mechanical & Reliability Engineers.',
              isArabic ? 'فنيو ومحللو مراقبة الحالة (Condition Monitoring Technicians).' : 'Condition Monitoring Technicians.',
              isArabic ? 'اخصائيو وفنيو التزييت والتشحيم في المصانع والمنشآت الصناعية.' : 'Lubrication and greasing technicians in industrial plants.',
              isArabic ? 'المهندسو الراغبون في التحضير لشهادات التزييت المعتمدة عالمياً مثل (ICML MLA I / MLT I).' : 'Engineers preparing for global lubrication certifications like ICML MLA I / MLT I.'
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
                title: isArabic ? 'أساسيات علم الاحتكاك والتزييت (Tribology)' : 'Tribology & Lubrication Fundamentals',
                desc: isArabic ? 'فهم أنماط التزييت (Hydrodynamic, Elastohydrodynamic, Boundary) لمنع الاحتكاك المباشر.' : 'Understand lubrication regimes to prevent direct metal-to-metal friction.'
              },
              {
                title: isArabic ? 'خصائص واختيار المزيتات' : 'Lubricant Selection & Properties',
                desc: isArabic ? 'التمييز بين الزيوت والشحوم، وفهم مؤشر اللزوجة (Viscosity Index) والإضافات الكيميائية.' : 'Differentiate oils and greases, understanding viscosity index and chemical additives.'
              },
              {
                title: isArabic ? 'طرق سحب العينات المعيارية (Oil Sampling)' : 'Standard Oil Sampling Techniques',
                desc: isArabic ? 'اختيار نقاط السحب الصحيحة (Live Zone Sampling) واستخدام الأدوات المناسبة لمنع تلوث العينة.' : 'Select correct live zone sampling points and tools to prevent sample contamination.'
              },
              {
                title: isArabic ? 'قراءة تقارير مختبرات تحليل الزيت' : 'Oil Lab Reports Interpretation',
                desc: isArabic ? 'تفسير الفحوصات الأساسية مثل درجة اللزوجة (Viscosity)، الرقم الحامضي (TAN)، ونسبة المياه (Karl Fischer).' : 'Interpret core tests like viscosity, TAN, and Karl Fischer water content.'
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
                  <td className="p-4 font-semibold text-white">{isArabic ? 'مبادئ التزييت والاحتكاك' : 'Tribology & Principles'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'مفاهيم Tribology، وظائف زيت التزييت، ونظريات بناء طبقة الزيت الفاصلة.' : 'Tribology concepts, oil functions, and separating fluid film formation theories.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تركيب الزيوت والشحوم' : 'Oils & Greases Composition'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'الزيوت الأساسية (Group I-V)، الإضافات الكيميائية، ومكونات الشحم (Thickeners & Base Oil).' : 'Base oils (Group I-V), chemical additives, and grease components (thickeners & base oil).'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تقنيات سحب العينات الميدانية' : 'Field Sampling Techniques'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'طرق وقواعد أخذ العينات، تصميم منافذ السحب (Sampling Ports)، والتعامل مع العينات.' : 'Sampling rules and methods, sampling ports design, and sample handling.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الفحوصات المخبرية الأساسية' : 'Core Lab Tests'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'قياس اللزوجة عند 40°C و100°C، التعداد الجسيمي (ISO 4406 Code)، واختبار Karl Fischer.' : 'Viscosity measurement at 40°C and 100°C, particle counting (ISO 4406), and Karl Fischer test.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تحليل ملوثات الزيت' : 'Contaminant Analysis'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'تحديد دخول المياه، التلوث بالأتربة، وظاهرة الرغوة وأسبابها.' : 'Detecting water ingress, dirt contamination, and foam phenomena/causes.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'إدارة واستلام المزيتات' : 'Lubricant Management & 5S'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'أساليب التخزين الآمن، ترميز أدوات التزييت للحد من الخلط (Cross-Contamination)، ونظام 5S.' : 'Safe storage methods, color-coding tools to prevent cross-contamination, and 5S system.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}