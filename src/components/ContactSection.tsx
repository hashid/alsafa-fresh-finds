import { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Clock, Star, ExternalLink, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you soon.",
    });
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-light-gray/30 via-white to-light-gray/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-premium-gold/5 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-charcoal-gray via-hypermarket-red to-charcoal-gray bg-clip-text text-shimmer mb-6 relative">
            <span className="relative z-10">Contact Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-premium-gold/20 to-transparent blur-sm opacity-50"></div>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-hypermarket-red to-transparent mx-auto mb-8 rounded-full shadow-lg"></div>
          <p className="text-xl text-ash-dark max-w-2xl mx-auto leading-relaxed">
            <span className="bg-gradient-to-r from-charcoal-gray to-ash-dark bg-clip-text text-transparent font-medium">
              We're here to help! Get in touch with us for any questions, suggestions, or special requests.
            </span>
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Phone */}
            <Card className="hover:shadow-medium transition-all duration-500 border border-premium-gold/10 bg-gradient-to-br from-white to-light-gray/30 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-premium-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-premium-gold/20 to-transparent rounded-bl-full"></div>
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-fresh-green/20 to-fresh-green/10 rounded-lg flex items-center justify-center shadow-soft">
                    <Phone className="w-6 h-6 text-fresh-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal-gray mb-1 text-shimmer">Phone</h3>
                    <a 
                      href="tel:+96891073089" 
                      className="text-ash-dark hover:text-hypermarket-red transition-colors font-medium"
                    >
                      +968 9107 3089
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="hover:shadow-medium transition-all duration-500 border border-premium-gold/10 bg-gradient-to-br from-white to-light-gray/30 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-premium-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-premium-gold/20 to-transparent rounded-bl-full"></div>
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-fresh-green/20 to-fresh-green/10 rounded-lg flex items-center justify-center shadow-soft">
                    <Mail className="w-6 h-6 text-fresh-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal-gray mb-1 text-shimmer">Email</h3>
                    <a 
                      href="mailto:alsafahypermarket01@gmail.com" 
                      className="text-ash-dark hover:text-hypermarket-red transition-colors text-sm font-medium"
                    >
                      alsafahypermarket01@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="hover:shadow-medium transition-all duration-500 border border-premium-gold/10 bg-gradient-to-br from-white to-light-gray/30 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-premium-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-premium-gold/20 to-transparent rounded-bl-full"></div>
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-fresh-green/20 to-fresh-green/10 rounded-lg flex items-center justify-center shadow-soft">
                    <MessageSquare className="w-6 h-6 text-fresh-green" />
                  </div>
                  <div>
                    <h3 className="font-bold text-charcoal-gray mb-1 text-shimmer">WhatsApp</h3>
                    <a 
                      href="https://wa.me/96891073089" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-ash-dark hover:text-hypermarket-red transition-colors flex items-center gap-1 font-medium"
                    >
                      +968 9107 3089
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Map and Directions */}
          <div className="lg:col-span-2">
            <Card className="shadow-strong border border-premium-gold/10 bg-gradient-to-br from-white to-light-gray/20 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-premium-gold/3 to-transparent"></div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-2xl text-transparent bg-gradient-to-r from-charcoal-gray to-ash-dark bg-clip-text flex items-center gap-2 text-shimmer">
                  <MapPin className="w-6 h-6 text-hypermarket-red" />
                  Find Us Here
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-bold text-charcoal-gray mb-2 text-shimmer">Address</h3>
                      <p className="text-ash-dark leading-relaxed">
                        7729 Way, Al Maabilah<br />
                        Seeb, Muscat 130<br />
                        Sultanate of Oman
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-premium-gold">
                      <Star className="w-5 h-5 fill-premium-gold" />
                      <Star className="w-5 h-5 fill-premium-gold" />
                      <Star className="w-5 h-5 fill-premium-gold" />
                      <Star className="w-5 h-5 fill-premium-gold" />
                      <Star className="w-5 h-5 fill-premium-gold" />
                      <span className="text-ash-dark font-bold ml-2">4.9/5 (847 reviews)</span>
                    </div>
                    
                    <Button 
                      asChild
                      className="w-full bg-gradient-to-r from-fresh-green to-fresh-green/90 hover:from-fresh-green/90 hover:to-fresh-green text-white shadow-green border border-white/20 rounded-xl transform hover:scale-105 transition-all duration-500"
                    >
                      <a 
                        href="https://maps.app.goo.gl/DeiprjZnSJiWmaj89?g_st=com.google.maps.preview.copy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 relative overflow-hidden group"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <MapPin className="w-5 h-5 relative z-10" />
                        <span className="relative z-10">Get Directions</span>
                        <ExternalLink className="w-4 h-4 relative z-10" />
                      </a>
                    </Button>
                  </div>
                  
                  <div>
                    <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.123456789!2d58.123456789!3d23.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAl%20Safa%20Hypermarket!5e0!3m2!1sen!2som!4v1234567890"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
};