import React from 'react'
import Header from './components/Header'
import RSVPs from './components/RSVPs'
import Explore from './components/Explore'
import FeaturedSpeakers from './components/FeaturedSpeakers'
import Curtain from './components/Curtain'
import EventAgenda from './components/EventAgenda'
import Footer from './components/Footer'

export default function page() {
  return (
    <div className="min-h-screen overflow-y-auto bg-white">
      <Header />
      <RSVPs/>
      <Explore/>
      <FeaturedSpeakers/>
      <Curtain/>
      <EventAgenda/>
      <Footer/>
    </div>
  )
}
