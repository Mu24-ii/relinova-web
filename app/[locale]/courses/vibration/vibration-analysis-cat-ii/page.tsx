'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft } from 'lucide-react';

export default function VibrationAnalysisLevel2CoursePage() {
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
            {isArabic ? 'تحليل الاهتزازات المستوى الثاني (Cat II)' : 'Vibration Analysis Category II'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
            {isArabic ? 'قسم التشخيص المتقدم للأعطال (ISO 18436-2 Cat II)' : 'Advanced Fault Diagnosis (ISO 18436-2 Cat II)'}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'تحليل الاهتزازات المستوى الثاني (Vibration Analysis Category II)' : 'Vibration Analysis Category II'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة مهندسي الموثوقية والصيانة التنبؤية، أخصائيي مراقبة الحالة، ومحليلي الاهتزازات الراغبين في الارتقاء لـ تحليل الاهتزازات المستوى الثاني وفق معايير ISO 18436-2 لتشخيص الأعطال الميكانيكية المعقدة وتحليل أطياف التردد المتقدمة.'
              : 'This course targets reliability and predictive maintenance engineers, condition monitoring specialists, and vibration analysts wanting to advance to Level II Vibration Analysis per ISO 18436-2 for diagnosing complex mechanical faults and advanced spectral analysis.'
            }
          </p>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 text-xs text-[#B8C2D1]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D9A62E]" />
              <span>{isArabic ? 'المدة: 5 أيام تدريبية وتشخيصية مكثفة' : 'Duration: 5 Intensive Diagnostic Days'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#D9A62E]" />
              <span>{isArabic ? 'شهادة معتمدة دولياً (توافق ISO 18436-2 Cat II)' : 'Internationally Aligned (ISO 18436-2 Cat II)'}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link 
              href="/checkout?course=vibration-analysis-2"
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
              isArabic ? 'مهندسو وأخصائيو الصيانة التنبؤية ومراقبة الحالة (PdM & Condition Monitoring Specialists).' : 'Predictive maintenance and condition monitoring engineers/specialists.',
              isArabic ? 'مهندسو الموثوقية والفحص الميكانيكي على المعدات الدوارة.' : 'Reliability and mechanical inspection engineers on rotating equipment.',
              isArabic ? 'محللو الاهتزازات الحاصلون على مستوى Cat I الراغبون في الحصول على الاعتماد الدولي ISO Vibration Analyst Cat II (من Mobius Institute أو VI Code).' : 'Cat I vibration analysts seeking ISO Cat II international certification.'
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
                title: isArabic ? 'التشخيص المتقدم لأعطال الآلات' : 'Advanced Machine Fault Diagnosis',
                desc: isArabic ? 'التمييز الدقيق بين أنماط عدم الاتزان، سوء المحاذاة، وانحناء الأكس (Bent Shaft).' : 'Accurately differentiate unbalance, misalignment, and bent shaft patterns.'
              },
              {
                title: isArabic ? 'حساب وترددات أعطال كراسي التحميل' : 'Bearing Defect Frequencies',
                desc: isArabic ? 'حساب ترددات (BPFO, BPFI, BSF, FTF) واكتشاف أداء المحمل عبر مراحله الأربعة للتآكل.' : 'Calculate BPFO, BPFI, BSF, and FTF frequencies and track the four stages of bearing wear.'
              },
              {
                title: isArabic ? 'تحليل أعطال علب التروس (Gearbox Diagnosis)' : 'Gearbox Fault Analysis',
                desc: isArabic ? 'حساب تردد تشابك التروس (GMF) واكتشاف كسر أو تآكل الأسنان عبر النطاق الزمني.' : 'Calculate Gear Mesh Frequency (GMF) and detect tooth wear or cracks via time waveform.'
              },
              {
                title: isArabic ? 'تحليل زاوية الطور (Phase Analysis)' : 'Phase Analysis Techniques',
                desc: isArabic ? 'استخدام قياسات Phase للتمييز بين الرنين الميكانيكي، سوء المحاذاة والارتخاء الهيكلي.' : 'Use phase measurements to distinguish resonance, misalignment, and structural looseness.'
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
                  <td className="p-4 font-semibold text-white">{isArabic ? 'إعدادات أجهزة جمع البيانات' : 'Signal Processing Settings'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'ضبط Fmax، عدد الخطوط (Lines of Resolution)، وتأثير الـ Windowing على دقة الطيف.' : 'Configuring Fmax, lines of resolution, and windowing effects on spectral accuracy.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تشخيص القوى الميكانيكية غير المتزنة' : 'Unbalance & Force Diagnosis'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'دراسة الأنماط الطيفية لعدم الاتزان الاستاتيكي والديناميكي وزاوية الطور الخاصة بكل نوع.' : 'Spectral patterns of static/dynamic unbalance and associated phase angles.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تشخيص التروس والمحركات' : 'Gears & Electrical Faults'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'أطياف الأعطال الميكانيكية والكهربائية (Eccentricity, Rotor Bar Pass, GMF, Sidebands).' : 'Mechanical and electrical fault spectra including eccentricity, rotor bar pass, and sidebands.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تحليل أطياف كراسي التحميل' : 'Bearing Spectral Analysis'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'مراحـل تداعي المحامل الأربعة (Stages of Bearing Failure) وتقنيات PeakVue و Demodulation.' : 'Four stages of bearing failure and advanced PeakVue/Demodulation techniques.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الرنين الميكانيكي والاختبارات' : 'Mechanical Resonance Testing'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'اختبار الصدمة (Bump Test)، تحديد التردد الطبيعي (Natural Frequency)، والتعامل مع Resonance.' : 'Bump tests, natural frequency identification, and resonance mitigation.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'التأهيل لاختبار ISO Cat II' : 'ISO Cat II Exam Preparation'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'مراجعة شاملة لمتطلبات المعيار الدولي ISO 18436-2 وحل نماذج الامتحان.' : 'Comprehensive review of ISO 18436-2 requirements and sample exam practice.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}