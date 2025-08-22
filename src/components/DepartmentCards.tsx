import { useLanguage } from '@/contexts/LanguageContext';
import { Card, CardContent } from '@/components/ui/card';
import groceryAisleImage from '@/assets/grocery-aisle.jpg';
import freshProduceImage from '@/assets/fresh-produce.jpg';
import clothingDepartmentMixed from '@/assets/clothing-department-mixed.jpg';
import pillowsBedImage from '@/assets/pillows-bed.jpg';
import homeAppliancesImage from '@/assets/home-appliances.jpg';
import meatFishFocused from '@/assets/meat-fish-focused.jpg';

const departments = [
  {
    name: 'Groceries',
    image: groceryAisleImage,
    description: 'Essential everyday items and household necessities'
  },
  {
    name: 'Fruits & Vegetables', 
    image: freshProduceImage,
    description: 'Fresh, organic produce delivered daily'
  },
  {
    name: 'Clothing',
    image: clothingDepartmentMixed,
    description: 'Fashionable clothing for the whole family'
  },
  {
    name: 'Pillows & Bedding',
    image: pillowsBedImage,
    description: 'Comfortable bedding and home textiles'
  },
  {
    name: 'Home Appliances',
    image: homeAppliancesImage,
    description: 'Modern appliances for your home'
  },
  {
    name: 'Fish & Meats',
    image: meatFishFocused,
    description: 'Fresh seafood and premium quality meats'
  }
];

export const DepartmentCards = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-b from-light-gray/30 via-white to-light-gray/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold font-poppins text-charcoal-gray mb-4">
            {t('Departments')}
          </h2>
          <p className="text-xl text-ash-dark max-w-2xl mx-auto">
            {t('Discover our wide range of departments offering quality products for every need')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {departments.map((department, index) => (
            <Card 
              key={department.name}
              className="group overflow-hidden hover:shadow-luxury transition-all duration-500 hover:scale-[1.02] fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={department.image}
                  alt={department.name}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-gray/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-charcoal-gray mb-3 group-hover:text-hypermarket-red transition-colors duration-300">
                  {t(department.name)}
                </h3>
                <p className="text-ash-dark leading-relaxed">
                  {t(department.description)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};