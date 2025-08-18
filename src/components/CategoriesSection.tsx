import { useLanguage } from '@/contexts/LanguageContext';
import { ShoppingBasket, Cookie, Beef, ShirtIcon, ShoppingBag, Droplets, Sparkles, Bike, Bed, Fish } from 'lucide-react';

const categories = [
  {
    icon: ShoppingBasket,
    titleKey: 'Grocery',
    color: 'text-fresh-green',
    animation: 'slide-in-left'
  },
  {
    icon: Cookie,
    titleKey: 'Bakery',
    color: 'text-fresh-green',
    animation: 'slide-in-up'
  },
  {
    icon: Beef,
    titleKey: 'Butchery',
    color: 'text-fresh-green',
    animation: 'slide-in-right'
  },
  {
    icon: ShirtIcon,
    titleKey: 'Clothing',
    color: 'text-fresh-green',
    animation: 'slide-in-left'
  },
  {
    icon: ShoppingBag,
    titleKey: 'Trolley Bags',
    color: 'text-fresh-green',
    animation: 'slide-in-up'
  },
  {
    icon: Droplets,
    titleKey: 'Cleaning Essentials',
    color: 'text-fresh-green',
    animation: 'slide-in-right'
  },
  {
    icon: Sparkles,
    titleKey: 'Cosmetics',
    color: 'text-fresh-green',
    animation: 'slide-in-left'
  },
  {
    icon: Bike,
    titleKey: 'Cycles',
    color: 'text-fresh-green',
    animation: 'slide-in-up'
  },
  {
    icon: Bed,
    titleKey: 'Bedding',
    color: 'text-fresh-green',
    animation: 'slide-in-right'
  },
  {
    icon: Fish,
    titleKey: 'Fresh Fish',
    color: 'text-fresh-green',
    animation: 'slide-in-left'
  }
];

export const CategoriesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-charcoal-gray mb-4">
            {t('Categories')}
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.titleKey}
              className={`text-center group cursor-pointer ${category.animation}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-card group-hover:shadow-medium transition-all duration-300 transform group-hover:scale-110">
                <category.icon className={`w-10 h-10 ${category.color} category-icon`} />
              </div>
              <h3 className="text-lg font-semibold font-poppins text-charcoal-gray">
                {t(category.titleKey)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};