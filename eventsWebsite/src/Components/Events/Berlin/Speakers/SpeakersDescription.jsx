import React from 'react';

// You'll need to replace these with your actual image imports
import PascalBornet from '../../../../assets/Backgrounds/TorontoImages/PascalBornet.png';
import AllieKMiller from '../../../../assets/Backgrounds/TorontoImages/AllieKMiller.png';
import CassieKozyrkov from '../../../../assets/Backgrounds/TorontoImages/CassieKozyrkov.png';
import RamaAkkiraju from '../../../../assets/Backgrounds/TorontoImages/RamaAkkiraju.png';
import SineadBovell from '../../../../assets/Backgrounds/TorontoImages/SineadBovell.png';
import JonathanBrill from '../../../../assets/Backgrounds/TorontoImages/JonathanBrill.png';
import DrRummanChowdhury from '../../../../assets/Backgrounds/TorontoImages/DrRummanChowdhury.png';
import RonaldVanLoon from '../../../../assets/Backgrounds/TorontoImages/RonaldVanLoon.png';
import Logo from '../../../../assets/Backgrounds/Logo.png';

// Updated speakers data based on the images provided
const speakers = [
  {
    name: "Pascal Bornet",
    sessionTitle: "Beyond Automation: Intelligent Agents in Action",
    description: "Pascal Bornet is a globally recognized authority on intelligent automation and human-centric AI. With 20+ years of leadership at McKinsey and EY, he helped shape global automation practices and led hundreds of enterprise transformations worldwide. As the bestselling author of Intelligent Automation and Agentic Artificial Intelligence, Pascal's work explores how AI can elevate, not replace human potential. A frequent keynote speaker and lecturer, his insights appear in Forbes, Bloomberg and the Financial Times.",
    roles: [
      { text: "Board Advisor | Author" },
      { text: "Forbes Tech Council" },
      { text: "AI & Automation Pioneer & Global Keynote Speaker" }
    ],
    labels: ["Author", "Speaker"],
    decorativeImage: Logo,
    profileImage: PascalBornet
  },
  {
    name: "Allie K. Miller",
    sessionTitle: "Trust, Bias & the Human Touch in AI Agents",
    description: "Allie K. Miller is one of the most influential voices in the AI business, advising organizations like OpenAI, Salesforce, Google and Samsung on enterprise AI transformation. A former AI leader at Amazon and IBM, she's known for launching pioneering programs, including AWS's global ML startup business and IBM's first multimodal AI team. With deep expertise across ML, product strategy and venture ecosystems, Allie also teaches AI on MasterClass and has been featured in Forbes, WSJ and Fortune.",
    roles: [
      { text: "Global AI Advisor & Former AWS AI/ML Leader" },
      { text: "Angel Investor & Author" },
      { text: "MasterClass Instructor" }
    ],
    labels: ["Speaker", "Advisor"],
    decorativeImage: Logo,
    profileImage: AllieKMiller
  },
  {
    name: "Cassie Kozyrkov",
    sessionTitle: "Strategic Decisioning with Intelligent Agents & Designing AI Agents for Human-Centered Impact",
    description: "Cassie Kozyrkov is the founder of Decision Intelligence and one of the most trusted voices in AI strategy. As Google's former Chief Decision Scientist, she helped over 500 organizations make data-driven practices and personally trained 20,000 Googlers in AI, analytics and high-stakes decision-making. Now CEO of Data Scientific, Cassie advises global organizations like NASA, Oxford and Lenovo on building AI systems that empower human judgment. With a half-million subscribers across channels, she blends technical depth with humor and clarity.",
    roles: [
      { text: "Founder-Decision Intelligence" },
      { text: "CEO-Data Scientific" },
      { text: "Former Chief Decision Scientist-Google" }
    ],
    labels: ["Founder", "CEO"],
    decorativeImage: Logo,
    profileImage: CassieKozyrkov
  },
  {
    name: "Rama Akkiraju",
    sessionTitle: "Strategic Decisioning with Intelligent Agents & the Rise of Empathetic Agents",
    description: "Rama Akkiraju is one of the world's most accomplished AI innovators, known for delivering enterprise-grade AI solutions at scale. A former IBM Fellow and CTO of Watson AI Ops, she led teams of 600+ engineers to build self-healing IT systems, advanced NLU platforms, and emotion-aware AI services that served billions of API calls globally. With over 75 patents, 100+ publications and multiple global awards, Rama's work spans natural language processing, enterprise AI architecture and human-machine collaboration.",
    roles: [
      { text: "AI Executive" },
      { text: "Former IBM Fellow" },
      { text: "Award-Winning Product & Engineering Leader" }
    ],
    labels: ["Executive", "Engineer"],
    decorativeImage: Logo,
    profileImage: RamaAkkiraju
  },
  {
    name: "Sinead Bovell",
    sessionTitle: "Strategic Decisioning with Intelligent Agents",
    description: "Sinead Bovell is a futurist and leading voice on the societal impact of artificial intelligence. As the founder of WAVE, she prepares leaders and organizations for a future shaped by emerging technologies. She advises Fortune 500 executives, governments and UN bodies on AI policy, national security, and education reform. An 11-time United Nations speaker and SXSW headliner, Sinead is known for making complex tech accessible to global audiences. Her insights on AI and the future of work have reached 17,000+ policymakers and educators worldwide.",
    roles: [
      { text: "Global Tech Educator" },
      { text: "Futurist & Founder-WAVE" },
      { text: "UN AI Advisor" }
    ],
    labels: ["Futurist", "Founder"],
    decorativeImage: Logo,
    profileImage: SineadBovell
  },
  {
    name: "Jonathan Brill",
    sessionTitle: "AI Agents for Resilience & Strategic Foresight",
    description: "Jonathan Brill is ranked the world's #1 futurist by Forbes and is widely regarded as a leader on innovation strategy and transformation. Formerly Global Futurist at HP and a trusted advisor to Fortune 50 giants, Jonathan helps executives and governments anticipate disruption, leverage AI and build future-ready organizations. His bestselling book Rogue Waves is considered essential reading on navigating complex change.",
    roles: [
      { text: "#1 Futurist, Forbes" },
      { text: "Author-Rogue Waves" },
      { text: "Transformation Architect" },
      { text: "Former Global Futurist-HP" }
    ],
    labels: ["Futurist", "Author"],
    decorativeImage: Logo,
    profileImage: JonathanBrill
  },
  {
    name: "Dr. Rumman Chowdhury",
    sessionTitle: "Trust, Bias & the Human Touch in AI Agents",
    description: "Dr. Rumman Chowdhury is a leading voice in responsible AI, with deep expertise in algorithmic fairness, governance and transparency. As CEO of Humane Intelligence and a Responsible AI Fellow at Harvard's Berkman Klein Center, she develops open, socio-technical solutions to mitigate harms from automated systems. Previously, she led Twitter's META team and pioneered algorithmic audit tools as founder of Parity and Global Lead for Responsible AI at Accenture.",
    roles: [
      { text: "CEO-Humane Intelligence" },
      { text: "Responsible AI Fellow-Harvard" },
      { text: "Former Director-Twitter AI META" },
      { text: "AI Ethics Leader" }
    ],
    labels: ["CEO", "Dr."],
    decorativeImage: Logo,
    profileImage: DrRummanChowdhury
  },
  {
    name: "Ronald van Loon",
    sessionTitle: "Strategic Decisioning with Intelligent Agents",
    description: "Ronald van Loon is a globally recognized influencer and educator in AI, BigData and digital transformation. As CEO of Intelligent World, he leads a platform that connects tech leaders, analysts and organizations through thought leadership and content innovation. With a reach of over 500,000 professionals across platforms, Ronald helps enterprises stay ahead of the curve through strategic boardroom briefings, keynote sessions and educational content creation.",
    roles: [
      { text: "CEO-Intelligent World" },
      { text: "Global AI & Data Influencer" },
      { text: "Top 10 Thought Leader in AI, Big Data, IoT" }
    ],
    labels: ["CEO", "Influencer"],
    decorativeImage: Logo,
    profileImage: RonaldVanLoon
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
            {speaker.labels && speaker.labels.length > 0 && (
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