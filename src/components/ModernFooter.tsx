import { useLanguage } from '@/contexts/LanguageContext';
import { LanguageToggle } from '@/components/LanguageToggle';
import { Facebook, Instagram, Phone, Mail, MapPin, Clock } from 'lucide-react';
import logoImage from '@/assets/logo-new.jpg';

export const ModernFooter = () => {
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-charcoal-gray text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img
                src={logoImage}
                alt="Al Safa Hypermarket"
                className="h-12 w-auto rounded-lg"
              />
              <div>
                <h3 className="text-xl font-bold font-poppins">
                  {t('Al Safa Hypermarket')}
                </h3>
                <p className="text-gray-300">{t('Seeb')}</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              {t('Your trusted neighborhood hypermarket providing quality products and exceptional service to the Seeb community.')}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-6">{t('Contact Info')}</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-hypermarket-red" />
                <span className="text-gray-300">+968 9107 3089</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-hypermarket-red" />
                <span className="text-gray-300">alsafahypermarket01@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-hypermarket-red mt-1" />
                <span className="text-gray-300">
                  {t('Seeb, Muscat 130')}
                </span>
              </div>
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-6">{t('Working Hours')}</h4>
            <div className="flex items-start space-x-3">
              <Clock className="w-5 h-5 text-hypermarket-red mt-1" />
              <div className="text-gray-300">
                <p>{t('Daily: 8:00 AM - 12:00 AM')}</p>
                <p className="text-sm mt-1">{t('Open 7 days a week')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex items-center space-x-4">
              <LanguageToggle />
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-hypermarket-red transition-colors transform hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-hypermarket-red transition-colors transform hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 {t('Al Safa Hypermarket')}. {t('All rights reserved.')}{' '}
                <span className="text-hypermarket-red">{t('Quality Shopping Experience')}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};