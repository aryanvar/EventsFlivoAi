import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Mock images for demonstration
// In your app, you would use your actual imported assets
import EventsBackground from '../../assets/Backgrounds/freepik__a-futuristic-business-summit-in-london-with-aithem__97391 1.png';
import FlivoLogo from '../../assets/Backgrounds/FlivoaiLogo.png';
import EventsHeading from '../../assets/Backgrounds/EventsHeading.png';
import Logo from '../../assets/Backgrounds/logo.png'
import LasVegasImg from '../../assets/CIties/LasVegasBackground.png'

// City images
const NewYourkImg = 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800';
const LondonImg = 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800';
const BeijingImg = 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800';
const TorontoImg = 'https://images.unsplash.com/photo-1517935706615-2717063c2225?w=800';
const SingaporeImg = 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800';
const DubaiImg = 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800';
const SanFranciscoImg = 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?w=800';
const MontrealImg = 'https://images.unsplash.com/photo-1539650116574-75c0c6d73c0e?w=800';
const BengaluruImg = 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800';
const BerlinImg = 'https://images.unsplash.com/photo-1560969184-10fe8719e047?w=800';

// Featured events data structure with route mappings
const featuredEvents = [
    {
        id: 1,
        title: "ENTERPRISE AI SUMMIT 2025",
        subtitle: "A global tour across Las Vegas, SF, NYC, London, Singapore & Dubai—where AI leaders unlock the next $3T enterprise AI revolution through strategy, innovation, and real-world use cases.",
        primaryLocation: "Las Vegas",
        description: "Hosted by FlivoAI at Chicago's McCormick Place on August 3rd, this global campaign kickoff will feature C-suite voices, enterprise AI innovators and frameworks for capturing real business impact. Whether you lead digital transformation or architect AI solutions, this is where tomorrow's enterprise AI playbook begins.",
        cities: [
            { name: "LAS VEGAS", image: LasVegasImg, route: "/las-vegas/home" },
            { name: "SAN FRANCISCO", image: SanFranciscoImg, route: "/sanfrancisco/home" },
            { name: "NEW YORK CITY", image: NewYourkImg, route: "/newyork/home" },
            { name: "LONDON", image: LondonImg, route: "/london/home" },
            { name: "SINGAPORE", image: SingaporeImg, route: "/singapore/home" },
            { name: "DUBAI", image: DubaiImg, route: "/dubai/home" }
        ]
    },
    {
        id: 2,
        title: "BEYOND AUTOMATION: INTELLIGENT AI AGENT",
        subtitle: "Live in Toronto, Montreal, Beijing, Berlin & Bengaluru—this global tour explores how intelligent AI agents are redefining enterprise strategy beyond automation.",
        primaryLocation: "Toronto",
        description: "Hosted by FlivoAI at Chicago's McCormick Place on August 3rd, this global campaign kickoff will feature C-suite voices, enterprise AI innovators and frameworks for capturing real business impact. Whether you lead digital transformation or architect AI solutions, this is where tomorrow's enterprise AI playbook begins.",
        cities: [
            { name: "TORONTO", image: TorontoImg, route: "/toronto/home" },
            { name: "MONTREAL", image: MontrealImg, route: "/montreal/home" },
            { name: "BEIJING", image: BeijingImg, route: "/beijing/home" },
            { name: "BERLIN", image: BerlinImg, route: "/berlin/home" },
            { name: "BENGALURU", image: BengaluruImg, route: "/bengaluru/home" }
        ]
    }
];

const filterOptions = {
    events: ['Live', 'Past', 'Upcoming Online', 'Upcoming In-Person'],
    topics: [
        'Beyond Automation',
        'Intelligent AI Agents',
        'Future of AI Innovation',
        'Enterprise LLM Security',
        'AI Transformation Strategy',
        'AI ROI & $3 Trillion Impact',
        'AI Governance & Compliance',
        'Enterprise AI Implementation'
    ],
    locations: [
        'UAE', 'China', 'Canada', 'Germany', 'Australia',
        'Singapore', 'United States', 'United Kingdom'
    ]
};

const FilterSection = ({ title, options, selectedOptions, onOptionChange }) => (
    <section>
        <h3 className="font-semibold text-base md:text-lg tracking-wider text-blue-400 text-center uppercase select-none mb-4">
            {title}
        </h3>
        <ul className="list-none p-0 m-0 select-none">
            {options.map((option, index) => (
                <li key={index} className="mb-2">
                    <label
                        htmlFor={`${title.toLowerCase()}-${index}`}
                        className="flex items-center cursor-pointer text-slate-200 hover:text-white transition-colors duration-200"
                    >
                        <input
                            type="checkbox"
                            id={`${title.toLowerCase()}-${index}`}
                            className="absolute opacity-0 cursor-pointer h-0 w-0"
                            checked={selectedOptions.includes(option)}
                            onChange={() => onOptionChange(option)}
                        />
                        <span className={`h-4 w-4 border border-slate-400 mr-3 transition-colors duration-200 ${selectedOptions.includes(option) ? 'bg-white' : 'bg-transparent'}`}></span>
                        <span className="text-sm md:text-base">{option}</span>
                    </label>
                </li>
            ))}
        </ul>
    </section>
);

// Component for event blocks with carousel design
const EventBlock = ({ event }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [selectedCity, setSelectedCity] = useState(0);
    const navigate = useNavigate();

    const slides = event.cities.map((city, index) => ({
        id: index,
        image: city.image,
        city: city.name
    }));

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 4000);
        return () => clearInterval(timer);
    }, [slides.length]);

    useEffect(() => {
        setSelectedCity(currentSlide);
    }, [currentSlide]);

    const handleCityClick = (index) => {
        setSelectedCity(index);
        setCurrentSlide(index);
    };

    const handleExploreEvent = () => {
        const selectedCityData = event.cities[selectedCity];
        if (selectedCityData && selectedCityData.route) {
            navigate(selectedCityData.route);
        }
    };

    return (
        <article className="relative rounded-lg shadow-lg select-none max-w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] overflow-hidden">
            <div className="absolute inset-0">
                <div
                    className="flex h-full transition-transform duration-1000 ease-in-out"
                    style={{
                        width: `${slides.length * 100}%`,
                        transform: `translateX(-${currentSlide * (100 / slides.length)}%)`
                    }}
                >
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className="h-full relative flex-shrink-0"
                            style={{
                                width: `${100 / slides.length}%`,
                                backgroundImage: `url(${slide.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}
                        >
                            <div
                                className="absolute inset-0"
                                style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)' }}
                            />
                            <div
                                className="absolute inset-0"
                                style={{ background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.3) 100%)' }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <div className="relative z-10 h-full flex flex-col">
                {/* Header Section */}
                <div className="w-full p-3 sm:p-4 md:p-6 pb-2 sm:pb-3 md:pb-4">
                    <div
                        className="text-center font-black text-lg sm:text-xl md:text-2xl lg:text-3xl uppercase mb-2 sm:mb-3 leading-tight"
                        style={{
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(200, 200, 200, 1) 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            letterSpacing: '1px'
                        }}
                    >
                        {event.title}
                    </div>
                    <div
                        className="text-center font-medium text-sm sm:text-base md:text-[17px] leading-4 sm:leading-5 mb-3 sm:mb-4 mx-auto max-w-4xl px-2"
                        style={{
                            color: 'white',
                        }}
                    >
                        {event.subtitle}
                    </div>
                </div>

                {/* Main Content - Stack on mobile, side-by-side on larger screens */}
                <div className="flex-1 flex flex-col lg:flex-row">
                    {/* Text Content */}
                    <div className="w-full lg:w-3/5 px-3 sm:px-4 md:px-6 pb-3 sm:pb-4 md:pb-6 flex flex-col justify-center">
                        <div
                            className="text-center lg:text-left font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl uppercase mb-2 sm:mb-3 md:mb-4"
                            style={{
                                background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(200, 200, 200, 1) 100%)',
                                backgroundClip: 'text',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                letterSpacing: '2px'
                            }}
                        >
                            {event.cities[selectedCity]?.name}
                        </div>
                        <div
                            className="text-center lg:text-left font-medium text-xs sm:text-sm md:text-base leading-4 sm:leading-5 mb-3 sm:mb-4 max-w-lg mx-auto lg:mx-0"
                            style={{
                                color: 'white'
                            }}
                        >
                            Hosted by FlivoAI at {event.cities[selectedCity]?.name}'s premier venue. This groundbreaking event will feature C-suite voices, enterprise AI innovators and frameworks for capturing real business impact.
                        </div>
                        <div className="flex justify-center lg:justify-start">
                            <button
                                onClick={handleExploreEvent}
                                className="bg-white rounded-md px-4 sm:px-6 py-2 text-gray-800 font-semibold text-xs sm:text-sm transition-all duration-300 hover:bg-sky-500 hover:text-white shadow-lg cursor-pointer"
                            >
                                Explore Event
                            </button>
                        </div>
                    </div>

                    {/* City Carousel */}
                    <div className="w-full lg:w-2/5 p-3 sm:p-4 md:p-6 flex items-center justify-center">
                        <div className="relative w-full max-w-sm overflow-hidden">
                            {/* Mobile: Show only selected city */}
                            <div className="block sm:hidden">
                                <div
                                    onClick={() => handleCityClick(selectedCity)}
                                    className="relative w-full h-32 border-2 border-white/80 rounded-lg overflow-hidden cursor-pointer"
                                >
                                    <div
                                        className="absolute inset-1 rounded-md"
                                        style={{
                                            backgroundImage: `url(${event.cities[selectedCity]?.image})`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        }}
                                    />
                                    <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-sky-900/60 via-transparent to-transparent"></div>
                                    <div
                                        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center font-bold uppercase text-xs text-white"
                                        style={{ letterSpacing: '0.5px' }}
                                    >
                                        {event.cities[selectedCity]?.name}
                                    </div>
                                </div>
                                {/* City dots indicator for mobile */}
                                <div className="flex justify-center mt-3 gap-2">
                                    {event.cities.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleCityClick(index)}
                                            className={`w-2 h-2 rounded-full transition-colors ${selectedCity === index ? 'bg-white' : 'bg-white/40'}`}
                                        />
                                    ))}
                                </div>
                            </div>

                            {/* Desktop: Show carousel */}
                            <div className="hidden sm:block">
                                <div
                                    className="flex items-center transition-transform duration-500 ease-in-out"
                                    style={{
                                        transform: `translateX(calc(50% - ${50 + (selectedCity * 120)}px))`
                                    }}
                                >
                                    {event.cities.map((city, index) => (
                                        <div
                                            key={index}
                                            onClick={() => handleCityClick(index)}
                                            className={`relative flex-shrink-0 transition-all duration-300 cursor-pointer backdrop-blur-sm mr-2 sm:mr-3 md:mr-4 ${selectedCity === index
                                                    ? 'w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 xl:w-48 xl:h-48 border-2 border-white/80 scale-105 shadow-xl z-10'
                                                    : 'w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 xl:w-44 xl:h-44 border-2 border-white/30 hover:border-white/60 hover:scale-105 opacity-70'
                                                } rounded-lg overflow-hidden`}
                                        >
                                            <div
                                                className="absolute inset-1 rounded-md"
                                                style={{
                                                    backgroundImage: `url(${city.image})`,
                                                    backgroundSize: 'cover',
                                                    backgroundPosition: 'center'
                                                }}
                                            />
                                            <div className={`absolute inset-0 rounded-lg transition-all duration-300 ${selectedCity === index
                                                    ? 'bg-gradient-to-t from-sky-900/60 via-transparent to-transparent'
                                                    : 'bg-gradient-to-t from-black/60 via-transparent to-transparent'
                                                }`}></div>
                                            <div
                                                className={`absolute ${selectedCity === index ? 'bottom-2 sm:bottom-3 md:bottom-4 lg:bottom-6 xl:bottom-8 text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs xl:text-sm' : 'bottom-1 sm:bottom-2 md:bottom-3 lg:bottom-4 xl:bottom-6 text-[5px] sm:text-[6px] md:text-[8px] lg:text-[10px] xl:text-xs'} left-1/2 transform -translate-x-1/2 text-center font-bold uppercase text-white px-1`}
                                                style={{
                                                    letterSpacing: '0.5px'
                                                }}
                                            >
                                                {city.name.split(' ')[0]}
                                            </div>
                                            {selectedCity === index && (
                                                <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full shadow-lg"></div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

const FlivoLogo1 = () => (
    <img src={FlivoLogo} alt="Flivo AI Logo" className="h-8 sm:h-10 md:h-12 w-auto" />
);

const EventsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState({
        events: [],
        topics: [],
        locations: []
    });
    const [showMobileFilters, setShowMobileFilters] = useState(false);

    const handleFilterChange = (category, option) => {
        setFilters(prev => ({
            ...prev,
            [category]: prev[category].includes(option)
                ? prev[category].filter(item => item !== option)
                : [...prev[category], option]
        }));
    };

    return (
        <div
            className="min-h-screen text-gray-200 font-sans antialiased"
            style={{
                margin: 0,
                background: `#0b111c url(${EventsBackground}) no-repeat center center fixed`,
                backgroundSize: 'cover',
                fontFamily: "'Montserrat', sans-serif"
            }}
        >
            {/* Header */}
            <header
                className="w-full max-w-[800px] sm:max-w-[900px] md:max-w-[1000px] flex items-center justify-between py-3 sm:py-4 px-4 sm:px-6 md:px-8 select-none mx-auto pt-8 sm:pt-10 md:pt-12"
                style={{
                    backgroundImage: `url(${EventsHeading})`,
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="flex items-center gap-2 sm:gap-3 w-24 sm:w-32 md:w-40">
                    <FlivoLogo1 />
                </div>
                <div className="relative z-10">
                    <div
                        className="font-black text-sm sm:text-lg md:text-xl lg:text-3xl tracking-widest uppercase text-center"
                        style={{
                            background: 'linear-gradient(180deg, rgba(255, 255, 255, 1) 0%, rgba(200, 200, 200, 1) 100%)',
                            backgroundClip: 'text',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            letterSpacing: '1px'
                        }}
                    >
                        FLIVO AI EVENTS
                    </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 w-12 sm:w-16 md:w-20">
                    <img src={Logo} alt="Secondary Logo" className="h-8 sm:h-10 md:h-12 w-auto" />
                </div>
            </header>
            
            {/* === NEW: CONTROL BAR FOR FILTERS AND SEARCH === */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row justify-between items-center gap-4 my-6 md:my-8">
                {/* Mobile Filter Toggle */}
                <button
                    onClick={() => setShowMobileFilters(!showMobileFilters)}
                    className="lg:hidden flex items-center gap-2 w-full justify-center bg-slate-800/80 backdrop-blur-sm border border-slate-500/50 rounded-md p-2 text-white hover:bg-slate-700/90 transition-colors"
                >
                    <Menu className="w-5 h-5" />
                    <span>Filter Events</span>
                </button>

                {/* Search Bar */}
                <div className="relative w-full lg:w-auto lg:ml-auto">
                    <Search
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-sky-400 pointer-events-none"
                    />
                    <input
                        type="text"
                        placeholder="Search Events..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full lg:w-72 rounded-sm border border-slate-500/50 bg-slate-800/80 py-2 pl-9 pr-4 text-sm font-medium text-white placeholder-slate-400 outline-none transition-all duration-300 focus:border-sky-400 focus:bg-slate-700/90 focus:ring-2 focus:ring-sky-400/50 shadow-lg backdrop-blur-sm"
                    />
                </div>
            </div>


            <main className="flex flex-col lg:flex-row gap-6 md:gap-8 max-w-7xl mx-auto px-4 pb-8 sm:pb-10 md:pb-12">
                {/* Filters Sidebar - Mobile Overlay */}
                <aside
                    className={`fixed lg:relative lg:flex-shrink-0 lg:w-80 lg:rounded-lg lg:p-4 md:p-6 lg:self-start lg:backdrop-blur-sm z-40 transition-all duration-300 ${showMobileFilters
                            ? 'inset-0 bg-slate-900/95 backdrop-blur-md p-6 overflow-y-auto'
                            : 'lg:block hidden'
                        }`}
                    style={{
                        background: showMobileFilters ? 'rgba(15, 23, 42, 0.95)' : 'rgba(25, 33, 49, 0.85)',
                        border: '1px solid rgba(100, 116, 139, 0.4)'
                    }}
                >
                    <div className={showMobileFilters ? 'mt-12' : ''}>
                        {/* Close button for mobile filter overlay */}
                        {showMobileFilters && (
                             <button
                                onClick={() => setShowMobileFilters(false)}
                                className="lg:hidden fixed top-4 right-4 bg-slate-800/80 backdrop-blur-sm border border-slate-500/50 rounded-md p-2 text-white hover:bg-slate-700/90 transition-colors z-50"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        )}
                        <h2 className="text-center font-bold text-white uppercase text-base md:text-lg mb-4 tracking-wider">
                            Filter By
                        </h2>
                        <hr className="border-slate-600 mb-4 md:mb-6" />

                        <FilterSection
                            title="EVENTS"
                            options={filterOptions.events}
                            selectedOptions={filters.events}
                            onOptionChange={(option) => handleFilterChange('events', option)}
                        />

                        <hr className="border-slate-600 my-4 md:my-6" />

                        <FilterSection
                            title="TOPICS"
                            options={filterOptions.topics}
                            selectedOptions={filters.topics}
                            onOptionChange={(option) => handleFilterChange('topics', option)}
                        />

                        <hr className="border-slate-600 my-4 md:my-6" />

                        <FilterSection
                            title="LOCATIONS"
                            options={filterOptions.locations}
                            selectedOptions={filters.locations}
                            onOptionChange={(option) => handleFilterChange('locations', option)}
                        />

                        {/* Apply filters button for mobile */}
                        {showMobileFilters && (
                            <button
                                onClick={() => setShowMobileFilters(false)}
                                className="mt-6 w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-4 rounded-md transition-colors"
                            >
                                Apply Filters
                            </button>
                        )}
                    </div>
                </aside>

                {/* Events Section */}
                <section className="flex-grow flex flex-col gap-6 sm:gap-8 md:gap-10">
                    {featuredEvents.map(event => (
                        <EventBlock key={event.id} event={event} />
                    ))}
                </section>
            </main>

            {/* Mobile Overlay Background */}
            {showMobileFilters && (
                <div
                    className="fixed inset-0 bg-black/50 z-30 lg:hidden"
                    onClick={() => setShowMobileFilters(false)}
                />

            )}
        </div>
    );
};

export default EventsPage;