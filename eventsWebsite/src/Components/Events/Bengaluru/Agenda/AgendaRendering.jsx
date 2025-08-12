import React from 'react'
import Agenda from './Agenda'
import AgendaInfo from './AgendaInfo'
import ToBeCovered from './ToBeCovered'
import AgendaEnd from './AgendaEnd'
import SubFooter from '../../SubFooter';
const AgendaRendering = () => {
  return (
    <div>
      <Agenda />
      <AgendaInfo />
      <ToBeCovered />
      <AgendaEnd />
      <SubFooter />
    </div>
  )
}

export default AgendaRendering;