import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { AnimatedCart } from '@/components/AnimatedCart';

export const ModernHero = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="min-h-screen bg-white flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isRTL ? 'lg:order-2' : ''}`}>
            <div className="fade-in-up">
              <h1 className="text-5xl lg:text-6xl font-bold font-poppins text-charcoal-gray leading-tight">
                {t('Your One-Stop')}
                <br />
                <span className="text-hypermarket-red">{t('Hypermarket')}</span>
              </h1>
              <p className="text-xl text-ash-dark mt-6 leading-relaxed">
                {t('Providing quality products with excellent customer service')}
              </p>
            </div>
            
            <div className="fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Button 
                size="lg" 
                className="modern-button bg-gradient-red text-white px-8 py-4 text-lg font-semibold hover:shadow-button transform hover:scale-105 transition-all duration-300"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {t('Shop Now')}
              </Button>
            </div>
          </div>

          {/* Right Content - Animated Cart */}
          <div className={`flex justify-center ${isRTL ? 'lg:order-1' : ''}`}>
            <div className="fade-in-up" style={{ animationDelay: '0.4s' }}>
              <AnimatedCart />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};