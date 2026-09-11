"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Target, Globe, Award, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const images = ["/hero-bg.jpg", "/hero-bg-2.jpg"]; 
  const [index, setIndex] = useState(0);

  // تغيير الخلفية كل 8 ثوانٍ
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full min-h-[750px] flex flex-col justify-between overflow-visible pb-20">
      
      {/* 1. الخلفية مع الانيميشن وتدرج اللون الداكن */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode='wait'>
          <motion.img
            key={images[index]}
            src={images[index]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[#0B1628]/75" /> 
      </div>

      {/* 2. المحتوى الرئيسي مع تغبيش فاخر */}
      <div className="flex-grow flex items-center px-6 md:px-16 relative z-10 pt-28 pb-16">
        <div className="max-w-2xl text-white p-8 md:p-10 rounded-3xl bg-[#142238]/60 backdrop-blur-md border border-white/10 shadow-2xl">
          <h1 className="text-4xl md:text-[55px] font-bold leading-tight mb-6 text-white tracking-tight">
            Empowering <span className="text-[#D9A62E]">Reliability.</span><br />
            Driving <span className="text-[#D9A62E]">Performance.</span>
          </h1>
          <p className="text-base md:text-[17px] text-[#B8C2D1] mb-8 max-w-lg leading-relaxed">
            World-class training and consulting in Reliability Engineering, 
            Condition Monitoring, and Asset Management.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-[#D9A62E] text-[#0B1628] px-8 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#F2C75C] transition-all cursor-pointer shadow-lg">
              EXPLORE COURSES <ArrowRight size={16} />
            </button>
            <button className="border-2 border-[#D9A62E] text-white px-8 py-3.5 rounded-xl font-bold hover:bg-[#D9A62E] hover:text-[#0B1628] transition-all cursor-pointer shadow-md">
              OUR SERVICES
            </button>
          </div>
        </div>
      </div>

      {/* 3. البطاقات السفلية المتداخلة */}
      <div className="relative z-20 w-[90%] max-w-7xl mx-auto bg-[#142238] backdrop-blur-md rounded-3xl p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border border-white/10 shadow-2xl translate-y-10 md:translate-y-16">
        <FeatureItem icon={<BookOpen size={28} />} title="Expert Instructors" desc="Learn from industry professionals" />
        <FeatureItem icon={<Target size={28} />} title="Practical Training" desc="Hands-on experience with real-world applications" />
        <FeatureItem icon={<Globe size={28} />} title="Global Standards" desc="Courses aligned with international standards" />
        <FeatureItem icon={<Award size={28} />} title="Certification" desc="Earn recognized certificates" />
      </div>
    </section>
  );
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex items-center gap-4 text-white p-2">
      <div className="text-[#D9A62E] shrink-0">{icon}</div>
      <div>
        <h3 className="font-bold text-[15px] text-white">{title}</h3>
        <p className="text-[12px] text-[#B8C2D1]">{desc}</p>
      </div>
    </div>
  );
}