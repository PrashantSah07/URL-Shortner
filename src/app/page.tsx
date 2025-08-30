'use client'
import React, { useEffect, useState } from 'react'
import Header from '@/components/Header'
import Home from '@/components/Home'
import UrlShortner from '@/components/UrlShortner'
import Statistics from '@/components/Statistics'
import SubFooter from '@/components/SubFooter'
import Footer from '@/components/Footer'
import { useTheme } from "next-themes"

const page = () => {

  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const currentTheme = mounted ? theme === "system" ? systemTheme : theme : 'light';

  return (
    <div className='max-w-[1550px] mx-auto flex flex-col gap-10'>
      <Header />
      <Home />
      <div className={`flex flex-col gap-10 lg:mt-30 mt-40 ${currentTheme === 'light' ? 'bg-gray-100' : 'bg-[#0a0a0a]'} `}>
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
