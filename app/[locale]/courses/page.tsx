'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import Image from 'next/image';
import { Clock, Wrench, Activity, ShieldCheck, Cpu, ArrowRight, ArrowLeft } from 'lucide-react';

export default function CoursesPage() {
  const t = useTranslations('Courses');
  const locale = useLocale();
  const isArabic = locale === 'ar';

  // هيكلة الأقسام متكاملة بمعايير الموثوقية والصيانة الحديثة الخاصة بمنصتك
  const categories = [
    {
      id: 'maintenance',
      icon: <Wrench className="w-5 h-5 text-[#D9A62E]" />,
      courses: [
        { slug: 'preventive-maintenance', available: true, image: '/courses/preventive-maintenance.jpeg', durationKey: 'duration3Days', levelKey: 'levelBeginner' },
        { slug: 'predictive-maintenance', available: false, image: '/courses/predictive-maintenance.jpeg', durationKey: 'duration4Days', levelKey: 'levelIntermediate' },
        { slug: 'cmms', available: false, image: '/courses/cmms.jpeg', durationKey: 'duration3Days', levelKey: 'levelIntermediate' },
        { slug: 'shutdown-management', available: false, image: '/courses/shutdown-management.jpeg', durationKey: 'duration5Days', levelKey: 'levelAdvanced' },
        { slug: 'planning-and-scheduling', available: false, image: '/courses/planning-scheduling.jpeg', durationKey: 'duration4Days', levelKey: 'levelIntermediate' },
        { slug: 'sap-pm', available: false, image: '/courses/sap-pm.jpeg', durationKey: 'duration4Days', levelKey: 'levelAdvanced' },
      ]
    },
    {
      id: 'vibration',
      icon: <Activity className="w-5 h-5 text-[#D9A62E]" />,
      courses: [
        { slug: 'vibration-analysis-cat-i', available: true, image: '/courses/vibration-analysis-1.jpeg', durationKey: 'duration4Days', levelKey: 'levelBeginner' },
        { slug: 'vibration-analysis-cat-ii', available: true, image: '/courses/vibration-analysis-2.jpeg', durationKey: 'duration5Days', levelKey: 'levelIntermediate' },
        { slug: 'vibration-analysis-cat-iii', available: false, image: '/courses/vibration-analysis-3.jpeg', durationKey: 'duration5Days', levelKey: 'levelAdvanced' },
        { slug: 'ultrasound-testing-ndt-level-i', available: false, image: '/courses/ultrasound-level-1.jpeg', durationKey: 'duration3Days', levelKey: 'levelBeginner' },
        { slug: 'mlt', available: false, image: '/courses/mlt.jpeg', durationKey: 'duration3Days', levelKey: 'levelBeginner' },
        { slug: 'mle', available: true, image: '/courses/mle.jpeg', durationKey: 'duration3Days', levelKey: 'levelAdvanced' },
        { slug: 'lubrication-analysis-i', available: false, image: '/courses/mla-level-1.jpeg', durationKey: 'duration3Days', levelKey: 'levelBeginner' },
        { slug: 'lubrication-analysis-ii', available: false, image: '/courses/mla-level-2.jpeg', durationKey: 'duration4Days', levelKey: 'levelIntermediate' },
        { slug: 'lubrication-analysis-iii', available: false, image: '/courses/mla-level-3.jpeg', durationKey: 'duration5Days', levelKey: 'levelAdvanced' },
      ]
    },
    {
      id: 'reliability',
      icon: <ShieldCheck className="w-5 h-5 text-[#D9A62E]" />,
      courses: [
        { slug: 'rcm', available: true, image: '/courses/rcm.jpeg', durationKey: 'duration4Days', levelKey: 'levelIntermediate' },
        { slug: 'rca', available: true, image: '/courses/rcm.jpeg', durationKey: 'duration3Days', levelKey: 'levelIntermediate' },
        { slug: 'fmea', available: true, image: '/courses/fmea.jpeg', durationKey: 'duration4Days', levelKey: 'levelAdvanced' },
        { slug: 'cmrp-prep', available: false, image: '/courses/cmrp.jpeg', durationKey: 'duration5Days', levelKey: 'levelAdvanced' },
        { slug: 'cmrt-prep', available: false, image: '/courses/cmrt.jpeg', durationKey: 'duration4Days', levelKey: 'levelIntermediate' },
        { slug: 'reliability-engineering', available: false, image: '/courses/reliability-engineering.jpeg', durationKey: 'duration4Days', levelKey: 'levelAdvanced' },
      ]
    },
    {
      id: 'rotating-equipment',
      icon: <Cpu className="w-5 h-5 text-[#D9A62E]" />,
      courses: [
        { slug: 'pumps', available: false, image: '/courses/course-pumps.jpg', durationKey: 'duration4Days', levelKey: 'levelIntermediate' },
        { slug: 'compressors', available: false, image: '/courses/course-compressors.jpeg', durationKey: 'duration4Days', levelKey: 'levelAdvanced' },
        { slug: 'fans', available: false, image: '/courses/course-fans.jpg', durationKey: 'duration3Days', levelKey: 'levelBeginner' },
        { slug: 'bearings', available: false, image: '/courses/course-bearings.jpg', durationKey: 'duration3Days', levelKey: 'levelIntermediate' },
        { slug: 'mechanical-seals', available: false, image: '/courses/course-mechanical-seals.jpg', durationKey: 'duration3Days', levelKey: 'levelAdvanced' },
        { slug: 'turbines', available: false, image: '/courses/course-turbines.jpg', durationKey: 'duration5Days', levelKey: 'levelAdvanced' },
      ]
    }
  ];

  const safeTranslate = (key: string, fallback: string) => {
    try {
      const res = t(key);
      return res && !res.includes('MISSING_MESSAGE') ? res : fallback;
    } catch {
      return fallback;
    }
  };

  return (
    <main className="min-h-screen bg-[#0B1628] text-white py-12 px-6 md:px-12" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* ترويسة الصفحة */}
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            {safeTranslate('title', isArabic ? 'الدورات التدريبية' : 'Courses')}
          </h1>
          <p className="text-[#B8C2D1] mt-2 max-w-2xl text-sm md:text-base">
            {safeTranslate('subtitle', isArabic 
              ? 'استكشف كافة الدورات التدريبية المتاحة في أقسام الصيانة، الموثوقية، تحليل الاهتزازات، والمعدات الدوارة.' 
              : 'Explore all available training courses across maintenance, reliability, vibration analysis, and rotating equipment.'
            )}
          </p>
        </div>

        {/* عرض الأقسام والدورات بالستايل الموحد */}
        <div className="space-y-16">
          {categories.map((cat, catIdx) => (
            <div key={catIdx} className="space-y-6">
              
              {/* عنوان القسم */}
              <div className="flex items-center gap-3 border-b border-[#D9A62E]/20 pb-4">
                <div className="w-10 h-10 rounded-xl bg-[#142238] flex items-center justify-center border border-[#D9A62E]/30 shadow-md">
                  {cat.icon}
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white">
                  {safeTranslate(`categories.${cat.id}`, cat.id)}
                </h2>
                <span className="text-xs bg-[#142238] text-[#D9A62E] px-3 py-1 rounded-full border border-[#D9A62E]/30 font-semibold ms-auto shadow-sm">
                  {cat.courses.length} {isArabic ? 'دورات' : 'Courses'}
                </span>
              </div>

              {/* شبكة الدورات */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.courses.map((course, idx) => (
                  <Link 
                    key={idx}
                    href={`/courses/${cat.id}/${course.slug}`}
                    className={`rounded-2xl p-5 flex flex-col justify-between shadow-xl transition-all duration-300 group block cursor-pointer ${
                      course.available 
                        ? 'bg-[#142238] border border-[#D9A62E]/30 hover:border-[#F2C75C] hover:shadow-[#D9A62E]/10 hover:-translate-y-1' 
                        : 'bg-[#142238]/60 border border-white/10 border-dashed hover:border-[#D9A62E]/40 hover:-translate-y-1'
                    }`}
                  >
                    <div>
                      <div className="w-full aspect-square bg-[#08101D] rounded-xl mb-4 relative overflow-hidden border border-[#D9A62E]/20 shadow-inner">
                        <Image
                          src={course.image}
                          alt={safeTranslate(`items.${course.slug}.title`, course.slug)}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <h3 className={`text-base font-bold mb-2 line-clamp-2 ${course.available ? 'text-white group-hover:text-[#F2C75C]' : 'text-white/80'}`}>
                        {safeTranslate(`items.${course.slug}.title`, course.slug)}
                      </h3>

                      <p className="text-[#B8C2D1] text-xs mb-4 line-clamp-2 leading-relaxed">
                        {safeTranslate(`items.${course.slug}.desc`, 'Course description goes here.')}
                      </p>

                      <p className="text-[#D9A62E]/80 text-xs mb-4 font-semibold">
                        {safeTranslate(course.durationKey, '3 Days')} • {safeTranslate(course.levelKey, 'Intermediate')}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      {course.available ? (
                        <span className="inline-flex items-center gap-2 text-xs text-[#D9A62E] font-bold group-hover:text-[#F2C75C] transition-colors">
                          {safeTranslate('viewDetails', isArabic ? 'عرض التفاصيل' : 'View Details')}
                          {isArabic ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-xs text-[#B8C2D1]/60 font-semibold">
                          <Clock className="w-3.5 h-3.5 text-[#D9A62E]" />
                          {safeTranslate('comingSoon', isArabic ? 'قريباً في المنصة' : 'Coming Soon')}
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
}