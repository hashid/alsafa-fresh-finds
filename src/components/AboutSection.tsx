import React from 'react';
import { Check, Clock, Users, MapPin, Star, Heart, ShoppingCart, Home, Shirt, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

// Ground Floor Images
import frozenNew from '@/assets/frozen-new.jpg';
import fruitsNew from '@/assets/fruits-new.jpg';
import juices from '@/assets/juices.jpg';
import nidoNew from '@/assets/nido-new.jpg';
import pocariNew from '@/assets/pocari-new.jpg';
import weetNew from '@/assets/veet-new.jpg';

// Basement Images
import balloonsNew from '@/assets/balloons-new.jpg';
import bucketNew from '@/assets/bucket-new.jpg';
import tideNew from '@/assets/tide-new.jpg';

// First Floor Images
import bagSandalNew from '@/assets/bag-sandal-new.jpg';
import bagsNew from '@/assets/bags-new.jpg';
import electronicNew from '@/assets/electronic-new.jpg';
import sandalsNew from '@/assets/sandals-new.jpg';


export const AboutSection = () => {
  const { t, isRTL } = useLanguage();
  
  const features = [
    {
      icon: <Check className="w-8 h-8" />,
      title: t('feature.variety.title'),
      description: t('feature.variety.desc')
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: t('feature.prices.title'),
      description: t('feature.prices.desc')
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: t('feature.clean.title'),
      description: t('feature.clean.desc')
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: t('feature.staff.title'),
      description: t('feature.staff.desc')
    }
  ];

  const floorSections = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: t('floor.ground.title'),
      subtitle: t('floor.ground.subtitle'),
      description: t('floor.ground.desc'),
      images: [frozenNew, fruitsNew, juices, nidoNew, pocariNew, weetNew]
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: t('floor.basement.title'),
      subtitle: t('floor.basement.subtitle'), 
      description: t('floor.basement.desc'),
      images: [balloonsNew, bucketNew, tideNew]
    },
    {
      icon: <Shirt className="w-8 h-8" />,
      title: t('floor.first.title'),
      subtitle: t('floor.first.subtitle'),
      description: t('floor.first.desc'),
      images: [bagSandalNew, bagsNew, electronicNew, sandalsNew]
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Department Store", 
      subtitle: "Second Floor",
      description: "Trolley bags, cycles and bed",
      images: []
    }
  ];

  return (
    <div className={`min-h-screen ${isRTL ? 'font-cairo' : ''}`}>
      {/* About Us Section */}
      <section id="about" className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Header */}
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-8">
              {t('about.title')}
            </h2>
            <div className="w-32 h-1.5 bg-primary mx-auto mb-10"></div>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-foreground leading-relaxed mb-6">
                {t('about.intro1')}
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
              {t('explore.title')}
            </h3>
            <div className="w-32 h-1.5 bg-primary mx-auto mb-8"></div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('explore.subtitle')}
            </p>
          </div>

          {/* Floor Sections with Images */}
          <div className="space-y-16">
            {floorSections.map((floor, index) => (
              <div key={index} className="text-center">
                <Card className="bg-card hover:shadow-lg transition-all duration-300 border-0 overflow-hidden group mb-8">
                  <CardContent className="p-6 md:p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {React.cloneElement(floor.icon, { 
                        className: "w-8 h-8 flex-shrink-0" 
                      })}
                    </div>
                    <h4 className="text-2xl md:text-3xl font-bold text-primary mb-3">{floor.title}</h4>
                    <h5 className="text-lg md:text-xl font-semibold text-foreground mb-4">{floor.subtitle}</h5>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                      {floor.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Product Images Grid */}
                {floor.images && floor.images.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
                    {floor.images.map((image, imgIndex) => (
                      <div key={imgIndex} className="aspect-square rounded-lg overflow-hidden bg-card shadow-md hover:shadow-lg transition-all duration-300 group">
                        <img 
                          src={image} 
                          alt={`Product ${imgIndex + 1}`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};