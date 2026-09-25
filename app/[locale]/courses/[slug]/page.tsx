import { getTranslations } from 'next-intl/server';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function DepartmentCoursesPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = await getTranslations('CategoryDetails');

  // خريطة الدورات مع إضافة خاصية `status` لكل دورة:
  // - 'available' = دورة متاحة حالياً (تظهر طبيعي)
  // - 'coming-soon' = دورة قريباً في المنصة (تظهر لتفاصيل الدورة فقط بدون إمكانية التسجيل)
  const departmentCoursesMap: Record<string, Array<{ slug: string; titleKey: string; image: string; status?: 'available' | 'coming-soon' }>> = {
    'vibration': [
      { slug: 'vibration-analysis-cat-i', titleKey: 'Vibration Analysis Category I', image: '/courses/vibration-analysis-1.jpeg', status: 'available' },
      { slug: 'vibration-analysis-cat-ii', titleKey: 'Vibration Analysis Category II', image: '/courses/vibration-analysis-2.jpeg', status: 'available' },
      { slug: 'vibration-analysis-cat-iii', titleKey: 'Vibration Analysis Category III', image: '/courses/vibration-analysis-3.jpeg', status: 'coming-soon' },
      { slug: 'ultrasound-testing-ndt-level-i', titleKey: 'Ultrasound Testing NDT Level I', image: '/courses/ultrasound-level-1.jpeg', status: 'available' },
      { slug: 'mlt', titleKey: 'Machinery Lubrication Technician (MLT)', image: '/courses/mlt.jpeg', status: 'available' },
      { slug: 'mle', titleKey: 'Machinery Lubrication Engineer (MLE)', image: '/courses/mle.jpeg', status: 'available' },
      { slug: 'lubrication-analysis-i', titleKey: 'Machinery Lubrication Analysis Level I', image: '/courses/mla-level-1.jpeg', status: 'available' },
      { slug: 'lubrication-analysis-ii', titleKey: 'Machinery Lubrication Analysis Level II', image: '/courses/mla-level-2.jpeg', status: 'available' },
      { slug: 'lubrication-analysis-iii', titleKey: 'Machinery Lubrication Analysis Level III', image: '/courses/mla-level-3.jpeg', status: 'coming-soon' },
    ],
    'reliability': [
      { slug: 'rcm', titleKey: 'RCM', image: '/courses/rcm.jpeg', status: 'available' },
      { slug: 'rca', titleKey: 'RCA', image: '/courses/rca..jpeg', status: 'available' },
      { slug: 'fmea', titleKey: 'FMEA', image: '/courses/fmea.jpeg', status: 'available' },
      { slug: 'cmrp-prep', titleKey: 'CMRP Preparation', image: '/courses/cmrp.jpeg', status: 'available' },
      { slug: 'cmrt-prep', titleKey: 'CMRT Preparation', image: '/courses/cmrt.jpeg', status: 'available' },
      { slug: 'reliability-engineering', titleKey: 'Reliability Engineering', image: '/courses/reliability-engineering.jpeg', status: 'available' },
    ],
    'rotating-equipment': [
      { slug: 'pumps', titleKey: 'Pumps', image: '/courses/course-pumps.jpg', status: 'available' },
      { slug: 'compressors', titleKey: 'Compressors', image: '/courses/course-compressors.jpeg', status: 'available' },
      { slug: 'fans', titleKey: 'Fans', image: '/courses/course-fans.jpg', status: 'available' },
      { slug: 'bearings', titleKey: 'Bearings', image: '/courses/course-bearings.jpg', status: 'available' },
      { slug: 'mechanical-seals', titleKey: 'Mechanical Seals', image: '/courses/course-mechanical-seals.jpg', status: 'available' },
      { slug: 'turbines', titleKey: 'Turbines', image: '/courses/course-turbines.jpg', status: 'coming-soon' },
    ],
    'maintenance': [
      { slug: 'preventive-maintenance', titleKey: 'Preventive Maintenance', image: '/courses/preventive-maintenance.jpeg', status: 'available' },
      // مثال على دورة الصيانة التنبؤية جعلناها "قريباً في المنصة" بناءً على طلبك:
      { slug: 'predictive-maintenance', titleKey: 'Predictive Maintenance', image: '/courses/predictive-maintenance.jpeg', status: 'coming-soon' },
      { slug: 'cmms', titleKey: 'CMMS', image: '/courses/cmms.jpeg', status: 'available' },
      { slug: 'shutdown-management', titleKey: 'Shutdown Management', image: '/courses/shutdown-management.jpeg', status: 'available' },
      { slug: 'planning-and-scheduling', titleKey: 'Planning & Scheduling', image: '/courses/planning-scheduling.jpeg', status: 'available' },
      { slug: 'sap-pm', titleKey: 'SAP PM', image: '/courses/sap-pm.jpeg', status: 'available' },
    ]
  };

  if (!departmentCoursesMap[slug]) {
    notFound();
  }

  const currentCourses = departmentCoursesMap[slug];

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6 md:px-16 w-full">
      <div className="max-w-[1600px] mx-auto">
        <div className="mb-8">
          <Link 
            href={`/${locale}/courses`} 
            className="text-amber-500 font-semibold text-sm hover:underline inline-block mb-4"
          >
            {locale === 'ar' ? '← العودة إلى الأقسام الرئيسية' : '← Back to Main Departments'}
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B2E59] uppercase">
            {slug.replace('-', ' ')}
          </h1>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentCourses.map((course) => {
            const isComingSoon = course.status === 'coming-soon';

            return (
              <Link 
                key={course.slug} 
                href={`/${locale}/courses/${slug}/${course.slug}`}
                className="group relative bg-[#0A192F] rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer"
              >
                <div className="relative w-full aspect-[4/4.5] overflow-hidden flex items-center justify-center bg-[#0A192F]">
                  <Image
                    src={course.image}
                    alt={course.titleKey}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* شارة توضح حالة الدورة إذا كانت قريباً */}
                  {isComingSoon && (
                    <div className="absolute top-3 right-3 bg-amber-500 text-[#0A192F] text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      {locale === 'ar' ? 'قريباً في المنصة' : 'Coming Soon'}
                    </div>
                  )}
                </div>
                <div className="p-5 bg-white flex-1 flex flex-col justify-between text-center">
                  <h3 className="text-base font-bold text-[#0B2E59] mb-2">
                    {course.titleKey}
                  </h3>
                  <span className="text-xs font-semibold text-amber-600 mt-2 inline-block">
                    {isComingSoon 
                      ? (locale === 'ar' ? 'استعراض التفاصيل والمحاور ←' : 'View Details & Outline →')
                      : (locale === 'ar' ? 'استعراض تفاصيل الدورة ←' : 'View Course Details →')}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}