'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useTransition } from 'react';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  // تحديد اللغة المقابلة للتبديل إليها
  const nextLocale = locale === 'ar' ? 'en' : 'ar';

  const handleLocaleChange = () => {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={handleLocaleChange}
      disabled={isPending}
      className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-[#142238] border border-white/10 rounded-xl hover:border-[#D9A62E]/50 hover:bg-[#0B1628] transition-all disabled:opacity-50 cursor-pointer shadow-md"
    >
      <Globe size={14} className="text-[#D9A62E]" />
      <span>{locale === 'ar' ? 'English' : 'العربية'}</span>
    </button>
  );
}