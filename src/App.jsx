import React from 'react';
    import { Toaster } from '@/components/ui/toaster';
    import Header from '@/components/Header';
    import HeroSection from '@/components/HeroSection';
    import AboutSection from '@/components/AboutSection';
    import ServicesSection from '@/components/ServicesSection';
    import ContactSection from '@/components/ContactSection';
    import Footer from '@/components/Footer';

    function App() {
      const sections = [
        { id: 'hero', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'services', label: 'Services' },
        { id: 'contact', label: 'Contact' },
      ];

      return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 text-white">
          <Header navItems={sections} />
          <main className="flex-grow">
            <div id="hero">
              <HeroSection />
            </div>
            <div id="about">
              <AboutSection />
            </div>
            <div id="services">
              <ServicesSection />
            </div>
            <div id="contact">
              <ContactSection />
            </div>
          </main>
          <Footer />
          <Toaster />
        </div>
      );
    }

    export default App;