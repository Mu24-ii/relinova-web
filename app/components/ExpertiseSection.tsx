"use client";

import { motion } from 'framer-motion';

const expertise = [
  { id: "01", image: "/assets/expertise/vibration-analysis.jpg" },
  { id: "02", image: "/assets/expertise/infrared-thermography.jpg" },
  { id: "03", image: "/assets/expertise/ultrasound-inspection.jpg" },
  { id: "04", image: "/assets/expertise/oil-analysis.jpg" },
  { id: "05", image: "/assets/expertise/laser-alignment.jpg" },
  { id: "06", image: "/assets/expertise/dynamic-balancing.jpg" },
  { id: "07", image: "/assets/expertise/reliability-engineering.jpg" },
  { id: "08", image: "/assets/expertise/rotating-equipment.jpg" },
  { id: "09", image: "/assets/expertise/root-cause.jpg" },
  { id: "10", image: "/assets/expertise/engineering-training.jpg" },
];

export default function ExpertiseSection() {
  return (
    <section className="py-24 bg-[#0B1628] text-white">
      <div className="max-w-[90rem] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-2">OUR AREAS OF <span className="text-[#D9A62E]">EXPERTISE</span></h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {expertise.map((item) => (
            <motion.div 
              key={item.id}
              whileHover={{ y: -5 }}
              className="relative group overflow-hidden rounded-2xl border border-white/10 h-[400px] flex flex-col bg-[#142238] shadow-lg hover:shadow-2xl hover:border-[#D9A62E]/50 transition-all duration-300"
            >
              {/* الصورة */}
              <div className="flex-grow p-4 bg-[#0B1628]/40 relative flex items-center justify-center">
                <img 
                  src={item.image} 
                  alt="Expertise" 
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
              </div>
              
              {/* زر الانتقال باللون الذهبي الموحد #D9A62E */}
              <div className="p-3">
                <div className="bg-[#D9A62E] hover:bg-[#F2C75C] transition-colors duration-300 py-3 px-4 flex items-center justify-between cursor-pointer rounded-xl shadow-md">
                  <span className="text-[#0B1628] font-bold text-xs tracking-wider">LEARN MORE</span>
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#0B1628] font-bold"
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}