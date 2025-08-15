import { Check, Star, Heart, Users, ShoppingCart, Home, Shirt, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import fruitsImage from '@/assets/fruits-clear.jpg';
import bagsImage from '@/assets/bags-clear.jpg';
import sandalsImage from '@/assets/sandals-clear.jpg';
import frozenImage from '@/assets/frozen-clear.jpg';

const features = [
  {
    icon: <Check className="w-8 h-8" />,
    title: "Wide Product Variety",
    description: "Fresh meat, fish, vegetables, breads, pastries, household goods and everyday essentials—all under one roof."
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Competitive Prices & Regular Deals",
    description: "Day-to-day savings and special offers during festive seasons to stretch your budget further."
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Clean & Well-Organized Spaces",
    description: "Neat and efficient layout making shopping fast, easy, and enjoyable for all customers."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Friendly, Helpful Staff",
    description: "Dedicated team offering prompt assistance and warm shopping environment that exceeds expectations."
  }
];

const floorSections = [
  {
    icon: <ShoppingCart className="w-8 h-8" />,
    title: "Ground Floor",
    subtitle: "Supermarket",
    description: "Fresh vegetables, tender meats, seafood, nuts, bakery delights, and beauty care products.",
    image: fruitsImage
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Basement",
    subtitle: "Household Essentials",
    description: "Cleaning products, stationery, baby care, and everyday household must-haves.",
    image: frozenImage
  },
  {
    icon: <Shirt className="w-8 h-8" />,
    title: "1st Floor",
    subtitle: "Department Store",
    description: "Fashion for all ages, footwear, electronics, perfumes, gifts, and toys.",
    image: bagsImage
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "2nd Floor",
    subtitle: "Eat & Play",
    description: "Family restaurant and fun play area for kids to enjoy while you shop.",
    image: sandalsImage
  }
];

const workingHours = [
  { day: "Monday", hours: "8:00 AM - 12:00 AM" },
  { day: "Tuesday", hours: "8:00 AM - 12:00 AM" },
  { day: "Wednesday", hours: "8:00 AM - 12:00 AM" },
  { day: "Thursday", hours: "8:00 AM - 12:00 AM" },
  { day: "Friday", hours: "8:00 AM - 12:00 AM" },
  { day: "Saturday", hours: "8:00 AM - 12:00 AM" },
  { day: "Sunday", hours: "8:00 AM - 12:00 AM" }
];

export const AboutSection = () => {
  return (
    <>
      {/* About Us Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8">
              About Al Safa Hypermarket
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-10"></div>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-foreground leading-relaxed mb-8">
                Welcome to <strong className="text-primary">Al Safa Hypermarket – Seeb</strong>, serving the community since 2015. We're proud to serve as your one-stop destination for all your daily needs.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Whether you're stocking up on groceries, household essentials, or delighting in fresh produce and baked goods, we have everything you need under one roof.
              </p>
            </div>
          </div>

          {/* Key Features - Two Column Layout */}
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-primary text-center mb-16">
              Why Choose Al Safa Hypermarket
            </h3>
            <div className="grid gap-8 lg:gap-12">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start gap-8 p-8 bg-card rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                  {/* Icon Column */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center text-primary shadow-inner">
                      {feature.icon}
                    </div>
                  </div>
                  
                  {/* Content Column */}
                  <div className="flex-1">
                    <h4 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                      {feature.title}
                    </h4>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 to-primary/5 px-8 py-6 rounded-2xl border border-primary/20">
                <Star className="w-10 h-10 text-primary" />
                <div className="text-left">
                  <h4 className="text-2xl font-bold text-primary mb-1">
                    High Standards & Community Trust
                  </h4>
                  <p className="text-muted-foreground">Serving Seeb with excellence since 2015</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Section - Alternating Background */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8">
              Explore Al Safa Hypermarket
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-primary to-primary/60 mx-auto mb-10"></div>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              More Than Just Shopping – Four Floors of Excellence
            </p>
          </div>

          {/* 4-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-8xl mx-auto">
            {floorSections.map((section, index) => (
              <Card key={index} className="group bg-white hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 shadow-md">
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={section.image} 
                    alt={section.subtitle}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <CardContent className="p-8">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                    {section.icon}
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-1">
                        {section.title}
                      </h3>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        {section.subtitle}
                      </h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};