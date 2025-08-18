import { useLanguage } from '@/contexts/LanguageContext';
import { ShoppingBasket, Cookie, Beef, ShirtIcon, ShoppingBag, Droplets, Sparkles, Bike, Bed, Fish, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
const categories = [{
  icon: ShoppingBasket,
  titleKey: 'Grocery',
  color: 'text-fresh-green',
  animation: 'slide-in-left'
}, {
  icon: Cookie,
  titleKey: 'Bakery',
  color: 'text-fresh-green',
  animation: 'slide-in-up'
}, {
  icon: Beef,
  titleKey: 'Butchery',
  color: 'text-fresh-green',
  animation: 'slide-in-right'
}, {
  icon: ShirtIcon,
  titleKey: 'Clothing',
  color: 'text-fresh-green',
  animation: 'slide-in-left'
}, {
  icon: ShoppingBag,
  titleKey: 'Trolley Bags',
  color: 'text-fresh-green',
  animation: 'slide-in-up'
}, {
  icon: Droplets,
  titleKey: 'Cleaning Essentials',
  color: 'text-fresh-green',
  animation: 'slide-in-right'
}, {
  icon: Sparkles,
  titleKey: 'Cosmetics',
  color: 'text-fresh-green',
  animation: 'slide-in-left'
}, {
  icon: Bike,
  titleKey: 'Cycles',
  color: 'text-fresh-green',
  animation: 'slide-in-up'
}, {
  icon: Bed,
  titleKey: 'Bedding',
  color: 'text-fresh-green',
  animation: 'slide-in-right'
}, {
  icon: Fish,
  titleKey: 'Fresh Fish',
  color: 'text-fresh-green',
  animation: 'slide-in-left'
}];
export const CategoriesSection = () => {
  const {
    t
  } = useLanguage();
  const [isHighSpeed, setIsHighSpeed] = useState(false);
  return <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-charcoal-gray mb-4">
            {t('Categories')}
          </h2>
        </div>
        
        <div className="relative overflow-hidden">
          {/* Speed Control Button */}
          
          
          <div className={`flex space-x-8 py-4 ${isHighSpeed ? 'animate-[scroll-left_15s_linear_infinite]' : 'animate-[scroll-left_30s_linear_infinite]'}`}>
            {[...categories, ...categories, ...categories].map((category, index) => <div key={`${category.titleKey}-${index}`} className="text-center group cursor-pointer flex-shrink-0 w-32">
              <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-card group-hover:shadow-medium transition-all duration-300 transform group-hover:scale-110">
                <category.icon className={`w-10 h-10 ${category.color} category-icon`} />
              </div>
              <h3 className="text-lg font-semibold font-poppins text-charcoal-gray">
                {t(category.titleKey)}
              </h3>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};