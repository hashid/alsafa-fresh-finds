import { useLanguage } from '@/contexts/LanguageContext';
import deliveryBikeImage from '@/assets/delivery-bike.jpg';

export const DeliverySection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-12 bg-gradient-to-b from-white via-light-gray/20 to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Delivery Bike Image */}
            <div className="flex justify-center lg:justify-start fade-in-up">
              <div className="relative">
                <img
                  src={deliveryBikeImage}
                  alt="Al Safa Hypermarket Delivery Bike"
                  className="w-full max-w-sm h-auto object-cover rounded-xl shadow-luxury hover:shadow-premium transition-all duration-500 hover:scale-105 image-float"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-premium-gold/5 rounded-xl pointer-events-none" />
              </div>
            </div>

            {/* Right: Delivery Information */}
            <div className="text-center lg:text-left fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl lg:text-4xl font-bold font-poppins text-charcoal-gray mb-4">
                <span className="text-hypermarket-red">{t('Free Delivery')}</span>
                <br />
                {t('Service')}
              </h2>
              
              <div className="space-y-4">
                <p className="text-lg text-ash-dark leading-relaxed">
                  {t('Free delivery available within 5km radius of the hypermarket')}
                </p>
                
                <div className="bg-gradient-to-r from-hypermarket-red/5 to-premium-gold/5 p-4 rounded-xl border border-hypermarket-red/10">
                  <h3 className="text-xl font-bold text-charcoal-gray mb-3 flex items-center">
                    <span className="w-2 h-2 bg-fresh-green rounded-full mr-2 animate-pulse"></span>
                    {t('Why Choose Our Delivery?')}
                  </h3>
                  <ul className="space-y-2 text-ash-dark text-sm">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-hypermarket-red rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      {t('Fast and reliable delivery service')}
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-hypermarket-red rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      {t('Fresh products guaranteed')}
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-hypermarket-red rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      {t('Professional delivery team')}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};