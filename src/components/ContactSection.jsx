import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Textarea } from '@/components/ui/textarea';
    import { Label } from '@/components/ui/label';
    import { Send, Mail, Phone, MapPin } from 'lucide-react';
    import { useToast } from '@/components/ui/use-toast';

    const ContactSection = () => {
      const { toast } = useToast();
      const [formData, setFormData] = useState({ name: '', email: '', message: '' });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
          toast({
            title: "Uh oh! Something went wrong.",
            description: "Please fill in all fields.",
            variant: "destructive",
          });
          return;
        }
        // Simulate form submission
        console.log("Form data submitted:", formData);
        toast({
          title: "Message Sent! 🚀",
          description: "Thanks for reaching out. We'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
      };

      const contactInfo = [
        { icon: <Mail className="h-6 w-6 text-secondary" />, text: "contact@jyainfottech.com", href: "mailto:contact@jyainfottech.com" },
        // { icon: <Phone className="h-6 w-6 text-secondary" />, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
        { icon: <MapPin className="h-6 w-6 text-secondary" />, text: "Hadapsar, Pune City, Maharashtra, India - 411028" },
      ];

      return (
        <section className="py-16 md:py-24 bg-gray-800/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4">
                Get In <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-white">Touch</span>
              </h2>
              <p className="text-lg text-gray-300 text-center max-w-2xl mx-auto mb-12">
                Have questions or ready to start your AI-powered ERP journey? <br/>We'd love to hear from you.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="space-y-8 p-8 rounded-xl glassmorphism"
              >
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 mt-1">{item.icon}</div>
                    <div>
                      {item.href ? (
                        <a href={item.href} className="text-lg text-gray-200 hover:text-secondary transition-colors">{item.text}</a>
                      ) : (
                        <p className="text-lg text-gray-200">{item.text}</p>
                      )}
                    </div>
                  </div>
                ))}
                <div className="mt-8">
                  <p className="text-xl font-semibold text-white mb-3">Office Hours:</p>
                  <p className="text-gray-300">Monday - Friday: 9 AM - 6 PM (IST)</p>
                </div>
              </motion.div>

              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="space-y-6 p-8 rounded-xl glassmorphism"
              >
                <div>
                  <Label htmlFor="name" className="text-gray-300">Full Name</Label>
                  <Input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name" 
                    className="mt-1 bg-white/5 border-gray-600 focus:ring-secondary focus:border-secondary text-white placeholder-gray-500" 
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-gray-300">Email Address</Label>
                  <Input 
                    type="email" 
                    id="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com" 
                    className="mt-1 bg-white/5 border-gray-600 focus:ring-secondary focus:border-secondary text-white placeholder-gray-500" 
                  />
                </div>
                <div>
                  <Label htmlFor="message" className="text-gray-300">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="How can we help you?" 
                    rows={5} 
                    className="mt-1 bg-white/5 border-gray-600 focus:ring-secondary focus:border-secondary text-white placeholder-gray-500" 
                  />
                </div>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-secondary to-[#1abc9c] hover:from-[#1abc9c] hover:to-secondary text-primary-foreground shadow-lg">
                    Send Message <Send className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
              </motion.form>
            </div>
          </div>
        </section>
      );
    };

    export default ContactSection;