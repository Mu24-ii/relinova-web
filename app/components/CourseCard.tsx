import Link from 'next/link';
import Image from 'next/image';

interface CourseCardProps {
  locale: string;
  categorySlug: string;
  course: {
    slug: string;
    title: string;
    description: string;
    image?: string;
  };
}

export default function CourseCard({ locale, categorySlug, course }: CourseCardProps) {
  // دالة مساعدة لضمان صحة مسار الصورة أو توفير صورة افتراضية ذهبية فاخرة في حال عدم توفرها
  const getCourseImage = (img?: string) => {
    if (!img) return '/courses/course-placeholder.jpeg'; // تأكد من توفير صورة افتراضية أو تعديلها
    // إذا كانت الصورة تبدأ بـ http أو / فهي صحيحة، وإلا نربطها بمجلد الدورات
    if (img.startsWith('http') || img.startsWith('/')) return img;
    return `/courses/${img}`;
  };

  return (
    // بطاقة بتصميم كحلي داكن فاخر مع حدود ذهبية متوهجة وتفاعل راقي عند التمرير
    <div className="group bg-[#142238] rounded-2xl border border-[#D9A62E]/30 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#D9A62E]/10 hover:border-[#F2C75C] transition-all duration-300 flex flex-col justify-between">
      
      {/* عرض صورة الدورة بجودة عالية وبدون أي قص أو تشويه */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#0B1628] border-b border-[#D9A62E]/20">
        <Image
          src={getCourseImage(course.image)}
          alt={course.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain bg-[#08101D] group-hover:scale-105 transition-transform duration-500"
        />
        {/* إطار تجميلي ذهبي خفيف فوق الصورة */}
        <div className="absolute inset-0 ring-1 ring-inset ring-white/5 pointer-events-none" />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#F2C75C] transition-colors leading-snug">
          {course.title}
        </h3>
        <p className="text-[#B8C2D1] text-sm line-clamp-2 leading-relaxed">
          {course.description}
        </p>
      </div>

      <div className="p-6 pt-0">
        <Link 
          href={`/${locale}/courses/${categorySlug}/${course.slug}`}
          className="block w-full bg-gradient-to-r from-[#D9A62E] to-[#F2C75C] hover:from-[#F2C75C] hover:to-[#D9A62E] text-[#0B1628] text-center font-bold py-3 px-4 rounded-xl transition-all duration-300 text-sm shadow-md hover:shadow-lg hover:shadow-[#D9A62E]/20"
        >
          {locale === 'ar' ? 'استعراض تفاصيل الدورة' : 'View Course Details'}
        </Link>
      </div>
    </div>
  );
}