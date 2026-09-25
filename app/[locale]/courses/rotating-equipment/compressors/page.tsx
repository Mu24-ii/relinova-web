'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft, Wrench, Bell } from 'lucide-react';

export default function CompressorsTechCoursePage() {
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
            {isArabic ? 'تقنية وصيانة الضواغط الصناعية' : 'Industrial Compressors Technology'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
              {isArabic ? 'قسم صيانة المعدات الدوارة وأنظمة الهواء المضغوط' : 'Rotating Equipment & Compressed Air Systems'}
            </div>

            {/* شارة توضيحية إذا كانت الدورة قريباً */}
            {isComingSoon && (
              <div className="inline-block bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1.5 rounded-lg border border-amber-500/35">
                {isArabic ? '⏳ قريباً في المنصة' : '⏳ Coming Soon'}
              </div>
            )}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'صيانة وتقنية الضواغط الصناعية (Industrial Compressors Maintenance & Technology)' : 'Industrial Compressors Maintenance & Technology'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة مهندسي الصيانة والموثوقية، فنيي المعدات الدوارة، ومحليلي الأعطال الراغبين في التعمق في صيانة وفحص وإصلاح الضواغط الصناعية بمختلف أنواعها لضمان استقرار إمدادات الهواء والغازات وتقليل توقفات الإنتاج.'
              : 'This course targets maintenance and reliability engineers, rotating equipment technicians, and failure analysts wanting to master the maintenance, inspection, and repair of industrial compressors to ensure reliable gas/air supplies and minimize downtime.'
            }
          </p>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10 text-xs text-[#B8C2D1]">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#D9A62E]" />
              <span>{isArabic ? 'المدة: 4 أيام مكثفة' : 'Duration: 4 Intensive Days'}</span>
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
                href="/checkout?course=compressors-technology"
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
              isArabic ? 'فنيو صيانة المعدات الدوارة والمشرفون الميدانيون.' : 'Rotating equipment maintenance technicians & field supervisors.',
              isArabic ? 'مهندسو التشغيل والعمليات الصناعية في مصانع البتروكيماويات والنفط والغاز.' : 'Operations engineers in petrochemical, oil, and gas plants.',
              isArabic ? 'المسؤولون عن إدارة أنظمة الهواء المضغوط (Compressed Air Systems) والمرافق.' : 'Engineers managing compressed air systems and utilities.'
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
                title: isArabic ? 'تصنيف وفهم أنواع الضواغط' : 'Compressor Types Classification',
                desc: isArabic ? 'التمييز بين الضواغط الترددية (Reciprocating)، اللولبية (Rotary Screw)، والطرد المركزي (Centrifugal).' : 'Differentiate between reciprocating, rotary screw, and centrifugal compressors.'
              },
              {
                title: isArabic ? 'المنظومات المساعدة ومنع التسريب' : 'Auxiliary & Sealing Systems',
                desc: isArabic ? 'فهم أنظمة التزييت، التبريد (Intercoolers/Aftercoolers)، وأنظمة منع التسريب (Sealing Systems).' : 'Understand lubrication, cooling, and sealing systems.'
              },
              {
                title: isArabic ? 'تشخيص الأعطال والظواهر الديناميكية' : 'Troubleshooting & Surge Control',
                desc: isArabic ? 'تحليل أعطال الحرارة والضغط، والوقاية من الظواهر الخطرة مثل الاندفاع (Surge) والانسداد (Stall).' : 'Analyze thermal/pressure issues and prevent dangerous phenomena like Surge and Stall.'
              },
              {
                title: isArabic ? 'مراقبة الحالة والصيانة الوقائية' : 'Condition Monitoring & PM',
                desc: isArabic ? 'تطبيق تحليل الاهتزازات وزيوت الضواغط وجداول فحص فروق الضغط (ΔP) للتنبؤ بالأعطال.' : 'Apply vibration analysis, oil testing, and differential pressure (ΔP) tracking.'
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
                  <td className="p-4 font-semibold text-white">{isArabic ? 'أساسيات وديناميكا الضغط' : 'Compression Fundamentals'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'مبادئ ضغط الغازات، القوانين الحرارية (Thermodynamics)، والمنحنيات الأداء للضواغط.' : 'Gas compression principles, thermodynamics laws, and compressor performance curves.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الضواغط الترددية (Reciprocating)' : 'Reciprocating Compressors'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'المكونات (Pistons, Valves, Crankshaft)، ضبط خلوص الصمامات، وتحليل أنماط التآكل.' : 'Components, valve clearance adjustment, and wear pattern analysis.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الضواغط اللولبية (Rotary Screw)' : 'Rotary Screw Compressors'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'هيكل الروترات (Male/Female Rotors)، فواصل الزيت والغاز (Air/Oil Separators)، والتحكم في التحميل.' : 'Rotors structure, air/oil separators, and load/unload control.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الضواغط الديناميكية (Centrifugal)' : 'Centrifugal Compressors'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'المراوح (Impellers)، الناشرات (Diffusers)، ومقاوَمة ظاهرتي Surge & Stall لحماية الأصل.' : 'Impellers, diffusers, and combating Surge & Stall phenomena.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'أنظمة التزييت والتبريد' : 'Lube & Cooling Systems'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'جودة زيت الضواغط، مبادلات التبريد، وطرق التخلص من التكثيف المائي (Condensate Drains).' : 'Compressor oil quality, heat exchangers, and condensate management.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الفحص والموثوقية' : 'Inspection & Reliability'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'محاذاة المحاور (Laser Alignment)، تحليل اهتزازات المحامل، وتطبيق جداول PM وCMMS.' : 'Laser alignment, bearing vibration analysis, and PM/CMMS scheduling.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* نماذج ضواغط صناعية متداولة (تطبيقات واقعية) */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-white/10 pb-3">
            <Wrench className="w-5 h-5 text-[#D9A62E]" />
            {isArabic ? 'نماذج ضواغط صناعية متداولة (تطبيقات ودراسات حالة)' : 'Industrial Compressor Models (Case Studies)'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Model 1 */}
            <div className="bg-[#142238] border border-white/10 p-6 rounded-2xl space-y-4 shadow-lg flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] bg-[#D9A62E]/20 text-[#D9A62E] px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">
                  {isArabic ? 'نظام هواء متكامل - 7.5 حصان' : 'Total Air System - 7.5 HP'}
                </span>
                <h3 className="font-bold text-white text-base">
                  Ingersoll Rand Rotary Screw Compressor Total Air System
                </h3>
                <p className="text-xs text-[#B8C2D1] leading-relaxed">
                  {isArabic 
                    ? 'تُعد وحدة Ingersoll Rand حلاً كاملاً ومدمجاً للورش والمصانع حيث تأتي مدمجة بنظام تجفيف الهواء (Total Air System) لضمان هواء مضغوط خالٍ من الرطوبة والمثالي للتطبيقات الصناعية الحساسة.'
                    : 'A complete integrated solution for workshops featuring an integrated Total Air System dryer ensuring moisture-free compressed air for sensitive industrial applications.'
                  }
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-[#B8C2D1]">{isArabic ? 'المواصفات: 200V / 3-Phase' : 'Specs: 200V / 3-Phase'}</span>
                <span className="text-[#D9A62E] font-bold">SAR 65,962.24</span>
              </div>
            </div>

            {/* Model 2 */}
            <div className="bg-[#142238] border border-white/10 p-6 rounded-2xl space-y-4 shadow-lg flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] bg-[#D9A62E]/20 text-[#D9A62E] px-2.5 py-1 rounded-md font-bold uppercase tracking-wider">
                  {isArabic ? 'نظام لولبي مجفف وخزان - 20 حصان' : 'Combined Screw Compressor - 20 HP'}
                </span>
                <h3 className="font-bold text-white text-base">
                  20HP Combined Rotary Screw Air Compressor with Dryer & 68.7-Gal Tank
                </h3>
                <p className="text-xs text-[#B8C2D1] leading-relaxed">
                  {isArabic 
                    ? 'يتميز هذا الضاغط بتكامله الثلاثي بين ضاغط لولبي بقدرة 20 حصان، مجفف هواء مبرد، وخزان سعة 260 ليتر (74CFM)، مما يقلل خطوط التوصيل ويسهل الصيانة الوقائية المجمعة.'
                    : 'Features a triple integration of a 20HP screw compressor, refrigerated air dryer, and 260L tank (74CFM), reducing piping and easing combined preventive maintenance.'
                  }
                </p>
              </div>
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-[#B8C2D1]">{isArabic ? 'السعة: خزان 260 لتر' : 'Capacity: 260L Tank'}</span>
                <span className="text-[#D9A62E] font-bold">SAR 33,896.31</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}