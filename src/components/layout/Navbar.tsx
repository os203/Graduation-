import Link from 'next/link';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import MobileMenu from "../ui/mobileMenu";
import LanguageSwitcher from  '@/components/ui/LanguageSwitcher';
import {useTranslations} from 'next-intl';// translation



export default function Navbar() {

  const t = useTranslations('Navbar');// translation

  return (
    <nav className="fixed top-0 w-full z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center gap-2 hover-lift">
            
            <Link href="/" className="font-bold text-2xl tracking-tight text-foreground">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-accent to-brand-primary flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-brand-accent/20">
              PG
            </div>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <LanguageSwitcher />
            <Link href="/courses" className="text-foreground/80 hover:text-brand-accent transition-colors font-medium">
            {t('Courses')}
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-brand-accent transition-colors font-medium">
            {t('About Us')}
            </Link>
            <Link href="/login" className="text-foreground/80 hover:text-brand-accent transition-colors font-medium">
            {t('Sign In')}
            </Link>
            <Link href="/register" className="bg-brand-primary hover:bg-brand-hover text-white px-6 py-2.5 rounded-full font-medium transition-all hover-lift">
              {t('Get Started')}
            </Link>
            <ThemeToggle />
          </div>
            <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
