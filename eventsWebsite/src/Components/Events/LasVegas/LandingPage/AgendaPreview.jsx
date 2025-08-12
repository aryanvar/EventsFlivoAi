import React from 'react';
import BackgroundImg from '../../../../assets/Backgrounds/AgendaBackground.jpg';
import LeftImg from '../../../../assets/Backgrounds/leftAgenda.png';
import RightImg from '../../../../assets/Backgrounds/rightAgenda.png';
import FirstImg from '../../../../assets/Backgrounds/FirstImg.png';
import SecImg from '../../../../assets/Backgrounds/SecImg.png';
import ThirdImg from '../../../../assets/Backgrounds/ThordImg.png';
import FourthImg from '../../../../assets/Backgrounds/FouthImg.png';
import {Link} from 'react-router-dom';
// Data for the agenda
const agendaColumns = [
  { // Column 1
    cards: [
      { type: 'tag', label: 'Panel', size: 'short' , image: FirstImg },
      { type: 'title', label: 'AI in the Boardroom – Driving $3 Trillion in Value', size: 'tall' , image: SecImg },
    ]
  },
  { // Column 2
    cards: [
      { type: 'title', label: 'Prompt Engineering for Enterprise Workflows', size: 'tall' , image: ThirdImg },
      { type: 'tag', label: 'Workshop', size: 'short' , image: FirstImg },
    ]
  },
  { // Column 3
    cards: [
      { type: 'tag', label: 'Keynote', size: 'short' , image: FirstImg },
      { type: 'title', label: 'Deep Learning to Deployment – Scaling GenAI Across the Enterprise', size: 'tall' , image: FourthImg },
    ]
  }
];

const AgendaCard = ({ type, label, size, image }) => {
  // Mobile-optimized heights - smaller on mobile, larger on desktop
  const cardHeight = size === 'short' 
    ? 'h-48 sm:h-56 md:h-64' 
    : 'h-80 sm:h-96 md:h-[32rem]';
  
  const content = type === 'tag' 
    ? <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">{label}</span>
    : <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{label}</h3>;
  
  // Responsive positioning and padding
  const contentPosition = type === 'tag' 
    ? 'absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8' 
    : 'absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 max-w-[90%]';

  const cardStyle = {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div 
      className={`relative w-full ${cardHeight} p-4 sm:p-6 md:p-8 border border-white/20 overflow-hidden hover:cursor-pointer transition-transform hover:scale-[1.02]`}
      style={cardStyle}
    >
      <div className={contentPosition}>
        {content}
      </div>
    </div>
  );
};

export default function AgendaPreview() {
  return (
    <div 
      className="hidden sm:block relative bg-[#0f0f0f] text-slate-100 font-sans py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col" 
      style={{ 
        backgroundImage: `url(${BackgroundImg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed' // This might cause issues on some mobile browsers
      }}
    >
      
      {/* Hide decorative images on mobile to reduce clutter */}
      <img 
        src={LeftImg} 
        alt="Left Decorative Element" 
        className="hidden lg:block absolute left-0 top-1/2 w-[20%] h-[80%] transform -translate-y-1/2 z-0" 
      />
      <img 
        src={RightImg} 
        alt="Right Decorative Element" 
        className="hidden lg:block absolute right-0 top-1/2 w-[20%] h-[80%] transform -translate-y-1/2 z-0" 
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col items-center w-full flex-grow">

        {/* Responsive heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-8 sm:mb-12 md:mb-16 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent px-2">
          Agenda Preview Highlights
        </h2>
        
        {/* Grid that stacks on mobile */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {agendaColumns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-col gap-4 sm:gap-6">
              {column.cards.map((card, cardIndex) => (
                <AgendaCard key={cardIndex} {...card} />
              ))}
            </div>
          ))}
        </div>
        
        {/* Responsive button */}
        <button className="mt-8 sm:mt-12 md:mt-16 font-roboto text-lg sm:text-xl md:text-2xl font-bold text-white bg-gradient-to-r from-blue-500 to-blue-700 py-3 px-6 sm:py-4 sm:px-8 rounded-lg transition-transform hover:scale-105 shadow-[0_0_24px_rgba(59,130,246,0.5)] w-full max-w-xs sm:max-w-none sm:w-auto">
          <Link to="/las-vegas/agenda">Explore Event Agenda</Link>
        </button>

      </div>
    </div>
  );
}