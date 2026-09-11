'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft } from 'lucide-react';

export default function IndustrialPumpsCoursePage() {
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
            {isArabic ? 'صيانة وإصلاح المضخات الصناعية' : 'Industrial Pumps Maintenance'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
            {isArabic ? 'قسم صيانة المعدات الدوارة وأنظمة الضخ' : 'Rotating Equipment & Pumping Systems'}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'صيانة وإصلاح المضخات الصناعية (Industrial Pumps Maintenance & Repair)' : 'Industrial Pumps Maintenance & Repair'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة مهندسي الصيانة الميكانيكية، الفنيين الميدانيين، ومحليلي الاعتمادية الراغبين في التعمق في صيانة وفحص وإصلاح المضخات الصناعية لضمان استقرار تدفق السوائل ومنع التوقفات التشغيلية.'
              : 'This course targets mechanical maintenance engineers, field technicians, and reliability analysts wanting to master the maintenance, inspection, and repair of industrial pumps to ensure stable fluid flow and prevent operational downtime.'
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
              href="/checkout?course=industrial-pumps"
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
              isArabic ? 'مهندسو الصيانة الميكانيكية والموثوقية (Mechanical & Reliability Engineers).' : 'Mechanical & Reliability Engineers.',
              isArabic ? 'فنيو صيانة المعدات الدوارة والمشرفون الميدانيون.' : 'Rotating equipment maintenance technicians & field supervisors.',
              isArabic ? 'مهندسو التشغيل والعمليات في محطات المياه، النفط والغاز، والمصانع الكيميائية.' : 'Operations engineers in water, oil & gas, and chemical plants.',
              isArabic ? 'المسؤولون عن اختيار وتشغيل أنظمة ضخ السوائل وإدارة الأصول.' : 'Personnel responsible for liquid pumping systems and asset management.'
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
                title: isArabic ? 'تصنيف وفهم أنواع المضخات' : 'Pumps Classification',
                desc: isArabic ? 'التمييز بين مضخات الطرد المركزي، المضخات الترددية (Reciprocating)، والمضخات الدوارة (Gear/Screw Pumps).' : 'Differentiate between centrifugal, reciprocating, and rotary gear/screw pumps.'
              },
              {
                title: isArabic ? 'قراءة المنحنيات الهيدروليكية' : 'Hydraulic Performance Curves',
                desc: isArabic ? 'فهم منحنى الأداء (Pump Performance Curve)، نقطة الكفاءة القصوى (BEP)، وهيد الضخ الإيجابي المطلق (NPSHa vs NPSHr).' : 'Understand pump curves, BEP, and NPSHa vs NPSHr calculations.'
              },
              {
                title: isArabic ? 'تشخيص ظاهرة التكهف (Cavitation)' : 'Cavitation Diagnosis',
                desc: isArabic ? 'التعرف على علامات التكهف الهيدروليكي، أسبابه، وكيفية حماية الدشات (Impellers) من التآكل والنخر.' : 'Identify hydraulic cavitation signs, root causes, and protect impellers from erosion.'
              },
              {
                title: isArabic ? 'الفحص الميكانيكي والمحاذاة' : 'Mechanical Inspection & Alignment',
                desc: isArabic ? 'ضبط الاستقامة بالليزر (Laser Alignment)، ضبط خلوص كراسي التحميل، وتركيب مانعات التسرب (Mechanical Seals).' : 'Perform laser alignment, set bearing clearances, and install mechanical seals.'
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
                  <td className="p-4 font-semibold text-white">{isArabic ? 'أساسيات هيدروليكا الضخ' : 'Pumping Hydraulics'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'مبادئ التدفق، التدفق الحجمي، الهيد الكلي (Total Dynamic Head)، وحسابات NPSH.' : 'Flow principles, volumetric flow, Total Dynamic Head (TDH), and NPSH calculations.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'مضخات الطرد المركزي (Centrifugal)' : 'Centrifugal Pumps'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'المكونات الرئيسية (Impeller, Volute Casing, Wear Rings, Shaft)، والأنواع (Single vs Multi-stage).' : 'Main components (impeller, volute casing, wear rings, shaft) and single vs multi-stage types.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'مضخات الإزاحة الموجبة (PD Pumps)' : 'Positive Displacement Pumps'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'المضخات الترسية، اللولبية، والغشائية (Diaphragm): آلية العمل وتطبيقاتها.' : 'Gear, screw, and diaphragm pumps: operating principles and applications.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الأعطال الهيدروليكية والميكانيكية' : 'Hydraulic & Mechanical Faults'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'تشخيص التكهف (Cavitation)، إعادة الدوران الداخلي (Recirculation)، والتحميل الزائد.' : 'Diagnosing cavitation, internal recirculation, and overload conditions.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الصيانة والتركيب الميداني' : 'Field Maintenance & Overhaul'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'خطوات الفك والتجميع، ضبط خلوص حلقات التآكل (Wear Rings)، والمحاذاة الدقيقة.' : 'Disassembly/assembly steps, adjusting wear ring clearances, and precision alignment.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الموثوقية وخطط PM' : 'Reliability & PM Plans'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'مراقبة الاهتزازات، درجات حرارة المحامل، وإعداد قوائم الفحص الدوري بنظام CMMS.' : 'Vibration monitoring, bearing temperatures, and CMMS recurring inspection checklists.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}