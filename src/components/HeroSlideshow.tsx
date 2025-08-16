import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import logo from '@/assets/logo.jpg';
import bagAndSandal from '@/assets/bag-and-sandal.jpg';
import bagsClear from '@/assets/bags-clear.jpg';
import balloons from '@/assets/balloons.jpg';
import bucket from '@/assets/bucket.jpg';
import dress from '@/assets/dress.jpg';
import electronic from '@/assets/electronic.jpg';
import frozenClear from '@/assets/frozen-clear.jpg';
import fruitsClear from '@/assets/fruits-clear.jpg';
import nido from '@/assets/nido.jpg';
import pocari from '@/assets/pocari.jpg';
import sandalsClear from '@/assets/sandals-clear.jpg';
import tide from '@/assets/tide.jpg';
import veet from '@/assets/veet.jpg';

const images = [
  { src: fruitsClear, alt: 'Fresh Fruits Collection' },
  { src: frozenClear, alt: 'Frozen Products' },
  { src: bagsClear, alt: 'Quality Bags' },
  { src: bagAndSandal, alt: 'Bags and Sandals' },
  { src: balloons, alt: 'Party Balloons' },
  { src: bucket, alt: 'Household Items' },
  { src: dress, alt: 'Fashion Collection' },
  { src: electronic, alt: 'Electronics' },
  { src: nido, alt: 'Dairy Products' },
  { src: pocari, alt: 'Beverages' },
  { src: sandalsClear, alt: 'Footwear Collection' },
  { src: tide, alt: 'Cleaning Products' },
  { src: veet, alt: 'Personal Care' },
];

export const HeroSlideshow = () => {
  const { t, isRTL } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <section className={`relative h-screen overflow-hidden ${isRTL ? 'font-cairo' : ''}`}>
      {/* Image Container */}
      <div className="relative h-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 image-overlay" />
          </div>
        ))}
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center text-center px-4 z-10" style={{ paddingTop: '33vh' }}>
        <div className="max-w-4xl mx-auto space-y-6">
          
          <p className="text-2xl md:text-3xl lg:text-4xl text-white hero-text-shadow max-w-3xl mx-auto font-medium animate-premium-pulse">
            {t('hero.tagline')}
          </p>
          
          {/* WhatsApp Offers Section - Interactive Button */}
          <div className="mt-12 glass-morphism rounded-2xl p-6 max-w-sm mx-auto elegant-border premium-grid animate-luxury-float golden-accent">
            <div className="text-white text-center mb-4">
              <div className="text-sm font-medium text-shadow-premium">{t('hero.whatsapp.text')}</div>
            </div>
            <Button
              variant="premium"
              onClick={() => {
                const phoneNumber = "96891073089";
                const message = "Hi";
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="w-full p-4"
            >
              <div className="flex items-center justify-center gap-2">
                <MessageSquare className="w-5 h-5" />
                <div className="text-sm">
                  <div className="font-semibold">{t('hero.whatsapp.button')}</div>
                </div>
              </div>
            </Button>
          </div>
        </div>
      </div>


    </section>
  );
};