import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import logoImage from '@/assets/logo-new.jpg';

export const ModernFooter = () => {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-mustard-yellow text-charcoal-gray">
      <div className="container mx-auto px-6 py-16 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img src={logoImage} alt="Al Safa Hypermarket" className="h-12 w-auto rounded-lg" />
              <div>
                <h3 className="text-xl font-bold font-poppins">
                  {t('Al Safa Hypermarket')}
                </h3>
              </div>
            </div>
            <p className="text-charcoal-gray/80 font-medium italic">
              Your satisfaction is our greatness
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-6">{t('Contact Info')}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-hypermarket-red mt-1" />
                <span className="text-charcoal-gray/80">
                  7729 Way, Al Maabilah<br />
                  Seeb, Muscat 130
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-hypermarket-red" />
                <a href="tel:+96891073089" className="text-charcoal-gray/80 hover:text-hypermarket-red transition-colors">
                  +968 9107 3089
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-hypermarket-red" />
                <a href="mailto:alsafahypermarket01@gmail.com" className="text-charcoal-gray/80 hover:text-hypermarket-red transition-colors">
                  alsafahypermarket01@gmail.com
                </a>
              </div>
            </div>
            
            {/* Social Media below contact info */}
            <div className="mt-8">
              <h5 className="text-base font-semibold font-poppins mb-4">Follow us:</h5>
              <div className="flex space-x-4">
                <a href="https://www.facebook.com/people/AL-SAFA-HYPERMARKET/100054276620484/#" className="text-charcoal-gray/70 hover:text-hypermarket-red transition-colors transform hover:scale-110">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/alsafahypermarket/" className="text-charcoal-gray/70 hover:text-hypermarket-red transition-colors transform hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-6">{t('Working Hours')}</h4>
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-hypermarket-red mt-1" />
              <div className="text-charcoal-gray/80">
                <p>{t('Daily: 8:00 AM - 12:00 AM')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-charcoal-gray/20 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center">
              <LanguageToggle />
            </div>
            <div className="text-center lg:text-right">
              <p className="text-charcoal-gray/70 text-sm">
                © 2025 {t('Al Safa Hypermarket')}. {t('All rights reserved.')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};