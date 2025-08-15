import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoHero from '@/assets/logo-hero.jpg';
import storeFront from '@/assets/store-front.jpg';
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
  { src: logoHero, alt: 'Al Safa Hypermarket Logo' },
  { src: storeFront, alt: 'Al Safa Store Front' },
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
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToImage = (index: number) => {
    setCurrentImage(index);
  };

  return (
    <section className="relative h-screen overflow-hidden">
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
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 z-10">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 hero-text-shadow font-medium">
            Your Premium Destination for Quality Shopping
          </p>
          <p className="text-lg md:text-xl text-white/80 hero-text-shadow max-w-2xl mx-auto">
            Fresh products, unbeatable prices, and exceptional service • Since 2015
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-white px-8 py-3 text-lg font-semibold shadow-green"
            >
              Shop Now
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg font-semibold backdrop-blur-sm bg-white/10"
            >
              View Location
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="lg"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 backdrop-blur-sm z-20"
        onClick={prevImage}
      >
        <ChevronLeft className="w-8 h-8" />
      </Button>
      <Button
        variant="ghost"
        size="lg"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 backdrop-blur-sm z-20"
        onClick={nextImage}
      >
        <ChevronRight className="w-8 h-8" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImage
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            onClick={() => goToImage(index)}
          />
        ))}
      </div>
    </section>
  );
};