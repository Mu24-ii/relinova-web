import Image from 'next/image';
import Link from 'next/link';

export default async function EngineeringConsultationsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const isArabic = locale === 'ar';

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-blue-50/20 py-16 px-6 md:px-12 w-full font-sans" dir={isArabic ? 'rtl' : 'ltr'}>
      {/* هيدر الصفحة */}
      <div className="bg-[#0B2E59] rounded-3xl py-12 px-6 text-center max-w-5xl mx-auto mb-12 shadow-xl relative overflow-hidden">
        {/* لمسة تدرج خلفي خفيف في الهيدر */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 via-transparent to-amber-500/10 pointer-events-none" />
        
        <h1 className="text-3xl md:text-4xl font-extrabold text-amber-400 mb-3 tracking-wide relative z-10">
          {isArabic ? 'الاستشارات الهندسية' : 'Engineering Consultations'}
        </h1>
        <p className="text-white text-sm md:text-base font-medium opacity-90 max-w-2xl mx-auto leading-relaxed relative z-10">
          {isArabic 
            ? 'احصل على استشارات هندسية متخصصة في الموثوقية، الصيانة، وإدارة المعدات الدوارة من نخبة الخبراء.' 
            : 'Get specialized engineering consultations in reliability, maintenance, and rotating equipment management from elite experts.'}
        </p>
      </div>

      {/* محتوى الصفحة الرئيسي */}
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* قسم النصوص والمميزات */}
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0B2E59] mb-4 tracking-tight">
              {isArabic ? 'لماذا تطلب استشارة هندسية معنا؟' : 'Why Request Our Consultations?'}
            </h2>
            <p className="text-slate-600 mb-6 leading-relaxed text-sm md:text-base">
              {isArabic 
                ? 'نقدم حلولاً فنية هندسية مدروسة لمشاكل اهتزازات الآلات، تحليل الأعطال الجذرية (RCA)، وتطوير استراتيجيات الصيانة لضمان أعلى كفاءة تشغيلية لمصنعك أو منشأتك.'
                : 'We provide studied engineering technical solutions for machinery vibration issues, Root Cause Analysis (RCA), and maintenance strategy development to ensure top operational efficiency for your plant.'}
            </p>
            
            <ul className="space-y-3.5 text-slate-700 text-sm font-semibold mb-8">
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                {isArabic ? 'دراسة وتحليل المشاكل التشغيلية المعقدة' : 'Study and analysis of complex operational problems'}
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                {isArabic ? 'مراجعة خطط الصيانة والتحسين المستمر' : 'Review maintenance plans & continuous improvement'}
              </li>
              <li className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-bold shrink-0">✓</span>
                {isArabic ? 'جلسات استشارية مخصصة عبر الإنترنت' : 'Dedicated online consulting sessions'}
              </li>
            </ul>

            <Link
              href={`/${locale}/contact`}
              className="inline-block bg-amber-500 hover:bg-amber-600 text-[#0B2E59] font-bold px-8 py-3.5 rounded-2xl shadow-lg shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-0.5 text-center"
            >
              {isArabic ? 'اطلب استشارتك الآن ➔' : 'Request Your Consultation Now ➔'}
            </Link>
          </div>

          {/* قسم الصورة البصرية */}
          <div className="relative w-full aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-[#0A192F]">
            <Image
              src="/courses/maintenance-courses.jpeg"
              alt="الاستشارات الهندسية"
              fill
              className="object-cover opacity-90 transform hover:scale-105 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E59]/40 via-transparent to-transparent pointer-events-none" />
          </div>

        </div>
      </div>
    </main>
  );
}