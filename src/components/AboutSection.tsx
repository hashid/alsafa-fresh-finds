import React from 'react';
import { Check, Clock, Users, MapPin, Star, Heart, ShoppingCart, Home, Shirt, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
    description: "Fresh vegetables, tender meats, seafood, bakery delights, and beauty care."
  },
  {
    icon: <Home className="w-8 h-8" />,
    title: "Basement",
    subtitle: "Household Essentials", 
    description: "Cleaning products, stationery, baby care, and everyday household needs."
  },
  {
    icon: <Shirt className="w-8 h-8" />,
    title: "1st Floor",
    subtitle: "Department Store",
    description: "Fashion for all ages, footwear, electronics, perfumes, gifts, and toys."
  },
  {
    icon: <Coffee className="w-8 h-8" />,
    title: "2nd Floor", 
    subtitle: "Eat & Play",
    description: "Family restaurant and fun play area for kids to enjoy while you shop."
  }
];

export const AboutSection = () => {
  return (
    <div className="min-h-screen">
      {/* About Us Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8">
              About Al Safa Hypermarket
            </h2>
            <div className="w-32 h-1.5 bg-primary mx-auto mb-10"></div>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-foreground leading-relaxed mb-6">
                Welcome to <strong className="text-primary">Al Safa Hypermarket</strong>, serving the community since 2015. We're proud to serve as your one-stop destination for all your daily needs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're stocking up on groceries, household essentials, or delighting in fresh produce and baked goods, we have everything you need under one roof.
              </p>
            </div>
          </div>

          {/* Features - 4-Card Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-all duration-300 border-0 overflow-hidden group">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-3 md:mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {React.cloneElement(feature.icon, { 
                      className: "w-6 h-6 md:w-8 md:h-8 flex-shrink-0" 
                    })}
                  </div>
                  <h3 className="text-base md:text-xl font-bold text-primary mb-2 md:mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <h3 className="text-5xl md:text-6xl font-bold text-primary mb-8">
              Explore Al Safa Hypermarket
            </h3>
            <div className="w-32 h-1.5 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              More than just shopping – discover four floors of convenience, variety, and family fun.
            </p>
          </div>

          {/* 4-Card Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {floorSections.map((floor, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-all duration-300 border-0 overflow-hidden group">
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-3 md:mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {React.cloneElement(floor.icon, { 
                      className: "w-6 h-6 md:w-8 md:h-8 flex-shrink-0" 
                    })}
                  </div>
                  <h4 className="text-base md:text-xl font-bold text-primary mb-1 md:mb-2">{floor.title}</h4>
                  <h5 className="text-sm md:text-lg font-semibold text-foreground mb-2 md:mb-3">{floor.subtitle}</h5>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-cormorant">
                    {floor.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};