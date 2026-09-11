import Link from 'next/link';

export default async function CertificatesPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { locale } = await params;
  const resolvedSearchParams = await searchParams;

  // معرفة اسم الدورة المحصلة من الـ Query Params أو عرض دورة افتراضية
  const courseSlug = (resolvedSearchParams.course as string) || 'failure-mode-analysis';
  const courseTitle =
    courseSlug === 'failure-mode-analysis'
      ? (locale === 'ar' ? 'تحليل أنماط الفشل وآثارها (FMEA)' : 'Failure Mode and Effects Analysis (FMEA)')
      : courseSlug.replace(/-/g, ' ').toUpperCase();

  // بيانات الطالب المكتملة
  const studentName = locale === 'ar' ? 'متعب العتيبي' : 'Muteb Al-Otaibi';
  const issueDate = new Date().toLocaleDateString(locale === 'ar' ? 'ar-SA' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const certificateId = 'RN-CERT-2026-757';

  return (
    <main className="min-h-screen bg-primary py-12 px-6 md:px-16 text-white" dir={locale === 'ar' ? 'rtl' : 'ltr'}>
      <div className="max-w-[1200px] mx-auto">
        
        {/* العودة للوحة التحكم أو الدورات */}
        <div className="mb-8 flex items-center justify-between">
          <Link
            href={`/${locale}/courses`}
            className="text-sm text-gray-300 hover:text-accent inline-flex items-center gap-2 font-semibold transition-colors"
          >
            <span className={locale === 'ar' ? 'rotate-180 inline-block' : 'inline-block'}>←</span>
            <span>{locale === 'ar' ? 'العودة للدورات' : 'Back to Courses'}</span>
          </Link>
          <div className="text-xs font-semibold text-gray-300 bg-primary-hover border border-white/10 px-3.5 py-1.5 rounded-lg">
            {locale === 'ar' ? 'رقم الشهادة: ' + certificateId : 'Cert ID: ' + certificateId}
          </div>
        </div>

        {/* كارت عرض الشهادة المعتمدة */}
        <div className="bg-primary-hover border border-white/10 rounded-3xl p-8 md:p-14 shadow-2xl relative overflow-hidden mb-8">
          
          {/* خلفية جمالية مائية / شارات الهوية */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-accent/10 to-transparent rounded-bl-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-white/5 to-transparent rounded-tr-full pointer-events-none" />

          {/* رأس الشهادة */}
          <div className="text-center mb-10">
            <div className="inline-block bg-primary border border-white/10 text-accent text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">
              {locale === 'ar' ? 'معهد ريلينوفا للاستشارات والتدريب الهندسي' : 'ReliNova Institute for Engineering Consulting & Training'}
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-2">
              {locale === 'ar' ? 'شهادة إتمام دورة تدريبية' : 'Certificate of Completion'}
            </h1>
            <p className="text-gray-300 text-sm md:text-base font-medium">
              {locale === 'ar' ? 'يشهد المعهد بأن المشارك الموضحة بياناته أدناه قد أتم بنجاح كافة متطلبات البرنامج التدريبي' : 'This is to certify that the participant has successfully completed all requirements of the training program'}
            </p>
          </div>

          {/* اسم الطالب والدورة */}
          <div className="my-10 text-center border-y border-white/10 py-8 space-y-4">
            <div>
              <span className="text-xs text-gray-300 uppercase tracking-wider font-semibold block mb-1">
                {locale === 'ar' ? 'تُمنح هذه الشهادة لـ:' : 'This Certificate is Awarded To:'}
              </span>
              <h2 className="text-2xl md:text-4xl font-extrabold text-white underline decoration-accent decoration-2 underline-offset-8">
                {studentName}
              </h2>
            </div>

            <div className="pt-4">
              <span className="text-xs text-gray-300 uppercase tracking-wider font-semibold block mb-1">
                {locale === 'ar' ? 'لاكتياره واجتيازه بنجاح البرنامج التدريبي المعتمد:' : 'For Successfully Passing The Certified Training Program:'}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-accent">
                {courseTitle}
              </h3>
            </div>
          </div>

          {/* التوقيعات وتاريخ الإصدار */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center pt-4 text-center md:text-start">
            <div>
              <span className="text-xs text-gray-300 block font-medium">{locale === 'ar' ? 'تاريخ الإصدار:' : 'Issue Date:'}</span>
              <span className="text-sm font-bold text-white">{issueDate}</span>
            </div>

            <div className="flex justify-center">
              <div className="w-20 h-20 bg-primary border-2 border-accent/50 rounded-full flex items-center justify-center text-accent text-3xl shadow-inner font-extrabold">
                🏅
              </div>
            </div>

            <div className="md:text-end">
              <span className="text-xs text-gray-300 block font-medium">{locale === 'ar' ? 'حالة الاعتماد:' : 'Accreditation:'}</span>
              <span className="text-sm font-bold text-emerald-400 flex items-center justify-center md:justify-end gap-1">
                <span>✓</span> {locale === 'ar' ? 'شهادة موثقة ومعتمدة' : 'Verified & Certified'}
              </span>
            </div>
          </div>

        </div>

        {/* أزرار الإجراءات (طباعة وتحميل) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => typeof window !== 'undefined' && window.print()}
            className="w-full sm:w-auto bg-accent hover:bg-accent-hover text-primary font-bold py-3.5 px-8 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 text-sm cursor-pointer"
          >
            <span>🖨️</span>
            <span>{locale === 'ar' ? 'طباعة / حفظ كـ PDF' : 'Print / Save as PDF'}</span>
          </button>

          <Link
            href={`/${locale}/courses`}
            className="w-full sm:w-auto bg-primary-hover hover:bg-primary border border-white/10 text-white font-semibold py-3.5 px-8 rounded-xl transition-all text-sm text-center"
          >
            {locale === 'ar' ? 'الاستمرار في تصفح الدورات' : 'Continue Browsing Courses'}
          </Link>
        </div>

      </div>
    </main>
  );
}