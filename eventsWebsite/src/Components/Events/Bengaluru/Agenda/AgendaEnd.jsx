import React from 'react';

import BackgroundImg from '../../../../assets/Backgrounds/TorontoImages/TorontoRight.png';
import Logo from '../../../../assets/Backgrounds/logo.png'; // Assuming you have a logo image

const AgendaEnd = ({ onRegisterClick }) => {
  const handleRegisterClick = () => {
    if (onRegisterClick && typeof onRegisterClick === 'function') {
      onRegisterClick();
    } else {
      console.log('Register button clicked');
      // Default action - could redirect to registration page
      // window.open('/register', '_blank');
    }
  };

  return (
    <section
      className="relative w-full max-h-[41rem] overflow-hidden bg-black font-montserrat flex items-center"
      style={{
        backgroundImage: `url(${BackgroundImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      aria-labelledby="cta-heading"
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
      
      {/* Container to constrain content width and add padding */}
      <div className="relative mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        {/* Main content box with responsive border - constrained to fit within max-height */}
        <div className="relative flex w-full max-h-[35rem] flex-col items-center justify-center gap-4 rounded-2xl border border-slate-50/30 bg-black/20 px-4 py-6 text-center text-slate-50 backdrop-blur-sm sm:gap-5 sm:px-6 sm:py-8 md:gap-6 md:px-8 md:py-10">
          
          {/* Logo/Image container - smaller to fit */}
          <div className="relative w-full max-w-[200px] sm:max-w-[240px]">
            <div
              className="absolute inset-0 rounded-lg bg-slate-400/10 blur-sm"
              aria-hidden="true"
            />
            <div className="relative flex h-[100px] items-center justify-center rounded-lg  sm:h-20 md:h-24">
              <img src={Logo} alt="Event Logo" className="h-full w-full object-contain bg-center" />
            </div>
          </div>

          {/* Main heading text with responsive font size - optimized for height constraint */}
          <h2 
            id="cta-heading"
            className="max-w-3xl text-xl font-bold leading-tight text-slate-50 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          >
            Seats are limited. Don't miss the AI event that's defining enterprise
            innovation in 2025.
          </h2>

          {/* Register button with responsive text and padding - compact sizing */}
          <button
            className="group relative transform overflow-hidden rounded-lg bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 px-5 py-2.5 font-roboto text-base font-bold text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 focus:outline-none focus:ring-4 focus:ring-blue-500/50 active:scale-100 sm:px-6 sm:py-3 sm:text-lg md:px-8 md:py-4 md:text-xl lg:text-2xl"
            onClick={handleRegisterClick}
            aria-label="Register for the AI enterprise innovation event"
          >
            {/* Button shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            
            <span className="relative z-10">Register Now</span>
          </button>

          {/* Additional info text - smaller to save space */}
          <p className="text-xs text-slate-300 sm:text-sm">
            Join industry leaders and innovators • Limited capacity • Early bird pricing ends soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default AgendaEnd;