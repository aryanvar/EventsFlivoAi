import React from 'react';

// --- Data (Unchanged) ---
const agendaItems = [
 {
 time: { start: "09:00", end: "09:30", period: "AM" },
 title: "Check-in & Coffee Networking",
 type: "networking",
circles: 0
 },
 {
 time: { start: "09:30", end: "09:45", period: "AM" },
 title: "Welcome Address & Vision for the Future of AI",
 type: "keynote",
 circles: 1
 },
{
 time: { start: "09:45", end: "10:30", period: "AM" },
 title: "AI in the Boardroom: Driving $3 Trillion in Value",
 type: "panel",
 circles: 3
 },
 {
 time: { start: "10:30", end: "11:15", period: "AM" },
 title: "The Trust Factor: Ethics, Data & Responsible AI",
 type: "keynote",
 circles: 1
 },
{
 time: { start: "11:15", end: "11:30", period: "AM" },
 title: "Tea Break & Exhibitor Demos",
 type: "break",
 circles: 0
 },
 {
 time: { start: "11:30", end: "12:15", period: "AM/PM" },
 title: "Prompt Engineering for Enterprise Workflows",
 type: "workshop",
 circles: 1
 },
 {
 time: { start: "12:15", end: "01:00", period: "PM" },
 title: "AI + Health = Futureproof",
 type: "fireside",
 circles: 1
 },
 {
 time: { start: "01:00", end: "02:00", period: "PM" },
 title: "Networking Lunch & VIP Lounge Opens (Invite Only)",
 type: "networking",
 circles: 0
 },
 {
 time: { start: "02:00", end: "02:45", period: "PM" },
 title: "Deep Learning, Real Impact: From MVPs to Billion Dollar Ops",
 type: "keynote",
 circles: 1
 },
 {
 time: { start: "02:45", end: "03:30", period: "PM" },
 title: "Founders in AI: Building the Next Unicorn",
 type: "panel",
 circles: 4
 },
 {
 time: { start: "03:30", end: "04:00", period: "PM" },
 title: "AGI or Hype? Inside DeepMind's Long Game",
 type: "spotlight",
 circles: 1
 },
 {
 time: { start: "04:00", end: "05:00", period: "PM" },
 title: "Open Networking & Final Product Demos & Investor Lounge",
 type: "networking",
 circles: 0
 }
];

// --- Helper Functions (Defined outside component) ---
const getTypeLabel = (type) => {
    const labels = {
        keynote: "Keynote",
        panel: "Panel",
        workshop: "Workshop",
        fireside: "Fireside Chat",
        spotlight: "Spotlight talk",
    };
    return labels[type] || "";
};

// --- Child Components ---

const ConcentricCircles = () => (
    <div className="absolute -left-8 sm:-left-11 -top-2 w-32 sm:w-38 h-32 sm:h-38 opacity-20 hidden sm:block">
        <div className="rounded-full border border-slate-50 w-12 sm:w-14 h-12 sm:h-14 absolute left-0 top-10 sm:top-12"></div>
        <div className="rounded-full border border-slate-50 w-20 sm:w-24 h-20 sm:h-24 absolute -left-4 sm:-left-5 top-6 sm:top-8"></div>
        <div className="rounded-full border border-slate-50 w-30 sm:w-36 h-30 sm:h-36 absolute -left-9 sm:-left-11 top-1 sm:top-2"></div>
    </div>
);

const SpeakerCircles = ({ count }) => {
    if (!count || count === 0) return null;

    return (
        <div className="flex items-center -space-x-1 sm:-space-x-2 md:-space-x-4">
            {[...Array(count)].map((_, i) => (
                <div
                    key={i}
                    className="w-5 h-5 sm:w-8 sm:h-8 md:w-11 md:h-11 rounded-full border border-slate-50 sm:border-2 bg-neutral-700 shadow-lg"
                />
            ))}
        </div>
    );
};

const TimeCard = ({ time, type, circles }) => {
    const [startPeriod, endPeriod] = time.period.split('/');
    
    return (
        <div className="flex-shrink-0 w-32 sm:w-40 md:w-72 bg-neutral-800 rounded-xl sm:rounded-2xl md:rounded-3xl p-3 sm:p-4 md:p-6 flex flex-col justify-between shadow-lg h-full">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 md:gap-4">
                <div className="text-center">
                    <p className="text-slate-50 font-bold text-lg sm:text-2xl md:text-4xl">{time.start}</p>
                    <p className="text-slate-50 font-bold text-xs sm:text-sm md:text-lg">{startPeriod}</p>
                </div>
                <div className="w-3 sm:w-4 md:w-8 border-t border-slate-50 hidden sm:block" />
                <div className="text-center">
                    <p className="text-slate-50 font-bold text-lg sm:text-2xl md:text-4xl">{time.end}</p>
                    <p className="text-slate-50 font-bold text-xs sm:text-sm md:text-lg">{endPeriod || startPeriod}</p>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between mt-2 sm:mt-3 md:mt-4 gap-1 sm:gap-0">
                 <p className="text-slate-50 font-medium text-xs sm:text-lg md:text-2xl text-center sm:text-left">{getTypeLabel(type)}</p>
                 <SpeakerCircles count={circles} />
            </div>
        </div>
    );
};

const ContentCard = ({ title }) => (
    <div className="relative w-full h-full bg-black bg-opacity-60 rounded-xl sm:rounded-2xl md:rounded-3xl border border-white flex items-center p-3 sm:p-4 md:p-6 lg:p-8 min-h-[100px] sm:min-h-[120px] md:min-h-[140px]">
        <ConcentricCircles />
        <h2 className="text-slate-50 font-bold text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl relative z-10 max-w-xl leading-tight">
            {title}
        </h2>
    </div>
);

const AgendaItem = ({ item }) => (
    <div className="w-full flex flex-row items-stretch gap-2 sm:gap-3 md:gap-4 lg:gap-8">
        <TimeCard time={item.time} type={item.type} circles={item.circles} />
        <ContentCard title={item.title} />
    </div>
);

const DownloadButton = () => (
     <button className="mt-6 sm:mt-8 rounded-md py-3 sm:py-4 px-6 sm:px-8 flex flex-row gap-2 sm:gap-3 items-center justify-center bg-gradient-to-r from-blue-400 to-blue-800 shadow-2xl hover:scale-105 transition-transform w-full sm:w-auto">
        <span className="text-slate-50 text-center font-bold text-xl sm:text-2xl md:text-3xl">
            Download Full Agenda
        </span>
        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-slate-50 rounded flex items-center justify-center">
            <svg className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
        </div>
    </button>
);

// --- Main Page Component ---

const ToBeCovered = () => {
    return (
        <div className="min-h-screen bg-black bg-opacity-78 text-slate-50 font-sans p-3 sm:p-4 md:p-6 lg:p-8">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <header className="w-full text-center border border-slate-50 rounded-2xl sm:rounded-3xl py-8 sm:py-10 md:py-12 mb-8 sm:mb-12 md:mb-16 px-4">
                    <h1 className="font-bold text-2xl sm:text-3xl md:text-3xl lg:text-5xl xl:text-5xl leading-tight">
                        Beyond Automation Agenda – September 28, 2025</h1>
                </header>

                {/* Main Content */}
                <main className="flex flex-col items-center">
                    <div className="w-full flex flex-col gap-6 sm:gap-8 md:gap-10">
                        {agendaItems.map((item, index) => (
                            <AgendaItem key={index} item={item} />
                        ))}
                    </div>
                    
                    <DownloadButton />
                </main>
            </div>
        </div>
    );
};

export default ToBeCovered;