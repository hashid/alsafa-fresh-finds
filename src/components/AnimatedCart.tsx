import { ShoppingCart } from 'lucide-react';

export const AnimatedCart = () => {
  return (
    <div className="relative">
      {/* Shopping Cart */}
      <div className="relative">
        <ShoppingCart className="w-6 h-6 text-primary animate-bounce" />
        
        {/* Animated Items */}
        <div className="absolute -top-1 -right-1">
          {/* Apple */}
          <div className="w-2 h-2 bg-red-500 rounded-full animate-[fade-in_2s_ease-in-out_infinite] opacity-0" 
               style={{ animationDelay: '0s' }} />
        </div>
        
        <div className="absolute -top-2 left-1">
          {/* Banana */}
          <div className="w-1.5 h-2 bg-yellow-400 rounded-full animate-[fade-in_2s_ease-in-out_infinite] opacity-0" 
               style={{ animationDelay: '0.5s' }} />
        </div>
        
        <div className="absolute -top-1 left-0">
          {/* Carrot */}
          <div className="w-1 h-2 bg-orange-500 rounded-full animate-[fade-in_2s_ease-in-out_infinite] opacity-0" 
               style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="absolute -top-2 right-0">
          {/* Lettuce */}
          <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-[fade-in_2s_ease-in-out_infinite] opacity-0" 
               style={{ animationDelay: '1.5s' }} />
        </div>
      </div>
    </div>
  );
};