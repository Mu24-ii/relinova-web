'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft } from 'lucide-react';

export default function SapPmCoursePage() {
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
            {isArabic ? 'إدارة الصيانة عبر نظام SAP PM' : 'SAP PM Course'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
            {isArabic ? 'قسم الأنظمة الهندسية والـ ERP' : 'Engineering Systems & ERP Department'}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'إدارة الصيانة عبر نظام SAP PM (Plant Maintenance)' : 'SAP Plant Maintenance (PM) Management'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة مهندسي الصيانة، المخططين، ومستخدمي أنظمة ERP الراغبين في إتقان إدارة جميع عمليات الصيانة والموثوقية حاسوبياً باستخدام وحدة إدارة الصيانة SAP PM. تركز على هيكلة الأصول الميكانيكية والكهربائية، ربطها بدورة أوامر العمل، والتكامل مع وحدات MM و CO.'
              : 'This course targets maintenance engineers, planners, and ERP users wanting to master computerized maintenance management using SAP PM. It focuses on asset structuring, work order cycles, and integration with MM and CO modules.'
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
              href="/checkout?course=sap-pm"
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
              isArabic ? 'مهندسو ومخططو الصيانة والموثوقية (Maintenance Planners & Engineers).' : 'Maintenance Planners & Engineers.',
              isArabic ? 'مستخدمو نظام SAP ومحللو البيانات في القطاع الصناعي.' : 'SAP users and data analysts in the industrial sector.',
              isArabic ? 'رؤساء أقسام الصيانة والمشرفون الميدانيون.' : 'Maintenance department heads and field supervisors.',
              isArabic ? 'المهتمون بتعلم أتمتة إدارة الأصول عبر أشهر نظام إدارة موارد المؤسسات (ERP) عالمياً.' : 'Professionals interested in enterprise asset management via global ERP systems.'
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
                title: isArabic ? 'هيكلة الأصول (Master Data)' : 'Asset Master Data',
                desc: isArabic ? 'إنشاء وتوزيع مراكز التكلفة، مواقع الوظائف (Functional Locations)، والمعدات (Equipment).' : 'Create and distribute cost centers, functional locations, and equipment.'
              },
              {
                title: isArabic ? 'إدارة أوامر الصيانة' : 'Maintenance Order Management',
                desc: isArabic ? 'إصدار وتتبع طلبات الصيانة (Notifications) وتحويلها إلى أوامر عمل (Work Orders).' : 'Issue and track maintenance notifications and convert them to work orders.'
              },
              {
                title: isArabic ? 'أتمتة خطط PM' : 'PM Plans Automation',
                desc: isArabic ? 'إعداد خطط الصيانة الوقائية والتنبؤية المجدولة زمنياً أو بحسب ساعات التشغيل.' : 'Set up time-based or meter-based preventive and predictive maintenance plans.'
              },
              {
                title: isArabic ? 'ربط قطع الغيار بالتكاليف' : 'Spare Parts & Costs Integration',
                desc: isArabic ? 'صرف المواد والمكونات من المستودعات وحساب تكلفة الصيانة الفعلية على الأصول.' : 'Issue materials from warehouses and calculate actual maintenance costs on assets.'
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
                  <td className="p-4 font-semibold text-white">{isArabic ? 'مقدمة إلى SAP PM' : 'Introduction to SAP PM'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'نظرة عامة على هيكل SAP والتكامل بين PM والوحدات الأخرى (MM, PP, CO).' : 'Overview of SAP structure and integration between PM and other modules.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'البيانات الأساسية (Master Data)' : 'Master Data'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'إنشاء (Functional Location)، (Equipment)، و(Bill of Materials - BOM).' : 'Creating Functional Locations, Equipment, and BOMs.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'طلبات وأوامر الصيانة' : 'Notifications & Orders'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'معالجة (Maintenance Notifications) وإصدار (Work Orders) وإسناد المهام.' : 'Processing Maintenance Notifications, issuing Work Orders, and assigning tasks.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'جدولة الصيانة الوقائية' : 'Preventive Maintenance Scheduling'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'إنشاء (Maintenance Plans) وحزم الصيانة (Task Lists) وتوليد أوامر PM تلقائياً.' : 'Creating Maintenance Plans, Task Lists, and automatically generating PM orders.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'إدارة المواد والتكاليف' : 'Materials & Cost Management'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'ربط قطع الغيار بأوامر العمل، طلب المواد غير المخزنة، وتحليل التكاليف المباشرة.' : 'Linking spare parts to work orders, requesting non-stock items, and cost analysis.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'إغلاق أوامر العمل والتقارير' : 'Order Closure & Reports'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'التوثيق الفني (Technical Completion - TECO)، وحساب المؤشرات الكلية عبر تقارير SAP.' : 'Technical Completion (TECO) and calculating overall metrics through SAP reports.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}