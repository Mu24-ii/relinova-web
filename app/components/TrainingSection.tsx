'use client';
import { motion } from 'framer-motion';

export default function TrainingSection() {
  const courses = [
    { title: "Reliability Engineering", desc: "أساسيات هندسة الموثوقية" },
    { title: "Vibration Analysis", desc: "تحليل الاهتزازات المتقدم" },
    { title: "Asset Management", desc: "إدارة الأصول الصناعية" }
  ];

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-24 bg-[#0B1628] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-white mb-12 tracking-tight">الدورات التدريبية</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -5 }}
              className="p-8 bg-[#142238] border border-white/10 rounded-2xl shadow-lg hover:shadow-2xl hover:border-[#D9A62E]/50 transition-all flex flex-col justify-between"
            >
              <h3 className="text-xl font-bold mb-3 text-white">{course.title}</h3>
              <p className="text-[#B8C2D1] text-sm leading-relaxed">{course.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}