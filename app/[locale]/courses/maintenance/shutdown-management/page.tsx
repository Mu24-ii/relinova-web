'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft } from 'lucide-react';

export default function ShutdownManagementPage() {
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
            {isArabic ? 'إدارة عمليات الإيقاف الشامل (STO)' : 'Shutdown Management'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
            {isArabic ? 'قسم المشاريع وإدارة الأصول' : 'Projects & Asset Management Department'}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'إدارة عمليات الإيقاف الشامل (Shutdown Management - STO)' : 'Shutdown, Turnaround & Outage (STO) Management'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة مهندسي الصيانة، المخططين، ومديري المشاريع المسئولين عن إدارة وتنفيذ عمليات الإيقاف الشامل (STO) للمنشآت والمعدات الصناعية. تركز على التخطيط المسبق، إدارة النطاق، تخصيص الموارد، والسيطرة على الجداول الزمنية والميزانيات لضمان التنفيذ بأمان وفي أقصر وقت.'
              : 'This course targets maintenance engineers, planners, and project managers responsible for executing Shutdowns, Turnarounds, and Outages (STO) in industrial facilities. It focuses on advanced planning, scope control, resource allocation, and budget management.'
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
              href="/checkout?course=shutdown-management"
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
              isArabic ? 'مهندسو ومخططو الصيانة والموثوقية (Maintenance & Reliability Engineers).' : 'Maintenance & Reliability Engineers.',
              isArabic ? 'مديرو وقادة مشاريع الإيقاف الشامل (STO Managers & Leads).' : 'STO Managers & Project Leads.',
              isArabic ? 'مخططو وجدوليو المشاريع (Project Planners & Schedulers).' : 'Project Planners & Schedulers.',
              isArabic ? 'فنيو ومشرفو السلامة والتشغيل في القطاعات الصناعية.' : 'Safety and Operations Supervisors in industrial sectors.'
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
                title: isArabic ? 'التخطيط المبكر والجدولة' : 'Early Planning & Scheduling',
                desc: isArabic ? 'بناء جداول زمنية دقيقة لعمليات STO باستخدام المسار الحرج (Critical Path Method).' : 'Build precise STO timelines using the Critical Path Method (CPM).'
              },
              {
                title: isArabic ? 'إدارة نطاق العمل (Scope Control)' : 'Scope Control',
                desc: isArabic ? 'تحديد وتنقية المهام المطلوبة منعاً للتوسع غير المخطط (Scope Creep).' : 'Define and filter required tasks to prevent Scope Creep.'
              },
              {
                title: isArabic ? 'إدارة المخاطر والسلامة' : 'Risk & Safety Management',
                desc: isArabic ? 'تطبيق إجراءات السلامة المشددة (HSE) وإيقاف وتشغيل المعدات بآمان.' : 'Apply stringent HSE procedures and safe asset isolation/startup.'
              },
              {
                title: isArabic ? 'التحكم في التكاليف والموارد' : 'Cost & Resource Control',
                desc: isArabic ? 'إدارة المقاولين، وتأمين قطع الغيار والمعدات الثقيلة قبل بدء الإيقاف.' : 'Manage contractors and secure heavy equipment and long-lead spares.'
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
                  <td className="p-4 font-semibold text-white">{isArabic ? 'مقدمة ومراحل STO' : 'STO Lifecycle'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'دورة حياة الإيقاف الشامل من التخطيط المسبق إلى إعادة التشغيل.' : 'The turnaround lifecycle from preliminary planning to restart.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تحديد نطاق العمل' : 'Scope Definition'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'حصر المهام المطلوبة، المراجعة الفنية، وتجميد النطاق (Scope Freeze).' : 'Task inventory, technical review, and Scope Freeze implementation.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'التخطيط والتجهيز' : 'Planning & Preparation'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'تقدير مدد العمل، طلب قطع الغيار طويلة الأجل، وتعيين المقاولين.' : 'Estimating durations, ordering long-lead spares, and assigning contractors.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'إدارة المخاطر والسلامة' : 'Risk & Safety (HSE/LOTO)'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'خطط السلامة، تصاريح العمل (Permits)، وعزل الطاقة (LOTO).' : 'Safety plans, Work Permits, and Lockout/Tagout (LOTO) protocols.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'التنفيذ والتحكم' : 'Execution & Control'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'متابعة التقدم اليومي، إدارة التغيير (Change Management)، وإزالة الاختناقات.' : 'Daily progress tracking, Change Management, and bottleneck removal.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'إعادة التشغيل والتقييم' : 'Startup & Evaluation'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'مراجعة ما قبل التشغيل (PSSR)، إغلاق التكاليف، وتقييم مؤشرات الأداء.' : 'Pre-Startup Safety Review (PSSR), cost closeout, and KPI evaluation.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}