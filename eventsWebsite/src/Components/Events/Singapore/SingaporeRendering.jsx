import React from 'react'
import LasVegas from './LandingPage/Singapore'
import GainsSection from './LandingPage/GainsSection'
import AgendaPreview from './LandingPage/AgendaPreview'
import FeaturedSpeakers from './LandingPage/FeaturedSpeakers'
import VenueSection from './LandingPage/VenueSection'
import SubFooter from '../SubFooter'
import Tickets from './LandingPage/Tickets'
import SeoBlock from './SeoBlock/SeoBlock'


const LasVegasRendering = () => {
  return (
    <div>
        <LasVegas />
        <SeoBlock />
        <GainsSection />
        <AgendaPreview />
        <FeaturedSpeakers />
        <VenueSection />
        <Tickets />
        <SubFooter />
    </div>
  )
}

export default LasVegasRendering
