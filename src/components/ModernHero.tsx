import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import shoppingCartHero from '@/assets/shopping-cart-hero.jpg';
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
            <div className="fade-in-up">
              <h1 className="text-5xl lg:text-6xl font-bold font-poppins leading-tight" style={{
              color: '#2B2B2B'
            }}>
                <span className="text-hypermarket-red">AL SAFA</span><br />
                <span className="text-fresh-green">HYPERMARKET</span>
              </h1>
              <p className="text-xl text-ash-dark mt-6 leading-relaxed">
                {t('Providing quality products with excellent customer service')}
              </p>
            </div>
            
            <div className="fade-in-up" style={{
            animationDelay: '0.2s'
          }}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 shadow-card">
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

          {/* Right Content - Shopping Cart with Groceries */}
          <div className={`flex justify-center ${isRTL ? 'lg:order-1' : ''}`}>
            <div className="fade-in-up bounce-cart" style={{
            animationDelay: '0.4s'
          }}>
              <img 
                src={shoppingCartHero} 
                alt="Shopping cart with fresh fruits and vegetables" 
                className="w-1/3 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>;
};