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
                Welcome to <strong className="text-primary">Al Safa Hypermarket – Seeb</strong>, serving the community since 2015. We're proud to serve as your one-stop destination for all your daily needs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Whether you're stocking up on groceries, household essentials, or delighting in fresh produce and baked goods, we have everything you need under one roof.
              </p>
            </div>
          </div>

          {/* Features - 4-Card Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-all duration-300 border-0 overflow-hidden group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Trust Section */}
          <div className="text-center p-12 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Star className="w-10 h-10 text-primary" />
              <h3 className="text-3xl font-bold text-primary">High Standards & Community Trust</h3>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built on trust and quality, we maintain the highest standards to serve our community with excellence every day.
            </p>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {floorSections.map((floor, index) => (
              <Card key={index} className="bg-card hover:shadow-lg transition-all duration-300 border-0 overflow-hidden group">
                <CardContent className="p-8 text-center">
                  <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    {floor.icon}
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-2">{floor.title}</h4>
                  <h5 className="text-lg font-semibold text-foreground mb-4">{floor.subtitle}</h5>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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