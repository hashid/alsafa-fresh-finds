import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Menu, X, MapPin, Phone } from 'lucide-react';
import logoAlSafa from '@/assets/logo-alsafa.jpg';
export const ModernHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTagline, setShowTagline] = useState(false);
  const {
    t,
    isRTL
  } = useLanguage();
  useEffect(() => {
    const timer = setTimeout(() => setShowTagline(true), 1000);
    return () => clearTimeout(timer);
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };
  return <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-soft">
      {/* Top contact bar */}
      <div className="bg-background border-b border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex justify-end py-2">
            <div className="flex items-center space-x-2 text-sm text-charcoal-gray">
              <Phone className="w-4 h-4" />
              <a href="tel:+96891073089" className="hover:text-hypermarket-red transition-colors">
                +968 91073089
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Tagline */}
          <div className="flex items-center space-x-4">
            <img src={logoAlSafa} alt="Al Safa Hypermarket" className="h-20 w-auto rounded-lg sleek-hover image-float" />
            {showTagline}
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="nav-link text-charcoal-gray hover:text-hypermarket-red font-medium">
              {t('Home')}
            </button>
            <button onClick={() => scrollToSection('categories')} className="nav-link text-charcoal-gray hover:text-hypermarket-red font-medium">
              {t('Categories')}
            </button>
            <button onClick={() => scrollToSection('deals')} className="nav-link text-charcoal-gray hover:text-hypermarket-red font-medium">
              {t('Deals')}
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link text-charcoal-gray hover:text-hypermarket-red font-medium">
              {t('About')}
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link text-charcoal-gray hover:text-hypermarket-red font-medium">
              {t('Contact')}
            </button>
            <Button variant="outline" size="sm" className="modern-button border-hypermarket-red text-hypermarket-red hover:bg-hypermarket-red hover:text-white sleek-hover" onClick={() => window.open('https://maps.google.com', '_blank')}>
              <MapPin className="w-4 h-4 mr-2" />
              {t('Directions')}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6 text-charcoal-gray" /> : <Menu className="w-6 h-6 text-charcoal-gray" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && <div className="lg:hidden py-6 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('hero')} className="text-left text-charcoal-gray hover:text-hypermarket-red transition-colors font-medium">
                {t('Home')}
              </button>
              <button onClick={() => scrollToSection('categories')} className="text-left text-charcoal-gray hover:text-hypermarket-red transition-colors font-medium">
                {t('Categories')}
              </button>
              <button onClick={() => scrollToSection('deals')} className="text-left text-charcoal-gray hover:text-hypermarket-red transition-colors font-medium">
                {t('Deals')}
              </button>
              <button onClick={() => scrollToSection('about')} className="text-left text-charcoal-gray hover:text-hypermarket-red transition-colors font-medium">
                {t('About')}
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-left text-charcoal-gray hover:text-hypermarket-red transition-colors font-medium">
                {t('Contact')}
              </button>
              <Button variant="outline" size="sm" className="modern-button border-hypermarket-red text-hypermarket-red hover:bg-hypermarket-red hover:text-white w-fit" onClick={() => window.open('https://maps.google.com', '_blank')}>
                <MapPin className="w-4 h-4 mr-2" />
                {t('Directions')}
              </Button>
            </nav>
          </div>}
      </div>
    </header>;
};