import React from 'react';
import { Link } from 'react-router-dom';
// Asset Imports
// NOTE: Ensure these paths correctly point to your image files.
import AndrewNgImage from '../../../../assets/Backgrounds/Andrew.png';
import FeiFeiLiImage from '../../../../assets/Backgrounds/Fei Fei Lie.png';
import KateDarlingImage from '../../../../assets/Backgrounds/kate.png';

import bottomImg from '../../../../assets/Backgrounds/SpeakersSectionBottom.png';
import leftImg from '../../../../assets/Backgrounds/leftImageS.png';
import topImg from '../../../../assets/Backgrounds/topImageS.png';
import rightImg from '../../../../assets/Backgrounds/rightImageS.png';

const FeaturedSpeakers = () => {
  const speakers = [
    {
      name: "Andrew Ng",
      title: "Founder",
      organization: "DeepLearning.AI & Coursera",
      image: AndrewNgImage,
    },
    {
      name: "Fei-Fei Li",
      title: "Co-Director",
      organization: "Stanford Human-Centered AI Institute",
      image: FeiFeiLiImage,
    },
    {
      name: "Kate Darling",
      title: "Research Scientist",
      organization: "MIT Media Lab",
      image: KateDarlingImage,
    },
  ];

  return (
    <div 
      className="relative min-h-screen w-full flex flex-col items-center justify-center  bg-cover bg-center p-8 text-white"
    >
      {/* Semi-transparent overlay */}
      <div className="bg-black bg-opacity-50 absolute inset-0 z-0"></div>

      {/* Decorative Corner & Side Images */}
      <img src={topImg} alt="Top Decoration" className="absolute top-0 left-0 w-full z-10" />
      <img src={bottomImg} alt="Bottom Decoration" className="absolute bottom-0 left-0 w-full z-10" />
      <img src={leftImg} alt="Left Decoration" className="absolute top-0 left-0 h-full z-10" />
      <img src={rightImg} alt="Right Decoration" className="absolute top-0 right-0 h-full z-10" />
      
      {/* Main Content Container */}
      <div className="relative z-20 flex flex-col items-center w-full">
        
        {/* Title */}
        <h1 className="text-5xl font-bold tracking-wider mb-20">
          Featured Speakers
        </h1>

        {/* Speaker Cards Container */}
        <div className="flex flex-col md:flex-row gap-20 lg:gap-28">
          {speakers.map((speaker, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              
              {/* Image Container with Circles and Text Overlay */}
              <div className="relative w-64 h-64 flex items-center justify-center">
                {/* Concentric Circles behind the image */}
                <div className="absolute w-full h-full rounded-full border border-white/20"></div>
                <div className="absolute w-[85%] h-[85%] rounded-full border border-white/20"></div>
                <div className="absolute w-[70%] h-[70%] rounded-full border border-white/20"></div>
                
                {/* MODIFICATION: Container for Image + Text Overlay */}
                <div className="relative w-[250px] h-[250px] overflow-hidden">
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-full object-cover"
                  />

                  {/* Text Overlay with Gradient */}
                  <div className="absolute inset-0 flex flex-col justify-end p-4 text-center bg-gradient-to-t from-black/80 to-transparent">
                    <h2 className="text-xl font-semibold">{speaker.name}</h2>
                    <p className="text-sm text-gray-200">{speaker.title}</p>
                    <p className="text-sm text-gray-200">{speaker.organization}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Speakers Button */}
        <button 
          className="mt-24 px-8 py-3 bg-blue-600 text-white text-xl font-semibold rounded-lg shadow-lg shadow-blue-500/50 transition-transform hover:scale-105"
        >
          <Link to="/sanfrancisco/speakers">Explore Speakers</Link>
        </button>
      </div>
    </div>
  );
};

export default FeaturedSpeakers;