import React from 'react';
import Toronto from './LandingPage/Bengaluru';
import Tickets from './LandingPage/Tickets';
import GainsSection from './LandingPage/GainsSection';
import SeoBlock from './SeoBlock/SeoBlock';
import SubFooter from '../SubFooter';
import VenueSection from './LandingPage/VenueSection';
// Import other components as needed

const TorontoExample = () => {
  // Optional: You can also use useRef for more control
  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('registration-section');
    if (registrationSection) {
      registrationSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Register Button */}
      <Toronto onRegisterClick={scrollToRegistration} />
      
      <SeoBlock />
      {/* Other sections can go here */}
      <GainsSection />
      
      {/* Registration/Tickets Section */}
      <Tickets />

      <VenueSection />
      <SubFooter />

      {/* Add more sections as needed */}
    </div>
  );
};

export default TorontoExample;
