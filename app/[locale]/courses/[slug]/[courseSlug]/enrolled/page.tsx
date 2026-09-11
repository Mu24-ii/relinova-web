import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export default async function CourseEnrolledPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string; courseSlug: string }>;
}) {
  const { locale, slug, courseSlug } = await params;
  const isAr = locale === 'ar';

  return (
    <main className="min-h-screen bg-[#0B1628] py-20 px-6 md:px-16 w-full text-white" dir={isAr ? 'rtl' : 'ltr'}>
      <div className="max-w-[1400px] mx-auto space-y-8">
        
        {/* زر العودة لتفاصيل الدورة */}
        <div>
          <Link 
            href={`/${locale}/courses/${slug}/${courseSlug}`} 
            className="text-[#D9A62E] font-semibold text-sm hover:underline inline-block"
          >
            {isAr ? '← العودة لوصف الدورة' : '← Back to Course Overview'}
          </Link>
        </div>

        {/* تنبيه الاشتراك الناجح */}
        <div className="bg-[#142238] border border-green-500/30 text-green-400 px-6 py-4 rounded-2xl text-sm font-medium flex items-center gap-3 shadow-lg">
          <span className="text-lg">✅</span>
          <span>
            {isAr 
              ? 'أنت مشترك! الوحدات تفتح بالتسلسل (يجب إتمام الوحدة الأولى وفتحها لفتح الوحدة التي عليها القفل)' 
              : 'You are enrolled! Units unlock sequentially.'}
          </span>
        </div>

        {/* الهيدر */}
        <div className="bg-[#142238] text-white p-8 md:p-12 rounded-3xl shadow-xl border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-3">
            <span className="bg-[#D9A62E]/10 text-[#D9A62E] border border-[#D9A62E]/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider inline-block">
              {isAr ? 'مسار تدريبي معتمد' : 'Certified Training Path'}
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-wide text-white">
              {courseSlug.replace(/-/g, ' ')}
            </h1>
          </div>
        </div>

        {/* محتوى الوحدات (نظام التسلسل) */}
        <div className="bg-[#142238] rounded-3xl p-6 md:p-10 shadow-xl border border-white/10 space-y-6">
          <h2 className="text-xl md:text-2xl font-bold text-white">
            {isAr ? 'محتوى الدورة التدريبية (نظام التسلسل)' : 'Course Content (Sequential System)'}
          </h2>

          <div className="space-y-4">
            {/* الوحدة الأولى - مكتملة */}
            <div className="border border-green-500/30 bg-green-500/5 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="bg-green-500 text-[#0B1628] text-xs font-bold px-2.5 py-1 rounded-lg">
                    {isAr ? 'مكتمل' : 'Completed'}
                  </span>
                  <h3 className="font-bold text-white text-lg">
                    {isAr ? 'الوحدة الأولى: مقدمة الأساسيات والمفاهيم الرئيسية' : 'Unit 1: Introduction & Key Concepts'}
                  </h3>
                </div>
                <p className="text-xs text-[#B8C2D1]">
                  {isAr ? 'اختبار الوحدة الأولى (5 أسئلة) • فيديو الدرس (15:30 دقيقة)' : 'Unit 1 Quiz (5 questions) • Video Lesson (15:30 mins)'}
                </p>
              </div>
              <span className="bg-[#0B1628] border border-white/10 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:border-[#D9A62E] transition-colors cursor-pointer">
                {isAr ? 'استعرض الوحدة' : 'View Unit'}
              </span>
            </div>

            {/* الوحدة الثانية - متاحة */}
            <div className="border border-white/10 bg-[#0B1628] rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 transition-all hover:border-[#D9A62E]/50">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="bg-[#D9A62E]/20 text-[#D9A62E] border border-[#D9A62E]/30 text-xs font-bold px-2.5 py-1 rounded-lg">
                    {isAr ? 'متاح' : 'Available'}
                  </span>
                  <h3 className="font-bold text-white text-lg">
                    {isAr ? 'الوحدة الثانية: العمليات التشغيلية وتحليل البيانات' : 'Unit 2: Operational Processes & Data Analysis'}
                  </h3>
                </div>
                <p className="text-xs text-[#B8C2D1]">
                  {isAr ? 'اختبار الوحدة الثانية (7 أسئلة) • فيديو الدرس (22:45 دقيقة)' : 'Unit 2 Quiz (7 questions) • Video Lesson (22:45 mins)'}
                </p>
              </div>
              <span className="bg-[#D9A62E] hover:bg-[#F2C75C] text-[#0B1628] px-6 py-3 rounded-xl text-sm font-bold transition-colors shadow-md">
                {isAr ? 'ابدأ هذه الوحدة ←' : 'Start Unit →'}
              </span>
            </div>

            {/* الوحدة الثالثة - مقفلة */}
            <div className="border border-white/5 bg-[#0B1628]/50 rounded-2xl p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 opacity-75">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="bg-white/10 text-[#B8C2D1] text-xs font-bold px-2.5 py-1 rounded-lg">
                    {isAr ? 'مقفلة' : 'Locked'}
                  </span>
                  <h3 className="font-bold text-[#B8C2D1] text-lg">
                    {isAr ? 'الوحدة الثالثة: استكشاف الأعطال وحلول الصيانة' : 'Unit 3: Troubleshooting & Maintenance'}
                  </h3>
                </div>
                <p className="text-xs text-[#B8C2D1]/60">
                  {isAr ? 'اختبار الوحدة الثالثة (6 أسئلة) • فيديو الدرس (18:10 دقيقة)' : 'Unit 3 Quiz (6 questions) • Video Lesson (18:10 mins)'}
                </p>
              </div>
              <span className="bg-white/5 text-[#B8C2D1]/50 border border-white/5 px-5 py-2.5 rounded-xl text-sm font-semibold cursor-not-allowed">
                {isAr ? 'مقفلة 🔒' : 'Locked 🔒'}
              </span>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}