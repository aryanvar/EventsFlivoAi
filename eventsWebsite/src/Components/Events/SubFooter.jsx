import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import Logo from '../../assets/Backgrounds/FlivoaiLogo.png'; // Adjust the path as necessary



// Helper component for footer links
const FooterLink = ({ href = "#", children }) => (
  <a href={href} className="text-slate-300 hover:text-white transition-colors duration-300 text-base font-normal">
    {children}
  </a>
);

/**
 * A fully responsive footer component.
 * It displays company info, navigation links, and a newsletter signup form.
 * The layout adjusts from a multi-column desktop view to a stacked mobile view.
 */
const SubFooter = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Prevent submission if the email is empty
    if (!newsletterEmail) return;

    // Your subscription logic would go here.
    // For now, we'll just log it to the console.
    console.log('Subscribing with email:', newsletterEmail);

    // Clear the input field after submission
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-black text-white w-full py-16 px-6 font-sans">
      <div className="max-w-screen-xl mx-auto flex flex-col items-center lg:items-start gap-12 text-center lg:text-left">
          
          {/* Top section of the footer with multiple columns for desktop */}
          <div className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12">

              {/* Company Info Section */}
              <div className="flex flex-col items-center lg:items-start gap-4 max-w-md">
                  <img src={Logo} alt="FlivoAI Logo" className="w-[120px]" />
                  <h3 className="text-white text-3xl font-bold leading-tight">
                      Enterprise AI Summit 2025
                  </h3>
                  <p className="text-slate-300 text-base font-normal">
                      Enabling C-level leaders, technology pioneers, and AI visionaries with insights on how to drive business success using artificial intelligence.
                  </p>
                  <a href="#" className="text-slate-400 hover:text-white mt-2">
                      <Linkedin size={24} />
                  </a>
              </div>

              {/* Links and Contact Section - grouped for desktop */}
              <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-12 lg:gap-20">
                  {/* Newsletter Signup */}
                  <div className="flex flex-col gap-3 text-center sm:text-left">
                      <h4 className="text-sm font-bold uppercase tracking-widest mb-1">Newsletter Signup</h4>
                      <form onSubmit={handleSubscribe} className="flex flex-col gap-4 w-full max-w-xs">
                          <input
                              type="email"
                              placeholder="Enter your email"
                              value={newsletterEmail}
                              onChange={(e) => setNewsletterEmail(e.target.value)}
                              className="bg-[#1D1D1D] rounded-md border border-[#4b5563] w-full h-12 px-4 text-base text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              required
                          />
                          <button
                              type="submit"
                              className="rounded-md w-[max-content] h-11 text-white text-base font-medium transition-transform hover:scale-105"
                              style={{ background: 'linear-gradient(90deg, rgba(77, 171, 247, 1) 0%, rgba(59, 130, 246, 1) 100%)' }}
                          >
                              Subscribe
                          </button>
                      </form>
                  </div>

                  {/* Event & Locations Links */}
                  <div className="flex flex-row justify-center gap-12 lg:gap-20">
                      <div className="flex flex-col gap-3 text-left">
                          <h4 className="text-white text-xl font-bold mb-1">Event</h4>
                          <FooterLink>Home</FooterLink>
                          <FooterLink>Agenda</FooterLink>
                          <FooterLink>FAQ</FooterLink>
                      </div>
                      <div className="flex flex-col gap-3 text-left">
                          <h4 className="text-white text-xl font-bold mb-1">Locations</h4>
                          <FooterLink>Dubai</FooterLink>
                          <FooterLink>New York</FooterLink>
                      </div>
                  </div>
                  
                  {/* Contact Info */}
                  <div className="flex flex-col gap-3 text-left">
                      <h4 className="text-white text-xl font-bold mb-1">Contact</h4>
                      <a href="mailto:connect@flivo.ai" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                          <Mail size={20} /> connect@flivo.ai
                      </a>
                      <a href="tel:+7800000000" className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors">
                          <Phone size={20} /> +78 XXXX XXXX
                      </a>
                      <div className="flex items-center gap-3 text-slate-300">
                          <MapPin size={20} /> Location
                      </div>
                  </div>
              </div>
          </div>

          {/* Copyright Notice */}
          <div className="w-full border-t border-slate-700 mt-8 pt-8">
              <p className="text-slate-500 text-sm font-normal text-center">
                  © {new Date().getFullYear()} FlivoAI Enterprise AI Summit. All rights reserved.
              </p>
          </div>
      </div>
    </footer>
  );
};

export default SubFooter;