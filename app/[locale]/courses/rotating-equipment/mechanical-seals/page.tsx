'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { CheckCircle2, Users, BookOpen, Clock, Award, ArrowRight, ArrowLeft, Sparkles, Bell } from 'lucide-react';

interface CoursePageProps {
  // يمكنك تمرير هذه القيمة من الـ Server Component أو ملف البيانات لتحديد حالة الدورة ديناميكياً
  initialIsComingSoon?: boolean;
}

export default function MechanicalSealsCoursePage({ initialIsComingSoon = true }: CoursePageProps) {
  const locale = useLocale();
  const isArabic = locale === 'ar';

  // 💡 [مكان التحكم بالحالة]: true = قريباً (معطل)، false = متاح للتسجيل
  const isComingSoon = initialIsComingSoon;

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
            {isArabic ? 'صيانة وتركيب مانعات التسرب الميكانيكية' : 'Mechanical Seals Maintenance'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
              {isArabic ? 'قسم حماية الأصول الميكانيكية وأنظمة منع التسرب' : 'Asset Protection & Sealing Systems'}
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
            {isArabic ? 'صيانة وتركيب مانعات التسرب الميكانيكية (Mechanical Seals Maintenance & Technology)' : 'Mechanical Seals Maintenance & Technology'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'تستهدف هذه الدورة مهندسي وفنيي الصيانة الميكانيكية، ومحليلي الأعطال الراغبين في إتقان صيانة وفحص وتركيب مانعات التسرب الميكانيكية لمنع تسرب السوائل والغازات في المضخات والمعدات الدوارة وفق معايير API 682 العالمية.'
              : 'This course targets mechanical maintenance engineers, technicians, and failure analysts wanting to master the maintenance, inspection, and installation of mechanical seals to prevent fluid and gas leakage in pumps and rotating equipment per API 682.'
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

          {/* التحكم في زر التسجيل والحجز بناءً على حالة الدورة */}
          <div className="pt-4 flex flex-col gap-3">
            {isComingSoon ? (
              <div className="space-y-2">
                <button 
                  disabled 
                  className="bg-gray-700/50 text-gray-400 font-bold px-8 py-3 rounded-xl text-sm cursor-not-allowed border border-white/5 flex items-center gap-2 opacity-70 w-fit"
                >
                  <Bell className="w-4 h-4" />
                  {isArabic ? 'التسجيل غير متاح حالياً' : 'Registration Currently Unavailable'}
                </button>
                <p className="text-xs text-amber-400/90 flex items-center gap-1.5 font-medium">
                  <span>✨</span>
                  {isArabic 
                    ? 'هذه الدورة ستتوفر قريباً في المنصة، ترقبوا فتح باب الحجز.' 
                    : 'This course is coming soon. Registration will open shortly.'}
                </p>
              </div>
            ) : (
              <Link 
                href="/checkout?course=mechanical-seals"
                className="bg-[#D9A62E] hover:bg-[#F2C75C] text-[#0B1628] font-bold px-8 py-3 rounded-xl text-sm transition-all shadow-lg flex items-center gap-2 w-fit"
              >
                {isArabic ? 'احجز مقعدك في الدورة' : 'Enroll in Course'}
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
              isArabic ? 'فنيو صيانة المضخات والمعدات الدوارة والمشرفون الميدانيون.' : 'Pump and rotating equipment maintenance technicians & field supervisors.',
              isArabic ? 'مهندسو التشغيل والعمليات في المصانع الكيميائية ومحطات المعالجة والنفط.' : 'Operations engineers in chemical plants, water treatment, and oil & gas.',
              isArabic ? 'الفنيون المسئولون عن اختيار وتركيب أجزاء المانعات وتطبيق خطط الغسيل (API Flush Plans).' : 'Technicians responsible for seal selection, installation, and API flush plans.'
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
                title: isArabic ? 'فهم نظرية وتصميم مانعات التسرب' : 'Seal Theory & Design',
                desc: isArabic ? 'التمييز بين المانعات الأحادية (Single Seals) والمزدوجة (Double/Tandem Seals)، والمانعات الخرطوشية (Cartridge Seals).' : 'Differentiate between single, double/tandem, and cartridge mechanical seals.'
              },
              {
                title: isArabic ? 'اختيار مواد أسطح الاحتكاك' : 'Seal Face Materials Selection',
                desc: isArabic ? 'اختيار التوليفة المثالية (مثل Silicon Carbide vs Carbon) بناءً على طبيعة السائل والضغط والحرارة.' : 'Select optimal combinations (Silicon Carbide vs Carbon) based on fluid, pressure, and temperature.'
              },
              {
                title: isArabic ? 'خطط التبريد والدعم (API Piping Plans)' : 'API Piping Plans',
                desc: isArabic ? 'شرح تطبيقي للأنظمة الشهيرة مثل Plan 11 و Plan 23 و Plan 53A/B/C للحفاظ على طبقة السائل.' : 'Practical explanation of Plan 11, Plan 23, and Plan 53A/B/C to preserve fluid film.'
              },
              {
                title: isArabic ? 'تقنيات التركيب وضبط الانضغاط' : 'Installation & Setting Techniques',
                desc: isArabic ? 'خطوات ضبط طول الانضغاط (Working Length) وتجنب إتلاف الحلقات المطاطية (O-rings) وقفز المحور.' : 'Steps to adjust working length, avoid damaging O-rings, and check shaft runout.'
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
                  <td className="p-4 font-semibold text-white">{isArabic ? 'الأساسيات والمكونات' : 'Basics & Components'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'مكونات المانع الميكانيكي: الأسطح الدوارة والثابتة، اليايات (Springs)، وعناصر التسريب الثانوية (O-Rings).' : 'Seal components: rotating/stationary faces, springs, and secondary sealing elements (O-Rings).'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'التصنيفات والأنواع' : 'Classifications & Types'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'المانعات المتوازنة وغير المتوازنة (Balanced vs Unbalanced)، والمانعات المعتمدة على المكونات مقابل الكارتريج.' : 'Balanced vs unbalanced seals, and component vs cartridge seals.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'معايير API 682 وPiping Plans' : 'API 682 & Piping Plans'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'دراسة تفصيلية لخطط الغسيل والتبريد (Flush Plans) والحفاظ على طبقة السائل (Fluid Film).' : 'Detailed study of flush/cooling plans and maintaining the fluid film.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تقنيات التركيب الميداني' : 'Field Installation Techniques'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'إجراءات فحص قفز المحور (Shaft Runout)، النظافة الفائقة، وضبط الكارتريج باستخدام قطع التثبيت (Centering Clips).' : 'Shaft runout inspection, absolute cleanliness, and cartridge setting using centering clips.'}</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">{isArabic ? 'تشخيص واستكشاف الأعطال' : 'Troubleshooting & Failure Analysis'}</td>
                  <td className="p-4 leading-relaxed">{isArabic ? 'تحليل الآثار المتروكة على أسطح الاحتكاك (Wear Track Analysis) لتحديد السبب الجذر للتسريب.' : 'Analyzing wear tracks on seal faces to determine the root cause of leakage.'}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </main>
  );
}