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
    <section id="contact" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-700 mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-8"></div>
          <p className="text-xl text-green-700 max-w-2xl mx-auto">
            We're here to help! Get in touch with us for any questions, suggestions, or special requests.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {/* Phone */}
            <Card className="hover:shadow-medium transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-700/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Phone</h3>
                    <a 
                      href="tel:+96891073089" 
                      className="text-green-700 hover:text-green-600 transition-colors"
                    >
                      +968 9107 3089
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card className="hover:shadow-medium transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-700/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">Email</h3>
                    <a 
                      href="mailto:alsafahypermarket01@gmail.com" 
                      className="text-green-700 hover:text-green-600 transition-colors text-sm"
                    >
                      alsafahypermarket01@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp */}
            <Card className="hover:shadow-medium transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-700/10 rounded-lg flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-green-700 mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/96891073089" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-700 hover:text-green-600 transition-colors flex items-center gap-1"
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
            <Card className="shadow-strong">
              <CardHeader>
                <CardTitle className="text-2xl text-green-700 flex items-center gap-2">
                  <MapPin className="w-6 h-6" />
                  Find Us Here
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-green-700 mb-2">Address</h3>
                      <p className="text-green-700">
                        7729 Way, Al Maabilah<br />
                        Seeb, Muscat 130<br />
                        Sultanate of Oman
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-2 text-yellow-500">
                      <Star className="w-5 h-5 fill-yellow-500" />
                      <Star className="w-5 h-5 fill-yellow-500" />
                      <Star className="w-5 h-5 fill-yellow-500" />
                      <Star className="w-5 h-5 fill-yellow-500" />
                      <Star className="w-5 h-5 fill-yellow-500" />
                      <span className="text-green-700 font-medium ml-2">4.9/5 (847 reviews)</span>
                    </div>
                    
                    <Button 
                      asChild
                      className="w-full bg-green-700 hover:bg-green-600 text-white shadow-green"
                    >
                      <a 
                        href="https://maps.app.goo.gl/DeiprjZnSJiWmaj89?g_st=com.google.maps.preview.copy" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <MapPin className="w-5 h-5" />
                        Get Directions
                        <ExternalLink className="w-4 h-4" />
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