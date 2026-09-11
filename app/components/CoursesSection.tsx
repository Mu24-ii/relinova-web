"use client";

import { Star } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useParams } from 'next/navigation';

const courses = [
  { title: "Vibration Analysis Category I", slug: "condition-monitoring", duration: "5 Days", level: "Beginner", rating: 4.9, reviews: 126 },
  { title: "Infrared Thermography", slug: "condition-monitoring", duration: "3 Days", level: "Beginner", rating: 4.8, reviews: 98 },
  { title: "Lubrication & Oil Analysis", slug: "condition-monitoring", duration: "3 Days", level: "Intermediate", rating: 4.8, reviews: 87 },
  { title: "Ultrasound Inspection", slug: "condition-monitoring", duration: "2 Days", level: "Intermediate", rating: 4.7, reviews: 74 },
  { title: "Reliability Engineering Fundamentals", slug: "reliability-courses", duration: "4 Days", level: "Beginner", rating: 4.9, reviews: 112 },
];

export default function CoursesSection() {
  const params = useParams();
  const locale = params?.locale || 'ar';

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0B1628] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h3 className="text-[#D9A62E] font-bold text-[14px] uppercase tracking-widest mb-1">Our Training</h3>
            <h2 className="text-[32px] font-bold text-white">Popular Courses</h2>
          </div>
          <Link 
            href={`/${locale}/courses`}
            className="text-[#D9A62E] font-bold flex items-center gap-2 hover:translate-x-2 transition-all"
          >
            View All Courses →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {courses.map((course, index) => (
            <motion.div 
              key={index} 
              whileHover={{ y: -10 }}
              className="bg-[#142238] rounded-3xl overflow-hidden border border-white/10 shadow-lg hover:shadow-2xl hover:border-[#D9A62E]/50 transition-all flex flex-col justify-between"
            >
              <div className="h-40 bg-[#0B1628] relative overflow-hidden">
                 <div className="absolute inset-0 bg-white/5 animate-pulse" /> 
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-[15px] text-white mb-2 leading-tight h-[40px] overflow-hidden">
                    {course.title}
                  </h4>
                  <p className="text-[12px] text-[#B8C2D1] mb-4">{course.duration} • {course.level}</p>
                  
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-[#D9A62E] text-[#D9A62E]" />)}
                    <span className="text-[12px] font-bold ml-1 text-white">{course.rating} <span className="text-[#B8C2D1]/60">({course.reviews})</span></span>
                  </div>
                </div>

                <Link 
                  href={`/${locale}/courses`}
                  className="w-full bg-[#D9A62E] text-[#0B1628] py-3 rounded-2xl font-bold text-[13px] hover:bg-[#F2C75C] transition-all text-center block shadow-md"
                >
                  VIEW COURSE
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}