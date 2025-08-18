import { ShoppingCart, Apple, Carrot, Fish, Ham, Cookie } from 'lucide-react';
import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
  onLoadingComplete: () => void;
}

export const LoadingScreen = ({ isLoading, onLoadingComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(onLoadingComplete, 500);
            return 100;
          }
          return prev + 2;
        });
      }, 50);

      return () => clearInterval(interval);
    }
  }, [isLoading, onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Animated Shopping Cart */}
        <div className="relative">
          <div className="animate-bounce">
            <ShoppingCart className="w-16 h-16 text-hypermarket-red mx-auto animate-pulse" />
          </div>
          
          {/* Floating items around cart */}
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-fresh-green rounded-full animate-ping"></div>
          <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-premium-gold rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute top-1 -left-4 w-2 h-2 bg-hypermarket-red rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Brand Name */}
        <div className="space-y-2">
          <h1 className="text-2xl font-bold font-poppins text-hypermarket-red animate-pulse">
            Al Safa Hypermarket
          </h1>
        </div>


        {/* Filling Tray Animation */}
        <div className="relative w-48 h-16 mx-auto">
          {/* Tray Base */}
          <div className="absolute bottom-0 w-full h-4 bg-charcoal-gray/20 rounded-lg border-2 border-charcoal-gray/30"></div>
          
          {/* Food Category Icons */}
          <div className="absolute bottom-4 left-0 right-0 h-12 flex items-end justify-center gap-3 overflow-hidden">
            {/* Icons appear progressively */}
            {progress > 10 && (
              <div className="animate-bounce" style={{ animationDelay: '0s' }}>
                <Apple className="w-8 h-8 text-fresh-green" />
              </div>
            )}
            {progress > 25 && (
              <div className="animate-bounce" style={{ animationDelay: '0.2s' }}>
                <Carrot className="w-8 h-8 text-hypermarket-red" />
              </div>
            )}
            {progress > 40 && (
              <div className="animate-bounce" style={{ animationDelay: '0.4s' }}>
                <Fish className="w-8 h-8 text-premium-gold" />
              </div>
            )}
            {progress > 55 && (
              <div className="animate-bounce" style={{ animationDelay: '0.6s' }}>
                <Ham className="w-8 h-8 text-mustard-yellow" />
              </div>
            )}
            {progress > 70 && (
              <div className="animate-bounce" style={{ animationDelay: '0.8s' }}>
                <Cookie className="w-8 h-8 text-charcoal-gray" />
              </div>
            )}
          </div>
        </div>

        {/* Animated dots */}
        <div className="flex space-x-2 justify-center">
          <div className="w-2 h-2 bg-hypermarket-red rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-hypermarket-red rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-hypermarket-red rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};