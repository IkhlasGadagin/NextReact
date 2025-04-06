import React from 'react'
// import { Spotlight } from './ui/Spotlight'
import SpotLightNew from './SpotLightNew';

const HeroSection = () => {
  return (
    <div
    className='h-auto md:h-[40rem] w-full rounded-md 
    flex flex-col md:flex-row items-center justify-center relative
    overflow-hidden mx-auto py-10 md:py-0'
    >
      
         {/* <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#FD5E53"
         /> */}
         <SpotLightNew/>
       
    </div>
    
  )
}

export default HeroSection