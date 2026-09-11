'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft } from 'lucide-react';

export default function PredictiveMaintenancePage() {
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
            {isArabic ? 'الصيانة التنبؤية' : 'Predictive Maintenance'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
            {isArabic ? 'قسم الصيانة والتشغيل' : 'Maintenance & Operations Department'}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'الصيانة التنبؤية' : 'Predictive Maintenance'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة الفنيين والمهندسين الراغبين في الانتقال من جدول الصيانة التقليدي إلى استخدام التقنيات الحديثة لمراقبة صحة المعدات والتنبؤ بالأعطال قبل حدوثها. تركز الدورة على مفهوم الصيانة التنبؤية القائمة على مراقبة الحالة الفعلية للمعدة أثناء التشغيل لتحديد مؤشرات التآكل المبكر.'
              : 'This course targets technicians and engineers looking to transition from traditional maintenance schedules to using modern technologies for monitoring equipment health and predicting failures before they occur. It focuses on condition-based maintenance concepts during operation to detect early wear indicators.'
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
              href="/checkout?course=predictive-maintenance"
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
              isArabic ? 'مهندسو وفنيو الصيانة والموثوقية (Reliability Engineers).' : 'Reliability Engineers & Maintenance Technicians.',
              isArabic ? 'مهندسو ومحللو الاهتزازات واختبارات المعدات بدون إتلاف (NDT).' : 'Vibration Analysts and NDT Engineers.',
              isArabic ? 'مخططو الصيانة ومشغلو الأنظمة الميكانيكية والكهربائية.' : 'Maintenance Planners and Electro-Mechanical System Operators.',
              isArabic ? 'الطلاب والمتخصصون المهتمون بتطبيقات تقنيات مراقبة الحالة (Condition Monitoring).' : 'Students and professionals interested in Condition Monitoring applications.'
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
                title: isArabic ? 'تقنيات مراقبة الحالة' : 'Condition Monitoring Techs',
                desc: isArabic ? 'فهم واستخدام أدوات قياس الاهتزاز (Vibration Analysis)، التصوير الحراري (Thermography)، وتحليل الزيوت (Oil Analysis).' : 'Understand and use tools like Vibration Analysis, Thermography, and Oil Analysis.'
              },
              {
                title: isArabic ? 'تفسير البيانات التشغيلية' : 'Operational Data Interpretation',
                desc: isArabic ? 'قراءة الإشارات والتحليلات لاكتشاف مشاكل عدم التوازن (Unbalance)، سوء المحاذاة (Misalignment)، وتآكل المحامل (Bearings).' : 'Read signals to detect unbalance, misalignment, and bearing wear.'
              },
              {
                title: isArabic ? 'إدارة منحنى P-F' : 'P-F Curve Management',
                desc: isArabic ? 'تحديد نقطة بداية التدهور (Potential Failure) للتدخل في الوقت المناسب قبل الفشل الفعلي (Functional Failure).' : 'Identify the Potential Failure point for timely intervention before functional failure.'
              },
              {
                title: isArabic ? 'خفض التكاليف التشغيلية' : 'Cost Reduction',
                desc: isArabic ? 'تقليل التوقفات المباشرة وغير المباشرة وإطالة عمر الأجزاء الميكانيكية المجهدة.' : 'Minimize direct/indirect downtime and extend the life of stressed mechanical parts.'
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
                  <td className="p-4 font-semibold text-white">{isArabic ? 'مقدمة إلى PdM' : 'Introduction to PdM'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'الفلسفة والفرق بين PM وPdM ومفهوم منحنى P-F.' : 'Philosophy, differences between PM & PdM, and the P-F curve concept.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تحليل الاهتزازات (Vibration Analysis)' : 'Vibration Analysis'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'الأساسيات، أنواع المستشعرات، وتشخيص أعطال المحامل والتروس.' : 'Basics, sensor types, and diagnosis of bearing and gear faults.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'التصوير بالحرارة (Infrared Thermography)' : 'Infrared Thermography'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'اكتشاف نقاط السخونة الزائدة في المعدات الميكانيكية والكهربائية.' : 'Detecting hot spots in mechanical and electrical equipment.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تحليل الزيوت والسوائل' : 'Oil & Fluid Analysis'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'طرق سحب العينات، قياس اللزوجة، واكتشاف برادة التآكل المعدني.' : 'Sampling methods, viscosity measurement, and metallic wear debris detection.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الموجات فوق الصوتية (Ultrasound Testing)' : 'Ultrasound Testing'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'اكتشاف تسريبات الهواء والغازات ومشاكل التشحيم المبكرة.' : 'Detecting air/gas leaks and early lubrication issues.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'دمج البيانات واتخاذ القرار' : 'Data Integration & Decision Making'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'ربط القراءات بجدولة الصيانة وإصدار أوامر العمل بناءً على حالة المعدة.' : 'Linking readings to maintenance scheduling and issuing work orders based on condition.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}