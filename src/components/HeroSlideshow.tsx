import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';
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
          
          <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 hero-text-shadow max-w-3xl mx-auto font-medium">
            Fresh products, unbeatable prices, and exceptional service • Since 2015
          </p>
          
          {/* WhatsApp Call-to-Action Button */}
          <div className="flex flex-col items-center space-y-4 mt-16">
            <div className="text-white/80 text-lg font-medium animate-pulse">
              🎉 Get Exclusive Offers & Updates
            </div>
            
            <Button
              onClick={() => {
                const phoneNumber = "96891073089";
                const message = "Hi";
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-full shadow-2xl border-2 border-white/20 backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:shadow-green-500/50"
            >
              <div className="flex items-center gap-3">
                <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition-colors">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="font-bold text-lg">Chat with Us on WhatsApp</div>
                  <div className="text-sm text-green-100 opacity-90">+968 9107 3089</div>
                </div>
              </div>
              
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-30 blur-xl group-hover:opacity-50 transition-opacity -z-10"></div>
            </Button>
            
            <div className="text-white/60 text-sm">
              Click to start chatting • Instant responses during business hours
            </div>
          </div>
        </div>
      </div>


    </section>
  );
};