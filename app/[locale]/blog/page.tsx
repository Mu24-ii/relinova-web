'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BlogPage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  // حالة البحث والتصنيف
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // مقالات تجريبية مع إضافة حقل التصنيف (category) والتصنيف بالعربية
  const posts = [
    {
      id: 1,
      title: 'أهمية الصيانة التنبؤية في تقليل التكاليف التشغيلية',
      description: 'تعرف على كيف تساهم أنظمة مراقبة الحالة في اكتشاف الأعطال مبكراً وتجنب التوقفات المفاجئة.',
      date: 'يوليو 2026',
      slug: 'importance-of-predictive-maintenance',
      category: 'predictive',
      categoryName: 'الصيانة التنبؤية',
    },
    {
      id: 2,
      title: 'دليلك الشامل لفهم تحليل الاهتزازات للمعدات الدوارة',
      description: 'مفهوم أساسي لكل مهندس موثوقية يهتم بمراقبة أداء المضخات والضواغط وصناديق التروس.',
      date: 'يوليو 2026',
      slug: 'vibration-analysis-guide',
      category: 'vibration',
      categoryName: 'تحليل الاهتزازات',
    },
    {
      id: 3,
      title: 'كيف تطبق منهجية RCM بفعالية في منشأتك الصناعية',
      description: 'خطوات عملية ومدروسة لبناء استراتيجية صيانة ترتكز على الموثوقية والموثوقية التشغيلية.',
      date: 'يوليو 2026',
      slug: 'rcm-implementation-guide',
      category: 'rcm',
      categoryName: 'إدارة الموثوقية',
    },
  ];

  // قائمة التصنيفات المتاحة للفلترة
  const categories = [
    { id: 'all', name: 'الكل' },
    { id: 'predictive', name: 'الصيانة التنبؤية' },
    { id: 'vibration', name: 'تحليل الاهتزازات' },
    { id: 'rcm', name: 'إدارة الموثوقية' },
  ];

  // تصفية المقالات بناءً على نص البحث والتصنيف المحدد
  const filteredPosts = posts.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-6 md:px-12 w-full">
      {/* هيدر الصفحة */}
      <div className="bg-[#0B2E59] rounded-3xl py-12 px-6 text-center max-w-5xl mx-auto mb-12 shadow-md">
        <h1 className="text-3xl md:text-4xl font-bold text-amber-400 mb-3 tracking-wide">
          المدونة الهندسية
        </h1>
        <p className="text-white text-sm md:text-base font-medium opacity-90 max-w-2xl mx-auto">
          مقالات، أحدث الممارسات، ورؤى متخصصة في هندسة الموثوقية والصيانة الصناعية.
        </p>
      </div>

      {/* أدوات البحث والفلترة */}
      <div className="max-w-4xl mx-auto mb-10 flex flex-col md:flex-row gap-4 items-center justify-between">
        {/* شريط البحث الفوري */}
        <div className="w-full md:w-1/2 relative">
          <input
            type="text"
            placeholder="ابحث في المقالات (مثل: اهتزازات، RCM...)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-gray-200 rounded-2xl py-3 px-4 pr-11 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-amber-500 shadow-sm transition-all"
          />
          <span className="absolute right-4 top-3.5 text-gray-400">
            🔍
          </span>
        </div>

        {/* أزرار التصنيفات */}
        <div className="w-full md:w-auto flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-amber-500 text-white shadow-md'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* شبكة المقالات */}
      <div className="max-w-6xl mx-auto">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div 
                key={post.id}
                className="bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs bg-amber-100 text-amber-800 px-3 py-1 rounded-full font-bold">
                      {post.categoryName}
                    </span>
                    <span className="text-xs text-gray-400 font-medium">
                      {post.date}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-[#0B2E59] mt-2 mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {post.description}
                  </p>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <Link 
                    href={`/${locale}/blog/${post.slug}`}
                    className="text-sm font-semibold text-amber-600 hover:underline inline-flex items-center gap-1"
                  >
                    قراءة المقال <span className="rtl:rotate-180">←</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* رسالة في حال عدم وجود نتائج مطابقة للبحث */
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-xl mx-auto">
            <p className="text-gray-500 text-base font-medium">
              عذراً، لم نتمكن من العثور على مقالات تطابق بحثك.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
              className="mt-4 px-5 py-2 bg-[#0B2E59] text-white rounded-xl text-xs font-bold hover:bg-[#082244] transition-all"
            >
              إعادة ضبط البحث
            </button>
          </div>
        )}
      </div>
    </main>
  );
}