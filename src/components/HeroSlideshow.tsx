import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroStore from '@/assets/hero-store.jpg';
import bag from '@/assets/bag.jpg';
import frozen from '@/assets/frozen.jpg';
import fruits from '@/assets/fruits.jpg';
import moreBags from '@/assets/more-bags.jpg';
import safa from '@/assets/safa.jpg';
import sandals from '@/assets/sandals.jpg';
import soaps from '@/assets/soaps.jpg';

const images = [
  { src: heroStore, alt: 'Al Safa Hypermarket Store' },
  { src: fruits, alt: 'Fresh Fruits' },
  { src: frozen, alt: 'Frozen Products' },
  { src: bag, alt: 'Shopping Bags' },
  { src: moreBags, alt: 'Quality Bags' },
  { src: safa, alt: 'Al Safa Products' },
  { src: sandals, alt: 'Footwear Collection' },
  { src: soaps, alt: 'Personal Care Products' },
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
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white hero-text-shadow">
            Al Safa Hypermarket
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 hero-text-shadow font-medium">
            Your Premium Destination for Quality Shopping
          </p>
          <p className="text-lg md:text-xl text-white/80 hero-text-shadow max-w-2xl mx-auto">
            Fresh products, unbeatable prices, and exceptional service in the heart of Seeb
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