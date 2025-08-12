import React from 'react'
import SpeakersPage from './Speakers'
import SpeakersDescription from './SpeakersDescription'
import SubFooter from '../../SubFooter'

const SpeakersRendering = () => {
  return (
    <div>
      <SpeakersPage />
      <SpeakersDescription />
      <SubFooter />
    </div>
  )
}

export default SpeakersRendering
