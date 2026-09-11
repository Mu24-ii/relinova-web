'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft } from 'lucide-react';

export default function MachineryLubricationTechnicianCoursePage() {
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
            {isArabic ? 'فني تزييت الآلات المعتمد (MLT)' : 'Machinery Lubrication Technician (MLT)'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
            {isArabic ? 'قسم الممارسات الميدانية وتطبيق التزييت (ICML MLT Aligned)' : 'Field Practices & Lubrication Application'}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'فني تزييت الآلات المعتمد (Machinery Lubrication Technician - ICML MLT)' : 'Machinery Lubrication Technician (ICML MLT)'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة مهندسي الصيانة الميكانيكية، المشرفين الفنيين، وأخصائيي التزييت الراغبين في التحضير والاعتماد لشهادة فني تزييت الآلات (MLT) المعتمدة عالمياً من المجلس الدولي لتزييت الآلات (ICML).'
              : 'This course targets mechanical maintenance engineers, technical supervisors, and lubrication specialists wishing to prepare and certify for the Machinery Lubrication Technician (MLT) credential globally accredited by ICML.'
            }
          </p>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 text-xs text-[#B8C2D1]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D9A62E]" />
              <span>{isArabic ? 'المدة: 3 أيام ميدانية مكثفة' : 'Duration: 3 Intensive Field Days'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#D9A62E]" />
              <span>{isArabic ? 'شهادة إتمام معتمدة (توافق ICML MLT I / II)' : 'Verified Certificate (ICML MLT Aligned)'}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link 
              href="/checkout?course=machinery-lubrication-technician"
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
              isArabic ? 'فنيو الصيانة والتزييت الميدانيون (Lubrication Technicians).' : 'Field maintenance and lubrication technicians.',
              isArabic ? 'مشرفو ومهندسو الصيانة الميكانيكية والموثوقية (Mechanical & Reliability Engineers).' : 'Mechanical and reliability maintenance supervisors and engineers.',
              isArabic ? 'المخططون المسئولون عن جدول وإعداد مهام التشحيم والتزييت في المنشآت الصناعية.' : 'Planners responsible for scheduling lubrication tasks in industrial plants.',
              isArabic ? 'المهندسون والفنيون الراغبون في اجتياز اختبارات شهادة ICML MLT I / MLT II.' : 'Engineers and technicians aiming to pass ICML MLT I / II exams.'
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
                title: isArabic ? 'اختيار وتطبيق المزيتات' : 'Lubricant Selection & Application',
                desc: isArabic ? 'التمييز بين لزوجة الزيوت وقوام الشحوم المناسب لكل تطبيق (كراسي، تروس، ضواغط).' : 'Differentiate oil viscosity and grease consistency appropriate for bearings, gears, and compressors.'
              },
              {
                title: isArabic ? 'إدارة وتخزين الزيوت (Storage & Handling)' : 'Storage & Handling Standards',
                desc: isArabic ? 'تطبيق معايير 5S لغرف التزييت، ومنع التلوث المتقاطع بين المنتجات (Cross-Contamination).' : 'Apply 5S standards for lube rooms and prevent cross-contamination.'
              },
              {
                title: isArabic ? 'أساليب التشحيم وإعادة التغذية' : 'Relubrication & Greasing Practices',
                desc: isArabic ? 'حساب كميات الشحم وفترات التغذية الدقيقة لتجنب مشاكل التشحيم المفرط (Over-greasing).' : 'Calculate accurate grease quantities and re-greasing intervals to avoid over-greasing.'
              },
              {
                title: isArabic ? 'تقنيات سحب العينات الميدانية' : 'Field Oil Sampling Techniques',
                desc: isArabic ? 'تركيب نقاط السحب المثالية وجمع العينات وفق معايير الجودة والتكرارية العالية.' : 'Install ideal sampling ports and collect samples matching high repeatability standards.'
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
                  <td className="p-4 font-semibold text-white">{isArabic ? 'استراتيجيات التزييت والصيانة' : 'Lubrication Strategies'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'دور التزييت في الموثوقية، والتكامل بين الصيانة الوقائية والتنبؤية.' : 'Role of lubrication in reliability and integration between PM and PdM.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'أساسيات المزيتات وتصنيفاتها' : 'Lubricants Fundamentals'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'أنواع الزيوت الأساسية، الإضافات الكيميائية، ودراسة قوام الشحوم (NLGI Grades).' : 'Base oils, chemical additives, and grease consistency (NLGI grades).'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'التخزين والنقل والتناول' : 'Storage, Transport & Handling'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'السيطرة على التلوث، وسيلة الترميز والتلوين (Color-Coding)، وتصميم غرف التزييت.' : 'Contamination control, color-coding systems, and lube room design.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'طرق وممارسات التطبيق' : 'Application Methods & Practices'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'أساليب التزييت التلقائي واليدوي، وتعديل خلوصات وسدادات التشحيم.' : 'Automatic and manual lubrication methods, and adjusting grease fittings/clearances.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'سحب عينات الزيت الميدانية' : 'Field Oil Sampling'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'اختيار صمامات السحب، أدوات Vacuum Pump، والتعامل مع العينات الواردة.' : 'Selecting sampling valves, vacuum pump tools, and handling incoming samples.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الاستعداد لاختبار ICML MLT' : 'ICML MLT Exam Prep'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'حل أسئلة نماذج الامتحانات المعتمدة ومراجعة المحاور الرئيسية لشهادة MLT.' : 'Solving approved sample exam questions and reviewing core MLT domains.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}