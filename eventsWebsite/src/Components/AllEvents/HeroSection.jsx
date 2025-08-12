import React from "react";
import BackgroundVideo from "../../assets/Backgrounds/flivo-bg-final-video.mp4"; 
const CustomAnimationStyles = () => (
  <style>
    {`
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }

      @keyframes pulse-overlay {
        0% {
          opacity: 0.7;
        }
        100% {
          opacity: 0.95;
        }
      }
      
      /* Using a class is more reusable than applying animation directly */
      .animate-fadeInUp {
        animation: fadeInUp 1s ease-out backwards;
      }
      
      .animate-pulse-overlay-custom {
          animation: pulse-overlay 6s infinite alternate;
      }
    `}
  </style>
);

const HeroSection = () => {
  return (
    <>
    <CustomAnimationStyles />
      <section
        aria-label="FlivoAI Global Events Hero Section"
        className="relative h-screen flex items-center justify-center overflow-hidden text-white pt-16 sm:pt-16"
      >
        {/* Background Video: Added `preload="auto"` to hint the browser to load it sooner. */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          autoPlay
          muted
          loop
          preload="auto"
          poster="https://via.placeholder.com/1200x800?text=AI+Community"
        >
          <source
            src={BackgroundVideo}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Gradient Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black/50 to-zinc-900/60 z-10 animate-pulse-overlay-custom"></div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 py-8 sm:p-8 max-w-full mx-auto">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[82px] font-bold leading-tight mb-3 sm:mb-4 animate-fadeInUp">
            FlivoAI Global Events <br className="hidden xs:block" /> <br />
            <span className="xs:hidden"> </span>
            Ignite Your Innovation
          </h1>
          <h2
            className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-bold mt-3 mb-6 sm:mt-4 sm:mb-8 animate-fadeInUp px-2 sm:px-0"
            // OPTIMIZATION: While inline styles are okay for unique values, for a real app
            // you might add `animation-delay` utilities to your tailwind.config.js
            style={{ animationDelay: "0.2s" }}
          >
            Explore the future of AI with our exclusive global sessions and
            summits.
          </h2>
          <p
            className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-gray-200 leading-relaxed w-full m-0 animate-fadeInUp px-2 sm:px-0 mb-6 sm:mb-0"
            style={{ animationDelay: "0.4s" }}
          >
            Flivo AI presents a handpicked list of the world's most exciting AI
            events, aimed at informing and inspiring you. From educational
            workshops on neural networks and machine learning to interactive
            hackathons and conferences conducted by experts, our events unite
            innovators, developers, and enthusiasts to chart the future course
            of artificial intelligence. Join us to discover new developments,
            collaborate with industry masters, and explore new possibilities in
            the AI environment.
          </p>
          <button
            className="mt-6 sm:mt-8 py-3 px-6 sm:py-4 sm:px-8 bg-white text-black rounded-lg text-lg sm:text-xl font-medium shadow-[0px_6px_12px_0px_rgba(0,0,0,0.25)] hover:bg-gradient-to-r hover:from-sky-400 hover:to-blue-600 hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 animate-fadeInUp"
            style={{ animationDelay: "0.6s" }}
          >
            Get Event Updates
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;