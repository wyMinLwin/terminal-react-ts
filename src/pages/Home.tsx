import React from 'react'
import TerminalHeader from '../components/TerminalHeader'
import TerminallBody from '../components/TerminallBody'

const Home = () => {
  return (
    <div className={`h-full w-full`}>
        <TerminalHeader />
        <TerminallBody />
    </div>
  )
}

export default Home