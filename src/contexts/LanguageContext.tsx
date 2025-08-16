import React, { createContext, useContext } from 'react';

interface LanguageContextType {
  t: (key: string) => string;
}

const translations = {
  // Header
  "nav.home": "Home",
  "nav.about": "About Us",
  "nav.reviews": "Reviews",
  "nav.contact": "Contact",
  "nav.directions": "Get Directions",
  "header.tagline": "Your satisfaction is our greatness",
  
  // Hero
  "hero.tagline": "Fresh products, unbeatable prices, and exceptional service • Since 2015",
  "hero.whatsapp.text": "Say \"Hi\" on WhatsApp and save our number to get updates, offers, and more!",
  "hero.whatsapp.button": "Send Message on WhatsApp",
  
  // About Section
  "about.title": "About Al Safa Hypermarket",
  "about.intro1": "Welcome to Al Safa Hypermarket, serving the community since 2015. We're proud to serve as your one-stop destination for all your daily needs.",
  
  // Features
  "feature.variety.title": "Wide Product Variety",
  "feature.variety.desc": "Fresh meat, fish, vegetables, breads, pastries, household goods and everyday essentials—all under one roof.",
  "feature.prices.title": "Competitive Prices & Regular Deals",
  "feature.prices.desc": "Day-to-day savings and special offers during festive seasons to stretch your budget further.",
  "feature.clean.title": "Clean & Well-Organized Spaces",
  "feature.clean.desc": "Neat and efficient layout making shopping fast, easy, and enjoyable for all customers.",
  "feature.staff.title": "Friendly, Helpful Staff",
  "feature.staff.desc": "Dedicated team offering prompt assistance and warm shopping environment that exceeds expectations.",
  
  // Explore Section
  "explore.title": "Explore Al Safa Hypermarket",
  "explore.subtitle": "More than just shopping – discover four floors of convenience, variety, and family fun.",
  
  // Floors
  "floor.ground.title": "Ground Floor",
  "floor.ground.subtitle": "Supermarket",
  "floor.ground.desc": "Fresh vegetables, tender meats, seafood, bakery delights, and beauty care.",
  "floor.basement.title": "Basement",
  "floor.basement.subtitle": "Household Essentials",
  "floor.basement.desc": "Cleaning products, stationery, baby care, and everyday household needs.",
  "floor.first.title": "1st Floor",
  "floor.first.subtitle": "Department Store",
  "floor.first.desc": "Fashion for all ages, footwear, electronics, perfumes, gifts, and toys.",
  "floor.second.title": "2nd Floor",
  "floor.second.subtitle": "Eat & Play",
  "floor.second.desc": "Family restaurant and fun play area for kids to enjoy while you shop.",
  
  // Contact
  "contact.title": "Contact Info",
  "contact.address": "Address",
  "contact.phone": "Phone",
  "contact.hours": "Working Hours",
  "contact.hours.daily": "8:00 AM - 12:00 AM",
  "contact.hours.friday": "Friday: 2:00 PM - 12:00 AM",
  
  // Reviews
  "reviews.title": "What Our Customers Say",
  "reviews.overall": "Overall Rating",
  "reviews.based": "Based on customer reviews",
  "reviews.offers.title": "Get Exclusive Offers",
  "reviews.offers.desc": "Join our WhatsApp community for special deals and updates",
  "reviews.offers.button": "Join WhatsApp"
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};