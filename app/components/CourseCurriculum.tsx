'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, PlayCircle, HelpCircle, Lock, CheckCircle2 } from 'lucide-react';

export default function CourseCurriculum() {
  // حالة لفتح وإغلاق الأقسام (Accordion)
  const [openSections, setOpenSections] = useState<Record<number, boolean>>({ 0: true });

  const toggleSection = (index: number) => {
    setOpenSections(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const sections = [
    {
      title: "Maintenance & CM (مقدمة الصيانة ومراقبة الحالة)",
      lessons: [
        { title: "Introduction to Maintenance & CM", type: "video", duration: "10:42", status: "completed" },
        { title: "Quiz 1", type: "quiz", duration: "5 Questions", status: "unlocked" },
        { title: "CM & Inspection Techniques", type: "video", duration: "08:51", status: "locked" },
        { title: "Quiz 2", type: "quiz", duration: "5 Questions", status: "locked" },
      ]
    },
    {
      title: "Vibration Analysis (تحليل الاهتزازات)",
      lessons: [
        { title: "Basics of Vibration Monitoring", type: "video", duration: "15:00", status: "locked" },
        { title: "Vibration Spectra and Faults", type: "video", duration: "20:30", status: "locked" },
      ]
    },
    {
      title: "Oil Analysis (تحليل الزيوت)",
      lessons: [
        { title: "Introduction to Oil Tribology", type: "video", duration: "12:15", status: "locked" },
        { title: "Sampling and Laboratory Testing", type: "video", duration: "14:00", status: "locked" },
      ]
    },
    {
      title: "Infrared Thermography (التصوير الحراري)",
      lessons: [
        { title: "Principles of Thermal Imaging", type: "video", duration: "11:20", status: "locked" },
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto py-8 font-sans" dir="ltr">
      <h3 className="text-2xl font-bold text-[#0B2E59] mb-6">Topics of Course</h3>

      <div className="space-y-4">
        {sections.map((section, sIndex) => {
          const isOpen = openSections[sIndex];
          return (
            <div key={sIndex} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
              
              {/* رأس القسم القابل للطي */}
              <button
                onClick={() => toggleSection(sIndex)}
                className="w-full flex items-center justify-between p-5 bg-gray-50/70 hover:bg-gray-100/80 transition-colors text-left"
              >
                <span className="font-bold text-[#0B2E59] text-base">
                  {section.title}
                </span>
                <span className="text-gray-500">
                  {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>

              {/* محتوى القسم (الدروس والاختبارات) */}
              {isOpen && (
                <div className="divide-y divide-gray-100">
                  {section.lessons.map((lesson, lIndex) => (
                    <div key={lIndex} className="flex items-center justify-between p-4 px-6 hover:bg-gray-50/50 transition-colors">
                      
                      {/* تفاصيل الدرس والأيقونة */}
                      <div className="flex items-center gap-3">
                        {lesson.type === 'video' ? (
                          <PlayCircle size={20} className="text-[#0B2E59]" />
                        ) : (
                          <HelpCircle size={20} className="text-[#C5A059]" />
                        )}
                        <span className="text-sm font-medium text-gray-700">
                          {lesson.title}
                        </span>
                      </div>

                      {/* المدة الحالة وأيقونة القفل أو المتابعة */}
                      <div className="flex items-center gap-4">
                        <span className="text-xs text-gray-400 font-medium">
                          {lesson.duration}
                        </span>

                        {lesson.status === 'completed' && (
                          <CheckCircle2 size={18} className="text-emerald-500" />
                        )}
                        {lesson.status === 'unlocked' && (
                          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                        )}
                        {lesson.status === 'locked' && (
                          <Lock size={16} className="text-gray-400" />
                        )}
                      </div>

                    </div>
                  ))}
                </div>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
}