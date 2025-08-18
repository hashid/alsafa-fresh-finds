import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import fruitsImage from '@/assets/fruits-new.jpg';

export const BestDealsSection = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-gradient-deals rounded-3xl p-12 text-white relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className={`space-y-6 ${isRTL ? 'lg:order-2' : ''}`}>
              <h2 className="text-4xl lg:text-5xl font-bold font-poppins">
                {t('Best Deals')}
              </h2>
              <p className="text-xl opacity-95 leading-relaxed">
                {t('High-quality fruits and vegetables sourced from trusted growers')}
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="modern-button bg-white text-hypermarket-red border-white hover:bg-opacity-90 px-8 py-3 text-lg font-semibold"
              >
                <Eye className="w-5 h-5 mr-2" />
                {t('View Offers')}
              </Button>
            </div>

            {/* Right Content - Image */}
            <div className={`flex justify-center ${isRTL ? 'lg:order-1' : ''}`}>
              <div className="zoom-in-on-scroll">
                <img 
                  src={fruitsImage} 
                  alt="Fresh fruits and vegetables" 
                  className="w-full max-w-md rounded-2xl shadow-strong"
                />
              </div>
            </div>
          </div>
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-48 translate-x-48"></div>
        </div>
      </div>
    </section>
  );
};