'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft, Sparkles, Bell } from 'lucide-react';

interface CoursePageProps {
  // يمكنك تمرير هذه القيمة من الـ Server Component أو ملف البيانات لتحديد حالة الدورة ديناميكياً
  initialIsComingSoon?: boolean;
}

export default function VibrationAnalysisLevel3CoursePage({ initialIsComingSoon = true }: CoursePageProps) {
  const locale = useLocale();
  const isArabic = locale === 'ar';

  // State للتحكم في حالة الدورة وزر التنبيه التفاعلي
  const [isComingSoon, setIsComingSoon] = useState(initialIsComingSoon);
  const [isNotified, setIsNotified] = useState(false);

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
            {isArabic ? 'تحليل الاهتزازات المستوى الثالث (Cat III)' : 'Vibration Analysis Category III'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
              {isArabic ? 'قسم الخبراء والمستشارين (ISO 18436-2 Cat III)' : 'Expert & Consultant Level (ISO 18436-2 Cat III)'}
            </div>

            {/* شارة قريباً (Coming Soon Badge) */}
            {isComingSoon && (
              <div className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-400 text-xs font-semibold px-3 py-1.5 rounded-lg border border-amber-500/20">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" />
                <span>{isArabic ? 'قريباً جداً في المنصة' : 'Coming Soon'}</span>
              </div>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'تحليل الاهتزازات المستوى الثالث (Vibration Analysis Category III)' : 'Vibration Analysis Category III'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة كبار مهندسي الموثوقية والديناميكا الميكانيكية، المستشارين الفنيين، وقادة فرق مراقبة الحالة الراغبين في التعمق والاعتماد للشهادة الأعلى في تحليل الاهتزازات المستوى الثالث وفق معايير ISO 18436-2 لحل استعصاءات الديناميكا الميكانيكية، وتصميم الموازنات ثنائية المستوى، وإجراء تحليل النمط التشغيلي (ODS) والتحليل المودالي.'
              : 'This course targets senior reliability and mechanical dynamics engineers, technical consultants, and condition monitoring team leaders wanting to achieve the highest Category III Vibration Analysis certification per ISO 18436-2 to solve complex dynamic issues, multi-plane balancing, ODS, and modal analysis.'
            }
          </p>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 text-xs text-[#B8C2D1]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D9A62E]" />
              <span>{isArabic ? 'المدة: 5 أيام استشارية وتحليلية متقدمة' : 'Duration: 5 Advanced Consultant Days'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#D9A62E]" />
              <span>{isArabic ? 'اعتماد دولي متقدم (توافق ISO 18436-2 Cat III)' : 'Advanced International Accreditation (ISO Cat III)'}</span>
            </div>
          </div>

          {/* التحكم في زر التسجيل والتنبيه بناءً على حالة الدورة */}
          <div className="pt-4 flex flex-col gap-3">
            {isComingSoon ? (
              <div className="space-y-3">
                <button 
                  onClick={() => setIsNotified(true)}
                  disabled={isNotified}
                  className={`font-bold px-8 py-3 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2 w-fit ${
                    isNotified
                      ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 cursor-default'
                      : 'bg-[#D9A62E] hover:bg-[#F2C75C] text-[#0B1628]'
                  }`}
                >
                  <Bell className="w-4 h-4" />
                  {isNotified
                    ? (isArabic ? 'تم تفعيل التنبيه بنجاح ✓' : 'Alert Set Successfully ✓')
                    : (isArabic ? 'أعلمني عند الإطلاق' : 'Notify Me When Launched')
                  }
                </button>
                <p className="text-xs text-amber-400/90 flex items-center gap-1.5 font-medium">
                  <span>✨</span>
                  {isArabic 
                    ? 'هذه الدورة ستتوفر قريباً في المنصة، اضغط على الزر لتلقي إشعار فور فتح باب الحجز.' 
                    : 'This course is coming soon. Click to be notified when registration opens.'}
                </p>
              </div>
            ) : (
              <Link 
                href="/checkout?course=vibration-analysis-3"
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
              isArabic ? 'كبار مهندسي الموثوقية والديناميكا الميكانيكية (Senior Reliability & Dynamics Engineers).' : 'Senior reliability and mechanical dynamics engineers.',
              isArabic ? 'خبراء ومستشارو مراقبة الحالة والفحص التنبؤي في الأصول الحرجة.' : 'Condition monitoring and predictive inspection experts in critical assets.',
              isArabic ? 'قادة ومسؤولو المعامل والمختبرات الفنية التشخيصية في القطاعات الصناعية والبتروكيماوية.' : 'Diagnostic laboratory leaders in industrial and petrochemical sectors.',
              isArabic ? 'الحاصلون على اعتمادات Cat II الراغبين في نيل الاعتماد المتقدم ISO Vibration Analyst Category III (من Mobius Institute أو VI Code).' : 'Cat II certificate holders seeking advanced ISO Vibration Analyst Category III certification.'
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
                title: isArabic ? 'معالجة الإشارات المتقدمة' : 'Advanced Signal Processing',
                desc: isArabic ? 'التمرير الفائق للمرشحات، النطاق الديناميكي، ومعالجة تداخل الإشارات (Aliasing & Zoom FFT).' : 'Advanced filtering, dynamic range, and handling aliasing and zoom FFT.'
              },
              {
                title: isArabic ? 'تحليل استجابة العبور (Transient Analysis)' : 'Transient Data Analysis',
                desc: isArabic ? 'استخدام مخططات Bode Plots, Polar Plots, وWaterfall Plots لتحليل سلوك الروتور عند السرعات الحرجة.' : 'Using Bode, Polar, and Waterfall plots to analyze rotor behavior at critical speeds.'
              },
              {
                title: isArabic ? 'تحليل كراسي التحميل الانزلاقية' : 'Journal Bearing Analysis',
                desc: isArabic ? 'قراءة وفهم أشكال المدار المائع (Orbit Plots) واكتشاف ظواهر (Oil Whirl & Oil Whip).' : 'Interpreting fluid film orbit plots and detecting oil whirl and oil whip phenomena.'
              },
              {
                title: isArabic ? 'الموازنة الميدانية المتقدمة (Multi-Plane)' : 'Advanced Multi-Plane Balancing',
                desc: isArabic ? 'حساب وتطبيق معاملات التأثير (Influence Coefficients) لموازنة الأنظمة الصلبة والمرنة.' : 'Calculating and applying influence coefficients to balance rigid and flexible rotors.'
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
                  <td className="p-4 font-semibold text-white">{isArabic ? 'رياضيات الديناميكا ومعالجة الإشارات' : 'Dynamics Math & Signal Processing'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'الدوران الجيبي المركب، التحويلات الرياضية، دالة الانتقال (Transfer Functions)، وAuto/Cross-Correlation.' : 'Complex sinusoidal rotation, mathematical transforms, transfer functions, and auto/cross-correlation.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تحليل استجابة العبور (Transient Analysis)' : 'Transient Response Analysis'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'أخذ القراءات أثناء الصعود والهبوط (Run-up / Coast-down) وتحديد الترددات الطبيعية ومجالات الاستقرار.' : 'Taking run-up/coast-down readings and identifying natural frequencies and stability zones.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'ديناميكا الروترات والكراسي الانزلاقية' : 'Rotor Dynamics & Journal Bearings'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'مجسات القرب (Proximity Probes)، قراءة مخططات المدار Orbit، وتحديد الانحرافات الثابتة والديناميكية.' : 'Proximity probes, orbit plot interpretation, and static/dynamic displacement determination.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الموازنة الميدانية متعددة المستويات' : 'Multi-Plane Field Balancing'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'تقنيات موازنة الأصول المرنة (Flexible Rotors)، مصفوفات التأثير (Influence Coefficient Matrix)، والحد من الاهتزازات.' : 'Flexible rotor balancing techniques, influence coefficient matrices, and vibration mitigation.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تحليل التشوه ODS والتحليل المودالي' : 'ODS & Modal Analysis'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'قياسات الطور متعددة النقاط، نمذجة الهيكل ثنائي وثلاثي الأبعاد، وتطبيق Modal Testing لعلاج الرنين.' : 'Multi-point phase measurements, 2D/3D structural modeling, and modal testing for resonance treatment.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'إدارة البرامج والاعتماد الدولي' : 'Program Management & Certification'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'إدارة واستراتيجيات برامج PdM المؤسسية والاستعداد الكامل لاختبار ISO 18436-2 Cat III.' : 'Corporate PdM program management strategies and full preparation for ISO Cat III exam.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}