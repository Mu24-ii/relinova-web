'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft } from 'lucide-react';

export default function CMRPCoursePage() {
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
            {isArabic ? 'تحضير شهادة محترف الصيانة المعتمد (CMRP)' : 'CMRP Certification Preparation'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
            {isArabic ? 'قسم الشهادات المهنية العالمية' : 'Global Professional Certifications'}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'تحضير شهادة محترف الصيانة والموثوقية المعتمد (CMRP)' : 'Certified Maintenance & Reliability Professional (CMRP) Prep'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة مهندسي الصيانة والموثوقية، مديري الأصول، والمخططين الراغبين في الاستعداد لاجتياز اختبار شهادة محترف الصيانة والموثوقية المعتمد (CMRP) الصادرة عن الهيئة العالمية للصيانة والموثوقية (SMRP). تغطي الأركان الخمسة لجمعية محترفي الصيانة لربط الاستراتيجيات بالأهداف المالية والتشغيلية للمؤسسات.'
              : 'This course targets maintenance and reliability engineers, asset managers, and planners preparing to pass the Certified Maintenance and Reliability Professional (CMRP) exam issued by SMRP. It covers the 5 pillars of the SMRP Body of Knowledge to align strategies with enterprise financial and operational goals.'
            }
          </p>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 text-xs text-[#B8C2D1]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D9A62E]" />
              <span>{isArabic ? 'المدة: 5 أيام مكثفة' : 'Duration: 5 Intensive Days'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#D9A62E]" />
              <span>{isArabic ? 'شهادة إتمام وتأهل للاختبار' : 'Completion & Exam Prep Certificate'}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link 
              href="/checkout?course=cmrp"
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
              isArabic ? 'مديرو الصيانة والأصول والمرافق (Asset & Maintenance Managers).' : 'Asset & Maintenance Managers.',
              isArabic ? 'مخططو وجدوليو عمليات الصيانة (Planners & Schedulers).' : 'Maintenance Planners & Schedulers.',
              isArabic ? 'المهندسون الراغبون في اعتماد خبراتهم بشهادة عالمية مرموقة في إدارة الأصول والموثوقية.' : 'Engineers wishing to certify their expertise with a prestigious global credential.'
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
                title: isArabic ? 'استيعاب معايير SMRP الخمسة' : 'Mastering the 5 SMRP Pillars',
                desc: isArabic ? 'فهم الاستراتيجيات الشاملة لإدارة الأعمال، موثوقية العمليات، وموثوقية المعدات.' : 'Understand comprehensive strategies for business, process, and equipment reliability.'
              },
              {
                title: isArabic ? 'تطبيق منهجيات الموثوقية' : 'Reliability Methodologies',
                desc: isArabic ? 'استخدام الصيانة المرتكزة على الموثوقية (RCM) وتحليل الأسباب الجذرية للأعطال (RCA).' : 'Apply Reliability-Centered Maintenance (RCM) and Root Cause Analysis (RCA).'
              },
              {
                title: isArabic ? 'إدارة وتخطيط العمليات' : 'Work Management & Planning',
                desc: isArabic ? 'بناء دورة العمل الفعالة وتطبيق أفضل ممارسات التخطيط والجدولة (Work Management).' : 'Build effective work cycles and apply best practices in planning and scheduling.'
              },
              {
                title: isArabic ? 'قياس وتحليل الأداء والقيادة' : 'Performance KPIs & Leadership',
                desc: isArabic ? 'تتبع مؤشرات مثل OEE وMTBF وMTTR وبناء الهياكل التنظيمية وتوجيه فرق العمل.' : 'Track OEE, MTBF, MTTR, build organizational structures, and lead reliability culture.'
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

        {/* مواضيع الدورة (الجدول بناءً على SMRP Pillars) */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
            <Award className="w-5 h-5 text-[#D9A62E]" />
            {isArabic ? 'أركان شهادة CMRP ومحاور الدورة' : 'SMRP Pillars & Course Syllabus'}
          </h2>
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#142238]">
            <table className={`w-full ${isArabic ? 'text-right' : 'text-left'} border-collapse`}>
              <thead>
                <tr className="bg-[#0b1628] text-[#D9A62E] text-xs uppercase tracking-wider border-b border-white/10">
                  <th className="p-4 font-bold w-1/3">{isArabic ? 'المحور (SMRP Pillar)' : 'SMRP Pillar'}</th>
                  <th className="p-4 font-bold w-2/3">{isArabic ? 'الموضوع التفصيلي' : 'Detailed Topic'}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-xs text-[#B8C2D1]">
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? '1. Business & Management' : '1. Business & Management'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'ربط الصيانة بأهداف الشركة المالية، إعداد الميزانيات، وحساب العائد على الاستثمار (ROI).' : 'Linking maintenance to corporate financial goals, budgeting, and ROI calculation.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? '2. Process Reliability' : '2. Process Reliability'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'تحليل تدفق الإنتاج، تحسين كفاءة العمليات، وتأثير الصيانة على الجودة والإنتاجية.' : 'Production flow analysis, process efficiency, and impact on quality and output.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? '3. Equipment Reliability' : '3. Equipment Reliability'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'استراتيجيات موثوقية المعدات، منحنى P-F، الصيانة الوقائية والتنبؤية، وتحديد خطط الصيانة.' : 'Equipment reliability strategies, P-F curve, PM/PdM, and maintenance planning.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? '4. Organization & Leadership' : '4. Organization & Leadership'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'القيادة، تطوير مهارات الفريق، إدارة التغيير المؤسسي، وتحسين التواصل.' : 'Leadership, team skill development, organizational change management, and communication.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? '5. Work Management' : '5. Work Management'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'دورة أمر العمل الكاملة، إدارة السجل المتبقي (Backlog)، والتخطيط والجدولة الفعالة.' : 'Complete work order lifecycle, backlog management, and effective planning & scheduling.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}