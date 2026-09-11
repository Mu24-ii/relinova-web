import Image from 'next/image';
import Link from 'next/link';

export default async function TechnicalServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6 md:px-12 w-full">
      {/* هيدر الصفحة */}
      <div className="bg-[#0B2E59] rounded-3xl py-12 px-6 text-center max-w-5xl mx-auto mb-12 shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-amber-400 mb-3 tracking-wide">
          الخدمات الفنية
        </h1>
        <p className="text-white text-sm md:text-base font-medium opacity-90 max-w-2xl mx-auto">
          حلول هندسية ميدانية متكاملة تشمل فحص المعدات، دعم أعمال الصيانة، وتحسين كفاءة التشغيل.
        </p>
      </div>

      {/* محتوى الخدمات الفنية */}
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative w-full aspect-video md:aspect-square rounded-2xl overflow-hidden shadow-md bg-[#0A192F]">
            <Image
              src="/courses/condition-monitoring.jpeg"
              alt="الخدمات الفنية"
              fill
              className="object-cover opacity-90"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-[#0B2E59] mb-4">خدمات ميدانية بجودة واحترافية عالية</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              نقدم الدعم الفني الميداني للفرق الهندسية، بما يساعد على تقليل الأعطال غير المتوقعة ورفع الاعتمادية التشغيلية للآلات والمعدات الثقيلة.
            </p>
            <ul className="space-y-3 text-gray-700 text-sm font-medium mb-8">
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">✓</span> مساعدة ميدانية في الفحص والتشخيص
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">✓</span> دعم تطبيق أنظمة الصيانة التنبؤية
              </li>
              <li className="flex items-center gap-2">
                <span className="text-amber-500 font-bold">✓</span> استجابة سريعة للاستفسارات التقنية
              </li>
            </ul>
            <Link
              href={`/${locale}/contact`}
              className="inline-block bg-amber-500 hover:bg-amber-600 text-[#0B2E59] font-bold px-8 py-3 rounded-xl shadow-md transition-all duration-300"
            >
              اطلب الخدمة الفنية
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}