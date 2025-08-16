import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroMain from '@/assets/hero-main.jpg';
import frozenNew from '@/assets/frozen-new.jpg';
import fruitsNew from '@/assets/fruits-new.jpg';
import juices from '@/assets/juices.jpg';
import nidoNew from '@/assets/nido-new.jpg';
import pocariNew from '@/assets/pocari-new.jpg';
import weetNew from '@/assets/veet-new.jpg';

const images = [
  { src: heroMain, alt: 'Al Safa Hypermarket' },
  { src: frozenNew, alt: 'Frozen Products' },
  { src: fruitsNew, alt: 'Fresh Fruits Collection' },
  { src: juices, alt: 'Beverages & Juices' },
  { src: nidoNew, alt: 'Dairy Products' },
  { src: pocariNew, alt: 'Sports Drinks' },
  { src: weetNew, alt: 'Personal Care' },
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
          
          <p className="text-2xl md:text-3xl lg:text-4xl text-white max-w-3xl mx-auto font-medium animate-premium-pulse premium-glow-text">
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