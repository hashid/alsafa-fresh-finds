import { useState, useEffect } from 'react';

interface AboutImageCarouselProps {
  images: string[];
  mainImage: string;
  autoSlide?: boolean;
  interval?: number;
}

export const AboutImageCarousel = ({ 
  images, 
  mainImage,
  autoSlide = true, 
  interval = 4000 
}: AboutImageCarouselProps) => {
  const [currentImage, setCurrentImage] = useState(0);
  const allImages = [mainImage, ...images];

  useEffect(() => {
    if (!autoSlide || allImages.length <= 1) return;

    const slideInterval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % allImages.length);
    }, interval);

    return () => clearInterval(slideInterval);
  }, [autoSlide, interval, allImages.length]);

  if (!allImages || allImages.length === 0) return null;

  return (
    <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-elegant group">
      {/* Image Container */}
      <div className="relative h-64 sm:h-80 md:h-96 lg:h-[400px] overflow-hidden">
        {allImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentImage 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          >
            <img
              src={image}
              alt={`Al Safa Hypermarket ${index === 0 ? 'interior' : `product ${index}`}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>
        ))}
      </div>
      
      {/* Image indicators */}
      {allImages.length > 1 && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {allImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentImage 
                  ? 'bg-white shadow-lg scale-110' 
                  : 'bg-white/60 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}

      {/* Navigation arrows - only visible on hover */}
      {allImages.length > 1 && (
        <>
          <button
            onClick={() => setCurrentImage((prev) => (prev - 1 + allImages.length) % allImages.length)}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentImage((prev) => (prev + 1) % allImages.length)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
};