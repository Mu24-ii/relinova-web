'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft, Bell } from 'lucide-react';

export default function RCACoursePage() {
  const locale = useLocale();
  const isArabic = locale === 'ar';

  // 💡 اجعل هذه القيمة (true) إذا كانت الدورة "قريباً في المنصة"، و (false) إذا كانت متاحة للتسجيل
  const isComingSoon = false;

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
            {isArabic ? 'تحليل السبب الجذر (RCA)' : 'RCA Course'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
              {isArabic ? 'قسم تحقيقات الأعطال وحل المشكلات الهندسية' : 'Failure Investigation & Problem Solving'}
            </div>

            {/* شارة توضيحية إذا كانت الدورة قريباً */}
            {isComingSoon && (
              <div className="inline-block bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-lg border border-amber-500/35">
                {isArabic ? '⏳ قريباً في المنصة' : '⏳ Coming Soon'}
              </div>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'تحليل السبب الجذر (Root Cause Analysis - RCA)' : 'Root Cause Analysis (RCA)'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة مهندسي الصيانة والموثوقية، ومديري الجودة والتشغيل الراغبين في إتقان منهجيات تحليل السبب الجذر (RCA) للتحقيق في الأعطال وحل المشكلات التشغيلية بأسلوب علمي يضمن عدم تكرارها والتحول من المعالجة السطحية للأعراض إلى القضاء النهائي على أسباب الفشل.'
              : 'This course targets maintenance, reliability, quality, and operations engineers wanting to master Root Cause Analysis (RCA) methodologies to investigate failures, solve operational problems scientifically, and eliminate root causes permanently.'
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
                <button 
                  disabled 
                  className="bg-gray-700/50 text-gray-400 font-bold px-8 py-3 rounded-xl text-sm cursor-not-allowed border border-white/5 flex items-center gap-2 opacity-70"
                >
                  <Bell className="w-4 h-4" />
                  {isArabic ? 'التسجيل غير متاح حالياً' : 'Registration Currently Unavailable'}
                </button>
                <p className="text-xs text-amber-400/90 flex items-center gap-1.5 font-medium">
                  <span>✨</span>
                  {isArabic 
                    ? 'هذه الدورة ستتوفر قريباً في المنصة، سيتم فتح باب التسجيل قريباً.' 
                    : 'This course is coming soon. Registration will open shortly.'}
                </p>
              </div>
            ) : (
              <Link 
                href="/checkout?course=rca"
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
              isArabic ? 'مهندسو ومحللو الصيانة والموثوقية (Maintenance & Reliability Engineers).' : 'Maintenance & Reliability Engineers & Analysts.',
              isArabic ? 'مهندسو سلامة وضمان الجودة والعمليات (HSE & Quality Engineers).' : 'HSE, Quality, and Process Engineers.',
              isArabic ? 'مشرفو الفرق الميدانية وقادة خطوط الإنتاج.' : 'Field team supervisors and production line leaders.',
              isArabic ? 'المحققون الفنيون المسئولون عن تحليل الحوادث والأعطال الكبرى في المنشآت الصناعية.' : 'Technical investigators responsible for major industrial incident analysis.'
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
                title: isArabic ? 'تطبيق أدوات التحليل الرئيسية' : 'Mastering Core Analysis Tools',
                desc: isArabic ? 'إتقان أدوات مثل 5-Whys، مخطط عظم السمكة (Ishikawa)، وشجرة تحليل الأعطال (Fault Tree Analysis).' : 'Master tools like 5-Whys, Ishikawa diagram, and Fault Tree Analysis (FTA).'
              },
              {
                title: isArabic ? 'جمع الأدلة والبيانات الميدانية' : 'Field Data Collection',
                desc: isArabic ? 'تقنيات الاستجابة السريعة فور وقوع العطل لجمع البيانات والعينات غير المتغيرة.' : 'Rapid response techniques upon failure to gather perishable data and samples.'
              },
              {
                title: isArabic ? 'التصنيف الثلاثي للأسباب' : 'Triple Causation Classification',
                desc: isArabic ? 'التمييز بين الأسباب الفيزيائية، البشرية، والنظامية/الإدارية (Latent Root Causes).' : 'Differentiate between physical, human, and systemic/latent root causes.'
              },
              {
                title: isArabic ? 'صياغة التوصيات والتقارير' : 'Recommendations & Reporting',
                desc: isArabic ? 'وضع حلول جذرية وتقييم أثرها، وإعداد تقارير احترافية لتعزيز التعلم المؤسسي.' : 'Develop radical solutions, assess impact, and create professional reports for organizational learning.'
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
                  <td className="p-4 font-semibold text-white">{isArabic ? 'المبادئ والمفاهيم' : 'Principles & Concepts'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'مفهوم RCA، الفرق بين السبب والمظهر، وأهمية التحليل لرفع الموثوقية.' : 'RCA concept, difference between cause and symptom, and importance for reliability.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'جمع وتجهيز البيانات' : 'Data Collection'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'الاستجابة الأولية للعطل، المقابلات الفنية، وتوثيق الأدلة الميدانية.' : 'Initial failure response, technical interviews, and field evidence documentation.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'أدوات RCA المتقدمة' : 'Advanced RCA Tools'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'تطبيق منهجية 5-Whys، Ishikawa Diagram، وFault Tree Analysis (FTA).' : 'Applying 5-Whys, Ishikawa Diagram, and Fault Tree Analysis (FTA).'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تحليل السبب الجذر' : 'Root Cause Analysis'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'الوصول للأسباب الميكانيكية والإدارية وتحديد الهشاشة في أنظمة الصيانة.' : 'Reaching mechanical and management causes and identifying maintenance vulnerabilities.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'التوصيات والتحسين المستمر' : 'Recommendations & Improvement'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'وضع الخطط التصحيحية، متابعة التنفيذ، وربط المخرجات بنظام CMMS.' : 'Developing corrective plans, tracking implementation, and linking outputs to CMMS.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}