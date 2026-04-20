'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function LanguageSwitcher() {
  const router = useRouter();
  const [locale, setLocale] = useState('en');
  const [open, setOpen] = useState(false);

  // قراءة اللغة بشكل آمن
  useEffect(() => {
    const lang =
      document.cookie
        .split('; ')
        .find(row => row.startsWith('locale='))
        ?.split('=')[1];

    setLocale(lang || 'en');
  }, []);

  const switchLanguage = (lang: string) => {
    // تحديث الكوكي
    document.cookie = `locale=${lang}; path=/; max-age=31536000`;

    setLocale(lang);
    setOpen(false);

    // إعادة تحميل البيانات من السيرفر (مهم لـ next-intl)
    router.refresh();
  };

  const otherLang = locale === 'en' ? 'ar' : 'en';
  const isRTL = locale === 'ar';

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* الزر الأساسي */}
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className="flex items-center gap-1 text-foreground/80 hover:text-brand-accent transition-colors font-medium"
      >
        {locale === 'en' ? 'English' : 'العربية'}

        <span className="text-xs">
          {isRTL ? <ChevronDown className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </span>
      </button>

      {/* القائمة */}
      <div
        className={`
          absolute z-50 top-full mt-2
          ${isRTL ? 'right-0' : 'left-0'}
          transition-all duration-200
          ${open ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        <div className="
          min-w-[120px]
          rounded-lg
          border border-border/50
          bg-background/95
          backdrop-blur-sm
          shadow-lg
          overflow-hidden
        ">
          <button
            type="button"
            onClick={() => switchLanguage(otherLang)}
            className="
              w-full text-left
              px-4 py-2
              text-foreground/80
              hover:text-brand-accent
              hover:bg-brand-accent/10
              transition-all
            "
          >
            {otherLang === 'en' ? 'English' : 'العربية'}
          </button>
        </div>
      </div>
    </div>
  );
}