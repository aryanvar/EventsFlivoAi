import React from 'react';
import BackgroundImg from '../../../../assets/Backgrounds/gainsSection.png';
import LogoImg from '../../../../assets/Backgrounds/logo.png';
import LeftImg from '../../../../assets/Backgrounds/left.png';
import RightImg from '../../../../assets/Backgrounds/right.png';

// MODIFIED: Updated the card data to match the content in the screenshot.
const gainItems = [
  {
    text: "Understand the real-world capabilities of intelligent AI agents and how they're transforming enterprise workflows, not just automating tasks.",
  },
  {
    text: "Unlock the frameworks behind $3 trillion in AI-powered enterprise value",
  },
  {
    text: "Learn directly from Fortune 500 AI leaders, CTOs and visionary founders",
  },
  {
    text: "Explore real-world use cases in GenAI, LLMs and intelligent automation",
  },
];


export default function GainsSection() {
  return (
    // Main section with background, font, and padding.
    <div className="relative bg-[linear-gradient(180deg,#0F0F0F_0%,#000000_100%)] text-slate-100 font-sans overflow-hidden">
      {/* Decorative blurred shapes for the background. They are hidden on smaller screens. */}
      <div className="absolute hidden lg:block top-1/4 left-[-25%] w-1/2 h-1/2 bg-white/5 rounded-full blur-[167px] z-0"></div>
      <div className="absolute hidden lg:block bottom-[5%] right-[-20%] w-3/5 h-1/5 bg-white/5 rounded-full blur-[167px] z-0"></div>
      
      {/* Left decorative image - positioned absolutely */}
      <img 
        src={LeftImg} 
        alt="" 
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-5 hidden lg:block"
      />
      
      {/* Right decorative image - positioned absolutely */}
      <img 
        src={RightImg} 
        alt="" 
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-5 hidden lg:block"
      />
      
      {/* Main content wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-7xl">
                  
          {/* MODIFIED: Header is now centered vertically for mobile */}
          <header 
            className="relative text-center h-[408px] w-full flex flex-col items-center justify-center gap-6 py-12 px-6 bg-gradient-to-t from-black/70 to-transparent bg-no-repeat bg-cover bg-center" 
            style={{ backgroundImage: `url(${BackgroundImg})` }}
          >
            <img src={LogoImg} alt="Enterprise AI Summit Logo" className="w-16 h-16"/>
            {/* MODIFIED: Heading width is now responsive */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold max-w-3xl">
              What You'll Gain at Enterprise AI Summit 2025
            </h1>
          </header>
          
          {/* MODIFIED: This container is now a horizontal scroll on mobile and a grid on desktop */}
          <div className="mt-16">
            <div className="flex overflow-x-auto snap-x snap-mandatory pb-4 lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-8">
              {gainItems.map((item, index) => (
                <div 
                  key={index}
                  // MODIFIED: Card styles adjusted for mobile slider
                  className="relative group flex-shrink-0 snap-center w-[90%] sm:w-4/5 md:w-3/5 lg:w-auto flex items-center justify-center rounded-2xl border border-white/20 text-center p-6 h-[300px] overflow-hidden cursor-pointer"
                >
                  {/* Background blur layer */}
                  <div className="absolute inset-0 backdrop-blur-none group-hover:backdrop-blur-md transition-all duration-300 rounded-2xl z-0" />
                  
                  {/* Text content with scale on hover */}
                  <p className="text-xl font-semibold leading-relaxed relative z-10 transform transition-transform duration-300 group-hover:scale-105">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
            
            {/* ADDED: Pagination dots for the mobile slider view */}
            <div className="flex justify-center items-center gap-2 mt-8 lg:hidden">
              <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-white/30 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-white/30 rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-white/30 rounded-full"></div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}