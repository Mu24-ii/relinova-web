'use client';

import { ClipboardList, ShieldCheck, Settings, Users, AlertTriangle, BookOpen, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRouter, useParams } from 'next/navigation';

export default function ServicesSection() {
  const router = useRouter();
  const params = useParams();
  const locale = (params?.locale as string) || 'ar';

  const services = [
    { 
      slug: "reliability-consulting",
      icon: ClipboardList, 
      title: "استشارات الموثوقية", 
      desc: "تحسين الموثوقية والرفع من أداء الأصول الاستراتيجية لشركتك." 
    },
    { 
      slug: "condition-monitoring",
      icon: Settings, 
      title: "مراقبة الحالة", 
      desc: "تقنيات متقدمة للصيانة التنبؤية ورصد الاهتزازات والأداء بانتظام." 
    },
    { 
      slug: "reliability-audit",
      icon: ShieldCheck, 
      title: "تدقيق الموثوقية", 
      desc: "تقييمات شاملة لتحسين أنظمة الصيانة ورفع كفاءة الأصول التشغيلية." 
    },
    { 
      slug: "rcm-studies",
      icon: AlertTriangle, 
      title: "دراسات RCM", 
      desc: "دراسات الصيانة المرتكزة على الموثوقية لضمان استمرارية التشغيل." 
    },
    { 
      slug: "failure-analysis",
      icon: Users, 
      title: "تحليل الأعطال", 
      desc: "تحليل السبب الجذري والتحقيق في الأعطال لمنع تكرارها." 
    },
    { 
      slug: "training-and-development",
      icon: BookOpen, 
      title: "التدريب والتطوير", 
      desc: "حلول تدريبية مخصصة لفريق عملك لرفع الكفاءة والمهارات الفنية." 
    },
  ];

  const handleCardClick = (slug: string) => {
    router.push(`/${locale}/services/${slug}`);
  };

  return (
    // تم تغيير الخلفية إلى الكحلي الداكن الرئيسي
    <section className="relative py-24 bg-[#0B1628] overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="text-right">
            {/* استخدام اللون الذهبي المعتمد */}
            <h3 className="text-[#D9A62E] font-bold text-sm uppercase tracking-widest mb-3">خدماتنا</h3>
            <h2 className="text-4xl font-bold text-white mb-12 leading-tight">حلول هندسية للعمليات الموثوقة</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((s, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -5 }}
                  onClick={() => handleCardClick(s.slug)}
                  // تحويل البطاقات إلى اللون الكحلي الداكن مع حدود خفيفة ومتجاوبة مع الهوفر
                  className="p-6 rounded-2xl bg-[#142238] border border-white/10 shadow-lg hover:shadow-2xl hover:border-[#D9A62E]/50 transition-all flex flex-col justify-between cursor-pointer select-none group"
                >
                  <div>
                    <div className="w-12 h-12 bg-[#D9A62E]/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-[#D9A62E]/20 transition-colors">
                      <s.icon className="text-[#D9A62E]" size={24} />
                    </div>
                    <h4 className="font-bold text-white text-base mb-2 group-hover:text-[#F2C75C] transition-colors">{s.title}</h4>
                    <p className="text-xs text-[#B8C2D1] leading-relaxed mb-6">{s.desc}</p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-[#D9A62E] group-hover:text-[#F2C75C] transition-colors">
                    <span>اكتشف المزيد</span>
                    <ArrowLeft size={14} />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative h-[600px] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10">
            <Image 
              src="/factory.jpeg" 
              alt="Factory" 
              fill 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-[#0B1628]/40" />
          </div>
        </div>

      </div>
    </section>
  );
}