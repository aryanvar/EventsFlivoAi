import React from 'react'
import SpeakersPage from './Speakers'
import TestimonialSection from './TestimonialSection'
import SpeakersDescription from './SpeakersDescription'
import SubFooter from '../../SubFooter'

const SpeakersRendering = () => {
  return (
    <div>
      <SpeakersPage />
      <TestimonialSection />
      <SpeakersDescription />
      <SubFooter />
    </div>
  )
}

export default SpeakersRendering
