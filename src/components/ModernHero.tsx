import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import premiumTrolley from '@/assets/trolley-left-facing-effect.jpg';
export const ModernHero = () => {
  const {
    t,
    isRTL
  } = useLanguage();
  return <section className="min-h-screen bg-gradient-hero flex items-center py-20 relative overflow-hidden animate-golden-glow"
    style={{
      backgroundSize: '200% 200%'
    }}
  >
    {/* Golden overlay effect */}
    <div className="absolute inset-0 bg-gradient-golden opacity-30 animate-golden-shimmer" 
      style={{
        backgroundSize: '200% 200%'
      }}
    />
    
    <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isRTL ? 'lg:order-2' : ''}`}>
            <div className="fade-in-up my-[120px]">
              <h1 className="text-5xl lg:text-6xl font-bold font-poppins leading-tight text-charcoal-gray my-0 drop-shadow-lg">
                Your One-Stop Hypermarket
              </h1>
              <p className="text-lg text-charcoal-gray/90 mt-6 leading-relaxed font-normal drop-shadow-sm">
                <span className="block">{t('Providing quality products')}</span>
                <span className="block">{t('with excellent customer service')}</span>
              </p>
            </div>
            
            {/* WhatsApp Section */}
            <div className="fade-in-up space-y-4" style={{ animationDelay: '0.4s' }}>
              {/* WhatsApp Text */}
              <div className="text-center">
                <p className="text-sm text-charcoal-gray/90 leading-relaxed font-medium drop-shadow-sm">
                  <span className="block">Send "Hi" on WhatsApp</span>
                  <span className="block">and save our number</span>
                  <span className="block">to get updates and offers</span>
                </p>
              </div>
              
              {/* WhatsApp Button */}
              <div className="flex justify-center">
                <Button 
                  onClick={() => window.open('https://wa.me/your-number', '_blank')}
                  className="bg-hypermarket-red hover:bg-hypermarket-red/90 text-white font-bold text-base md:text-lg rounded-lg w-32 md:w-44 h-12 md:h-14 px-5 md:px-7 py-3 md:py-4 shadow-elegant hover:shadow-golden transition-all duration-300 flex items-center justify-center space-x-2 animate-luxury-float"
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>WhatsApp</span>
                </Button>
              </div>
            </div>
            
          </div>

          {/* Right Side - Trolley Image */}
          <div className={`flex items-center justify-center ${isRTL ? 'lg:order-1' : ''}`}>
            <div className="w-2/3 fade-in-up" style={{
            animationDelay: '0.2s'
          }}>
              <img src={premiumTrolley} alt="Premium shopping trolley filled with fresh fruits and vegetables" className="w-full h-auto object-cover rounded-lg shadow-elegant animate-[pulse_3s_ease-in-out_infinite] drop-shadow-xl" />
            </div>
          </div>

        </div>
      </div>
    </section>;
};