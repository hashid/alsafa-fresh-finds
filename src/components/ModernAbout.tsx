import { useLanguage } from '@/contexts/LanguageContext';
import { AboutImageCarousel } from '@/components/AboutImageCarousel';
import storeImage from '@/assets/department-store.jpg';
import aboutUsImage from '@/assets/about-us-image.jpg';

// Import transition images
import bagAndSandalClear from '@/assets/bag-and-sandal-clear.jpg';
import balloonsClear from '@/assets/balloons-clear.jpg';
import bucketClear from '@/assets/bucket-clear.jpg';
import dressClear from '@/assets/dress-clear.jpg';
import electronicClear from '@/assets/electronic-clear.jpg';
import frozenClear from '@/assets/frozen-clear.jpg';
import fruitsClear from '@/assets/fruits-clear.jpg';
import nidoClear from '@/assets/nido-clear.jpg';
import pocariClear from '@/assets/pocari-clear.jpg';
import sandalsClear from '@/assets/sandals-clear.jpg';
import tideClear from '@/assets/tide-clear.jpg';
import weetClear from '@/assets/veet-clear.jpg';
import whatsapp1 from '@/assets/whatsapp-1.jpg';
import whatsapp2 from '@/assets/whatsapp-2.jpg';
import whatsapp3 from '@/assets/whatsapp-3.jpg';
import whatsapp4 from '@/assets/whatsapp-4.jpg';
import whatsapp5 from '@/assets/whatsapp-5.jpg';
import whatsapp6 from '@/assets/whatsapp-6.jpg';
import whatsapp7 from '@/assets/whatsapp-7.jpg';
import whatsapp8 from '@/assets/whatsapp-8.jpg';

export const ModernAbout = () => {
  const { t, isRTL } = useLanguage();

  // Array of transition images
  const transitionImages = [
    bagAndSandalClear,
    balloonsClear,
    bucketClear,
    dressClear,
    electronicClear,
    frozenClear,
    fruitsClear,
    nidoClear,
    pocariClear,
    sandalsClear,
    tideClear,
    weetClear,
    whatsapp1,
    whatsapp2,
    whatsapp3,
    whatsapp4,
    whatsapp5,
    whatsapp6,
    whatsapp7,
    whatsapp8
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-light-gray/30 to-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="space-y-8 fade-in-up">
            <div className="fade-in-up">
              <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-hypermarket-red mb-6 relative">
                <span className="relative z-10">{t('About Us')}</span>
              </h2>
              <p className="text-xl text-ash-dark leading-relaxed mb-8">
                Welcome to Al Safa Hypermarket – proudly serving since 2015. From fresh produce and quality groceries to household essentials and more, we are your trusted one-stop destination dedicated to convenience, value, and excellent customer care.
              </p>
            </div>
            
            {/* About Us Image Carousel */}
            <div className="mb-8 text-center fade-in-up" style={{ animationDelay: '0.1s' }}>
              <AboutImageCarousel 
                mainImage={aboutUsImage}
                images={transitionImages}
                interval={4000}
              />
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