import React from 'react'
import Header from '@/components/Header'
import Home from '@/components/Home'
import UrlShortner from '@/components/UrlShortner'
import Statistics from '@/components/Statistics'
import SubFooter from '@/components/SubFooter'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <div className='max-w-[1550px] mx-auto flex flex-col gap-10'>
      <Header />
      <Home />
      <div className='bg-gray-100 flex flex-col gap-10 lg:mt-30 mt-40 '>
        <UrlShortner />
        <Statistics />
        <div>
          <SubFooter />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default page;
