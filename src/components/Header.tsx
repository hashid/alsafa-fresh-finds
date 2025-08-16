import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageToggle } from './LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.jpg';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, isRTL } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-soft ${isRTL ? 'font-cairo' : ''}`}>
      <div className="container mx-auto px-4">
        {/* Main Navigation */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Al Safa Hypermarket Logo" className="w-20 h-20 rounded-lg object-cover shadow-soft" />
            <div className="flex flex-col">
              <h1 className="font-playfair font-bold text-[#e64343] text-3xl md:text-4xl leading-none tracking-wide premium-3d-text transform hover:scale-105 transition-transform duration-300">
                AL SAFA
              </h1>
              <h1 className="font-playfair font-bold text-green-700 text-2xl md:text-3xl leading-none mt-0 md:-mt-1 tracking-wide premium-3d-text transform hover:scale-105 transition-transform duration-300">
                HYPERMARKET
              </h1>
              <p className={`text-xs text-gray-500 mt-2 font-light tracking-wide ${isRTL ? 'font-cairo' : 'font-inter'}`}>
                {t('header.tagline')}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <LanguageToggle />
            <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors font-medium">
              {t('nav.home')}
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors font-medium">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-foreground hover:text-primary transition-colors font-medium">
              {t('nav.reviews')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors font-medium">
              {t('nav.contact')}
            </button>
            <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary-dark text-white shadow-green">
              {t('nav.directions')}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="sm" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('hero')} className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium">
                {t('nav.home')}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium">
                {t('nav.about')}
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium">
                {t('nav.reviews')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-foreground hover:text-primary transition-colors font-medium">
                {t('nav.contact')}
              </button>
              <Button onClick={() => scrollToSection('contact')} className="bg-primary hover:bg-primary-dark text-white shadow-green w-full">
                {t('nav.directions')}
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};