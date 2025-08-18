import { useLanguage } from '@/contexts/LanguageContext';
import storeImage from '@/assets/department-store.jpg';

export const ModernAbout = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className={`${isRTL ? 'lg:order-2' : ''}`}>
            <div className="zoom-in-on-scroll">
              <img 
                src={storeImage} 
                alt="Al Safa Hypermarket interior" 
                className="w-full rounded-2xl shadow-card"
              />
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-8 ${isRTL ? 'lg:order-1' : ''}`}>
            <div className="fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-charcoal-gray mb-6">
                {t('About Us')}
              </h2>
              <p className="text-xl text-ash-dark leading-relaxed">
                {t('We are dedicated to providing our customers with exceptional service and a wide selection of products.')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-light-gray p-6 rounded-xl">
                <h3 className="font-semibold text-charcoal-gray mb-2 font-poppins">
                  {t('Quality Products')}
                </h3>
                <p className="text-ash-dark">
                  {t('Fresh and high-quality items sourced from trusted suppliers')}
                </p>
              </div>
              <div className="bg-light-gray p-6 rounded-xl">
                <h3 className="font-semibold text-charcoal-gray mb-2 font-poppins">
                  {t('Customer Service')}
                </h3>
                <p className="text-ash-dark">
                  {t('Friendly and helpful staff ready to assist you')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};