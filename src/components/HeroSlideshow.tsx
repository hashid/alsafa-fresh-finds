import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
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
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold hero-text-shadow">
            <span className="text-red-500">AL SAFA</span><br />
            <span className="text-green-700">HYPERMARKET</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 hero-text-shadow max-w-2xl mx-auto font-medium">
            Fresh products, unbeatable prices, and exceptional service • Since 2015
          </p>
          
          {/* WhatsApp Offers Section */}
          <div className="bg-white/15 backdrop-blur-lg rounded-xl p-4 max-w-xs mx-auto border border-white/20">
            <div className="bg-green-600 hover:bg-green-700 text-white rounded-lg p-3 transition-colors">
              <div className="flex items-center justify-center gap-2">
                <MessageCircle className="w-4 h-4" />
                <div className="text-xs">
                  <div className="font-semibold">Save WhatsApp Number</div>
                  <div>+968 9107 3089 & Send <span className="font-bold text-green-200">"Hi"</span></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
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