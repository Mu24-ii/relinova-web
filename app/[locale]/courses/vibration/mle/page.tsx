'use client';

import { useLocale } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Cpu, Calculator, ArrowRight, ArrowLeft } from 'lucide-react';

export default function MLECoursePage() {
  const locale = useLocale();
  const isArabic = locale === 'ar';

  return (
    <main className="min-h-screen bg-[#0B1628] text-white py-12 px-6 md:px-12" dir={isArabic ? 'rtl' : 'ltr'}>
      <div className="max-w-5xl mx-auto space-y-12">

        {/* شريط التنقل العلوي (Breadcrumb) */}
        <div className="flex items-center gap-2 text-xs text-[#B8C2D1]">
          <Link href="/courses" className="hover:text-[#D9A62E] transition-colors">
            {isArabic ? 'الدورات التدريبية' : 'Courses'}
          </Link>
          <span>/</span>
          <span className="text-[#D9A62E]">
            {isArabic ? 'مفهوم وتعريفات MLE' : 'MLE Concepts & Definition'}
          </span>
        </div>

        {/* القسم الرئيسي (Hero Section) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-8 md:p-12 shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#D9A62E]/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="inline-block bg-[#D9A62E]/20 text-[#D9A62E] text-xs font-bold px-3 py-1.5 rounded-lg border border-[#D9A62E]/30">
            {isArabic ? 'الرياضيات الإحصائية وهندسة الذكاء الاصطناعي' : 'Mathematical Statistics & AI Engineering'}
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            {isArabic ? 'مصطلح MLE: المفاهيم والتقاطعات الرياضية والهندسية' : 'MLE Terminology: Mathematical & Engineering Concepts'}
          </h1>

          <p className="text-sm md:text-base text-[#B8C2D1] leading-relaxed max-w-3xl">
            {isArabic 
              ? 'يشير مصطلح MLE في الغالب إلى تقدير الإمكانية الأعظم (Maximum Likelihood Estimation) في الإحصاء وتعلم الآلة، أو إلى مسار هندسة تعلم الآلة (Machine Learning Engineering).'
              : 'The term MLE mostly refers to Maximum Likelihood Estimation in statistics and machine learning, or to the Machine Learning Engineering career path.'
            }
          </p>
        </div>

        {/* القسم الأول: تقدير الإمكانية الأعظم (MLE) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-6 md:p-8 space-y-6">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <Calculator className="w-6 h-6 text-[#D9A62E]" />
            <h2 className="text-xl font-bold text-white">
              {isArabic ? '1. تقدير الإمكانية الأعظم (Maximum Likelihood Estimation)' : '1. Maximum Likelihood Estimation (MLE)'}
            </h2>
          </div>

          <p className="text-xs md:text-sm text-[#B8C2D1] leading-relaxed">
            {isArabic 
              ? 'طريقة إحصائية تُستخدم لتقدير معلمات (Parameters) نموذج ما بناءً على البيانات المشاهدة، بحيث تجعل هذه المعلماتُ البياناتِ الملاحظةَ هي الأكثر ترجيحاً للحدوث.'
              : 'A statistical method used to estimate the parameters of model based on observed data, making the observed data most probable.'
            }
          </p>

          <div className="space-y-4 pt-2">
            <h3 className="text-sm font-bold text-[#D9A62E]">
              {isArabic ? 'خطوات الحساب الأساسية:' : 'Core Calculation Steps:'}
            </h3>
            
            <div className="grid grid-cols-1 gap-4 text-xs md:text-sm">
              <div className="bg-[#0b1628] p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-white block">
                  {isArabic ? '• صياغة دالة الإمكانية (Likelihood Function):' : '• Likelihood Function Formulation:'}
                </span>
                <div dir="ltr" className="text-center font-mono text-[#D9A62E] py-2 bg-black/25 rounded tracking-wider">
                  L(θ) = ∏ [ f(xᵢ | θ) ]  (from i = 1 to n)
                </div>
              </div>

              <div className="bg-[#0b1628] p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-white block">
                  {isArabic ? '• أخذ اللوجاريتم (Log-Likelihood): لتحويل الضرب إلى جمع لتسهيل الاشتقاق:' : '• Log-Likelihood (Converting products to sums for easier differentiation):'}
                </span>
                <div dir="ltr" className="text-center font-mono text-[#D9A62E] py-2 bg-black/25 rounded tracking-wider">
                  ln L(θ) = Σ [ ln f(xᵢ | θ) ]  (from i = 1 to n)
                </div>
              </div>

              <div className="bg-[#0b1628] p-4 rounded-xl border border-white/5 space-y-2">
                <span className="font-bold text-white block">
                  {isArabic ? '• الاشتقاق والمساواة بالصفر: إيجاد النقطة الحرجة للوصول للقيمة العظمى.' : '• Differentiation and Setting to Zero: Finding critical points to reach the maximum.'}
                </span>
              </div>
            </div>

            <div className="pt-2 text-xs text-[#B8C2D1]">
              <span className="font-bold text-white">{isArabic ? 'التطبيقات: ' : 'Applications: '}</span>
              {isArabic 
                ? 'الانحدار اللوجستي (Logistic Regression)، النماذج الجيناتية، وتحليل أوقات الفشل والموثوقية (Weibull Analysis).'
                : 'Logistic Regression, Genetic Models, and Failure Time & Reliability Analysis (Weibull Analysis).'
              }
            </div>
          </div>
        </div>

        {/* القسم الثاني: هندسة تعلم الآلة (MLE) */}
        <div className="bg-[#142238] border border-white/10 rounded-2xl p-6 md:p-8 space-y-4">
          <div className="flex items-center gap-3 border-b border-white/10 pb-4">
            <Cpu className="w-6 h-6 text-[#D9A62E]" />
            <h2 className="text-xl font-bold text-white">
              {isArabic ? '2. هندسة تعلم الآلة (Machine Learning Engineering)' : '2. Machine Learning Engineering (MLE)'}
            </h2>
          </div>

          <p className="text-xs md:text-sm text-[#B8C2D1] leading-relaxed">
            {isArabic 
              ? 'التخصص الهندسي المسؤول عن أخذ نماذج الذكاء الاصطناعي من مرحلة الأبحاث إلى مرحلة الإنتاج الفعلي (Production)، وتوفير البنية التحتية والمراقبة المستمرة للنظم.'
              : 'The engineering discipline responsible for taking AI models from research to production, providing infrastructure and continuous system monitoring.'
            }
          </p>
        </div>

      </div>
    </main>
  );
}