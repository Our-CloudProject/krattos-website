import React from 'react';
    import { BrainCircuit, Facebook, Twitter, Linkedin } from 'lucide-react';

    const Footer = () => {
      const currentYear = new Date().getFullYear();
      const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };

      return (
        <footer className="bg-gray-900/70 text-gray-400 py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="flex items-center mb-4">
                <img 
              src="/logo_icon.png" 
              alt="Karttos Logo" 
              style={{ width: '20px', height: 'auto' }}
            />
                  <span className="text-xl font-semibold text-white">KRATTOS AI</span>
                </div>
                <p className="text-sm">
                  Future-Ready ERP for Complex, High-Stakes Project Execution.
                </p>
              </div>
              <div>
                <p className="text-white font-semibold mb-3">Quick Links</p>
                <ul className="space-y-2 text-sm">
                  <li><button onClick={() => scrollToSection('about')} className="hover:text-secondary transition-colors">About Us</button></li>
                  <li><button onClick={() => scrollToSection('services')} className="hover:text-secondary transition-colors">Services</button></li>
                  <li><button onClick={() => scrollToSection('contact')} className="hover:text-secondary transition-colors">Contact</button></li>
                </ul>
              </div>
              <div>
                <p className="text-white font-semibold mb-3">Connect With Us</p>
                <div className="flex space-x-4">
                  <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-secondary transition-colors">
                    <Facebook size={24} />
                  </a>
                  <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-secondary transition-colors">
                    <Twitter size={24} />
                  </a>
                  <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-secondary transition-colors">
                    <Linkedin size={24} />
                  </a>
                </div>
                <p className="text-sm mt-4">
                  Hadapsar, Pune City, Maharashtra, India - 411028
                </p>
                <p className="text-sm">
                  Email: <a href="mailto:contact@jyainfottech.com" className="hover:text-secondary">contact@jyainfottech.com</a>
                </p>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8 text-center text-sm">
              <p>&copy; {currentYear} KRATTOS AI Enterprise System. All rights reserved.</p>
              <p className="mt-1">
                <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
              </p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;