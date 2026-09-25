'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft, Bell } from 'lucide-react';

export default function RCMCoursePage() {
  const locale = useLocale();
  const isArabic = locale === 'ar';

  // 💡 اجعل هذه القيمة (true) إذا كانت الدورة "قريباً في المنصة"، و (false) إذا كانت متاحة للتسجيل
  const isComingSoon = false;

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
            {isArabic ? 'الصيانة المرتكزة على الموثوقية (RCM)' : 'RCM Course'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
              {isArabic ? 'قسم هندسة استراتيجيات الموثوقية المتقدمة' : 'Advanced Reliability Strategy Engineering'}
            </div>

            {/* شارة توضيحية إذا كانت الدورة قريباً */}
            {isComingSoon && (
              <div className="inline-block bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-lg border border-amber-500/35">
                {isArabic ? '⏳ قريباً في المنصة' : '⏳ Coming Soon'}
              </div>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'الصيانة المرتكزة على الموثوقية (Reliability-Centered Maintenance - RCM)' : 'Reliability-Centered Maintenance (RCM)'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة مهندسي الصيانة والموثوقية ومديري الأصول الراغبين في إتقان منهجية الصيانة المرتكزة على الموثوقية (RCM) لبناء وتطوير استراتيجيات صيانة مخصصة تحقق أعلى درجات الاعتمادية بأقل تكلفة تشغيلية وفق معيار SAE JA1011 العالمي.'
              : 'This course targets maintenance and reliability engineers and asset managers wanting to master Reliability-Centered Maintenance (RCM) methodology to build customized maintenance strategies achieving highest reliability at lowest operational cost based on SAE JA1011.'
            }
          </p>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 text-xs text-[#B8C2D1]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D9A62E]" />
              <span>{isArabic ? 'المدة: 4 أيام مكثفة' : 'Duration: 4 Intensive Days'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#D9A62E]" />
              <span>{isArabic ? 'شهادة إتمام معتمدة' : 'Verified Certificate'}</span>
            </div>
          </div>

          {/* التحكم في زر التسجيل بناءً على حالة الدورة */}
          <div className="pt-4 flex flex-col gap-3">
            {isComingSoon ? (
              <div className="space-y-2">
                <button 
                  disabled 
                  className="bg-gray-700/50 text-gray-400 font-bold px-8 py-3 rounded-xl text-sm cursor-not-allowed border border-white/5 flex items-center gap-2 opacity-70"
                >
                  <Bell className="w-4 h-4" />
                  {isArabic ? 'التسجيل غير متاح حالياً' : 'Registration Currently Unavailable'}
                </button>
                <p className="text-xs text-amber-400/90 flex items-center gap-1.5 font-medium">
                  <span>✨</span>
                  {isArabic 
                    ? 'هذه الدورة ستتوفر قريباً في المنصة، سيتم فتح باب التسجيل قريباً.' 
                    : 'This course is coming soon. Registration will open shortly.'}
                </p>
              </div>
            ) : (
              <Link 
                href="/checkout?course=rcm"
                className="bg-[#D9A62E] hover:bg-[#F2C75C] text-[#0B1628] font-bold px-8 py-3 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2 w-fit"
              >
                {isArabic ? 'سجل في الدورة الآن' : 'Enroll in Course'}
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
              isArabic ? 'مهندسو ومحللو الصيانة والموثوقية (Maintenance & Reliability Engineers).' : 'Maintenance & Reliability Engineers & Analysts.',
              isArabic ? 'مهندسو التشغيل والعمليات ومديرو الأصول (Asset Managers).' : 'Operations engineers and Asset Managers.',
              isArabic ? 'مخططو الصيانة ومصممو استراتيجيات الصيانة الوقائية والتنبؤية.' : 'Maintenance planners and PM/PdM strategy designers.',
              isArabic ? 'المهندسون الساعون لتطوير خطط الصيانة للمعدات الحيوية في المنشآت الصناعية.' : 'Engineers striving to develop maintenance plans for critical industrial equipment.'
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
                title: isArabic ? 'تطبيق الأسئلة السبعة لـ RCM' : 'Mastering the 7 RCM Questions',
                desc: isArabic ? 'فهم خطوات التحليل كاملةً من تحديد الوظيفة حتى اختيار مهمة الصيانة المناسبة.' : 'Understand full analysis steps from defining functions to selecting proper maintenance tasks.'
              },
              {
                title: isArabic ? 'تحديد معايير الأداء والوظائف' : 'Functions & Performance Standards',
                desc: isArabic ? 'التمييز بدقة بين الوظائف الأساسية والثانوية للأصول وبيانات الأداء التشغيلي.' : 'Accurately distinguish between primary and secondary asset functions and performance data.'
              },
              {
                title: isArabic ? 'تحليل الأعطال وآثارها (FMEA/FMECA)' : 'Failure Analysis & Effects',
                desc: isArabic ? 'تحديد أنماط الفشل (Failure Modes) وآثارها التشغيلية والبيئية والمتعلقة بالسلامة.' : 'Identify failure modes and their operational, environmental, and safety impacts.'
              },
              {
                title: isArabic ? 'اختيار الاستراتيجية وشجرة القرار' : 'Decision Tree & Strategy Selection',
                desc: isArabic ? 'استخدام شجرة القرار للاختيار بين الصيانة الوقائية، التنبؤية، أو التركيض حتى العطل (Run-to-Failure).' : 'Use decision trees to choose between PM, PdM, or Run-to-Failure strategies.'
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
                  <td className="p-4 font-semibold text-white">{isArabic ? 'مبادئ وأساسيات RCM' : 'RCM Principles & Basics'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'الفلسفة التاريخية، معيار SAE JA1011، وأهمية RCM في إدارة الأصول.' : 'Historical philosophy, SAE JA1011 standard, and RCM importance in asset management.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تحديد حدود النظام والوظائف' : 'System Boundaries & Functions'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'تعريف حدود المعدات (System Boundaries) وصياغة بيان الوظائف والأداء المرجو.' : 'Defining equipment system boundaries and formulating functional statements and desired performance.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الفشل الوظيفي وأنماطه' : 'Functional Failures & Modes'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'تحديد (Functional Failures) وأنماط الأعطال (Failure Modes) وأسبابها.' : 'Identifying functional failures, failure modes, and their causes.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تحليل آثار ونتائج الفشل' : 'Failure Effects Analysis'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'تصنيف الآثار: السلامة، البيئة، التشغيل، والتكاليف غير التشغيلية.' : 'Classifying impacts: safety, environment, operations, and non-operational costs.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'شجرة قرار RCM واختيار المهمة' : 'RCM Decision Tree'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'تطبيق أسلوب التفكير المنطقي لاختيار مهام CBM أو PM أو إعادات التصميم.' : 'Applying logical thinking approach to select CBM, PM, or redesign tasks.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'التطبيق العملي والتكامل' : 'Practical Integration'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'إدماج خطط RCM في نظام CMMS/SAP والتحسين المستمر بناءً على البيانات.' : 'Integrating RCM plans into CMMS/SAP and continuous improvement based on data.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}