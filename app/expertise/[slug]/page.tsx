"use client";

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Wrench } from 'lucide-react';

export default function ExpertiseDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // تحويل الرابط إلى نص مفهوم
  const title = slug ? slug.replace(/-/g, ' ').toUpperCase() : '';

  return (
    <main className="min-h-screen bg-[#0B1628] text-white pt-32 pb-20 px-6 md:px-16" dir="rtl">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* زر العودة */}
        <div>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-bold text-[#B8C2D1] hover:text-[#D9A62E] transition-colors"
          >
            <ArrowRight size={16} />
            <span>العودة للرئيسية</span>
          </Link>
        </div>

        {/* الترويسة والعنوان */}
        <div className="bg-[#142238] p-8 md:p-12 rounded-3xl shadow-xl border border-white/10 space-y-6">
          <div className="w-16 h-16 bg-[#0B1628] rounded-2xl flex items-center justify-center border border-white/10">
            <Wrench size={32} className="text-[#D9A62E]" />
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white">
            {title}
          </h1>

          <p className="text-base text-[#B8C2D1] font-medium leading-relaxed">
            مرحباً بك في صفحة {title}. هنا سنعرض تفاصيل هذه الخدمة التقنية المتخصصة، والحلول الهندسية التي نقدمها لضمان كفاءة المعدات ورفع الموثوقية التشغيلية وفق أحدث المعايير.
          </p>
        </div>

        {/* صورة أو مساحة توضيحية */}
        <div className="w-full h-[300px] bg-[#142238] rounded-3xl flex items-center justify-center border border-white/10 shadow-xl">
          <p className="text-[#B8C2D1] font-medium">صورة توضيحية لخدمة {title}</p>
        </div>

      </div>
    </main>
  );
}