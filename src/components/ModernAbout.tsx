import { useLanguage } from '@/contexts/LanguageContext';
import storeImage from '@/assets/department-store.jpg';
import aboutUsImage from '@/assets/about-us-image.jpg';

export const ModernAbout = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-white via-light-gray/30 to-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* About Us Image */}
        <div className="mb-16 text-center fade-in-up">
          <img 
            src={aboutUsImage} 
            alt="Al Safa Hypermarket Interior" 
            className="w-full max-w-4xl mx-auto rounded-2xl shadow-elegant image-float sleek-hover object-cover"
          />
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="space-y-8 fade-in-up">
            <div className="fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-hypermarket-red mb-6 relative">
                <span className="relative z-10">{t('About Us')}</span>
              </h2>
              <p className="text-xl text-ash-dark leading-relaxed">
                Welcome to Al Safa Hypermarket – proudly serving since 2015. From fresh produce and quality groceries to household essentials and more, we are your trusted one-stop destination dedicated to convenience, value, and excellent customer care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-gradient-to-br from-light-gray to-white p-8 rounded-2xl card-hover sleek-hover shadow-elegant border border-premium-gold/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-premium-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-premium-gold/20 to-transparent rounded-bl-full"></div>
                <h3 className="font-bold text-charcoal-gray mb-3 font-poppins text-lg relative z-10 text-shimmer">
                  {t('Quality Products')}
                </h3>
                <p className="text-ash-dark relative z-10 leading-relaxed">
                  {t('Fresh and high-quality items sourced from trusted suppliers')}
                </p>
              </div>
              <div className="bg-gradient-to-br from-light-gray to-white p-8 rounded-2xl card-hover sleek-hover shadow-elegant border border-premium-gold/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-premium-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-premium-gold/20 to-transparent rounded-bl-full"></div>
                <h3 className="font-bold text-charcoal-gray mb-3 font-poppins text-lg relative z-10 text-shimmer">
                  {t('Customer Service')}
                </h3>
                <p className="text-ash-dark relative z-10 leading-relaxed">
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