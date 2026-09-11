'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft } from 'lucide-react';

export default function CMRTCoursePage() {
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
            {isArabic ? 'تحضير شهادة فني الصيانة المعتمد (CMRT)' : 'CMRT Certification Preparation'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
            {isArabic ? 'قسم الشهادات المهنية الفنية' : 'Technical Professional Certifications'}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'تحضير شهادة فني الصيانة والموثوقية المعتمد (CMRT)' : 'Certified Maintenance & Reliability Technician (CMRT) Prep'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة الفنيين والتقنيين الراغبين في الاستعداد لاجتياز اختبار شهادة فني الصيانة والموثوقية المعتمد (CMRT) الصادرة عن الهيئة العالمية للصيانة والموثوقية (SMRP). تركز على التجهيز الشامل لاختبار المهارات الميدانية العملية ومجالات الصيانة الوقائية والتصحيحية والسلامة.'
              : 'This course targets technicians and technologists preparing to pass the Certified Maintenance and Reliability Technician (CMRT) exam issued by SMRP. It focuses on comprehensive preparation for practical field skills, preventive maintenance, corrective work, and safety.'
            }
          </p>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 text-xs text-[#B8C2D1]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D9A62E]" />
              <span>{isArabic ? 'المدة: 4 أيام مكثفة' : 'Duration: 4 Intensive Days'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#D9A62E]" />
              <span>{isArabic ? 'شهادة إتمام وتأهل للاختبار' : 'Completion & Exam Prep Certificate'}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link 
              href="/checkout?course=cmrt"
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
              isArabic ? 'فنيو وتقنيو الصيانة الميكانيكية والكهربائية وأجهزة القياس (Instruments).' : 'Mechanical, electrical, and instrumentation technicians and technologists.',
              isArabic ? 'مشرفو الفرق الميدانية وقادة المجموعات الفنية (Maintenance Lead Technicians).' : 'Maintenance Lead Technicians and field team supervisors.',
              isArabic ? 'الفنيون الراغبون في توثيق مهاراتهم الميدانية بشهادة عالمية معتمدة.' : 'Technicians wishing to document their field skills with a recognized global certification.',
              isArabic ? 'الخريجون الجدد من المعاهد الفنية والتقنية الساعون لدخول مجال الصيانة والموثوقية الصناعية.' : 'Recent graduates from technical institutes entering industrial maintenance.'
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
                title: isArabic ? 'تطبيق ممارسات السلامة (HSE)' : 'Safety & HSE Practices',
                desc: isArabic ? 'إجراءات العزل (LOTO)، التعامل مع المخاطر، والالتزام بمعايير السلامة الصناعية.' : 'Lockout/Tagout (LOTO) procedures, hazard handling, and industrial safety standards.'
              },
              {
                title: isArabic ? 'الصيانة الميكانيكية والكهربائية' : 'Mechanical & Electrical Maintenance',
                desc: isArabic ? 'مهارات الفك والتركيب، المحاذاة (Alignment)، الموازنة، والتعامل مع المحامل (Bearings).' : 'Assembly/disassembly skills, alignment, balancing, and bearing management.'
              },
              {
                title: isArabic ? 'استخدام أدوات الفحص والأعطال' : 'Troubleshooting & Inspection Tools',
                desc: isArabic ? 'المهارات الأساسية لاستكشاف الأعطال (Troubleshooting) واستخدام أجهزة القياس والفحص الدقيق.' : 'Essential troubleshooting skills and using precision measurement tools.'
              },
              {
                title: isArabic ? 'إدارة وتوثيق مهام الصيانة' : 'Maintenance Documentation',
                desc: isArabic ? 'قراءة واستيفاء تفاصيل أوامر العمل (Work Orders) وتوثيق الإجراءات والمواد بدقة.' : 'Reading work order details, executing tasks, and accurately documenting materials.'
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

        {/* مواضيع الدورة (الجدول بناءً على CMRT Domains) */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
            <Award className="w-5 h-5 text-[#D9A62E]" />
            {isArabic ? 'محاور اختبار CMRT ومواضيع الدورة' : 'CMRT Domains & Course Syllabus'}
          </h2>
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#142238]">
            <table className={`w-full ${isArabic ? 'text-right' : 'text-left'} border-collapse`}>
              <thead>
                <tr className="bg-[#0b1628] text-[#D9A62E] text-xs uppercase tracking-wider border-b border-white/10">
                  <th className="p-4 font-bold w-1/3">{isArabic ? 'المحور (CMRT Domain)' : 'CMRT Domain'}</th>
                  <th className="p-4 font-bold w-2/3">{isArabic ? 'الموضوع التفصيلي' : 'Detailed Topic'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs text-[#B8C2D1]">
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? '1. Business & Management / Safety' : '1. Business & Management / Safety'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'ممارسات السلامة الميدانية، تصاريح العمل، إدارة المخاطر، والالتزام التنظيمي.' : 'Field safety practices, work permits, risk management, and regulatory compliance.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? '2. Maintenance Practices' : '2. Maintenance Practices'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'أساسيات التشحيم، أدوات القياس الدقيقة، وقراءة المخططات الفنية والرسومات الهندسية.' : 'Lubrication basics, precision measuring tools, and reading engineering diagrams.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? '3. Reliability Tools' : '3. Reliability Tools'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'مهارات الصيانة الوقائية والتفقد البصري، فهم مؤشرات التآكل ومبادئ مراقبة الحالة.' : 'PM skills, visual inspection, wear indicators, and condition monitoring basics.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? '4. Maintenance & Execution' : '4. Maintenance & Execution'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'خطوات تشخيص واستكشاف الأعطال (Troubleshooting)، صيانة المحركات والمضخات، والمحاذاة الميكانيكية.' : 'Troubleshooting steps, motor & pump maintenance, and mechanical alignment.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}