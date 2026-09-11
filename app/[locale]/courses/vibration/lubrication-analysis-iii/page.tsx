'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft } from 'lucide-react';

export default function LubricationLevel3CoursePage() {
  const locale = useLocale();
  const isArabic = locale === 'ar';

  return (
    <main className="min-h-screen bg-[#0B1628] text-white py-12 px6 md:px-12" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-5xl mx-auto space-y-12">

        {/* شريط التنقل العلوي (Breadcrumb) */}
        <div className="flex items-center gap-2 text-xs text-[#B8C2D1]">
          <Link href="/courses" className="hover:text-[#D9A62E] transition-colors">
            {isArabic ? 'الدورات التدريبية' : 'Courses'}
          </Link>
          <span>/</span>
          <span className="text-[#D9A62E]">
            {isArabic ? 'تحليل الزيوت والتزييت المستوى الثالث' : 'Lubrication & Oil Analysis Level III'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
            {isArabic ? 'قسم إدارة الأصول الاستراتيجية والمستوى القيادي (Master Level)' : 'Strategic Asset Management & Master Level'}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'تحليل الزيوت والتزييت المستوى الثالث (Lubrication & Oil Analysis III - Master Level)' : 'Lubrication & Oil Analysis Level III (Master Level)'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة مهندسي الموثوقية المتقدمين، خبراء مراقبة الحالة، ومديري الأصول الصناعية الراغبين في التعمق في تحليل الزيوت والتزييت المستوى الثالث لإتقان إدارة البرامج الشاملة، نمذجة الفشل المعقد، وتطبيق تقنيات الفحوصات الجزيئية المتقدمة وتحديد الجذر التراكمي للتآكل.'
              : 'This course targets senior reliability engineers, condition monitoring experts, and industrial asset managers wanting to master Level III oil analysis for comprehensive program management, complex failure modeling, and advanced molecular testing.'
            }
          </p>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 text-xs text-[#B8C2D1]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D9A62E]" />
              <span>{isArabic ? 'المدة: 5 أيام قيادية مكثفة' : 'Duration: 5 Master Intensive Days'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#D9A62E]" />
              <span>{isArabic ? 'شهادة خبير معتمد (توافق ICML MLA III / CLS)' : 'Master Certified (ICML MLA III / CLS Aligned)'}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link 
              href="/checkout?course=lubrication-analysis-3"
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
              isArabic ? 'مهندسو ومحللو الموثوقية والصيانة التنبؤية المتقدمون (Senior Reliability & PdM Engineers).' : 'Senior Reliability & PdM Engineers.',
              isArabic ? 'مديرو مختبرات تحليل الزيوت والمستشارون الفنيون في إدارة الأصول.' : 'Oil analysis lab managers and asset management technical consultants.',
              isArabic ? 'استشاريو تزييت المعدات الكبرى في قطاعات التكرير، التعدين، والبتروكيماويات.' : 'Major equipment lubrication consultants in refining, mining, and petrochemicals.',
              isArabic ? 'المتقدمون لاجتياز الاختبارات العالمية العليا مثل (ICML MLA III / Certified Lubrication Specialist - CLS).' : 'Candidates aiming for elite global certifications like ICML MLA III / CLS.'
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
                title: isArabic ? 'إدارة ومكافحة ظاهرة الـ Varnish' : 'Varnish Mitigation & Control',
                desc: isArabic ? 'فهم آليات تكون الورنيش والرواسب الدقيقة (Thermal Degradation & Micro-Dieseling) وتقنيات إزالتها.' : 'Understand varnish formation mechanics and removal technologies like Electrostatic Oil Cleaners.'
              },
              {
                title: isArabic ? 'الحسابات الإحصائية للحدود الإنذارية' : 'Statistical Alarm Limits',
                desc: isArabic ? 'تطبيق التوزيعات الإحصائية (Cumulative Rate of Change & Standard Deviation) لضبط الحدود التفاعلية.' : 'Apply statistical distributions to set dynamic reactive and predictive alarm boundaries.'
              },
              {
                title: isArabic ? 'تقييم العمر الافتراضي المتبقي (RUL)' : 'Remaining Useful Life (RUL)',
                desc: isArabic ? 'الحساب الرياضي لعمر الزيت والأصل بناءً على معدلات استهلاك الإضافات والإجهاد الحراري.' : 'Mathematical calculation of oil and asset life based on additive consumption rates and thermal stress.'
              },
              {
                title: isArabic ? 'تصميم نظام إدارة المزيتات الشامل' : 'Comprehensive Lube Program Design',
                desc: isArabic ? 'وضع معايير جودة استلام الزيوت الجديدة (Target Cleanliness Levels) وتطبيق معايير الاعتمادية (OEE & LCC).' : 'Set new oil target cleanliness levels and integrate with OEE and Life Cycle Costing.'
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
                  <td className="p-4 font-semibold text-white">{isArabic ? 'كيمياء الأكسدة الحرارية المتقدمة' : 'Advanced Thermal Oxidation'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'دراسة التحلل الحراري للزيوت، التحلل المائي (Hydrolysis)، وآليات تشكل الـ Varnish والجليد.' : 'Study thermal breakdown, hydrolysis, and varnish/sludge formation mechanisms.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تقنيات إزالة الملوثات الدقيقة' : 'Micro-Contaminant Removal'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'أساليب التنظيف الكهرومغناطيسي (Electrostatic Filtration)، التنقية بالتفريغ، وفصل الورنيش.' : 'Electrostatic oil filtration, vacuum dehydration, and varnish separation techniques.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'التحليل الإحصائي المتقدم للبيانات' : 'Advanced Statistical Analysis'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'ضبط الحدود الحدودية الديناميكية (Dynamic Rate of Change Limits) باستخدام الانحراف المعياري.' : 'Setting dynamic rate of change limits using standard deviation and time-series trends.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الاختبارات الجزيئية والدقيقة' : 'Molecular & MPC Testing'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'استخدام (Gas Chromatography - GC)، وسلسلة فحوصات (Membrane Patch Colorimetry - MPC).' : 'Gas Chromatography (GC) and Membrane Patch Colorimetry (MPC) for varnish potential.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'حسابات وتوقع العمر المتبقي (RUL)' : 'Remaining Useful Life (RUL) Modeling'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'الربط بين استهلاك الإضافات الكيميائية (RULER/RPVOT) وتوقع العمر المتبقي للزيت والمعدة.' : 'Relating additive depletion (RULER/RPVOT) to predict remaining oil and asset life.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الحوكمة والتكامل المؤسسي' : 'Governance & Enterprise Integration'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'بناء دليل التزييت الشامل، إدارة الموردين، الربط مع أنظمة SAP/CMMS، وحساب العائد المالي (ROAI).' : 'Building lube manuals, vendor management, SAP/CMMS integration, and ROAI calculations.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}