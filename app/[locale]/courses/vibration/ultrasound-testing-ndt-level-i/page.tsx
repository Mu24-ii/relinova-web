'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft } from 'lucide-react';

export default function UltrasonicTestingLevel1CoursePage() {
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
            {isArabic ? 'الاختبارات فوق الصوتية المستوى الأول (UT I)' : 'Ultrasonic Testing Level I (UT I)'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
            {isArabic ? 'قسم الاختبارات غير الإتلافية ومراقبة الجودة (NDT Aligned)' : 'Non-Destructive Testing & Quality Control'}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'الاختبارات فوق الصوتية المستوى الأول (Ultrasonic Testing - NDT UT Level I)' : 'Ultrasonic Testing Level I (NDT UT Level I)'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة الفحص الفني لفحص المواد والاختبارات غير الإتلافية (NDT)، فنيي الجودة، ومفتشي الصيانة الراغبين في التعمق والاعتماد في الاختبارات فوق الصوتية المستوى الأول للكشف عن العيوب الداخلية وقياس السماكات في المعادن والأنابيب دون إتلافها.'
              : 'This course targets material inspection and NDT technicians, quality technicians, and maintenance inspectors wishing to pursue Level I Ultrasonic Testing certification for internal flaw detection and thickness measurements in metals and pipes without damage.'
            }
          </p>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 text-xs text-[#B8C2D1]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D9A62E]" />
              <span>{isArabic ? 'المدة: 5 أيام تدريبية وتطبيقية مكثفة' : 'Duration: 5 Intensive Training & Practical Days'}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-[#D9A62E]" />
              <span>{isArabic ? 'شهادة إتمام معتمدة (توافق ASNT SNT-TC-1A / ISO 9712)' : 'Verified Certificate (ASNT SNT-TC-1A / ISO 9712 Aligned)'}</span>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap gap-4">
            <Link 
              href="/checkout?course=ultrasonic-testing-1"
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
              isArabic ? 'فنيو ومفتشو ضبط وصيانة الجودة (QA/QC Inspectors).' : 'QA/QC inspectors and quality maintenance technicians.',
              isArabic ? 'فنيو الاختبارات غير الإتلافية الميدانيون (NDT Technicians).' : 'Field Non-Destructive Testing (NDT) technicians.',
              isArabic ? 'مهندسو ومفتشو سلامة الأنابيب والغلايات وحاويات الضغط (Pressure Vessels & Piping).' : 'Pressure vessels and piping safety engineers and inspectors.',
              isArabic ? 'المتقدمون لاجتياز اختبارات الحصول على شهادة NDT UT Level I المعتمدة وفق معايير (ASNT SNT-TC-1A / ISO 9712).' : 'Candidates aiming for ASNT SNT-TC-1A / ISO 9712 UT Level I certification.'
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
                title: isArabic ? 'فهم الفيزياء الصوتية للموجات' : 'Acoustic Wave Physics',
                desc: isArabic ? 'دراسة ترددات الموجات فوق الصوتية، سرعة الصوت في المواد الميكانيكية المختلفة، وانعكاس وانكسار الأمواج.' : 'Study ultrasonic frequencies, sonic speeds in various mechanical materials, and wave reflection/refraction.'
              },
              {
                title: isArabic ? 'إعداد وتعايرة الأجهزة (Calibration)' : 'Equipment Calibration',
                desc: isArabic ? 'استخدام كتل التعايرة القياسية (IIW Block / V1 & V2 Blocks) لضبط المدى (Range) والربح (Gain).' : 'Use standard calibration blocks (IIW / V1 & V2) to adjust range and gain.'
              },
              {
                title: isArabic ? 'اختيار واستخدام المجسات (Transducers)' : 'Transducers Selection & Use',
                desc: isArabic ? 'التمييز بين المجسات المباشرة (Straight Beam) والمائلة (Angle Beam) والمزدوجة (Dual Element).' : 'Differentiate straight beam, angle beam, and dual element probes.'
              },
              {
                title: isArabic ? 'قياس السماكات وفحص التآكل (UTM)' : 'Thickness Measurement & Corrosion',
                desc: isArabic ? 'إجراء اختبارات قياس السمك المتبقي للأنابيب والخزانات بدقة عالية دون إتلاف.' : 'Perform ultrasonic thickness measurements (UTM) on pipes and tanks accurately without destruction.'
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
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الأساسيات والمبادئ الصوتية' : 'Acoustic Principles'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'الموجات الطولية والعرضية (Longitudinal & Shear Waves)، قانون سنيل للانكسار، والمعاوقة الصوتية.' : 'Longitudinal & shear waves, Snell’s law of refraction, and acoustic impedance.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'مكونات المعدات والمجسات' : 'Equipment & Probes'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'الظاهرة الكهروإجهادية (Piezoelectric Effect)، أنواع المجسات وتطبيقات كل نوع.' : 'Piezoelectric effect, probe types, and specific application fields.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'المعايرة ومعايير القياس' : 'Calibration & Standards'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'ضبط الأجهزة باستخدام كتل القياس Standard Blocks، تحديد خطية الزناد وسرعة الصوت.' : 'Instrument calibration using standard blocks, time-base linearity, and sonic velocity.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'طرق واختبارات المسح (Scanning)' : 'Scanning Methods'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'استخدام المزاوتة الزيتية (Couplant)، مسح السطح المباشر، واختبار العيوب في المواد المدرفلة والمسبوكات.' : 'Using couplant, direct surface scanning, and defect testing in rolled materials and castings.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'قياس السمك ورصد العيوب' : 'Thickness & Flaw Detection'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'تطبيقات قياس تآكل الأنابيب، تحديد العيوب السطحية والداخلية، وإعداد تقارير القراءات الأولية.' : 'Pipe corrosion mapping, surface/internal flaw identification, and initial reading reporting.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'معايير السلامة والتأهيل' : 'Safety & Qualification Standards'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'متطلبات الجمعية الأمريكية للاختبارات غير الإتلافية (ASNT) وأخلاقيات العمل الميداني.' : 'ASNT requirements and ethical code of conduct for field inspection.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}