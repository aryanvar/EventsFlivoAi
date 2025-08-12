import React from 'react';

// Import your actual asset images using proper import statements
import CenterImg from '../../../../assets/Backgrounds/HomePageCenter.png';
import LeftImg from '../../../../assets/Backgrounds/leftpannel.jpg';
import RightImg from '../../../../assets/Backgrounds/rightPannel.jpg';
import Navbar from '../Utility/Navbar';

// Reusable component for the blurred, gradient-stroked text effect
const TextGlow = ({ children, className = '', as = 'div', hasGradient = false }) => {
  const Tag = as;
  const style = hasGradient
    ? {
        WebkitTextStroke: '1px transparent',
        WebkitBackgroundClip: 'text',
        backgroundClip: 'text',
        color: 'transparent',
        backgroundImage: 'linear-gradient(90deg, #f8fafc 0%, #949596 100%)',
      }
    : {};

  return (
    <Tag className={`relative font-semibold text-center text-slate-50 ${className}`}>
      {/* Blurred background layer */}
      <span className="absolute inset-0 opacity-50" style={{ ...style, filter: 'blur(2px)' }} aria-hidden="true">
        {children}
      </span>
      {/* Sharp foreground layer */}
      <span className="relative" style={style}>
        {children}
      </span>
    </Tag>
  );
};

const EnterpriseAISummit = ({ onRegisterClick }) => {
  // Function to handle smooth scrolling to registration section
  const handleRegisterClick = () => {
    if (onRegisterClick) {
      onRegisterClick(); // Call parent function if provided
    } else {
      // Default behavior: scroll to element with ID 'registration-section'
      const registrationSection = document.getElementById('registration-section');
      if (registrationSection) {
        registrationSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        // Alternative: scroll to bottom of page if no specific section found
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth'
        });
      }
    }
  };

  const galleryImages = [
    { src: LeftImg, alt: 'Aerial view of San Francisco skyscrapers' },
    { src: CenterImg, alt: 'San Francisco street level view at sunset' },
    { src: RightImg, alt: 'San Francisco skyline with reflection on water' },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#0f0f0f] font-sans text-slate-50">
      {/* --- DECORATIVE BACKGROUND ELEMENTS --- */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/4 h-[50vmax] w-[50vmax] -translate-x-1/4 rounded-full"
        style={{
          background: 'conic-gradient(from 180deg at 50% 50%, rgba(110, 168, 255, 0.56) 0%, rgba(48, 131, 255, 0.56) 100%)',
          filter: 'blur(167px)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"
        aria-hidden="true"
      />

      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col p-4 sm:p-6 lg:p-8">
        
        <Navbar />

        {/* == Main Hero Section == */}
        <main className="flex flex-grow flex-col items-center justify-center relative">
          {/* Date and Time Section - Positioned at top */}
          <div className="absolute top-0 left-0 right-0 flex w-full max-w-5xl mx-auto items-center justify-between px-4 mb-8">
            <p className="font-semibold text-slate-300 text-lg md:text-xl">August 17, 2025</p>
            <p className="font-semibold text-slate-300 text-lg md:text-xl">9am - 6pm GMT</p>
          </div>

          {/* Hero Content Container with Overlaid Text */}
          <div className="relative w-[900px] ">
            {/* San Francisco Title - Large and positioned above images */}
            <div className="relative z-20 text-center translate-y-[25%] hover:translate-y-0 transition-transform duration-3000 hover:cursor-pointer">
              <TextGlow hasGradient className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[140px] font-bold">
                San Francisco
              </TextGlow>
            </div>

            {/* Full-Width 3D Image Gallery */}
            <div className="relative w-screen left-1/2 -translate-x-1/2 [perspective:1100px] mb-4 z-30">
              <div className="relative flex h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[32rem] justify-center items-center gap-4 [transform-style:preserve-3d]">
                {galleryImages.map((image, index) => (
                  <div
                    key={image.alt}
                    className="h-full overflow-hidden shadow-2xl relative"
                    style={{
                      width: index === 1 ? '60vw' : '18vw', // Center image 50vw, side images 18vw each for better spacing
                      maxWidth: 'none',
                      transform: index === 0 
                        ? "rotateY(60deg) translateX(0)" 
                        : index === 2 
                        ? "rotateY(-60deg) translateX(0)" 
                        : "rotateY(0deg)",
                      transformOrigin: index === 0 ? "right center" : index === 2 ? "left center" : "center",
                      borderRadius: '0px', // No border radius for seamless effect
                      border: 'none', // Remove borders for seamless look
                    }}
                  >
                    <img 
                      src={image.src} 
                      alt={image.alt} 
                      className="h-full w-full object-cover" 
                      onError={(e) => {
                        // Fallback to high-quality San Francisco images if local images fail to load
                        const fallbackUrls = [
                          'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop&auto=format',
                          'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&h=800&fit=crop&auto=format',
                          'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200&h=800&fit=crop&auto=format'
                        ];
                        e.target.src = fallbackUrls[index] || fallbackUrls[0];
                      }}
                    />
                    {/* Dark overlay for better text contrast - only on center image */}
                    {index === 1 && <div className="absolute inset-0 bg-black/50"></div>}
                  </div>
                ))}
              </div>

              {/* Overlaid Text Content - Positioned over the center image */}
             <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-30 px-4 max-w-4xl mx-auto" style={{ top: '7rem' }}>
  {/* Main Headline */}
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold !leading-tight text-white mb-4 drop-shadow-2xl">
    Enterprise AI Summit 2025<br />
    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      Revealing Untapped $3 Trillion
    </span>
  </h1>

  {/* Subtitle */}
  <p className="max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl font-medium text-slate-100 mb-8 drop-shadow-lg leading-relaxed">
    Join global tech leaders in San Francisco this August as we uncover how enterprises can unlock trillion-dollar opportunities with GenAI, LLMs and intelligent automation.
  </p>

  {/* CTA Button */}
  <button
    className="transform rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 px-8 py-4 font-bold text-lg md:text-xl text-white shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 border border-blue-400/30"
    style={{ 
      boxShadow: '0px 0px 30px 0px rgba(59, 130, 246, 0.6), inset 0px 1px 0px rgba(255, 255, 255, 0.2)' 
    }}
    onClick={handleRegisterClick}
  >
    Register now
  </button>
</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default EnterpriseAISummit;