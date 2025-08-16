import { useState, useEffect } from 'react';

interface FloorImageSliderProps {
  images: string[];
  title: string;
  autoSlide?: boolean;
  interval?: number;
}

export const FloorImageSlider = ({ 
  images, 
  title, 
  autoSlide = true, 
  interval = 3000 
}: FloorImageSliderProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    if (!autoSlide || images.length <= 1) return;

    const slideInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [autoSlide, interval, images.length]);

  if (!images || images.length === 0) return null;

  return (
    <div className="relative h-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${
            index === currentImage 
              ? 'opacity-100 scale-100' 
              : 'opacity-0 scale-105'
          }`}
        >
          <img
            src={image}
            alt={`${title} product ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      ))}
      
      {/* Image indicators */}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentImage 
                  ? 'bg-white shadow-lg' 
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};