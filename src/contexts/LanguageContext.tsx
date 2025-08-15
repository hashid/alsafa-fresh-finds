import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  en: {
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
    "about.intro2": "Whether you're stocking up on groceries, household essentials, or delighting in fresh produce and baked goods, we have everything you need under one roof.",
    
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
    "contact.title": "Visit Us Today",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.hours": "Opening Hours",
    "contact.hours.daily": "Daily: 8:00 AM - 12:00 AM",
    "contact.hours.friday": "Friday: 2:00 PM - 12:00 AM",
    
    // Reviews
    "reviews.title": "What Our Customers Say",
    "reviews.overall": "Overall Rating",
    "reviews.based": "Based on customer reviews",
    "reviews.offers.title": "Get Exclusive Offers",
    "reviews.offers.desc": "Join our WhatsApp community for special deals and updates",
    "reviews.offers.button": "Join WhatsApp"
  },
  ar: {
    // Header
    "nav.home": "الرئيسية",
    "nav.about": "من نحن",
    "nav.reviews": "التقييمات",
    "nav.contact": "اتصل بنا",
    "nav.directions": "احصل على الاتجاهات",
    "header.tagline": "رضاكم عظمتنا",
    
    // Hero
    "hero.tagline": "منتجات طازجة، أسعار لا تقبل المنافسة، وخدمة استثنائية • منذ 2015",
    "hero.whatsapp.text": "قل \"مرحبا\" على الواتساب واحفظ رقمنا للحصول على التحديثات والعروض والمزيد!",
    "hero.whatsapp.button": "إرسال رسالة على الواتساب",
    
    // About Section
    "about.title": "حول السوبر ماركت الصفا",
    "about.intro1": "مرحباً بكم في السوبر ماركت الصفا، نخدم المجتمع منذ عام 2015. نحن فخورون بخدمتكم كوجهتكم الشاملة لجميع احتياجاتكم اليومية.",
    "about.intro2": "سواء كنتم تتسوقون للبقالة أو الضروريات المنزلية أو تستمتعون بالمنتجات الطازجة والمخبوزات، لدينا كل ما تحتاجونه تحت سقف واحد.",
    
    // Features
    "feature.variety.title": "تنوع واسع في المنتجات",
    "feature.variety.desc": "لحوم طازجة، أسماك، خضروات، خبز، معجنات، سلع منزلية وضروريات يومية - كل شيء تحت سقف واحد.",
    "feature.prices.title": "أسعار تنافسية وعروض منتظمة",
    "feature.prices.desc": "توفير يومي وعروض خاصة خلال المواسم الاحتفالية لتوسيع ميزانيتكم أكثر.",
    "feature.clean.title": "مساحات نظيفة ومنظمة جيداً",
    "feature.clean.desc": "تخطيط أنيق وفعال يجعل التسوق سريعاً وسهلاً وممتعاً لجميع العملاء.",
    "feature.staff.title": "موظفون ودودون ومفيدون",
    "feature.staff.desc": "فريق متفان يقدم المساعدة السريعة وبيئة تسوق دافئة تفوق التوقعات.",
    
    // Explore Section
    "explore.title": "استكشف السوبر ماركت الصفا",
    "explore.subtitle": "أكثر من مجرد تسوق - اكتشف أربعة طوابق من الراحة والتنوع والمرح العائلي.",
    
    // Floors
    "floor.ground.title": "الطابق الأرضي",
    "floor.ground.subtitle": "السوبر ماركت",
    "floor.ground.desc": "خضروات طازجة، لحوم طرية، مأكولات بحرية، مخبوزات شهية، ومنتجات العناية بالجمال.",
    "floor.basement.title": "الطابق السفلي",
    "floor.basement.subtitle": "الضروريات المنزلية",
    "floor.basement.desc": "منتجات التنظيف، القرطاسية، عناية الأطفال، والاحتياجات المنزلية اليومية.",
    "floor.first.title": "الطابق الأول",
    "floor.first.subtitle": "متجر متعدد الأقسام",
    "floor.first.desc": "أزياء لجميع الأعمار، أحذية، إلكترونيات، عطور، هدايا، وألعاب.",
    "floor.second.title": "الطابق الثاني",
    "floor.second.subtitle": "الأكل واللعب",
    "floor.second.desc": "مطعم عائلي ومنطقة لعب ممتعة للأطفال للاستمتاع أثناء تسوقكم.",
    
    // Contact
    "contact.title": "زورونا اليوم",
    "contact.address": "العنوان",
    "contact.phone": "الهاتف",
    "contact.hours": "ساعات العمل",
    "contact.hours.daily": "يومياً: 8:00 ص - 12:00 م",
    "contact.hours.friday": "الجمعة: 2:00 م - 12:00 م",
    
    // Reviews
    "reviews.title": "ماذا يقول عملاؤنا",
    "reviews.overall": "التقييم العام",
    "reviews.based": "بناءً على تقييمات العملاء",
    "reviews.offers.title": "احصل على عروض حصرية",
    "reviews.offers.desc": "انضم إلى مجتمع الواتساب الخاص بنا للحصول على صفقات خاصة وتحديثات",
    "reviews.offers.button": "انضم للواتساب"
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ar' : 'en';
    setLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'ar';

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'en' || savedLang === 'ar')) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language, isRTL]);

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t, isRTL }}>
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