import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import premiumTrolley from '@/assets/trolley-left-facing-effect.jpg';
export const ModernHero = () => {
  const {
    t,
    isRTL
  } = useLanguage();
  return <section className="min-h-screen bg-white flex items-center py-10 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Mobile Layout - Stacked */}
        <div className="block lg:hidden">
          <div className="space-y-8 px-2">
            {/* Hero Title - Left Aligned */}
            <div className="text-left fade-in-up pt-6">
              <h1 className="text-3xl sm:text-4xl font-bold font-poppins leading-tight text-charcoal-gray text-shimmer">
                <span className="block">Your One-Stop</span>
                <span className="block">Hypermarket</span>
              </h1>
              <p className="text-base sm:text-lg text-charcoal-gray mt-4 leading-relaxed font-normal fade-in-left" style={{ animationDelay: '0.3s' }}>
                <span className="block">{t('Providing quality products')}</span>
                <span className="block">{t('with excellent customer service')}</span>
              </p>
            </div>
            
            {/* Two Column Layout for Mobile - WhatsApp on Left, Image on Right */}
            <div className="grid grid-cols-2 gap-4 items-center">
              {/* Left: WhatsApp Section */}
              <div className="fade-in-up space-y-4 mt-2" style={{ animationDelay: '0.4s' }}>
                {/* WhatsApp Text */}
                <div className="text-left">
                  <p className="text-sm leading-relaxed text-charcoal-gray/80 font-medium">
                    <span className="block">Send "Hi" on WhatsApp</span>
                    <span className="block">and save our number</span>
                    <span className="block">to get updates and offers</span>
                  </p>
                </div>
                
                {/* WhatsApp Button */}
                <div className="flex justify-start">
                  <Button 
                    onClick={() => window.open('https://wa.me/96891073089', '_blank')}
                    className="bg-gradient-to-r from-hypermarket-red via-hypermarket-red to-hypermarket-red/90 hover:from-hypermarket-red/95 hover:via-hypermarket-red hover:to-hypermarket-red/95 text-white font-semibold text-sm rounded-lg px-4 py-2.5 h-10 min-w-[110px] shadow-lg hover:shadow-xl hover:shadow-hypermarket-red/40 transition-all duration-500 ease-out flex items-center justify-center gap-2 border border-white/30 backdrop-blur-sm relative overflow-hidden group transform hover:scale-105 hover:-translate-y-0.5"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                    <MessageSquare className="w-4 h-4 relative z-10 flex-shrink-0" />
                    <span className="relative z-10 text-sm leading-none">WhatsApp</span>
                  </Button>
                </div>
              </div>

              {/* Right: Trolley Image */}
              <div className="flex items-center justify-center">
                <div className="w-full max-w-[280px] fade-in-right image-float" style={{ animationDelay: '0.2s' }}>
                  <img src={premiumTrolley} alt="Premium shopping trolley filled with fresh fruits and vegetables" className="w-full h-auto object-cover rounded-lg shadow-elegant sleek-hover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isRTL ? 'lg:order-2' : ''}`}>
            <div className="fade-in-up my-[40px] pt-12">
              <h1 className="text-5xl lg:text-6xl font-bold font-poppins leading-tight text-charcoal-gray my-0 text-shimmer">
                Your One-Stop Hypermarket
              </h1>
              <p className="text-lg text-charcoal-gray mt-6 leading-relaxed font-normal fade-in-left" style={{ animationDelay: '0.3s' }}>
                <span className="block">{t('Providing quality products')}</span>
                <span className="block">{t('with excellent customer service')}</span>
              </p>
            </div>
            
            {/* WhatsApp Section */}
            <div className="fade-in-up space-y-4 -mt-4" style={{ animationDelay: '0.4s' }}>
              {/* WhatsApp Text */}
              <div className="text-left">
                <p className="text-sm text-charcoal-gray/80 leading-relaxed font-medium">
                  <span className="block">Send "Hi" on WhatsApp</span>
                  <span className="block">and save our number</span>
                  <span className="block">to get updates and offers</span>
                </p>
              </div>
              
              {/* WhatsApp Button */}
              <div className="flex justify-start">
                <Button 
                  onClick={() => window.open('https://wa.me/96891073089', '_blank')}
                  className="bg-gradient-to-r from-hypermarket-red to-hypermarket-red/90 hover:from-hypermarket-red/90 hover:to-hypermarket-red text-white font-bold text-sm sm:text-base md:text-lg rounded-xl w-40 sm:w-44 md:w-48 h-12 sm:h-13 md:h-14 px-4 sm:px-5 md:px-7 py-3 md:py-4 shadow-lg hover:shadow-2xl hover:shadow-hypermarket-red/30 transition-all duration-500 ease-out flex items-center justify-center gap-2 transform hover:scale-105 border border-white/20 backdrop-blur-sm relative overflow-hidden group"
                >
                  {/* Premium shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 flex-shrink-0" />
                  <span className="relative z-10 whitespace-nowrap">WhatsApp</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Side - Trolley Image */}
          <div className={`flex items-center justify-center ${isRTL ? 'lg:order-1' : ''}`}>
            <div className="w-4/5 fade-in-right image-float mt-8" style={{ animationDelay: '0.2s' }}>
              <img src={premiumTrolley} alt="Premium shopping trolley filled with fresh fruits and vegetables" className="w-full h-auto object-cover rounded-lg shadow-elegant sleek-hover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};