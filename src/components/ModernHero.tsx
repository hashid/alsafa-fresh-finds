import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import premiumTrolley from '@/assets/trolley-left-facing-effect.jpg';
export const ModernHero = () => {
  const {
    t,
    isRTL
  } = useLanguage();
  return <section className="min-h-screen bg-white flex items-center py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className={`space-y-8 ${isRTL ? 'lg:order-2' : ''}`}>
            <div className="fade-in-up my-[10px]">
              <h1 className="text-5xl lg:text-6xl font-bold font-poppins leading-tight text-charcoal-gray">
                Your One-Stop Hypermarket
              </h1>
              <p className="text-lg text-charcoal-gray mt-6 leading-relaxed font-normal">
                <span className="block">{t('Providing quality products')}</span>
                <span className="block">{t('with excellent customer service')}</span>
              </p>
            </div>
            
            <div className="fade-in-up" style={{
            animationDelay: '0.2s'
          }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-card my-[130px] mx-[20px] px-[8px]">
                <div className="text-charcoal-gray text-center mb-4">
                  
                </div>
                <Button onClick={() => {
                const phoneNumber = "96891073089";
                const message = "Hi";
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }} className="w-fit bg-hypermarket-red hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  <div className="text-center">
                    <div>Send "Hi" to get</div>
                    <div>offers and updates</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className={`flex justify-center ${isRTL ? 'lg:order-1' : ''}`}>
            <div className="fade-in-up w-1/3" style={{
            animationDelay: '0.4s'
          }}>
              <img 
                src={premiumTrolley} 
                alt="Premium shopping trolley filled with fresh fruits and vegetables" 
                className="w-full h-auto object-cover rounded-lg shadow-elegant animate-[pulse_3s_ease-in-out_infinite]"
                style={{
                  animation: 'pulse 3s ease-in-out infinite',
                  transform: 'scale(1)'
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>;
};