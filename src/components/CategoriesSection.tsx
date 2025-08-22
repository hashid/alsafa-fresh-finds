import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

// Import category images
import categoryHomeAppliances from '@/assets/category-home-appliances.png';
import categoryBeauty from '@/assets/category-beauty.png';
import categoryFresh from '@/assets/category-fresh.png';
import categoryFruits from '@/assets/category-fruits.png';
import categoryUtensils from '@/assets/category-utensils.png';
import categoryGrocery from '@/assets/category-grocery.png';
import categoryBakery from '@/assets/category-bakery.png';
import categoryButchery from '@/assets/category-butchery.png';
import categoryClothing from '@/assets/category-clothing.png';
import categoryFreshFish from '@/assets/category-fresh-fish.png';

const categories = [
  {
    image: categoryHomeAppliances,
    titleKey: 'Home Appliances',
    color: 'text-charcoal-gray',
    animation: 'slide-in-left'
  },
  {
    image: categoryBeauty,
    titleKey: 'Beauty',
    color: 'text-charcoal-gray',
    animation: 'slide-in-up'
  },
  {
    image: categoryFresh,
    titleKey: 'Fresh',
    color: 'text-charcoal-gray',
    animation: 'slide-in-right'
  },
  {
    image: categoryFruits,
    titleKey: 'Fruits',
    color: 'text-charcoal-gray',
    animation: 'slide-in-left'
  },
  {
    image: categoryUtensils,
    titleKey: 'Utensils',
    color: 'text-charcoal-gray',
    animation: 'slide-in-up'
  },
  {
    image: categoryGrocery,
    titleKey: 'Grocery',
    color: 'text-charcoal-gray',
    animation: 'slide-in-right'
  },
  {
    image: categoryBakery,
    titleKey: 'Bakery',
    color: 'text-charcoal-gray',
    animation: 'slide-in-left'
  },
  {
    image: categoryButchery,
    titleKey: 'Butchery',
    color: 'text-charcoal-gray',
    animation: 'slide-in-up'
  },
  {
    image: categoryClothing,
    titleKey: 'Clothing',
    color: 'text-charcoal-gray',
    animation: 'slide-in-right'
  },
  {
    image: categoryFreshFish,
    titleKey: 'Fresh Fish',
    color: 'text-charcoal-gray',
    animation: 'slide-in-left'
  }
];
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
          {/* Desktop: Infinite scrolling animation */}
          <div className="hidden md:block">
            <div 
              className={`flex space-x-8 py-4 ${isHighSpeed ? 'animate-scroll-left-fast' : 'animate-scroll-left'}`}
              style={{ width: 'calc(100% * 3)' }}
            >
              {[...categories, ...categories, ...categories].map((category, index) => (
                <div key={`${category.titleKey}-${index}`} className="text-center group cursor-pointer flex-shrink-0 w-32 sleek-hover">
                  <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-card group-hover:shadow-medium transition-all duration-300 transform group-hover:scale-110 card-hover overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={`${category.titleKey} category`}
                      className="w-20 h-20 object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold font-poppins text-charcoal-gray transition-colors duration-300 group-hover:text-hypermarket-red">
                    {t(category.titleKey)}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: Touch scrollable with infinite content */}
          <div className="block md:hidden">
            <div 
              className="flex space-x-8 py-4 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory"
              style={{
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              {[...categories, ...categories, ...categories, ...categories].map((category, index) => (
                <div key={`${category.titleKey}-${index}`} className="text-center group cursor-pointer flex-shrink-0 w-32 sleek-hover snap-center">
                  <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-card group-hover:shadow-medium transition-all duration-300 transform group-hover:scale-110 card-hover overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={`${category.titleKey} category`}
                      className="w-20 h-20 object-cover rounded-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold font-poppins text-charcoal-gray transition-colors duration-300 group-hover:text-hypermarket-red">
                    {t(category.titleKey)}
                  </h3>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>;
};