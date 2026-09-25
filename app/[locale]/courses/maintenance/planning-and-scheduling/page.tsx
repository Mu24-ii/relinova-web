'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft, Bell } from 'lucide-react';

export default function PlanningSchedulingPage() {
  const locale = useLocale();
  const isArabic = locale === 'ar';

  // 💡 اجعل هذه القيمة (true) إذا كانت الدورة "قريباً في المنصة"، و (false) إذا كانت متاحة للتسجيل
  const isComingSoon = true;

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
            {isArabic ? 'التخطيط والجدولة' : 'Planning & Scheduling'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
              {isArabic ? 'قسم التخطيط والموثوقية' : 'Planning & Reliability Department'}
            </div>

            {/* شارة توضيحية إذا كانت الدورة قريباً */}
            {isComingSoon && (
              <div className="inline-block bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-lg border border-amber-500/35">
                {isArabic ? '⏳ قريباً في المنصة' : '⏳ Coming Soon'}
              </div>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'التخطيط والجدولة (Planning & Scheduling)' : 'Maintenance Planning & Scheduling'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة مهندسي ومخططي الصيانة، ومسؤولي الجدولة الراغبين في رفع كفاءة تنفيذ أعمال الصيانة وتوليد الحد الأقصى من إنتاجية الفنيين والمعدات. تركز الدورة على الانتقال من العمل العشوائي إلى أداء منظم عبر الفصل بين دور المخطط ودور المشرف لتقليل الوقت الضائع (Wrench Time).'
              : 'This course targets maintenance planners, schedulers, and engineers wanting to maximize technician productivity and equipment reliability. It focuses on transitioning from reactive work to organized execution by separating planning from scheduling roles to minimize wrench time.'
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

          {/* التحكم في زر التسجيل بناءً على حالة الدورة */}
          <div className="pt-4 flex flex-col gap-3">
            {isComingSoon ? (
              <div className="space-y-2">
                {/* زر معطل */}
                <button 
                  disabled 
                  className="bg-gray-700/50 text-gray-400 font-bold px-8 py-3 rounded-xl text-sm cursor-not-allowed border border-white/5 flex items-center gap-2 opacity-70"
                >
                  <Bell className="w-4 h-4" />
                  {isArabic ? 'التسجيل غير متاح حالياً' : 'Registration Currently Unavailable'}
                </button>
                {/* نص توضيحي تحت الزر */}
                <p className="text-xs text-amber-400/90 flex items-center gap-1.5 font-medium">
                  <span>✨</span>
                  {isArabic 
                    ? 'هذه الدورة ستتوفر قريباً في المنصة، سيتم فتح باب التسجيل قريباً.' 
                    : 'This course is coming soon. Registration will open shortly.'}
                </p>
              </div>
            ) : (
              <Link 
                href="/checkout?course=planning-scheduling"
                className="bg-[#D9A62E] hover:bg-[#F2C75C] text-[#0B1628] font-bold px-8 py-3 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2 w-fit"
              >
                {isArabic ? 'سجل في الدورة الآن' : 'Enroll in Course'}
                {isArabic ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
              </Link>
            )}
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
              isArabic ? 'مخططو وجدوليو عمليات الصيانة (Maintenance Planners & Schedulers).' : 'Maintenance Planners & Schedulers.',
              isArabic ? 'مهندسو ومشرفو الصيانة والموثوقية (Maintenance & Reliability Supervisors).' : 'Maintenance & Reliability Supervisors.',
              isArabic ? 'مديرو الصيانة والمرافق ورؤساء الأقسام الفنية.' : 'Maintenance Managers and Technical Department Heads.',
              isArabic ? 'الفنيون والأفراد المرشحون للانتقال إلى أدوار تخطيط وتنسيق عمليات الصيانة.' : 'Technicians transitioning into planning and coordination roles.'
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
                title: isArabic ? 'الفصل بين التخطيط والجدولة' : 'Planning vs Scheduling Separation',
                desc: isArabic ? 'فهم المبادئ الستة للتخطيط والمبادئ الستة للجدولة الفعالة.' : 'Understand the six principles of planning and six principles of effective scheduling.'
              },
              {
                title: isArabic ? 'إعداد أكياس العمل (Job Packages)' : 'Job Packages Preparation',
                desc: isArabic ? 'كتابة خطوات العمل القياسية (SOPs)، تحديد قطع الغيار، والأدوات المطلوبة قبل إسناد المهمة.' : 'Write SOPs, identify spare parts, and tools required before task assignment.'
              },
              {
                title: isArabic ? 'إدارة السجل المتبقي (Backlog Management)' : 'Backlog Management',
                desc: isArabic ? 'تصنيف وتنقية وإدارة أوامر العمل المتأخرة أو المعلقة بفاعلية.' : 'Classify, filter, and manage delayed or pending work orders effectively.'
              },
              {
                title: isArabic ? 'حساب وتقليص الوقت الضائع' : 'Wrench Time Optimization',
                desc: isArabic ? 'استخدام أساليب رفع الوقت الفعلي للعمل اليدوي (Wrench Time) من المستويات المتدنية (25-35%) إلى المقاييس العالمية (55%+).' : 'Improve actual wrench time from low levels to world-class metrics (55%+).'
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
                  <td className="p-4 font-semibold text-white">{isArabic ? 'مبادئ التخطيط والجدولة' : 'Planning & Scheduling Principles'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'الفرق بين التخطيط والجدولة، ودور كل منهما في رفع موثوقية الأصول.' : 'The difference between planning and scheduling and their roles in asset reliability.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'دورة أمر العمل (Work Order Cycle)' : 'Work Order Cycle'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'من تقديم طلب الصيانة (Work Request) وحتى إغلاق أمر العمل وتحليل البيانات.' : 'From work request submission to work order closure and data analysis.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'إعداد خطط العمل (Job Planning)' : 'Job Planning'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'التقدير الدقيق للساعات، احتياجات السلامة (LOTO)، والمعدات الخاصة.' : 'Accurate hour estimation, LOTO safety needs, and special equipment.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تطوير الجداول (Scheduling)' : 'Schedule Development'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'التخطيط لأسابيع قادمة، موازنة الأحمال التدريبية والفنية، والجدولة اليومية.' : 'Multi-week planning, workload balancing, and daily scheduling.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'إدارة قطع الغيار والإنتاج' : 'Spare Parts & Production Alignment'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'التنسيق مع المستودعات لضمان توفر المواد (Kitting) والتوافق مع خطط الإنتاج.' : 'Coordination with warehouses for material kitting and production alignment.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'قياس الأداء والتحسين المستمر' : 'Performance & Continuous Improvement'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'متابعة مؤشرات مثل (Schedule Compliance)، و(Backlog Depth)، و(Wrench Time).' : 'Tracking metrics like Schedule Compliance, Backlog Depth, and Wrench Time.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}