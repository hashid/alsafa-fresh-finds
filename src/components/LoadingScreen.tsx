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