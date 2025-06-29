
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Your message has been transmitted to the mothership. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "khanalroshan7393@gmail.com",
      href: "mailto:khanalroshan7393@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kathmandu, Nepal",
      href: "#"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+977-XXX-XXXX-XXX",
      href: "tel:+977xxxxxxxxx"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Establish Contact
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-black/40 border-cyan-400/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-300">Let's Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-cyan-100/80 mb-6 leading-relaxed">
                  Ready to collaborate on your next digital transformation project? 
                  Whether you need a full-stack developer, a technology consultant, 
                  or someone to bring innovative ideas to life, I'm here to help.
                </p>
                
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 p-4 rounded-lg bg-cyan-400/10 hover:bg-cyan-400/20 transition-colors group"
                    >
                      <info.icon className="w-5 h-5 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                      <div>
                        <p className="text-sm text-cyan-400 font-medium">{info.label}</p>
                        <p className="text-cyan-100">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-black/40 border-cyan-400/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-300">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-black/20 border-cyan-400/30 text-cyan-100 placeholder-cyan-400/50 focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-black/20 border-cyan-400/30 text-cyan-100 placeholder-cyan-400/50 focus:border-cyan-400"
                    />
                  </div>
                </div>
                
                <Input
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="bg-black/20 border-cyan-400/30 text-cyan-100 placeholder-cyan-400/50 focus:border-cyan-400"
                />
                
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="bg-black/20 border-cyan-400/30 text-cyan-100 placeholder-cyan-400/50 focus:border-cyan-400 resize-none"
                />
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-3 transition-all duration-300 transform hover:scale-105"
                >
                  {isSubmitting ? (
                    "Transmitting..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
