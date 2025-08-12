import React from 'react';

import Adreao from '../../../../assets/Backgrounds/AndreaIorio.png';
import JoannC from '../../../../assets/Backgrounds/JoannC.png';
import JhonNosta from '../../../../assets/Backgrounds/JohnNosta.png';
import AndrewNg from '../../../../assets/Backgrounds/AndrewNg.jpg';
import DemisHassabis from '../../../../assets/Backgrounds/DemisHassabis.png';
import KateDarling from '../../../../assets/Backgrounds/KateDarling.png';
import ChrisWest from '../../../../assets/Backgrounds/ChrisWest.png';
import FeiFeiLi from '../../../../assets/Backgrounds/FeiFeiLie.png';
import Logo from '../../../../assets/Backgrounds/Logo.png';
// A cleaner, more semantic data structure. All styling props are removed.
const speakers = [
  {
    name: "Andrea Iorio",
    sessionTitle: "Prompt Engineering for Enterprise Workflows",
    description: "A globally recognized voice in digital transformation, Andrea Iorio has delivered over 100 keynotes annually across leadership, innovation and AI. With a background in behavioral economics and a career spanning roles at Tinder and L'Oréal, Andrea focuses on how technology intersects with human decision-making in the enterprise world.",
    roles: [
      { text: "Former Head of Tinder Brazil" },
      { prefix: 'Host of "', highlight: "The C-LEVEL", suffix: '" Podcast' }
    ],
    labels: ["Author", "Speaker"],
    decorativeImage: Logo,
    profileImage: Adreao
  },
  {
    name: "JoAnn C. Stonier",
    sessionTitle: "AI in the Boardroom: Driving $3 Trillion in Value",
    description: "JoAnn C. Stonier is a global leader in data strategy, responsible AI and digital trust. As Chief Data Officer at Mastercard, she shapes enterprise-wide governance frameworks that ensure ethical AI deployment and responsible data use. JoAnn also serves on global advisory boards and UN AI working groups, championing transparency and human-centric innovation.",
    roles: [
      { prefix: "Chief Data Officer-", highlight: "Mastercard" }
    ],
    labels: [], // No labels for this speaker
    decorativeImage: Logo,
    profileImage: JoannC
  },
  {
    name: "John Nosta",
    sessionTitle: "AI + Health = Futureproof",
    description: "John Nosta is one of the world's leading thinkers in the intersection of health, technology and innovation. As founder of NostaLab and a Google Health Advisory Board member, he's a trusted voice on how AI is reshaping healthcare, diagnostics and human performance. His insights have been featured in Forbes, Fortune and TEDx stages around the world.",
    roles: [
      { text: "Innovation Theorist" },
      { prefix: "Futurist & Founder-", highlight: "NostaLab" }
    ],
    labels: [],
    decorativeImage: Logo,
    profileImage: JhonNosta
  },
  {
    name: "Andrew Ng",
    sessionTitle: "Deep Learning, Real Impact: From MVPs to Billion Dollar Ops",
    description: "Andrew Ng is one of the world's most influential figures in artificial intelligence. As founder of DeepLearning.AI and co-founder of Coursera, he has shaped how millions learn and apply AI across industries. A former Chief Scientist at Baidu and founding lead of Google Brain, Andrew's work continues to define the enterprise AI landscape from education to deployment at scale.",
    roles: [
      { prefix: "Founder-", highlight: "DeepLearning.AI" },
      { prefix: "Co-Founder-", highlight: "Coursera" },
      { prefix: "General Partner-", highlight: "AI Fund" }
    ],
    labels: [],
    decorativeImage:Logo,
    profileImage: AndrewNg
  },
  {
    name: "Demis Hassabis",
    sessionTitle: "AGI or Hype? Inside DeepMind's Long Game",
    description: "Demis Hassabis is a world-renowned neuroscientist, AI pioneer and co-founder of DeepMind, one of the most advanced artificial intelligence labs globally. Under his leadership, DeepMind developed AlphaGo and AlphaFold, redefining what's possible in AI. He now leads Google DeepMind's efforts toward responsible AGI.",
    roles: [
      { prefix: "CEO & Co-Founder-", highlight: "DeepMind" },
      { prefix: "VP of Research-", highlight: "Google DeepMind" }
    ],
    labels: ["Author", "Speaker"],
    decorativeImage: Logo,
    profileImage: DemisHassabis
  },
  {
    name: "Dr. Kate Darling",
    sessionTitle: "The Trust Factor: Ethics, Data & Responsible AI",
    description: "Dr. Kate Darling is a renowned expert on the social, legal and ethical implications of artificial intelligence and robotics. As a research scientist at the MIT Media Lab, she explores how emerging technologies reshape human-machine interaction. Her work bridges policy, ethics and design, challenging enterprises to think critically about how they build and deploy intelligent systems.",
    roles: [
      { prefix: "Research Scientist-", highlight: "MIT Media Lab" },
      { text: "Leading Expert in Robot Ethics & Policy" }
    ],
    labels: [],
    decorativeImage: Logo,
    profileImage: KateDarling
  },
  {
    name: "Chris West",
    sessionTitle: "Founders in AI: Building the Next Unicorn",
    description: "Chris West is a startup advisor, investor and global speaker focused on emerging technologies and high-growth AI ventures. As founding partner at West Advisory, he mentors founders on scaling with integrity, clarity and customer alignment. With years of experience guiding early-stage companies to breakthrough moments, Chris is a sought-after voice on AI, leadership and purpose-driven innovation.",
    roles: [
      { text: "AI Startup Advisor" },
      { text: "Global Speaker" },
      { prefix: "Founding Partner-", highlight: "West Advisory" }
    ],
    labels: [],
    decorativeImage: Logo,
    profileImage: ChrisWest
  },
  {
    name: "Dr. Fei-Fei Li",
    sessionTitle: "AI in the Boardroom: Driving $3 Trillion in Value",
    description: "Dr. Fei-Fei Li is a globally renowned AI scientist, educator and advocate for responsible, human-centered technology. As Co-Director of Stanford's HAI Institute and former Chief Scientist of AI at Google Cloud, her work in computer vision and machine learning has influenced everything from academic research to enterprise AI strategy. She's a trailblazer shaping the ethical foundations of the AI age.",
    roles: [
      { lines: ["Co-Director", "Stanford Human-Centered AI Institute"] },
      { prefix: "Professor-", highlight: "Stanford University" }
    ],
    labels: [],
    decorativeImage: Logo,
    profileImage: FeiFeiLi
  }
];


/**
 * SpeakerCard Component
 * A responsive card that displays speaker and session information.
 * It uses Flexbox for a fluid layout.
 */
const SpeakerCard = ({ speaker }) => {
  return (
    // Main card container: stacks vertically on mobile, row on large screens
    <div className="flex flex-col lg:flex-row gap-8 w-full text-slate-50">
      
      {/* Left Side: Session Info */}
      <div className="flex flex-col gap-6 w-full lg:w-[300px] flex-shrink-0">
        {/* Session Label */}
        <div className="bg-[#313131] border border-slate-50 p-4 h-[111px] flex items-center justify-center shadow-lg">
          <h3 className="text-4xl font-bold">Session</h3>
        </div>
        
        {/* Session Title */}
        <div className="bg-[#313131] border border-slate-50 p-6 flex-grow flex items-center shadow-lg min-h-[200px]">
          <h4 className="text-3xl font-bold">{speaker.sessionTitle}</h4>
        </div>
      </div>

      {/* Right Side: Speaker Info */}
      <div className="border border-slate-50 rounded-2xl p-6 md:p-10 flex-grow relative flex flex-col gap-6 overflow-hidden">
        
        {/* Top Section: Profile Image, Name, and Roles */}
        <div className="flex flex-col md:flex-row items-start gap-6">
          {/* Profile circle - now contains an actual image */}
          <div className="rounded-full border-4 border-slate-50 w-36 h-36 md:w-48 md:h-48 flex-shrink-0 bg-gray-700">
             {/* Use an actual image tag for accessibility and semantics */}
            <img src={speaker.profileImage} alt={speaker.name} className="w-full h-full object-cover rounded-full" />
          </div>

          {/* Name, Labels, and Roles Container */}
          <div className="flex flex-col gap-4 pt-2">
            <h2 className="text-4xl font-semibold">{speaker.name}</h2>
            
            {/* Labels (e.g., Author, Speaker) */}
            {speaker.labels && (
              <div className="flex items-center gap-3 text-xl font-medium">
                {speaker.labels.map((label, index) => (
                  <React.Fragment key={label}>
                    <span>{label}</span>
                    {/* Add a separator between labels */}
                    {index < speaker.labels.length - 1 && (
                      <div className="w-px h-5 bg-slate-50"></div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}
            
            {/* Roles */}
            <div className="flex flex-col gap-2 text-xl">
              {speaker.roles.map((role, index) => (
                <div key={index}>
                  {role.text ? (
                    <span>{role.text}</span>
                  ) : role.lines ? (
                     <div>
                       {role.lines.map(line => <span key={line} className="block">{line}</span>)}
                     </div>
                  ) : (
                    <span>
                      {role.prefix && <span>{role.prefix}</span>}
                      {role.highlight && <span className="font-semibold">{role.highlight}</span>}
                      {role.suffix && <span>{role.suffix}</span>}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Description */}
        <p className="text-xl font-medium leading-relaxed">
          {speaker.description}
        </p>

        {/* Decorative SVG - remains absolute but positioned relative to the card */}
        <img
          src={speaker.decorativeImage}
          alt=""
          className="w-32 h-auto absolute -top-8 -right-4 hidden lg:block"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};


/**
 * SpeakersSection Component
 * The main section that lays out the speakers list.
 */
const SpeakersSection = () => {
  return (
    // Use padding for spacing and let the page scroll naturally
    <div className="bg-black w-full min-h-screen text-slate-50 py-16 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title - Centered and simplified */}
        <h1 className="text-5xl md:text-6xl font-semibold text-center mb-16">
          Speakers
        </h1>
        
        {/* Speakers List Container - A simple flex column with gap */}
        <div className="flex flex-col items-center gap-16">
          {speakers.map((speaker) => (
            // The key should be a unique identifier from the data
            <SpeakerCard key={speaker.name} speaker={speaker} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default SpeakersSection;