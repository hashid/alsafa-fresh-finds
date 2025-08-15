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
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Logo */}
          <div className="mb-4">
            <img 
              src={logo} 
              alt="AL SAFA HYPERMARKET Logo" 
              className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full shadow-lg"
            />
          </div>
          
          {/* Store Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold hero-text-shadow">
            <span className="text-red-500">AL SAFA</span><br />
            <span className="text-green-700">HYPERMARKET</span>
          </h1>
          
          <p className="text-2xl md:text-3xl lg:text-4xl text-white/90 hero-text-shadow max-w-3xl mx-auto font-medium">
            Fresh products, unbeatable prices, and exceptional service • Since 2015
          </p>
          
          {/* WhatsApp Offers Section - Moved down */}
          <div className="mt-12 bg-white/15 backdrop-blur-lg rounded-xl p-3 max-w-sm mx-auto border border-white/20">
            <div className="text-white text-center mb-2">
              <div className="text-sm font-medium">Get exclusive offers to know about offer</div>
            </div>
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
        </div>
      </div>


    </section>
  );
};