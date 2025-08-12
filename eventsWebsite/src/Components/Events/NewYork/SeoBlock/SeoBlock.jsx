import React from 'react';
import BackgroundImage from '../../../../assets/Backgrounds/AgendaBackground.jpg'; // Mock import for background image
import LeftDeco from '../../../../assets/Backgrounds/AgendaLeft.png'; // Mock import for background image
import RightDeco from '../../../../assets/Backgrounds/AgendaRightInfo.png'; // Mock import for background image
// Mock imports for assets - replace with your actual paths


/**
 * A fully responsive component for the Enterprise AI Summit section.
 * It uses a mobile-first approach with a CSS grid that adapts to different screen sizes.
 */
const SeoBlock = () => {
  return (
    <section 
      className="relative w-full min-h-screen bg-black bg-cover bg-center text-slate-50 font-sans p-4 sm:p-8 lg:p-12 flex items-center justify-center"
      style={{ backgroundImage: `url(${BackgroundImage})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/70" aria-hidden="true"></div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content (takes up 2 columns on large screens) */}
          <div 
            className="lg:col-span-2 border border-slate-50/50 p-6 sm:p-10 rounded-2xl relative overflow-hidden"
            style={{ background: `url(${LeftDeco})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            {/* Decorative Element (visible on large screens) */}
            <img 
              src={LeftDeco} 
              alt="AI decoration" 
              className="hidden lg:block absolute -top-8 -left-12 w-28 opacity-60"
            />
            
            <div className="relative z-10"  >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold !leading-tight">
                Enterprise AI Summit 2025
                <br />
                <span className="text-blue-400">Revealing Untapped $3 Trillion</span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-slate-200 font-medium leading-relaxed max-w-3xl">
                The Enterprise AI Summit 2025 is not just another tech event; it's a boardroom-grade briefing on the next $3 trillion wave of enterprise value powered by artificial intelligence. From Fortune 500 transformation stories to frontier use cases in GenAI, LLM integration, and decision automation, this summit brings actionable strategy to the frontlines of enterprise AI adoption.
                <br /><br />
                Hosted by FlivoAI at the Javits Center on August 31st, this global campaign kickoff will feature C-suite voices, enterprise AI innovators, and frameworks for capturing real business impact. Whether you lead digital transformation or architect AI solutions, this is where tomorrow's enterprise AI playbook begins.
              </p>
            </div>
          </div>

          {/* Right Sidebar (takes up 1 column on large screens) */}
          <div 
            className="border border-slate-50/50 p-6 sm:p-8 rounded-2xl flex flex-col justify-between relative overflow-hidden"
            style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7))' }}
          >
            {/* Decorative Element */}
            <img 
              src={RightDeco} 
              alt="Venue decoration" 
              className="hidden lg:block absolute -top-4 right-4 w-24 opacity-60"
            />
            
            {/* Spacer to push content to the bottom */}
            <div className="flex-grow"></div>

            {/* Location Details */}
            <div className="text-left relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold">
                Javits Center, New York City
              </h2>
              <p className="mt-1 text-base sm:text-lg text-slate-300 font-medium">
                Javits Center
                <br/>
                New York City, New York
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeoBlock;