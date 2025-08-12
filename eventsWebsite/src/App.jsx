import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import "./App.css";

import LasVegasRendering from "./Components/Events/LasVegas/LasVegasRendering";
import AllEventsRendering from "./Components/AllEvents/AllEventsRendering"
import SpeakersRendering from "./Components/Events/LasVegas/Speakers/SpeakersRendering";
import AgendaRendering from "./Components/Events/LasVegas/Agenda/AgendaRendering";
import FaqRenderIng from "./Components/Events/LasVegas/FAQ/FaqRenderIng";
import TorontoExample from "./Components/Events/Toronto/TorontoExample";

// Toronto-specific imports
import TorontoSpeakersRendering from "./Components/Events/Toronto/Speakers/SpeakersRendering";
import TorontoAgendaRendering from "./Components/Events/Toronto/Agenda/AgendaRendering";
import TorontoFaqRenderIng from "./Components/Events/Toronto/FAQ/FaqRenderIng";

// San Francisco-specific imports
import SansFransiscoRendering from "./Components/Events/SansFrancisco/SansFransiscoRendering";
import SanFranciscoSpeakersRendering from "./Components/Events/SansFrancisco/Speakers/SpeakersRendering";
import SanFranciscoAgendaRendering from "./Components/Events/SansFrancisco/Agenda/AgendaRendering";
import SanFranciscoFaqRenderIng from "./Components/Events/SansFrancisco/FAQ/FaqRenderIng";

// New York-specific imports
import NewYorkRendering from "./Components/Events/NewYork/NewYork";
import NewYorkSpeakersRendering from "./Components/Events/NewYork/Speakers/SpeakersRendering";
import NewYorkAgendaRendering from "./Components/Events/NewYork/Agenda/AgendaRendering";
import NewYorkFaqRenderIng from "./Components/Events/NewYork/FAQ/FaqRenderIng";

// Dubai-specific imports
import DubaiRendering from "./Components/Events/Dubai/Dubai";
import DubaiSpeakersRendering from "./Components/Events/Dubai/Speakers/SpeakersRendering";
import DubaiAgendaRendering from "./Components/Events/Dubai/Agenda/AgendaRendering";
import DubaiFaqRenderIng from "./Components/Events/Dubai/FAQ/FaqRenderIng";

// London-specific imports
import LondonRendering from "./Components/Events/London/LondonRendering";
import LondonSpeakersRendering from "./Components/Events/London/Speakers/SpeakersRendering";
import LondonAgendaRendering from "./Components/Events/London/Agenda/AgendaRendering";
import LondonFaqRenderIng from "./Components/Events/London/FAQ/FaqRenderIng";

// Singapore-specific imports
import SingaporeRendering from "./Components/Events/Singapore/SingaporeRendering";
import SingaporeSpeakersRendering from "./Components/Events/Singapore/Speakers/SpeakersRendering";
import SingaporeAgendaRendering from "./Components/Events/Singapore/Agenda/AgendaRendering";
import SingaporeFaqRenderIng from "./Components/Events/Singapore/FAQ/FaqRenderIng";

// Montreal-specific imports
import MontrealRendering from "./Components/Events/Monteral/MontrealRendering";
import MontrealSpeakersRendering from "./Components/Events/Monteral/Speakers/SpeakersRendering";
import MontrealAgendaRendering from "./Components/Events/Monteral/Agenda/AgendaRendering";
import MontrealFaqRenderIng from "./Components/Events/Monteral/FAQ/FaqRenderIng";

// Beijing-specific imports
import BeijingRendering from "./Components/Events/Beijing/BeijingRendering";
import BeijingSpeakersRendering from "./Components/Events/Beijing/Speakers/SpeakersRendering";
import BeijingAgendaRendering from "./Components/Events/Beijing/Agenda/AgendaRendering";
import BeijingFaqRenderIng from "./Components/Events/Beijing/FAQ/FaqRenderIng";

// Berlin-specific imports
import BerlinRendering from "./Components/Events/Berlin/BerlinRendering";
import BerlinSpeakersRendering from "./Components/Events/Berlin/Speakers/SpeakersRendering";
import BerlinAgendaRendering from "./Components/Events/Berlin/Agenda/AgendaRendering";
import BerlinFaqRenderIng from "./Components/Events/Berlin/FAQ/FaqRenderIng";

// Bengaluru-specific imports
import BengaluruRendering from "./Components/Events/Bengaluru/BengaluruRendering";
import BengaluruSpeakersRendering from "./Components/Events/Bengaluru/Speakers/SpeakersRendering";
import BengaluruAgendaRendering from "./Components/Events/Bengaluru/Agenda/AgendaRendering";
import BengaluruFaqRenderIng from "./Components/Events/Bengaluru/FAQ/FaqRenderIng";



function App() {
  const location = useLocation();

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Routes>
        <Route path="/" element={<AllEventsRendering />} />
        
        {/* Las Vegas Routes */}
        <Route path="/las-vegas/home" element={<LasVegasRendering />} />
        <Route path="/las-vegas/speakers" element={<SpeakersRendering />} />
        <Route path="/las-vegas/agenda" element={<AgendaRendering />} />
        <Route path="/las-vegas/faq" element={<FaqRenderIng />} />
        
        {/* Toronto Routes */}
        <Route path="/toronto/home" element={<TorontoExample />} />
        <Route path="/toronto/speakers" element={<TorontoSpeakersRendering />} />
        <Route path="/toronto/agenda" element={<TorontoAgendaRendering />} />
        <Route path="/toronto/faq" element={<TorontoFaqRenderIng />} />
        
        {/* San Francisco Routes */}
        <Route path="/sanfrancisco/home" element={<SansFransiscoRendering />} />
        <Route path="/sanfrancisco/speakers" element={<SanFranciscoSpeakersRendering />} />
        <Route path="/sanfrancisco/agenda" element={<SanFranciscoAgendaRendering />} />
        <Route path="/sanfrancisco/faq" element={<SanFranciscoFaqRenderIng />} />

        {/* New York Routes */}
        <Route path="/newyork/home" element={<NewYorkRendering />} />
        <Route path="/newyork/speakers" element={<NewYorkSpeakersRendering />} />
        <Route path="/newyork/agenda" element={<NewYorkAgendaRendering />} />
        <Route path="/newyork/faq" element={<NewYorkFaqRenderIng />} />

        {/* Dubai Routes */}
        <Route path="/dubai/home" element={<DubaiRendering />} />
        <Route path="/dubai/speakers" element={<DubaiSpeakersRendering />} />
        <Route path="/dubai/agenda" element={<DubaiAgendaRendering />} />
        <Route path="/dubai/faq" element={<DubaiFaqRenderIng />} />

        {/* London Routes */}
        <Route path="/london/home" element={<LondonRendering />} />
        <Route path="/london/speakers" element={<LondonSpeakersRendering />} />
        <Route path="/london/agenda" element={<LondonAgendaRendering />} />
        <Route path="/london/faq" element={<LondonFaqRenderIng />} />

        {/* Singapore Routes */}
        <Route path="/singapore/home" element={<SingaporeRendering />} />
        <Route path="/singapore/speakers" element={<SingaporeSpeakersRendering />} />
        <Route path="/singapore/agenda" element={<SingaporeAgendaRendering />} />
        <Route path="/singapore/faq" element={<SingaporeFaqRenderIng />} />

        {/* Montreal Routes */}
        <Route path="/montreal/home" element={<MontrealRendering />} />
        <Route path="/montreal/speakers" element={<MontrealSpeakersRendering />} />
        <Route path="/montreal/agenda" element={<MontrealAgendaRendering />} />
        <Route path="/montreal/faq" element={<MontrealFaqRenderIng />} />

        {/* Beijing Routes */}
        <Route path="/beijing/home" element={<BeijingRendering />} />
        <Route path="/beijing/speakers" element={<BeijingSpeakersRendering />} />
        <Route path="/beijing/agenda" element={<BeijingAgendaRendering />} />
        <Route path="/beijing/faq" element={<BeijingFaqRenderIng />} />

        {/* Berlin Routes */}
        <Route path="/berlin/home" element={<BerlinRendering />} />
        <Route path="/berlin/speakers" element={<BerlinSpeakersRendering />} />
        <Route path="/berlin/agenda" element={<BerlinAgendaRendering />} />
        <Route path="/berlin/faq" element={<BerlinFaqRenderIng />} />

        {/* Bengaluru Routes */}
        <Route path="/bengaluru/home" element={<BengaluruRendering />} />
        <Route path="/bengaluru/speakers" element={<BengaluruSpeakersRendering />} />
        <Route path="/bengaluru/agenda" element={<BengaluruAgendaRendering />} />
        <Route path="/bengaluru/faq" element={<BengaluruFaqRenderIng />} />
      </Routes>
    </>
  );
}

export default App;
