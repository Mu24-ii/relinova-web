'use client';

import { useLocale } from 'next-intl';
import Image from 'next/image';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export default function ContactPage() {
  const locale = useLocale();
  const isArabic = locale === 'ar';

  return (
    <div className="py-20 px-6 md:px-16 bg-[#0B1628] min-h-screen text-white" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ترويسة الصفحة */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#142238] text-[#D9A62E] rounded-full text-xs font-bold border border-white/10 shadow-sm mx-auto">
            <Mail size={14} className="text-[#D9A62E]" />
            <span>{isArabic ? 'تواصل معنا' : 'Contact Us'}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white">
            {isArabic ? 'نحن هنا لمساعدتك والإجابة على استفساراتك' : 'We are here to help and answer your inquiries'}
          </h1>
          <p className="max-w-2xl mx-auto text-sm md:text-base font-medium text-gray-300 leading-relaxed">
            {isArabic 
              ? 'سواء كنت ترغب في التسجيل في إحدى دوراتنا التدريبية أو طلب استشارة هندسية لمؤسستك، يسعدنا تواصلك معنا دائماً.'
              : 'Whether you want to enroll in one of our courses or request an engineering consultation for your organization, we are always glad to connect.'}
          </p>
        </div>

        <div className={`grid lg:grid-cols-3 gap-8 ${isArabic ? 'text-right' : 'text-left'}`}>
          
          {/* كرت معلومات الاتصال */}
          <div className="bg-[#142238] text-white p-8 rounded-2xl shadow-xl border border-white/10 space-y-8">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold border-b border-white/10 pb-4 text-[#D9A62E]">
                {isArabic ? 'معلومات الاتصال' : 'Contact Information'}
              </h2>
              
              <div className="space-y-6 text-sm font-medium">
                {/* الموقع */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0B1628] rounded-xl text-[#D9A62E] shrink-0 border border-white/10">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs">{isArabic ? 'الموقع' : 'Location'}</p>
                    <p className="font-bold mt-1 text-white">{isArabic ? 'المملكة العربية السعودية - الرياض' : 'Riyadh, Kingdom of Saudi Arabia'}</p>
                  </div>
                </div>

                {/* ساعات العمل والدعم */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0B1628] rounded-xl text-[#D9A62E] shrink-0 border border-white/10">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs">{isArabic ? 'ساعات العمل والدعم' : 'Support Hours'}</p>
                    <p className="font-bold mt-1 text-white">{isArabic ? 'الأحد - الخميس (8 ص - 10 م)' : 'Sun - Thu (8 AM - 10 PM)'}</p>
                  </div>
                </div>

                {/* البريد الإلكتروني الرسمي */}
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#0B1628] rounded-xl text-[#D9A62E] shrink-0 border border-white/10">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-gray-300 text-xs">{isArabic ? 'البريد الإلكتروني الرسمي' : 'Official Email'}</p>
                    <p className="font-bold mt-1 dir-ltr text-right text-white">Info@relinovaconsultant.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* أزرار التواصل بحجمها الكامل مع إضافة أيقونة الواتساب */}
            <div className="space-y-3 pt-2 border-t border-white/10">
              
              {/* أزرار الواتساب (بنفس الحجم السابق مع إضافة أيقونة whatsapp.png) */}
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="https://wa.me/966553898397" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#D9A62E] hover:bg-[#F2C75C] text-[#0B1628] font-bold py-3 px-2 rounded-xl shadow-md transition-colors text-xs text-center"
                >
                  <Image src="/whatsapp.png" alt="WhatsApp" width={16} height={16} className="w-4 h-4 object-contain filter brightness-0" />
                  <span>{isArabic ? 'واتساب' : 'WhatsApp'}</span>
                </a>

                <a 
                  href="https://wa.me/249912448835" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#D9A62E] hover:bg-[#F2C75C] text-[#0B1628] font-bold py-3 px-2 rounded-xl shadow-md transition-colors text-xs text-center"
                >
                  <Image src="/whatsapp.png" alt="WhatsApp" width={16} height={16} className="w-4 h-4 object-contain filter brightness-0" />
                  <span>{isArabic ? 'واتساب' : 'WhatsApp'}</span>
                </a>
              </div>

              {/* أزرار الاتصال */}
              <div className="grid grid-cols-2 gap-3">
                <a 
                  href="tel:+966553898397"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#0B1628] hover:bg-white/10 text-white font-bold py-3 px-2 rounded-xl border border-white/10 transition-colors text-xs text-center"
                >
                  <Phone size={14} className="text-[#D9A62E]" />
                  <span>{isArabic ? 'اتصال' : 'Call'}</span>
                </a>

                <a 
                  href="tel:00249912448835"
                  className="w-full inline-flex items-center justify-center gap-1.5 bg-[#0B1628] hover:bg-white/10 text-white font-bold py-3 px-2 rounded-xl border border-white/10 transition-colors text-xs text-center"
                >
                  <Phone size={14} className="text-[#D9A62E]" />
                  <span>{isArabic ? 'اتصال' : 'Call'}</span>
                </a>
              </div>

              {/* زر البريد الإلكتروني */}
              <a 
                href="mailto:Info@relinovaconsultant.com"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0B1628] hover:bg-white/10 text-white font-bold py-3.5 rounded-xl border border-white/10 transition-colors text-xs text-center"
              >
                <Mail size={16} className="text-[#D9A62E]" />
                <span>{isArabic ? 'البريد الإلكتروني' : 'Email'}</span>
              </a>
            </div>

          </div>

          {/* نموذج إرسال الرسائل */}
          <div className="lg:col-span-2 bg-[#142238] p-8 rounded-2xl shadow-xl border border-white/10 space-y-6">
            <h2 className="text-xl font-bold text-white">
              {isArabic ? 'أرسل لنا رسالة' : 'Send Us a Message'}
            </h2>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-300">{isArabic ? 'الاسم الكامل' : 'Full Name'}</label>
                  <input 
                    type="text" 
                    placeholder={isArabic ? 'أدخل اسمك الكريم' : 'Enter your full name'} 
                    className="w-full px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#D9A62E] text-sm font-medium text-white placeholder:text-gray-500 bg-[#0B1628]"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-300">{isArabic ? 'رقم الجوال' : 'Mobile Number'}</label>
                  <input 
                    type="tel" 
                    placeholder="05xxxxxxxx" 
                    className="w-full px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#D9A62E] text-sm font-medium text-white placeholder:text-gray-500 bg-[#0B1628]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300">{isArabic ? 'البريد الإلكتروني' : 'Email Address'}</label>
                <input 
                  type="email" 
                  placeholder="Info@relinovaconsultant.com" 
                  className="w-full px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#D9A62E] text-sm font-medium text-white placeholder:text-gray-500 bg-[#0B1628]"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300">{isArabic ? 'نوع الاستفسار' : 'Inquiry Type'}</label>
                <select className="w-full px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#D9A62E] text-sm font-medium bg-[#0B1628] text-white">
                  <option>{isArabic ? 'الدورات التدريبية' : 'Training Courses'}</option>
                  <option>{isArabic ? 'الاستشارات الهندسية' : 'Engineering Consultations'}</option>
                  <option>{isArabic ? 'استفسار عام' : 'General Inquiry'}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-300">{isArabic ? 'الرسالة' : 'Message'}</label>
                <textarea 
                  rows={4} 
                  placeholder={isArabic ? 'اكتب تفاصيل طلبك أو استفسارك هنا...' : 'Write your request or inquiry details here...'} 
                  className="w-full px-4 py-3 rounded-xl border border-white/10 focus:outline-none focus:border-[#D9A62E] text-sm font-medium text-white placeholder:text-gray-500 resize-none bg-[#0B1628]"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full inline-flex items-center justify-center gap-2 bg-[#D9A62E] hover:bg-[#F2C75C] text-[#0B1628] font-bold py-3.5 rounded-xl shadow-md transition-colors text-sm"
              >
                <Send size={16} />
                <span>{isArabic ? 'إرسال الرسالة' : 'Send Message'}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </div>
  );
}