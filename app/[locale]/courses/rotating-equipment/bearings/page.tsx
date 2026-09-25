'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft, Bell } from 'lucide-react';

export default function BearingsTechCoursePage() {
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
          <Link href="/courses/rotating-equipment" className="hover:text-[#D9A62E] transition-colors">
            {isArabic ? 'المعدات الدوارة' : 'Rotating Equipment'}
          </Link>
          <span>/</span>
          <span className="text-[#D9A62E]">
            {isArabic ? 'تقنية وصيانة كراسي التحميل (Bearings)' : 'Bearings Technology & Maintenance'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
              {isArabic ? 'قسم تخصصات المعدات الدوارة والمحامل الميكانيكية' : 'Rotating Equipment & Bearings Specialization'}
            </div>

            {/* شارة توضيحية إذا كانت الدورة قريباً */}
            {isComingSoon && (
              <div className="inline-block bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-lg border border-amber-500/35">
                {isArabic ? '⏳ قريباً في المنصة' : '⏳ Coming Soon'}
              </div>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'تقنية وصيانة كراسي التحميل (Bearings Technology & Maintenance)' : 'Bearings Technology & Maintenance'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة مهندسي الفحص والصيانة الميكانيكية، الفنيين الميدانيين، ومحليلي الاهتزازات الراغبين في التعمق في صيانة وفحص واختيار كراسي التحميل (Bearings) لضمان استقرار الأجزاء الدوارة وتقليل الأعطال المفاجئة وفق معايير ISO.'
              : 'This course targets mechanical inspection and maintenance engineers, field technicians, and vibration analysts wanting to master bearing selection, installation, maintenance, and failure analysis to ensure rotating equipment reliability according to ISO standards.'
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
                href="/checkout?course=bearings-technology"
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
              isArabic ? 'مهندسو الصيانة الميكانيكية والموثوقية (Mechanical & Reliability Engineers).' : 'Mechanical & Reliability Engineers.',
              isArabic ? 'فنيو الصيانة والمشرفون الميدانيون المسئولون عن الفك، التركيب، والصيانة.' : 'Maintenance technicians and field supervisors handling installation & dismantling.',
              isArabic ? 'محللو الاهتزازات ومراقبو الحالة (Vibration & Condition Monitoring Technicians).' : 'Vibration analysts and condition monitoring technicians.',
              isArabic ? 'مهندسو التصميم واختيار المعدات الميكانيكية الدوارة (المضخات، المحركات، والضواغط).' : 'Design and rotating equipment engineers (Pumps, Motors, Compressors).'
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
                title: isArabic ? 'تصنيف وتحديد الأنواع' : 'Bearing Classification',
                desc: isArabic ? 'التمييز بين الكراسي التدحرجية (Rolling Element) والسطحية (Journal/Plain Bearings) واستخدامات كل نوع.' : 'Differentiate between rolling element and journal/plain bearings and their applications.'
              },
              {
                title: isArabic ? 'فهم الأكواد والتسميات' : 'Bearing Designation & Codes',
                desc: isArabic ? 'قراءة وفك أرقام الكراسي لمعرفة أبعادها، نوعها، التسامح الداخلي (Clearance)، والتصميم.' : 'Read and decode bearing numbers for dimensions, type, internal clearance, and design.'
              },
              {
                title: isArabic ? 'طرق التركيب والفك السليمة' : 'Proper Mounting Techniques',
                desc: isArabic ? 'استخدام الأدوات الهيدروليكية، السخانات الحرارية (Induction Heaters)، وطرق التركيب لمنع التشوه.' : 'Use hydraulic tools, induction heaters, and approved mechanical methods to prevent distortion.'
              },
              {
                title: isArabic ? 'تحليل أنماط الأعطال (ISO 15243)' : 'Failure Analysis (ISO 15243)',
                desc: isArabic ? 'تشخيص أعطال المحامل وفق معيار ISO 15243 (مثل Flaking, Scoring, Electrical Erosion) ومعرفة أسبابها.' : 'Diagnose bearing failures per ISO 15243 (flaking, scoring, electrical erosion) and root causes.'
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
                  <td className="p-4 font-semibold text-white">{isArabic ? 'أنواع وتصميم الكراسي' : 'Bearing Types & Design'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'الكراسي الكروية (Ball)، الاسطوانية (Roller)، المخروطية (Tapered)، والكراسي الانزلاقية (Journal).' : 'Ball, cylindrical, tapered roller bearings, and journal/plain bearings.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'قراءة الأكواد والتسامحات' : 'Designations & Tolerances'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'قراءة أرقام SKF/FAG، فهم التسامح الداخلي (C2, C0, C3, C4) وضبط الأبعاد على الأكس والغلاف (Fits & Tolerances).' : 'Reading SKF/FAG numbers, internal clearance (C2, C0, C3, C4), and shaft/housing fits.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تقنيات التركيب والفك' : 'Mounting & Dismounting Techniques'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'الشد بالضغط (Press fit)، التسخين بالحث الحراري، استخدام الهيدروليك، والفك بالتسخين أو الشواكيش المخصصة.' : 'Press fit, induction heating, hydraulic tools, and specialized dismantling methods.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'إدارة التشحيم (Lubrication)' : 'Lubrication Management'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'اختيار زيوت وشحوم المحامل، حساب كمية الشحم (Grease Quantity)، وفترات إعادة التغذية (Relubrication Intervals).' : 'Bearing grease and oil selection, grease quantity calculation, and relubrication intervals.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تحليل الأعطال وفق ISO 15243' : 'Failure Analysis (ISO 15243)'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'التعرف على أعطال التعب (Fatigue)، التآكل (Wear)، التآكل الكيميائي (Corrosion)، وإجهاد التمرير الكهربائي (Erosion).' : 'Identify fatigue, wear, corrosion, and electrical erosion failures.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الفحص ومراقبة الحالة' : 'Inspection & Condition Monitoring'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'استخدام تقنيات قياس الاهتزازات (Vibration Demodulation/PeakVue) والموجات فوق الصوتية لفحص صحة المحمل.' : 'Using vibration demodulation/PeakVue and ultrasound techniques to check bearing health.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}