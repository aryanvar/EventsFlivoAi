import React, { useState } from 'react';
import Background from '../../../../assets/Backgrounds/MainBackgroundSpeakers.png';
import Adreao from '../../../../assets/Backgrounds/AndreaIorio.png';
import JoannC from '../../../../assets/Backgrounds/JoannC.png';
import JhonNosta from '../../../../assets/Backgrounds/JohnNosta.png';
import AndrewNg from '../../../../assets/Backgrounds/AndrewNg.jpg';
import DemisHassabis from '../../../../assets/Backgrounds/DemisHassabis.png';
import KateDarling from '../../../../assets/Backgrounds/KateDarling.png';
import ChrisWest from '../../../../assets/Backgrounds/ChrisWest.png';
import FeiFeiLi from '../../../../assets/Backgrounds/FeiFeiLie.png';
import Logo from '../../../../assets/Backgrounds/Logo.png';

export default function TestimonialSection() {
  const [animationPlayState, setAnimationPlayState] = useState('running');

  const speakers = [
    {
      name: "JoAnn C. Stonier",
      title: "Chief Data Officer, Mastercard",
      quote: "If we can't trust the data or the algorithm, we can't trust the outcome.",
      avatar: { src: JoannC, alt: "JoAnn C. Stonier" }
    },
    {
      name: "John Nosta",
      title: "Futurist & Founder NostaLab",
      quote: "AI in healthcare won't just make us better, it will make us rethink what 'better' even means.",
      avatar: { src: JhonNosta, alt: "John Nosta" }
    },
    {
      name: "Andrew Ng",
      title: "Founder DeepLearning.AI",
      quote: "AI is the new electricity. It will transform every industry.",
      avatar: { src: AndrewNg, alt: "Andrew Ng" }
    },
    {
      name: "Demis Hassabis",
      title: "CEO & Co-Founder, DeepMind",
      quote: "Our goal is to solve intelligence and use it to solve everything else.",
      avatar: { src: DemisHassabis, alt: "Demis Hassabis" }
    },
    {
      name: "Dr. Kate Darling",
      title: "Research Scientist, MIT Media Lab",
      quote: "How we treat machines is going to shape how we treat each other.",
      avatar: { src: KateDarling, alt: "Dr. Kate Darling" }
    }
  ];

  const QuoteIcon = () => (
    <svg 
      className="w-8 h-8 text-white/60" 
      viewBox="0 0 24 24" 
      fill="currentColor"
    >
      <path d="M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z" />
    </svg>
  );

  const TestimonialCard = ({ speaker }) => (
    <div className="bg-transparent backdrop-blur-lg rounded-[20px] border border-slate-50 shrink-0 w-[514.75px] h-[200px] relative overflow-hidden mx-[17.5px]">
      {/* Speaker avatar with rings */}
      <div className="w-[39.41px] h-[39.41px] absolute left-[177.35px] top-[115.01px]">
        <div className="bg-gray-100 rounded-full w-[39.41px] h-[39.41px] absolute left-0 top-0"></div>
        <div className="bg-black rounded-full w-[37.08px] h-[37.08px] absolute left-[2.33px] top-[2.33px]"></div>
        <div className="rounded-full w-[33.84px] h-[33.84px] absolute left-[5.57px] top-[4.15px] overflow-hidden">
          <img 
            src={speaker.avatar.src} 
            alt={speaker.avatar.alt}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Quote text */}
      <div 
        className="text-white text-left font-light absolute left-[214.75px] top-[44.24px] w-[280px] flex items-start justify-start"
        style={{ 
          fontFamily: "'Montserrat', sans-serif", 
          fontSize: "16.09px", 
          lineHeight: "22px" 
        }}
      >
        {speaker.quote}
      </div>

      {/* Speaker title */}
      <div 
        className="text-white text-left font-normal absolute left-[222.79px] top-[130.7px] w-[250px] h-[21.31px] flex items-center justify-start text-[16px] leading-[9.95px]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {speaker.title}
      </div>

      {/* Speaker name */}
      <div 
        className="text-white text-left font-bold absolute left-[222.79px] top-[119.84px] w-[200px] h-[8.45px] flex items-center justify-start text-[16px] leading-[8.24px]"
        style={{ fontFamily: "'Montserrat', sans-serif" }}
      >
        {speaker.name}
      </div>

      {/* Quote icon */}
      <div className="absolute left-[180px] top-[45px]">
        <QuoteIcon />
      </div>

      {/* Conference branding */}
      <div 
        className="text-white text-left font-normal absolute left-[16.28px] top-[46.25px] w-[113.81px] flex items-center justify-start"
        style={{ 
          fontFamily: "'Montserrat', sans-serif", 
          fontSize: "21.72px", 
          lineHeight: "22.8px",
          letterSpacing: "-0.43px"
        }}
      >
        Enterprise AI Summit 2025
      </div>

      {/* Vertical line separator */}
      <div 
        className="border-solid border-gray-300 border-t-[0.4px] w-[109.79px] h-0 absolute left-[142.76px] top-[30.56px]"
        style={{
          transformOrigin: "0 0",
          transform: "rotate(90deg) scale(1, 1)"
        }}
      ></div>

      {/* Decorative element */}
      <div className="w-[50px] h-[80px] absolute right-[0px] top-[-18.1px]">
        <div className="w-full h-full bg-center rounded-lg " style={{ backgroundImage: `url(${Logo})`, backgroundSize: 'cover' }}></div>
      </div>
    </div>
  );

  return (
    <div 
      className="h-[371px] relative bg-cover bg-center overflow-hidden" 
      style={{ backgroundImage: `url(${Background})` }}
    >
      {/* Overlay */}
      <div 
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)' // Adjust opacity and color here
        }}
      />

      {/* Continuous scrolling container */}
      <div 
        className="w-full h-[200px] absolute left-0 top-[94px] overflow-hidden"
        onMouseEnter={() => setAnimationPlayState('paused')}
        onMouseLeave={() => setAnimationPlayState('running')}
      >
        <div className="flex items-center h-full">
          {/* First set of testimonials */}
          <div 
            className="flex items-center h-full animate-scroll"
            style={{
              animationPlayState: animationPlayState
            }}
          >
            {speakers.map((speaker, index) => (
              <TestimonialCard key={`set1-${index}`} speaker={speaker} />
            ))}
            {speakers.map((speaker, index) => (
              <TestimonialCard key={`set2-${index}`} speaker={speaker} />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-${(514.75 + 35) * speakers.length}px));
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </div>
  );
}
