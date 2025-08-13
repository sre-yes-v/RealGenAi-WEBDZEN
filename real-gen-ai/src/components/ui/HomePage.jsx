import React from 'react'
import Hero from './Hero'
import Gallery from './Gallery'
import ContactUs from './Contact'

const HomePage = () => {
  return (
    <main className='pt-20'>
      <Hero />
      <Gallery />
      <ContactUs/>
    </main>
  )
}

export default HomePage