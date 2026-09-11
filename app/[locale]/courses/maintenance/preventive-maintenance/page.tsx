'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft } from 'lucide-react';

export default function PreventiveMaintenancePage() {
  const locale = useLocale();
  const isArabic = locale === 'ar';

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
            {isArabic ? 'الصيانة الوقائية' : 'Preventive Maintenance'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
            {isArabic ? 'قسم الصيانة والتشغيل' : 'Maintenance & Operations Department'}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'الصيانة الوقائية' : 'Preventive Maintenance'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة الفنيين والمهندسين المهتمين بتطوير مهاراتهم في إدارة وتخطيط الصيانة الدورية للأصول والمعدات الميكانيكية. تركز الدورة على التكنيك الأساسي للصيانة الوقائية وكيفية الانتقال من أسلوب الصيانة التفاعلية عند الأعطال إلى خطط استباقية منتظمة لتقليل فترات التوقف غير المخطط لها.'
              : 'This course targets technicians and engineers interested in developing their skills in managing and planning periodic maintenance for mechanical assets and equipment. The course focuses on the core techniques of Preventive Maintenance (PM) and transitioning from reactive breakdown maintenance to regular proactive plans to minimize unplanned downtime.'
            }
          </p>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 text-xs text-[#B8C2D1]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D9A62E]" />
              <span>{isArabic ? 'المدة: 3 أيام مكثفة' : 'Duration: 3 Intensive Days'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#D9A62E]" />
              <span>{isArabic ? 'شهادة إتمام معتمدة' : 'Verified Certificate'}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link 
              href="/checkout?course=preventive-maintenance"
              className="bg-[#D9A62E] hover:bg-[#F2C75C] text-[#0B1628] font-bold px-8 py-3 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2"
            >
              {isArabic ? 'سجل في الدورة الآن' : 'Enroll in Course'}
              {isArabic ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </Link>
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
              isArabic ? 'مهندسو وفنيو الصيانة الميكانيكية والتشغيل.' : 'Mechanical maintenance and operations engineers & technicians.',
              isArabic ? 'مخططو وجدوليو عمليات الصيانة (Maintenance Planners & Schedulers).' : 'Maintenance Planners & Schedulers.',
              isArabic ? 'مشغلو المعدات والأصول في المنشآت الصناعية.' : 'Equipment and asset operators in industrial facilities.',
              isArabic ? 'الطلاب والمتخصصون الراغبون في فهم استراتيجيات موثوقية المعدات.' : 'Students and professionals interested in asset reliability strategies.'
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
                title: isArabic ? 'تخطيط وإعداد خطط الصيانة' : 'Maintenance Planning',
                desc: isArabic ? 'بناء جداول دورية مستندة إلى الوقت (Time-based) أو معدل التشغيل (Usage-based).' : 'Build regular schedules based on time or usage metrics.'
              },
              {
                title: isArabic ? 'إدارة قوائم الفحص (Checklists)' : 'Checklists & SOPs Management',
                desc: isArabic ? 'كتابة وإعداد قوائم تفقد وإجراءات عمل قياسية (SOPs) عالية الدقة.' : 'Write and prepare high-precision inspection checklists and SOPs.'
              },
              {
                title: isArabic ? 'تحليل المؤشرات والبيانات' : 'Data & Indicators Analysis',
                desc: isArabic ? 'استخدام قراءات التشغيل لاكتشاف علامات التآكل المبكرة.' : 'Use operational readings to detect early signs of wear.'
              },
              {
                title: isArabic ? 'إدارة قطع الغيار والحلول' : 'Spares & Failure Solutions',
                desc: isArabic ? 'تحديد الأجزاء المستهلكة وجدول استبدالها قبل حدوث الفشل (Mechanical Failure).' : 'Identify consumable parts and schedule replacement before failure.'
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
                  <td className="p-4 font-semibold text-white">{isArabic ? 'المقدمة والمبادئ' : 'Introduction'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'مفهوم الصيانة الوقائية وأهميتها في استراتيجيات الموثوقية (Reliability).' : 'Concept of preventive maintenance and its importance in reliability strategies.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'أنواع الصيانة' : 'Maintenance Types'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'المقارنة بين الصيانة الوقائية، التنبؤية (PdM)، والتفاعلية (Corrective).' : 'Comparison between preventive, predictive (PdM), and corrective maintenance.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'إعداد جداول PM' : 'PM Scheduling'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'تحديد الفترات الزمنية وساعات التشغيل المناسبة لكل معدة.' : 'Determining appropriate time intervals and operating hours for each asset.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الفحص التشغيلي' : 'Operational Inspection'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'طرق قياس التآكل، التشحيم والتزييت، وفحص الكراسي والأجزاء الدوارة.' : 'Methods for measuring wear, lubrication, and inspecting bearings & rotating parts.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'توثيق العمليات' : 'Process Documentation'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'إدارة أوامر العمل (Work Orders) واستخدام أنظمة CMMS.' : 'Managing work orders and utilizing CMMS systems.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}