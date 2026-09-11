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

  // خريطة الدورات لكل قسم رئيسي مطابقة 100% لأسماء مجلداتك الفردية
  const departmentCoursesMap: Record<string, Array<{ slug: string; titleKey: string; image: string }>> = {
    'vibration': [
      { slug: 'vibration-analysis-cat-i', titleKey: 'Vibration Analysis Category I', image: '/courses/vibration-analysis-1.jpeg' },
      { slug: 'vibration-analysis-cat-ii', titleKey: 'Vibration Analysis Category II', image: '/courses/vibration-analysis-2.jpeg' },
      { slug: 'vibration-analysis-cat-iii', titleKey: 'Vibration Analysis Category III', image: '/courses/vibration-analysis-3.jpeg' },
      { slug: 'ultrasound-testing-ndt-level-i', titleKey: 'Ultrasound Testing NDT Level I', image: '/courses/ultrasound-level-1.jpeg' },
      { slug: 'mlt', titleKey: 'Machinery Lubrication Technician (MLT)', image: '/courses/mlt.jpeg' },
      { slug: 'mle', titleKey: 'Machinery Lubrication Engineer (MLE)', image: '/courses/mle.jpeg' },
      { slug: 'lubrication-analysis-i', titleKey: 'Machinery Lubrication Analysis Level I', image: '/courses/mla-level-1.jpeg' },
      { slug: 'lubrication-analysis-ii', titleKey: 'Machinery Lubrication Analysis Level II', image: '/courses/mla-level-2.jpeg' },
      { slug: 'lubrication-analysis-iii', titleKey: 'Machinery Lubrication Analysis Level III', image: '/courses/mla-level-3.jpeg' },
    ],
    'reliability': [
      { slug: 'rcm', titleKey: 'RCM', image: '/courses/rcm.jpeg' },
      { slug: 'rca', titleKey: 'RCA', image: '/courses/rca..jpeg' },
      { slug: 'fmea', titleKey: 'FMEA', image: '/courses/fmea.jpeg' },
      { slug: 'cmrp-prep', titleKey: 'CMRP Preparation', image: '/courses/cmrp.jpeg' },
      { slug: 'cmrt-prep', titleKey: 'CMRT Preparation', image: '/courses/cmrt.jpeg' },
      { slug: 'reliability-engineering', titleKey: 'Reliability Engineering', image: '/courses/reliability-engineering.jpeg' },
    ],
    'rotating-equipment': [
      { slug: 'pumps', titleKey: 'Pumps', image: '/courses/course-pumps.jpg' },
      { slug: 'compressors', titleKey: 'Compressors', image: '/courses/course-compressors.jpeg' },
      { slug: 'fans', titleKey: 'Fans', image: '/courses/course-fans.jpg' },
      { slug: 'bearings', titleKey: 'Bearings', image: '/courses/course-bearings.jpg' },
      { slug: 'mechanical-seals', titleKey: 'Mechanical Seals', image: '/courses/course-mechanical-seals.jpg' },
      { slug: 'turbines', titleKey: 'Turbines', image: '/courses/course-turbines.jpg' },
    ],
    'maintenance': [
      { slug: 'preventive-maintenance', titleKey: 'Preventive Maintenance', image: '/courses/preventive-maintenance.jpeg' },
      { slug: 'predictive-maintenance', titleKey: 'Predictive Maintenance', image: '/courses/predictive-maintenance.jpeg' },
      { slug: 'cmms', titleKey: 'CMMS', image: '/courses/cmms.jpeg' },
      { slug: 'shutdown-management', titleKey: 'Shutdown Management', image: '/courses/shutdown-management.jpeg' },
      { slug: 'planning-and-scheduling', titleKey: 'Planning & Scheduling', image: '/courses/planning-scheduling.jpeg' },
      { slug: 'sap-pm', titleKey: 'SAP PM', image: '/courses/sap-pm.jpeg' },
    ]
  };

  // لو الـ slug ليس واحداً من الأقسام الأربعة المعروفة، نتأكد إذا كان دالة ثانية أو نرجع 404
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
          {currentCourses.map((course) => (
            <Link 
              key={course.slug} 
              // الرابط هنا يتجه مباشرة إلى: /courses/[اسم القسم الحقيقي]/[اسم الدورة الفردية]
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
              </div>
              <div className="p-5 bg-white flex-1 flex flex-col justify-between text-center">
                <h3 className="text-base font-bold text-[#0B2E59] mb-2">
                  {course.titleKey}
                </h3>
                <span className="text-xs font-semibold text-amber-600 mt-2 inline-block">
                  {locale === 'ar' ? 'استعراض تفاصيل الدورة ←' : 'View Course Details →'}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}