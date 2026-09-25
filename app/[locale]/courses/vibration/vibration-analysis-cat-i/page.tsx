'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft, Sparkles, Bell } from 'lucide-react';

interface CoursePageProps {
  // يمكنك تمرير هذه القيمة من الـ Server Component أو ملف البيانات لتحديد حالة الدورة ديناميكياً
  initialIsComingSoon?: boolean;
}

export default function VibrationAnalysisLevel1CoursePage({ initialIsComingSoon = true }: CoursePageProps) {
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
            {isArabic ? 'تحليل الاهتزازات المستوى الأول (Cat I)' : 'Vibration Analysis Category I'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
              {isArabic ? 'قسم مراقبة الحالة والصيانة التنبؤية (ISO 18436-2 Aligned)' : 'Condition Monitoring & PdM (ISO 18436-2 Aligned)'}
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
            {isArabic ? 'تحليل الاهتزازات المستوى الأول (Vibration Analysis Category I)' : 'Vibration Analysis Category I'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة مهندسي الصيانة والموثوقية، فنيي مراقبة الحالة، وأخصائيي الفحص الميكانيكي الراغبين في التعمق والاعتماد في تحليل الاهتزازات المستوى الأول وفق معايير ISO 18436-2 لجمع بيانات الاهتزاز بدقة وتقييم صحة المعدات الدوارة.'
              : 'This course targets maintenance and reliability engineers, condition monitoring technicians, and mechanical inspection specialists wanting to pursue Level I Vibration Analysis certification per ISO 18436-2 for accurate data collection and machinery health assessment.'
            }
          </p>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 text-xs text-[#B8C2D1]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D9A62E]" />
              <span>{isArabic ? 'المدة: 4 أيام تدريبية وتطبيقية مكثفة' : 'Duration: 4 Intensive Training Days'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#D9A62E]" />
              <span>{isArabic ? 'شهادة إتمام معتمدة (توافق ISO 18436-2 Cat I)' : 'Verified Certificate (ISO 18436-2 Cat I Aligned)'}</span>
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
                href="/checkout?course=vibration-analysis-1"
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
              isArabic ? 'فنيو ومحليلو مراقبة الحالة الميدانيون (Condition Monitoring Technicians).' : 'Field condition monitoring technicians and analysts.',
              isArabic ? 'مهندسو الصيانة الميكانيكية والموثوقية (Mechanical & Reliability Engineers).' : 'Mechanical and reliability maintenance engineers.',
              isArabic ? 'المشرفون الميدانيون المسئولون عن جمع البيانات وفحص الأصول الميكانيكية.' : 'Field supervisors responsible for data collection and asset inspection.',
              isArabic ? 'الراغبون في التحضير والاعتماد لشهادة ISO Vibration Analyst Category I (من Mobius Institute أو VI Code).' : 'Candidates preparing for ISO Vibration Analyst Category I certification.'
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
                title: isArabic ? 'فهم أساسيات الحركة الاهتزازية' : 'Vibrational Motion Fundamentals',
                desc: isArabic ? 'دراسة السعة (Amplitude)، التردد (Frequency)، والطور (Phase)، والتحويل بين الإزاحة والسرعة والتسارع.' : 'Study amplitude, frequency, phase, and conversions between displacement, velocity, and acceleration.'
              },
              {
                title: isArabic ? 'تركيب واستخدام الحساسات' : 'Sensors Installation & Usage',
                desc: isArabic ? 'اختيار طرق تثبيت مستشعرات التسارع (Magnet, Stud, Probe Tip) وتأثيرها على استجابة التردد.' : 'Select accelerometer mounting methods and understand their frequency response impact.'
              },
              {
                title: isArabic ? 'إعداد وجمع البيانات الميدانية' : 'Field Data Collection & Routes',
                desc: isArabic ? 'بناء مسارات أخذ القراءات الصحيحة (Route-based Data Collection) والتعامل مع أجهزة القياس المحمولة.' : 'Build route-based data collection paths and operate portable vibration meters.'
              },
              {
                title: isArabic ? 'التعرف على أنماط الأعطال الشائعة' : 'Common Fault Identification',
                desc: isArabic ? 'اكتشاف علامات عدم الاتزان (Unbalance)، سوء المحاذاة (Misalignment)، والارتخاء على طيف التردد.' : 'Detect signs of unbalance, misalignment, and mechanical looseness on the frequency spectrum.'
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
                  <td className="p-4 font-semibold text-white">{isArabic ? 'مبادئ الصيانة التنبؤية (PdM)' : 'PdM Principles'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'أساليب مراقبة الحالة، دور تحليل الاهتزازات، ومنحنى P-F Curve.' : 'Condition monitoring methods, role of vibration analysis, and the P-F curve.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'فيزياء ورياضيات الاهتزاز' : 'Vibration Physics & Math'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'الموجات الجيبية، تحويل فوريه السريع (FFT)، ووحدات القياس (Peak, RMS, Peak-to-Peak).' : 'Sine waves, Fast Fourier Transform (FFT), and measurement units (Peak, RMS, Peak-to-Peak).'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تقنيات ومستشعرات القياس' : 'Measurement Techniques & Sensors'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'حساسية الـ Accelerometers، معالجة الإشارات، واختيار نقاط القياس على المحامل.' : 'Accelerometer sensitivity, signal processing, and selecting bearing measurement points.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'معايير قياس شدة الاهتزاز' : 'Vibration Severity Standards'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'تطبيق معايير ISO 10816 وتحديد حدود الإنذار والخطورة (Alarm & Danger Limits).' : 'Applying ISO 10816 standards and setting alarm and danger limits.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تحليل الطيف الترددي التأسيسي' : 'Foundational Spectrum Analysis'}</td>
                  <td className="p-4 leading-relaxed">
                    {isArabic 
                      ? <span>قراءة الأطياف الترددية للتعرف على ترددات الدوران <span dir="ltr" className="font-mono text-[#D9A62E]">1X, 2X, 3X</span>.</span>
                      : <span>Reading frequency spectra to identify running speeds <span dir="ltr" className="font-mono text-[#D9A62E]">1X, 2X, 3X</span>.</span>
                    }
                  </td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الاستعداد لاختبار الاعتماد' : 'Certification Exam Prep'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'مراجعة محاور معيار ISO 18436-2 وحل نماذج أسئلة امتحان Category I.' : 'Reviewing ISO 18436-2 domains and solving Category I sample exam questions.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}