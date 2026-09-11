// app/components/AboutUsSection.tsx
'use client';

import { useTranslations } from 'next-intl';
import { 
  Target, 
  Compass, 
  Activity, 
  Award, 
  CheckCircle2, 
  Building2, 
  ShieldCheck, 
  Lightbulb, 
  BookOpen, 
  Wrench,
  Cpu
} from 'lucide-react';

export default function AboutUsSection() {
  const t = useTranslations('About');

  const rawExpertise = t.raw('expertise.items');
  const expertiseItems: string[] = Array.isArray(rawExpertise) ? rawExpertise : [];

  const rawIndustries = t.raw('industries.items');
  const industriesItems: string[] = Array.isArray(rawIndustries) ? rawIndustries : [];

  const rawWhyChoose = t.raw('whyChooseUs.points');
  const whyChoosePoints: string[] = Array.isArray(rawWhyChoose) ? rawWhyChoose : [];

  return (
    // تم تحويل الخلفية العامة إلى الكحلي الداكن المعتمد
    <section className="py-20 px-6 md:px-16 bg-[#0B1628] text-white" dir="rtl">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* الترويسة الرئيسية */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#D9A62E]/10 text-[#D9A62E] rounded-full text-xs font-bold border border-[#D9A62E]/20 shadow-sm mx-auto">
            <Cpu size={14} /> ReliNova Institute
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            {t('title')}
          </h1>
          <p className="text-lg font-semibold text-[#F2C75C]">
            {t('subtitle')}
          </p>
          <p className="max-w-3xl mx-auto text-sm md:text-base font-medium text-[#B8C2D1] leading-relaxed">
            {t('desc')}
          </p>
        </div>

        {/* كروت الرؤية والرسالة */}
        <div className="grid md:grid-cols-2 gap-8 text-right">
          <div className="bg-[#142238] p-8 rounded-2xl shadow-lg border border-white/10 space-y-4 hover:border-[#D9A62E]/50 transition-all">
            <div className="w-12 h-12 bg-[#D9A62E]/10 text-[#D9A62E] rounded-xl flex items-center justify-center">
              <Compass size={24} />
            </div>
            <h2 className="text-xl font-bold text-white">{t('vision.title')}</h2>
            <p className="text-[#B8C2D1] text-sm font-medium leading-relaxed">{t('vision.desc')}</p>
          </div>

          <div className="bg-[#142238] p-8 rounded-2xl shadow-lg border border-white/10 space-y-4 hover:border-[#D9A62E]/50 transition-all">
            <div className="w-12 h-12 bg-[#D9A62E]/10 text-[#D9A62E] rounded-xl flex items-center justify-center">
              <Target size={24} />
            </div>
            <h2 className="text-xl font-bold text-white">{t('mission.title')}</h2>
            <p className="text-[#B8C2D1] text-sm font-medium leading-relaxed">{t('mission.desc')}</p>
          </div>
        </div>

        {/* قسم ما نفعله (الخدمات الأربع) */}
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">{t('whatWeDo.title')}</h2>
            <p className="text-sm font-semibold text-[#B8C2D1]">{t('whatWeDo.subtitle')}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-right">
            <div className="bg-[#142238] p-6 rounded-xl border border-white/10 shadow-lg space-y-3 hover:border-[#D9A62E]/50 transition-all">
              <div className="text-[#D9A62E]"><BookOpen size={22} /></div>
              <h3 className="font-bold text-white">{t('whatWeDo.training.title')}</h3>
              <p className="text-xs font-medium text-[#B8C2D1] leading-relaxed">{t('whatWeDo.training.desc')}</p>
            </div>

            <div className="bg-[#142238] p-6 rounded-xl border border-white/10 shadow-lg space-y-3 hover:border-[#D9A62E]/50 transition-all">
              <div className="text-[#D9A62E]"><Lightbulb size={22} /></div>
              <h3 className="font-bold text-white">{t('whatWeDo.consulting.title')}</h3>
              <p className="text-xs font-medium text-[#B8C2D1] leading-relaxed">{t('whatWeDo.consulting.desc')}</p>
            </div>

            <div className="bg-[#142238] p-6 rounded-xl border border-white/10 shadow-lg space-y-3 hover:border-[#D9A62E]/50 transition-all">
              <div className="text-[#D9A62E]"><Activity size={22} /></div>
              <h3 className="font-bold text-white">{t('whatWeDo.fieldServices.title')}</h3>
              <p className="text-xs font-medium text-[#B8C2D1] leading-relaxed">{t('whatWeDo.fieldServices.desc')}</p>
            </div>

            <div className="bg-[#142238] p-6 rounded-xl border border-white/10 shadow-lg space-y-3 hover:border-[#D9A62E]/50 transition-all">
              <div className="text-[#D9A62E]"><Award size={22} /></div>
              <h3 className="font-bold text-white">{t('whatWeDo.professionalDev.title')}</h3>
              <p className="text-xs font-medium text-[#B8C2D1] leading-relaxed">{t('whatWeDo.professionalDev.desc')}</p>
            </div>
          </div>

          {/* الكروت الثلاثة الإضافية */}
          <div className="grid md:grid-cols-3 gap-6 pt-4 text-right">
            <div className="bg-[#142238] p-6 rounded-xl border border-white/10 shadow-lg space-y-3 hover:border-[#D9A62E]/50 transition-all">
              <div className="w-12 h-12 bg-[#D9A62E]/10 text-[#D9A62E] rounded-xl flex items-center justify-center">
                <ShieldCheck size={24} />
              </div>
              <h3 className="font-bold text-base text-white">{t('extraCards.card1.title')}</h3>
              <p className="text-xs font-medium text-[#B8C2D1] leading-relaxed">{t('extraCards.card1.desc')}</p>
            </div>

            <div className="bg-[#142238] p-6 rounded-xl border border-white/10 shadow-lg space-y-3 hover:border-[#D9A62E]/50 transition-all">
              <div className="w-12 h-12 bg-[#D9A62E]/10 text-[#D9A62E] rounded-xl flex items-center justify-center">
                <BookOpen size={24} />
              </div>
              <h3 className="font-bold text-base text-white">{t('extraCards.card2.title')}</h3>
              <p className="text-xs font-medium text-[#B8C2D1] leading-relaxed">{t('extraCards.card2.desc')}</p>
            </div>

            <div className="bg-[#142238] p-6 rounded-xl border border-white/10 shadow-lg space-y-3 hover:border-[#D9A62E]/50 transition-all">
              <div className="w-12 h-12 bg-[#D9A62E]/10 text-[#D9A62E] rounded-xl flex items-center justify-center">
                <Cpu size={24} />
              </div>
              <h3 className="font-bold text-base text-white">{t('extraCards.card3.title')}</h3>
              <p className="text-xs font-medium text-[#B8C2D1] leading-relaxed">{t('extraCards.card3.desc')}</p>
            </div>
          </div>
        </div>

        {/* مجالات الخبرة */}
        <div className="bg-[#142238] p-8 md:p-12 rounded-2xl shadow-lg border border-white/10 space-y-6 text-right">
          <div className="flex items-center gap-3 justify-start">
            <div className="w-10 h-10 bg-[#D9A62E]/10 text-[#D9A62E] rounded-lg flex items-center justify-center">
              <Wrench size={20} />
            </div>
            <h2 className="text-2xl font-bold text-white">{t('expertise.title')}</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {expertiseItems.map((item, index) => (
              <div key={index} className="flex items-center gap-2.5 text-sm font-semibold text-white bg-[#0B1628] p-3 rounded-lg border border-white/10 text-right" dir="auto">
                <CheckCircle2 size={16} className="text-[#D9A62E] shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* القطاعات التي نخدمها */}
        <div className="space-y-6 text-right">
          <div className="flex items-center gap-3 justify-start">
            <div className="w-10 h-10 bg-[#D9A62E]/10 text-[#D9A62E] rounded-lg flex items-center justify-center">
              <Building2 size={20} />
            </div>
            <h2 className="text-2xl font-bold text-white">{t('industries.title')}</h2>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {industriesItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-[#142238] p-4 rounded-xl border border-white/10 shadow-lg">
                <div className="w-2.5 h-2.5 rounded-full bg-[#D9A62E] shrink-0"></div>
                <span className="text-sm font-bold text-white">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* لماذا تختار ريلي نوفا؟ */}
        <div className="bg-[#142238] text-white p-8 md:p-12 rounded-2xl space-y-8 shadow-xl border border-white/10 text-right">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-[#F2C75C]">{t('whyChooseUs.title')}</h2>
            <p className="text-[#B8C2D1] text-sm font-medium">{t('whyChooseUs.desc')}</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {whyChoosePoints.map((point, index) => (
              <div key={index} className="flex items-center gap-3 bg-[#0B1628] p-4 rounded-xl border border-white/10">
                <ShieldCheck size={20} className="text-[#D9A62E] shrink-0" />
                <span className="text-sm font-semibold text-white">{point}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}