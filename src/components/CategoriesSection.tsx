import { useLanguage } from '@/contexts/LanguageContext';
import { ShoppingBasket, Cookie, Beef } from 'lucide-react';

const categories = [
  {
    icon: ShoppingBasket,
    titleKey: 'Grocery',
    color: 'text-fresh-green'
  },
  {
    icon: Cookie,
    titleKey: 'Bakery',
    color: 'text-fresh-green'
  },
  {
    icon: Beef,
    titleKey: 'Butchery',
    color: 'text-fresh-green'
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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.titleKey}
              className="text-center group cursor-pointer fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center shadow-card group-hover:shadow-medium transition-all duration-300 transform group-hover:scale-110">
                <category.icon className={`w-12 h-12 ${category.color} category-icon`} />
              </div>
              <h3 className="text-xl font-semibold font-poppins text-charcoal-gray">
                {t(category.titleKey)}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};