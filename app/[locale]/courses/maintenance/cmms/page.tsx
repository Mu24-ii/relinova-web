'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft } from 'lucide-react';

export default function CMMSCoursePage() {
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
            {isArabic ? 'نظام إدارة الصيانة الحاسوبي (CMMS)' : 'CMMS Course'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
            {isArabic ? 'قسم الصيانة والتشغيل' : 'Maintenance & Operations Department'}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'نظام إدارة الصيانة الحاسوبي (CMMS)' : 'Computerized Maintenance Management System (CMMS)'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة مهندسي ومحليلي الصيانة، المخططين، ومديري الأصول الراغبين في أتمتة إدارة عمليات الصيانة وتحويل البيانات التشغيلية إلى قرارات استراتيجية. تركز الدورة على استخدام النظام كأداة مركزية لإدارة دورة حياة الأصول وتحويل العمليات اليدوية إلى نظام رقمي متكامل.'
              : 'This course targets maintenance engineers, analysts, planners, and asset managers looking to automate maintenance operations and turn operational data into strategic decisions. It focuses on using CMMS as a central tool for asset lifecycle management.'
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
              href="/checkout?course=cmms"
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
              isArabic ? 'مهندسو ومخططو الصيانة (Maintenance Planners & Schedulers).' : 'Maintenance Planners & Schedulers.',
              isArabic ? 'مديرو الصيانة والمرافق (Facility & Maintenance Managers).' : 'Facility & Maintenance Managers.',
              isArabic ? 'فنيو ومُشغلو أنظمة إدارة الأصول الرقمية.' : 'Digital asset management system operators & technicians.',
              isArabic ? 'المهتمون بالتحول الرقمي في قطاع إدارة التشغيل والموثوقية.' : 'Professionals interested in digital transformation within operations & reliability.'
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
                title: isArabic ? 'إدارة أوامر العمل الرقمية' : 'Digital Work Order Management',
                desc: isArabic ? 'إنشاء، تتبع، وإغلاق أوامر العمل الإلكترونية بفاعلية تامة.' : 'Effectively create, track, and close electronic work orders.'
              },
              {
                title: isArabic ? 'أتمتة الصيانة الوقائية (PM Automation)' : 'PM Automation',
                desc: isArabic ? 'إعداد التنبيهات والجداول الآلية المستندة إلى الوقت أو ساعات التشغيل.' : 'Set up automated alerts and schedules based on time or operating hours.'
              },
              {
                title: isArabic ? 'إدارة المخزون وقطع الغيار' : 'Inventory & Spare Parts Management',
                desc: isArabic ? 'تتبع المكونات والمستهلكات وتقليل تكاليف التخزين المفرط أو النقص الحاد.' : 'Track components and consumables while minimizing excess or shortages.'
              },
              {
                title: isArabic ? 'قياس وتحليل الأداء' : 'Performance Analysis (KPIs)',
                desc: isArabic ? 'استخراج تقارير الموثوقية لحساب مؤشرات مثل (MTBF) و(MTTR).' : 'Extract reliability reports to calculate MTBF and MTTR metrics.'
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
                  <td className="p-4 font-semibold text-white">{isArabic ? 'أساسيات نظام CMMS' : 'CMMS Basics'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'المفهوم، الأهداف، وكيفية اختيار النظام المناسب للمنشأة.' : 'Concepts, objectives, and choosing the right system for the facility.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'سجل الأصول (Asset Registry)' : 'Asset Registry'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'هيكلة الأصول، الترميز (Tagging)، وتتبع تاريخ الصيانة لكل معدة.' : 'Asset structuring, tagging, and tracking maintenance history.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'إدارة أوامر العمل (Work Orders)' : 'Work Order Management'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'طلب الخدمة، التكاليف، التخصيص، وتتبع تنفيذ المهام.' : 'Service requests, costs, allocation, and task execution tracking.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الصيانة الوقائية والتنبؤية' : 'PM & PdM Integration'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'ربط جداول PM ونتائج فحوصات PdM بالنظام الآلي.' : 'Linking PM schedules and PdM results to the automated system.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'إدارة قطع الغيار والمستودعات' : 'Spare Parts & Inventory'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'ربط أجزاء المعدات (BOM)، حد إعادة الطلب، وتكاليف المواد.' : 'Linking Bill of Materials (BOM), reorder points, and material costs.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'التقارير ومؤشرات الأداء (KPIs)' : 'Reports & KPIs'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'تحليل زمن التوقف، مؤشر MTBF وMTTR، وتكلفة الصيانة الإجمالية.' : 'Downtime analysis, MTBF & MTTR indicators, and total maintenance costs.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}