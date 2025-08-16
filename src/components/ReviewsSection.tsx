import { useState, useEffect } from 'react';
import { Star, Quote, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const reviews = [
  {
    name: "Ahmed Al-Rashid",
    location: "Al Maabilah",
    rating: 5,
    review: "Excellent hypermarket with fresh products and competitive prices. The staff is always helpful and the store is well-organized. My family shops here regularly!",
    date: "2 weeks ago"
  },
  {
    name: "Fatima Al-Zahra",
    location: "Seeb",
    rating: 5,
    review: "Best place for groceries in Seeb! Wide variety of products, always fresh fruits and vegetables. The bakery section is amazing with fresh bread daily.",
    date: "1 month ago"
  },
  {
    name: "Mohammed Al-Balushi",
    location: "Al Khuwair",
    rating: 5,
    review: "Great customer service and clean environment. I love their special offers during Ramadan and Eid. Highly recommend for families in the area.",
    date: "3 weeks ago"
  },
  {
    name: "Sarah Abdullah",
    location: "Bousher",
    rating: 5,
    review: "Convenient location with extended hours. Perfect for busy families like ours. The meat and fish section is very fresh and reasonably priced.",
    date: "1 week ago"
  },
  {
    name: "Khalid Al-Hinai",
    location: "Seeb",
    rating: 5,
    review: "Modern hypermarket with everything you need. Clean aisles, friendly staff, and good parking. They have become our go-to store for all household needs.",
    date: "2 months ago"
  },
  {
    name: "Maryam Al-Kindi",
    location: "Al Maabilah",
    rating: 5,
    review: "Exceptional quality and service! The produce section is always well-stocked with fresh items. Staff goes above and beyond to help customers find what they need.",
    date: "3 weeks ago"
  }
];

const overallStats = {
  averageRating: 4.9,
  totalReviews: 847,
  fiveStars: 789,
  fourStars: 45,
  threeStars: 8,
  twoStars: 3,
  oneStar: 2
};

export const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating 
            ? 'text-yellow-400 fill-yellow-400' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  const getPercentage = (count: number) => {
    return Math.round((count / overallStats.totalReviews) * 100);
  };

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            What Our Customers Say
          </h2>
          <div className="w-20 h-1 bg-green-700 mx-auto"></div>
        </div>

        {/* Sliding Reviews */}
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <Card className="max-w-2xl mx-auto">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <Quote className="w-6 h-6 text-primary/30 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex">
                            {renderStars(review.rating)}
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {review.date}
                          </span>
                        </div>
                        <p className="text-green-700 leading-relaxed mb-4 text-sm">
                          "{review.review}"
                        </p>
                        <div>
                          <p className="font-semibold text-green-700 text-sm">{review.name}</p>
                          <p className="text-xs text-green-700">{review.location}</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-primary/30'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* WhatsApp Offers Section */}
        <div className="text-center mt-12">
          <Card className="bg-white border-primary/20 shadow-lg max-w-md mx-auto">
            <CardContent className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-bold text-green-700 mb-3">
                Get Exclusive Offers
              </h3>
              <div className="mb-4">
                <p className="text-green-700 font-medium text-sm text-center">
                  To know about offers, send a WhatsApp message "Hi" and save our number
                </p>
              </div>
              <a 
                href="https://wa.me/96891073089?text=Hi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors text-sm shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};