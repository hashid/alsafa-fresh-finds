import { ShoppingCart } from 'lucide-react';
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
          
          {/* Tray Items */}
          <div className="absolute bottom-4 left-0 right-0 h-12 flex items-end justify-center gap-1 overflow-hidden">
            {/* Items appear progressively */}
            {progress > 10 && (
              <div className="w-6 h-8 bg-fresh-green rounded-t-lg animate-bounce" style={{ animationDelay: '0s' }}>
                <div className="w-full h-2 bg-fresh-green/80 rounded-t-lg"></div>
              </div>
            )}
            {progress > 25 && (
              <div className="w-5 h-6 bg-hypermarket-red rounded-t-lg animate-bounce" style={{ animationDelay: '0.2s' }}>
                <div className="w-full h-1 bg-hypermarket-red/80 rounded-t-lg"></div>
              </div>
            )}
            {progress > 40 && (
              <div className="w-4 h-5 bg-premium-gold rounded-t-lg animate-bounce" style={{ animationDelay: '0.4s' }}>
                <div className="w-full h-1 bg-premium-gold/80 rounded-t-lg"></div>
              </div>
            )}
            {progress > 55 && (
              <div className="w-6 h-7 bg-mustard-yellow rounded-t-lg animate-bounce" style={{ animationDelay: '0.6s' }}>
                <div className="w-full h-1 bg-mustard-yellow/80 rounded-t-lg"></div>
              </div>
            )}
            {progress > 70 && (
              <div className="w-5 h-6 bg-fresh-green rounded-t-lg animate-bounce" style={{ animationDelay: '0.8s' }}>
                <div className="w-full h-1 bg-fresh-green/80 rounded-t-lg"></div>
              </div>
            )}
            {progress > 85 && (
              <div className="w-4 h-8 bg-hypermarket-red rounded-t-lg animate-bounce" style={{ animationDelay: '1s' }}>
                <div className="w-full h-2 bg-hypermarket-red/80 rounded-t-lg"></div>
              </div>
            )}
          </div>
          
          {/* Progress Indicator */}
          <div className="mt-4 text-center">
            <div className="text-xs text-charcoal-gray/60">{progress}%</div>
          </div>
        </div>
        <div className="flex space-x-2 justify-center">
          <div className="w-2 h-2 bg-hypermarket-red rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-hypermarket-red rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-hypermarket-red rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
};