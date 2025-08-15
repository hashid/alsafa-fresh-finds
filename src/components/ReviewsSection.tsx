import { Star, Quote } from 'lucide-react';
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
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            What Our Customers Say
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our valued customers have to say about their shopping experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8 mb-12">
          {/* Overall Rating Card */}
          <div className="lg:col-span-1">
            <Card className="bg-gradient-hero text-white shadow-green h-full">
              <CardContent className="p-8 text-center">
                <div className="text-6xl font-bold mb-2">{overallStats.averageRating}</div>
                <div className="flex justify-center mb-4">
                  {renderStars(5)}
                </div>
                <p className="text-white/90 text-lg font-medium mb-4">
                  Based on {overallStats.totalReviews} reviews
                </p>
                
                {/* Rating Breakdown */}
                <div className="space-y-2 text-left">
                  {[
                    { stars: 5, count: overallStats.fiveStars },
                    { stars: 4, count: overallStats.fourStars },
                    { stars: 3, count: overallStats.threeStars },
                    { stars: 2, count: overallStats.twoStars },
                    { stars: 1, count: overallStats.oneStar }
                  ].map((item) => (
                    <div key={item.stars} className="flex items-center gap-2 text-sm">
                      <span className="w-4">{item.stars}</span>
                      <Star className="w-3 h-3 fill-white text-white" />
                      <div className="flex-1 bg-white/20 rounded-full h-2">
                        <div 
                          className="bg-white h-2 rounded-full" 
                          style={{ width: `${getPercentage(item.count)}%` }}
                        />
                      </div>
                      <span className="w-8 text-xs">{getPercentage(item.count)}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reviews Grid */}
          <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-medium transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <Quote className="w-8 h-8 text-primary/30 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex">
                          {renderStars(review.rating)}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {review.date}
                        </span>
                      </div>
                      <p className="text-foreground leading-relaxed mb-4">
                        "{review.review}"
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-primary">{review.name}</p>
                          <p className="text-sm text-muted-foreground">{review.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-fresh border-primary/20 inline-block">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Experience the Al Safa Difference
              </h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Join hundreds of satisfied customers who choose Al Safa Hypermarket for their daily shopping needs.
              </p>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold shadow-green transition-colors"
              >
                Visit Us Today
              </button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};