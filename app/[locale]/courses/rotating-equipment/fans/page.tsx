'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft } from 'lucide-react';

export default function FansBlowersTechCoursePage() {
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
            {isArabic ? 'صيانة وموازنة المراوح والمنفاخات الصناعية' : 'Industrial Fans & Blowers Maintenance'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
            {isArabic ? 'قسم المعدات الدوارة وتقنيات الموازنة الديناميكية' : 'Rotating Equipment & Dynamic Balancing'}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'صيانة وموازنة المراوح والمنفاخات الصناعية (Industrial Fans & Blowers)' : 'Industrial Fans & Blowers Maintenance & Balancing'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة مهندسي الصيانة الميكانيكية، فنيي التهوية والمعدات الدوارة، ومحليلي الاعتمادية الراغبين في التعمق في صيانة وفحص والموازنة الديناميكية للمراوح والمنفاخات الصناعية لضمان استقرار سريان الهواء والغازات وتجنب الأعطال الناجمة عن اهتزازات الريش.'
              : 'This course targets mechanical maintenance engineers, HVAC and rotating equipment technicians, and reliability analysts wanting to master the maintenance, inspection, and dynamic balancing of industrial fans and blowers to ensure reliable gas/air flow and prevent blade-induced vibration failures.'
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
              href="/checkout?course=fans-blowers-technology"
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
              isArabic ? 'فنيو صيانة المعدات الدوارة وأنظمة التهوية والتكييف (HVAC & Rotating Equipment Technicians).' : 'HVAC & Rotating Equipment Technicians.',
              isArabic ? 'مهندسو العمليات التشغيلية في المنشآت الصناعية ومحطات الطاقة والمسبوكات.' : 'Operational process engineers in industrial plants and power stations.',
              isArabic ? 'قادة الفرق الميدانية المسئولون عن موازنة المحاور (Alignment) والموازنة الديناميكية (Dynamic Balancing).' : 'Field team leaders responsible for shaft alignment & dynamic balancing.'
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
                title: isArabic ? 'التصنيف واستخدامات الأنواع' : 'Fans Classification',
                desc: isArabic ? 'فهم الفروق بين المراوح المحورية (Axial) والطاردة المركزية (Centrifugal - Forward/Backward Curved).' : 'Understand differences between axial and centrifugal fans (forward/backward curved).'
              },
              {
                title: isArabic ? 'إجراء الموازنة الديناميكية (Field Balancing)' : 'Field Dynamic Balancing',
                desc: isArabic ? 'حساب وتصحيح اختلال التوازن (Unbalance) في ريش المروحة باستخدام أجهزة قياس الاهتزازات.' : 'Calculate and correct unbalance in fan blades using vibration analyzers.'
              },
              {
                title: isArabic ? 'فحص ومحاذاة أنظمة نقل الحركة' : 'Drive Systems & Laser Alignment',
                desc: isArabic ? 'ضبط شد السيور (V-Belt Tension) والمحاذاة بالليزر للكوابل ومحاور الدوران.' : 'Adjust V-belt tension and perform laser alignment for couplings and shafts.'
              },
              {
                title: isArabic ? 'معالجة مشاكل السريان والاهتزاز' : 'Flow & Vibration Troubleshooting',
                desc: isArabic ? 'تشخيص ظواهر التحويم الفجائي (Stall & Surge) واهتزازات الهيكل الأساسي (Resonant Structure).' : 'Diagnose stall & surge phenomena and structural resonance vibrations.'
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
                  <td className="p-4 font-semibold text-white">{isArabic ? 'أنواع وتصميم المراوح' : 'Fans Design & Types'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'نظرة عامة على (Centrifugal vs Axial Fans)، منحنيات الأداء (Fan Curves)، والنقاط التشغيلية.' : 'Overview of centrifugal vs axial fans, fan curves, and operating points.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'المكونات والنقل الميكانيكي' : 'Components & Drive Systems'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'فحص العجلات (Impellers)، الأكس (Shafts)، الكوابل (Couplings)، وسيور نقل الحركة (Belts & Pulleys).' : 'Inspection of impellers, shafts, couplings, and belts & pulleys.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تحليل اهتزازات المراوح' : 'Fans Vibration Analysis'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'تشخيص مشاكل عدم الاتزان (Unbalance)، سوء المحاذاة (Misalignment)، وارتخاء القاعدة (Mechanical Looseness).' : 'Diagnosing unbalance, misalignment, and mechanical looseness.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تقنيات الموازنة الميدانية' : 'Field Balancing Techniques'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'تطبيق الموازنة أحادية وثنائية المستوى (Single & Two-Plane Field Balancing) بوضع أوزان تصحيحية.' : 'Applying single and two-plane field balancing with corrective weights.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الصيانة الوقائية والبيئية' : 'Preventive & Environmental PM'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'معالجة التآكل وتجمع الرواسب على الريش، التشحيم الدقيق للمحامل، وضوابط السلامة.' : 'Handling blade erosion/buildup, precise bearing lubrication, and safety controls.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}