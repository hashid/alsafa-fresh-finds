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
            <div className="fade-in-up my-[40px]">
              <h1 className="text-5xl lg:text-6xl font-bold font-poppins leading-tight text-charcoal-gray my-0">
                Your One-Stop Hypermarket
              </h1>
              <p className="text-lg text-charcoal-gray mt-6 leading-relaxed font-normal">
                <span className="block">{t('Providing quality products')}</span>
                <span className="block">{t('with excellent customer service')}</span>
              </p>
            </div>
            
            {/* Trolley Image */}
            <div className="flex justify-end mb-8 fade-in-up" style={{
            animationDelay: '0.2s'
          }}>
              <div className="w-1/3">
                <img src={premiumTrolley} alt="Premium shopping trolley filled with fresh fruits and vegetables" className="w-full h-auto object-cover rounded-lg shadow-elegant animate-[pulse_3s_ease-in-out_infinite]" />
              </div>
            </div>
            
            {/* WhatsApp Box */}
            <div style={{
            animationDelay: '0.4s'
          }} className="fade-in-up animate-scale-in bg-white/90 backdrop-blur-sm p-6 border border-white/30 shadow-card transform transition-all duration-500 hover:shadow-lg rounded-none">
              <div className="text-center">
                <Button onClick={() => {
                const phoneNumber = "96891073089";
                const message = "Hi";
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }} className="w-[150px] h-[50px] px-6 py-3 text-lg font-bold text-white rounded-[10px] transition-all duration-300" style={{ backgroundColor: '#D32F2F' }} onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#D32F2F';
                e.currentTarget.style.border = '2px solid #D32F2F';
              }} onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#D32F2F';
                e.currentTarget.style.color = 'white';
                e.currentTarget.style.border = 'none';
              }}>
                  <MessageSquare className="w-5 h-5 mr-3" />
                  <div className="text-center">
                    <div>Send "Hi" to get</div>
                    <div>offers and updates</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>;
};