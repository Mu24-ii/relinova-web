'use client';

import React, { useState, useEffect } from 'react';
import { Award, Download, CheckCircle, ShieldCheck, Send } from 'lucide-react';

interface Certificate {
  id: string;
  titleAr: string;
  titleEn: string;
  issueDate: string;
  certificateNumber: string;
  issuer: string;
}

export default function CertificatesPage() {
  const [currentEmail] = useState('mutab@relinovaconsultant.com');
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [notification, setNotification] = useState<string | null>(null);

  // تحميل الشهادات أول ما تفتح الصفحة بناءً على إنجاز المستخدم الحقيقي
  useEffect(() => {
    const stored = localStorage.getItem(`user_certs_${currentEmail}`);
    if (stored) {
      try {
        setCertificates(JSON.parse(stored));
      } catch {
        setCertificates([]);
      }
    }
  }, [currentEmail]);

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#070e1a] text-[#B8C2D1] py-12 px-6 md:px-12" dir="rtl">
      <div className="max-w-5xl mx-auto">
        
        {/* إشعار الإرسال */}
        {notification && (
          <div className="mb-6 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 p-4 rounded-xl text-xs md:text-sm flex items-center gap-3 shadow-lg">
            <Send size={20} className="shrink-0 text-emerald-400" />
            <span>{notification}</span>
          </div>
        )}

        {/* ترويسة الصفحة */}
        <div className="mb-8 bg-[#0B1628] border border-white/10 p-6 rounded-2xl shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold text-white flex items-center gap-3">
              <Award className="text-[#D9A62E]" size={32} />
              محفظة الشهادات الرقمية
            </h1>
            <p className="text-xs text-gray-400 mt-2">
              الحساب النشط: <span className="text-[#D9A62E] font-semibold">{currentEmail}</span>
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-3">
            <div className="bg-[#D9A62E]/10 border border-[#D9A62E]/30 px-4 py-2 rounded-xl text-xs text-[#D9A62E] flex items-center gap-2">
              <ShieldCheck size={16} /> النظام التلقائي مفعل
            </div>
          </div>
        </div>

        {/* شبكة عرض الشهادات */}
        {certificates.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((cert) => (
              <div 
                key={cert.id} 
                className="bg-[#0B1628] border border-white/10 rounded-xl p-6 shadow-xl flex flex-col justify-between hover:border-[#D9A62E]/50 transition-all group"
              >
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="bg-[#D9A62E]/10 text-[#D9A62E] text-[11px] font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle size={12} /> معتمدة رسمياً
                    </span>
                    <span className="text-[11px] text-gray-400 font-mono">رقم: {cert.certificateNumber}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[#D9A62E] transition-colors">
                    {cert.titleAr}
                  </h3>
                  <p className="text-xs text-gray-400 mb-6 font-medium">{cert.titleEn}</p>
                </div>

                <div className="border-t border-white/5 pt-4 flex items-center justify-between text-xs">
                  <span className="text-gray-400">تاريخ الإصدار: <strong className="text-white">{cert.issueDate}</strong></span>
                  
                  <button
                    onClick={handleDownloadPDF}
                    className="bg-[#D9A62E] hover:bg-[#F2C75C] text-[#0B1628] font-bold px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-md cursor-pointer"
                  >
                    <Download size={14} /> حفظ PDF / طباعة
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-[#0B1628] rounded-2xl border border-white/10">
            <Award className="mx-auto text-gray-600 mb-4" size={56} />
            <p className="text-white font-bold text-lg">لا توجد شهادات في حسابك حتى الآن (الحساب فارغ تماماً).</p>
            <p className="text-xs text-gray-400 mt-2 max-w-md mx-auto">
              بمجرد إنهاء أي دورة في المنصة، سيقوم النظام تلقائياً بإصدار الشهادة بتاريخ اليوم وإضافتها هنا، مع إرسالها عبر الواتساب والإيميل.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}