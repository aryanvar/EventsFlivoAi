import React from 'react';
import Agenda from './Agenda';
import Agendatop from '../../../../assets/Backgrounds/AgendaTop1.png';
import AgendaBottom from '../../../../assets/Backgrounds/AgendaTop.png';
import AgendaRight from '../../../../assets/Backgrounds/AgendaRightInfo.png';
import Logo from '../../../../assets/Backgrounds/logo.png';
import LogoLeft from '../../../../assets/Backgrounds/AgendaInfoLeft.png';

// Reusable Card component for the bordered sections
const InfoCard = ({ children, className = '', style = {} }) => (
  <div
    className={`relative flex flex-col md:flex-row w-full p-8 md:p-12 border-2 ${className}`}
    style={style}
  >
    {children}
  </div>
);

// Reusable Blurred Text component
const BlurredText = ({ children, className = '' }) => (
  <div className={`relative font-bold text-center ${className}`}>
    <span className="absolute inset-0 opacity-70" style={{ filter: 'blur(2.5px)' }} aria-hidden="true">
      {children}
    </span>
    <span className="relative">{children}</span>
  </div>
);

const AgendaInfo = () => {
  return (
    <div className="min-h-screen w-full bg-black text-slate-50 font-montserrat overflow-x-hidden">
      {/* Main layout container */}
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* --- Hero Section --- */}
        <div className="mb-8">
          <InfoCard style={{ backgroundImage: `url(${Agendatop})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Decorative Element (mobile: hidden, md: visible) */}
            <div className="hidden md:flex items-center justify-center w-1/4">
              <div className="w-24 h-40 lg:w-[149px] lg:h-[258px] opacity-80 rounded-lg flex items-center justify-center text-sm"
                style={{ backgroundImage: `url(${Logo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
              </div>
            </div>
            {/* Hero Text Content */}
            <div className="flex flex-col items-center justify-center w-full md:w-3/4">
              <BlurredText className="text-4xl md:text-5xl lg:text-[68px] !leading-tight">
                A Full-Day AI Experience. Zero Fluff. All Impact.
              </BlurredText>
              <p className="mt-6 text-xl text-center md:text-2xl lg:text-[28px] font-semibold">
                An exclusive in-person event by FlivoAI
              </p>
              <div className="flex flex-col md:flex-row items-center gap-4 mt-4 text-lg md:text-xl font-semibold text-slate-300">
                <span>September 14, 2025</span>
                <div className="hidden md:block w-px h-5 bg-slate-50" />
                <span>Marina Bay Sands Expo</span>
              </div>
            </div>
          </InfoCard>
        </div>

        {/* --- Bottom Two Boxes Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* --- Event Description Section (Takes 3 columns on desktop) --- */}
          <div className="lg:col-span-3">
            <InfoCard 
              style={{ 
                backgroundImage: `url(${AgendaBottom})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                minHeight: '422px'
              }} 
              className="h-full !p-0 relative"
            >
              {/* Decorative Element - positioned at the very left edge */}
              <div className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 z-10">
                <div 
                  className="w-24 !h-50 lg:w-[90px] !lg:h-[270px]  rounded-lg" 
                  style={{ backgroundImage: `url(${LogoLeft})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                </div>
              </div>
              {/* Description Text */}
              <div className="flex flex-col justify-center w-full h-full gap-6 p-8 md:p-12 md:pl-32">
                <p className="text-xl font-medium md:text-2xl lg:text-[28px] !leading-relaxed">
                  Explore the agenda for the Enterprise AI Summit 2025, Singapore, designed for business leaders, AI experts and transformation strategists. Every session is built around the real-world application of GenAI, LLMs, and intelligent automation.
                </p>
                <p className="text-xl font-bold md:text-2xl lg:text-[28px]">
                  This is a fully in-person event. Arrive ready to connect, learn and lead.
                </p>
              </div>
            </InfoCard>
          </div>

          {/* --- Venue Info Section (Takes 1 column on desktop) --- */}
          <div className="lg:col-span-1">
            <InfoCard 
              style={{ 
                backgroundImage: `url(${AgendaRight})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center',
                minHeight: '422px'
              }} 
              className="items-center justify-center text-center h-full"
            >
              <div className="relative flex flex-col items-center justify-center w-full h-full min-h-[350px]">
                {/* Decorative Element - positioned absolutely within the card */}
                <div 
                  className="absolute right-[-12px] top-[-1.1rem] w-20 h-32 lg:w-[100px] lg:h-[175px] opacity-80 rounded-lg flex items-center justify-center text-sm"
                  style={{ 
                    backgroundImage: `url(${Logo})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center' 
                  }}
                >
                </div>
                
                {/* Content positioned at bottom */}
                <div className="mt-auto mb-8">
                  <h3 className="text-2xl font-bold lg:text-3xl">Marina Bay Sands Expo</h3>
                  <p className="mt-2 text-base font-medium lg:text-lg">
                    <br/> Singapore
                  </p>
                </div>
              </div>
            </InfoCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgendaInfo;