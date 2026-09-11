'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft } from 'lucide-react';

export default function IndustrialTurbinesCoursePage() {
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
            {isArabic ? 'صيانة وإدارة موثوقية التوربينات الصناعية' : 'Industrial Turbines Maintenance'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
            {isArabic ? 'قسم صيانة الأصول الحرجة والمعدات الدوارة الثقيلة' : 'Critical Assets & Heavy Rotating Machinery'}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'صيانة وإدارة موثوقية التوربينات الصناعية (Industrial Turbines Maintenance & Reliability)' : 'Industrial Turbines Maintenance & Reliability'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة مهندسي الصيانة الميكانيكية، مشغلي محطات الطاقة، ومحليلي الأعطال الراغبين في التعمق في صيانة وفحص وإدارة موثوقية التوربينات الصناعية بجميع أنواعها لضمان الاستقرار التشغيلي وتجنب الانهيارات الكارثية.'
              : 'This course targets mechanical maintenance engineers, power plant operators, and failure analysts wanting to master the maintenance, inspection, and reliability management of industrial turbines to ensure operational stability and prevent catastrophic failures.'
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

          <div className="pt-4 flex flex-wrap gap-4">
            <Link 
              href="/checkout?course=industrial-turbines"
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
              isArabic ? 'مهندسو ومشاركو الفحص والاختبارات اللاإتلافية (NDT Technicians).' : 'NDT inspectors and testing engineers.',
              isArabic ? 'مشغلو ومهندسو العمليات في محطات توليد الكهرباء والقطاعات البتروكيماوية.' : 'Operations engineers in power generation and petrochemical plants.',
              isArabic ? 'قادة الفرق الميدانية المسئولون عن إدارة عمليات العمرات الجسيمة (Major Overhauls).' : 'Field team leaders responsible for major overhaul management.'
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
                title: isArabic ? 'التصنيف والتصميم الفني' : 'Turbines Design & Classification',
                desc: isArabic ? 'التمييز بين التوربينات الغازية والبخارية، وفهم أنواع الدفع (Impulse) والتفاعل (Reaction).' : 'Differentiate between gas and steam turbines, understanding impulse and reaction stages.'
              },
              {
                title: isArabic ? 'فحص ومعالجة الأرياش (Blading & Rotor)' : 'Blading & Rotor Inspection',
                desc: isArabic ? 'اكتشاف النقر والتآكل (Erosion, Corrosion, Creep)، وتطبيق اختبارات NDT (Dye Penetrant, Ultrasonic).' : 'Detect erosion, corrosion, and creep, and apply NDT tests (PT, UT).'
              },
              {
                title: isArabic ? 'أنظمة التزييت والتحكم الهيدروليكي' : 'Lube & Hydraulic Control Systems',
                desc: isArabic ? 'صيانة أنظمة زيت التزييت والتحكم (Governor Systems) واختبار صمامات الأمان والسرعة الزائدة.' : 'Maintain lubrication and hydraulic control systems, testing over-speed trip valves.'
              },
              {
                title: isArabic ? 'إدارة العمرات الشاملة (Major Overhauls)' : 'Major Overhauls Management',
                desc: isArabic ? 'خطوات رفع الأغطية (Casing Removal)، استخراج الروتور (Rotor Lifting)، وتعديل الخلوصات.' : 'Steps for casing removal, rotor lifting, and clearance adjustments.'
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
                  <td className="p-4 font-semibold text-white">{isArabic ? 'أساسيات التوربينات' : 'Turbines Fundamentals'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'الديناميكا الحرارية، دورة برايتون (Brayton Cycle) ودورة رانكن (Rankine Cycle).' : 'Thermodynamics, Brayton cycle, and Rankine cycle principles.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'التوربينات البخارية (Steam Turbines)' : 'Steam Turbines'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'المكونات، الصمامات الرئيسية (Stop/Control Valves)، والمناخات الحرارية والتكثيف.' : 'Components, main stop/control valves, thermal behavior, and condensation.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'التوربينات الغازية (Gas Turbines)' : 'Gas Turbines'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'المكبس (Compressor Section)، غرف الاحتراق (Combustors)، والجزء الحراري (Hot Gas Path).' : 'Compressor section, combustors, and Hot Gas Path (HGP).'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الكراسي والأنظمة المساعدة' : 'Bearings & Aux Systems'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'كراسي التحميل الانزلاقية (Journal Bearings)، منع التسريب الغازي (Labyrinth Seals)، وزيت هيدروليك التحكم.' : 'Journal/thrust bearings, labyrinth seals, and hydraulic control oil.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الفحص والاختبارات' : 'Inspection & NDT Testing'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'الفحص البصري المتقدم (Borescope Inspection)، واختبارات الشروخ والتعب المعدني.' : 'Advanced borescope inspection, cracking tests, and metal fatigue checks.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الصيانة والموثوقية' : 'Maintenance & Reliability'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'أسلوب إدارة العمرات والمحاذاة الدقيقة، وحساب العائد ومعدلات الاعتمادية (Availability).' : 'Overhaul management methodology, precise alignment, and availability calculations.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}