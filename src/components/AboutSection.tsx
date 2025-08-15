import React from 'react';
import { Check, Clock, Users, MapPin, Star, Heart, ShoppingCart, Home, Shirt, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';


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
      description: t('floor.ground.desc')
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: t('floor.basement.title'),
      subtitle: t('floor.basement.subtitle'), 
      description: t('floor.basement.desc')
    },
    {
      icon: <Shirt className="w-8 h-8" />,
      title: t('floor.first.title'),
      subtitle: t('floor.first.subtitle'),
      description: t('floor.first.desc')
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: t('floor.second.title'), 
      subtitle: t('floor.second.subtitle'),
      description: t('floor.second.desc')
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
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.intro2')}
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
                  <h4 className="text-base md:text-xl font-bold text-primary mb-2 md:mb-3">{floor.title}</h4>
                  <h5 className="text-sm md:text-lg font-semibold text-foreground mb-2 md:mb-3">{floor.subtitle}</h5>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
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