'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft, Bell } from 'lucide-react';

export default function ReliabilityEngineeringCoursePage() {
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
            {isArabic ? 'هندسة الموثوقية (Reliability Engineering)' : 'Reliability Engineering'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
              {isArabic ? 'قسم الأساسيات الرياضية والهندسية للموثوقية' : 'Core Engineering & Mathematical Reliability'}
            </div>

            {/* شارة توضيحية إذا كانت الدورة قريباً */}
            {isComingSoon && (
              <div className="inline-block bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-lg border border-amber-500/35">
                {isArabic ? '⏳ قريباً في المنصة' : '⏳ Coming Soon'}
              </div>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'هندسة الموثوقية (Reliability Engineering)' : 'Reliability Engineering'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة مهندسي الصيانة، الموثوقية، والتصميم الراغبين في إتقان مبادئ هندسة الموثوقية لتصميم وتجميع وتحليل الأنظمة الصناعية وتوقع معدلات الاعتمادية وإدارة مخاطر الأصول طوال دورة حياتها (Life Cycle Costing - LCC) باستخدام التكنيك الهندسي والرياضي المتقدم.'
              : 'This course targets maintenance, reliability, and design engineers wanting to master reliability engineering principles to design, assemble, and analyze industrial systems, predict availability, and manage asset risks throughout their lifecycle.'
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
                href="/checkout?course=reliability-engineering"
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
              isArabic ? 'مهندسو ومحللو الموثوقية والصيانة (Reliability & Maintenance Engineers).' : 'Reliability & Maintenance Engineers & Analysts.',
              isArabic ? 'مهندسو التصميم والتطوير الميكانيكي والصناعي (Design & Systems Engineers).' : 'Mechanical and industrial Design & Systems Engineers.',
              isArabic ? 'مهندسو سلامة العمليات وإدارة الأصول (Asset Integrity Engineers).' : 'Asset Integrity and Process Safety Engineers.',
              isArabic ? 'المتخصصون الراغبون في بناء الخلفية الرياضية والهندسية لتحليل بيانات الأعطال وتصميم معدات عالية الاعتمادية.' : 'Specialists building mathematical/engineering background for failure data analysis.'
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
                title: isArabic ? 'حسابات وتوزيعات الاحتمالات' : 'Probability Calculations & Distributions',
                desc: isArabic ? 'تطبيق توزيعات (Weibull, Exponential, Normal) لتحليل عمر المعدة وتحديد أنماط الفشل.' : 'Apply Weibull, Exponential, and Normal distributions to analyze asset life and failure modes.'
              },
              {
                title: isArabic ? 'تحليل الموثوقية والتوافرية (RAM)' : 'RAM Analysis & Modeling',
                desc: isArabic ? 'حساب وتصميم نماذج الموثوقية، التوافرية، القابلية للصيانة، والسلامة (RAMS).' : 'Calculate and design models for Reliability, Availability, Maintainability, and Safety.'
              },
              {
                title: isArabic ? 'مخططات كتل الموثوقية (RBD)' : 'Reliability Block Diagrams (RBD)',
                desc: isArabic ? 'حساب الموثوقية للأنظمة التوالية (Series)، التوازية (Parallel)، والأنظمة المركبة.' : 'Calculate system reliability for series, parallel, and complex network configurations.'
              },
              {
                title: isArabic ? 'تقدير تكلفة دورة الحياة (LCC)' : 'Life Cycle Costing (LCC)',
                desc: isArabic ? 'حساب التكلفة الإجمالية لشراء، تشغيل، صيانة، وتكهين الأصل لضمان أفضل عائد استثماري.' : 'Calculate total cost of acquisition, operation, maintenance, and disposal for best ROI.'
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
                  <td className="p-4 font-semibold text-white">{isArabic ? 'أساسيات ومفاهيم الموثوقية' : 'Reliability Fundamentals'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'المفهوم الرياضي للموثوقية، حساب معدل الفشل (Failure Rate - λ)، ومنحنى الحوض (Bathtub Curve).' : 'Mathematical concept of reliability, failure rate calculation, and Bathtub Curve.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'التوزيعات الإحصائية' : 'Statistical Distributions'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'تحليل بيانات الأعطال باستخدام توزيع Weibull، حساب العمر الافتراضي (MTBF) ومؤشر الشكل (β).' : 'Failure data analysis using Weibull distribution, MTBF, and shape parameter (β).'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'نمذجة الأنظمة (RBD)' : 'System Modeling (RBD)'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'بناء Reliable Block Diagrams لحساب موثوقية الأنظمة المعقدة والتكرارية (Redundancy).' : 'Building RBDs to calculate reliability of complex and redundant systems.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تحليل القابلية للصيانة والتوافرية' : 'Maintainability & Availability'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'حساب القابلية للصيانة M(t)، معدل الإصلاح (μ)، وتوقعات التوافرية الفعلية (Availability).' : 'Calculate maintainability M(t), repair rate (μ), and operational availability expectations.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'مخططات وبناء نماذج RAMS' : 'RAMS Modeling'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'تطبيق أساليب نمذجة الأنظمة الصناعية وربط الموثوقية بأمان وسلامة العمليات.' : 'Applying industrial system modeling methods and linking reliability to process safety.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تكلفة دورة الحياة (LCC)' : 'Life Cycle Costing (LCC)'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'دراسة وتقييم التكاليف الرأسمالية (CAPEX) والتكاليف التشغيلية (OPEX) لاختيار المعدة الأنسب.' : 'Study and evaluate CAPEX and OPEX to select the most cost-effective equipment.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}