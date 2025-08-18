import { useLanguage } from '@/contexts/LanguageContext';
import storeImage from '@/assets/department-store.jpg';
import aboutUsImage from '@/assets/about-us-image.jpg';

export const ModernAbout = () => {
  const { t, isRTL } = useLanguage();

  return (
    <section className="py-20 bg-white">
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
              <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-charcoal-gray mb-6">
                {t('About Us')}
              </h2>
              <p className="text-xl text-ash-dark leading-relaxed">
                Welcome to Al Safa Hypermarket – proudly serving since 2015. From fresh produce and quality groceries to household essentials and more, we are your trusted one-stop destination dedicated to convenience, value, and excellent customer care.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="bg-light-gray p-6 rounded-xl card-hover sleek-hover">
                <h3 className="font-semibold text-charcoal-gray mb-2 font-poppins">
                  {t('Quality Products')}
                </h3>
                <p className="text-ash-dark">
                  {t('Fresh and high-quality items sourced from trusted suppliers')}
                </p>
              </div>
              <div className="bg-light-gray p-6 rounded-xl card-hover sleek-hover">
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