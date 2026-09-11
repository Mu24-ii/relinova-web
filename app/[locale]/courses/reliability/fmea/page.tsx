'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft } from 'lucide-react';

export default function FMEACoursePage() {
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
            {isArabic ? 'تحليل أنماط الأعطال وآثارها (FMEA)' : 'FMEA Course'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
            {isArabic ? 'قسم هندسة الموثوقية وتحليل المخاطر' : 'Reliability Engineering & Risk Analysis'}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'تحليل أنماط الأعطال وآثارها (Failure Mode and Effects Analysis - FMEA)' : 'Failure Mode and Effects Analysis (FMEA)'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة مهندسي الصيانة والموثوقية، مديري الجودة والإنتاج الراغبين في إتقان منهجية FMEA لتحديد نقاط ضعف المعدات والعمليات والحد من المخاطر التشغيلية قبل وقوعها. تركز على التفكيك المنهجي للنظام وتحديد طرق الفشل وتقييم المخاطر باستخدام عدد أولوية المخاطر (RPN).'
              : 'This course targets maintenance, reliability, quality, and production engineers wanting to master FMEA methodology to identify equipment and process vulnerabilities and mitigate operational risks proactively using Risk Priority Numbers (RPN).'
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
              href="/checkout?course=fmea"
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
              isArabic ? 'مهندسو ومحللو الصيانة والموثوقية (Maintenance & Reliability Engineers).' : 'Maintenance & Reliability Engineers & Analysts.',
              isArabic ? 'مهندسو الجودة والسلامة والعمليات (Quality & Process Engineers).' : 'Quality, Safety, and Process Engineers.',
              isArabic ? 'مصممو الأنظمة والمنتجات الميكانيكية والصناعية.' : 'Mechanical and industrial system/product designers.',
              isArabic ? 'مخططو الصيانة ومديرو الأصول المسئولون عن تطوير خطط الصيانة الوقائية والتنبؤية.' : 'Maintenance planners and asset managers developing PM/PdM plans.'
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
                title: isArabic ? 'فهم أنواع FMEA' : 'Understanding FMEA Types',
                desc: isArabic ? 'التمييز بين FMEA التصميم (DFMEA) وFMEA العمليات والأنظمة (PFMEA / System FMEA).' : 'Differentiate between Design FMEA (DFMEA) and Process/System FMEA (PFMEA).'
              },
              {
                title: isArabic ? 'تقييم ومعادلة RPN' : 'RPN Evaluation & Calculation',
                desc: isArabic ? 'حساب عدد أولوية المخاطر بناءً على الشدة (Severity)، معدل الحدوث (Occurrence)، وقابلية الاكتشاف (Detection).' : 'Calculate Risk Priority Number based on Severity, Occurrence, and Detection.'
              },
              {
                title: isArabic ? 'تحديد خطط العمل التصحيحية' : 'Corrective Action Plans',
                desc: isArabic ? 'تحويل نتائج التحليل إلى إجراءات صيانة وقائية وتنبؤية في جداول الصيانة.' : 'Translate analysis results into proactive preventive and predictive maintenance actions.'
              },
              {
                title: isArabic ? 'الربط مع منهجية RCM' : 'Integration with RCM & Documentation',
                desc: isArabic ? 'استخدام مخرجات FMEA كركيزة أساسية لبناء برامج الصيانة وإنشاء وتحديث السجلات.' : 'Use FMEA outputs as a foundation for RCM and maintain living documentation records.'
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
                  <td className="p-4 font-semibold text-white">{isArabic ? 'المبادئ والأساسيات' : 'Principles & Basics'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'مفهوم FMEA، تاريخها، وأهميتها في استراتيجيات منع الأعطال والاعتمادية.' : 'FMEA concept, history, and importance in defect prevention and reliability.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'خطوات إجراء التحليل' : 'Analysis Steps'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'تحديد الوظائف (Functions)، طرق الفشل (Failure Modes)، وآثار الفشل (Effects).' : 'Defining functions, failure modes, and failure effects.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تقييم أولوية المخاطر (RPN)' : 'RPN Risk Assessment'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'تحديد مصفوفات القيمة للشدة (S)، الحدوث (O)، والاكتشاف (D) وحساب RPN.' : 'Defining rating matrices for Severity, Occurrence, and Detection, and calculating RPN.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الإجراءات التصحيحية' : 'Corrective Actions'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'وضع وتنفيذ خطط العمل لتقليل المخاطر وإعادة تقييم RPN النهائي.' : 'Developing action plans to reduce risks and re-evaluating final RPN.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تطبيقات عملية' : 'Practical Applications'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'دراسات حالة لنظم ميكانيكية (مثل المضخات، الضواغط، والكراسي) وربطها بـ CMMS.' : 'Case studies for mechanical systems (pumps, compressors, bearings) linked to CMMS.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}