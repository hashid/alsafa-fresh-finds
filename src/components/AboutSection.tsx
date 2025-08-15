import { Check, Clock, Users, MapPin, Star, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const features = [
  {
    icon: <Check className="w-6 h-6" />,
    title: "Wide Product Variety",
    description: "Fresh meat, fish, vegetables, breads, pastries, household goods and everyday essentials—all under one roof."
  },
  {
    icon: <Star className="w-6 h-6" />,
    title: "Competitive Prices & Regular Deals",
    description: "Day-to-day savings and special offers during festive seasons to stretch your budget further."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Clean & Well-Organized Spaces",
    description: "Neat and efficient layout making shopping fast, easy, and enjoyable for all customers."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Friendly, Helpful Staff",
    description: "Dedicated team offering prompt assistance and warm shopping environment that exceeds expectations."
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
    <section id="about" className="py-20 bg-gradient-fresh">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            About Al Safa Hypermarket
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Main Content */}
          <div className="space-y-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Welcome to <strong className="text-primary">Al Safa Hypermarket – Seeb</strong>, serving the community since 2015. We're proud to serve as your one-stop destination for all your daily needs.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed mb-8">
                Whether you're stocking up on groceries, household essentials, or delighting in fresh produce and baked goods, we have everything you need under one roof.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white hover:shadow-medium transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center text-red-600">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-2">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Trust Section */}
            <Card className="bg-white shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-3">
                  <Star className="w-7 h-7" />
                  High Standards & Community Trust
                </h3>
              </CardContent>
            </Card>
          </div>

          {/* Location Info */}
          <div className="space-y-8">
          </div>
        </div>

        {/* Floor Information Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Explore Al Safa Hypermarket – More Than Just Shopping
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Ground Floor */}
            <Card className="bg-white shadow-medium hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-primary mb-4">Ground Floor – Supermarket</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Freshness at your fingertips! From farm-fresh vegetables, tender meats, and seafood to nuts, bakery delights, confectionery, and beauty care—everything you love under one roof.
                </p>
              </CardContent>
            </Card>

            {/* Basement */}
            <Card className="bg-white shadow-medium hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-primary mb-4">Basement – Household Essentials</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Your home, fully stocked. Find everything from cleaning products, stationery, and baby care to everyday household must-haves.
                </p>
              </CardContent>
            </Card>

            {/* 1st Floor */}
            <Card className="bg-white shadow-medium hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-primary mb-4">1st Floor – Department Store</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Style meets variety. Trendy fashion for men, women, and kids, plus footwear, electronics, perfumes, gifts, and toys for every occasion.
                </p>
              </CardContent>
            </Card>

            {/* 2nd Floor */}
            <Card className="bg-white shadow-medium hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-primary mb-4">2nd Floor – Eat & Play</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Shop. Play. Dine. Let the kids enjoy our fun play area while you relax and indulge in delicious meals at our family-friendly restaurant.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};