import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';

const Hero = () => {
   useGSAP(() => {
      gsap.to('#hero', { opacity: 1, delay: 1.5 })
   }, [])
   return (
      <section className='w-full nav-height bg-block relative'>
         <div className='h-5/6  w-full flex-center flex-col'>
            <p id='hero' className='hero-title'>iPhone 15 Pro</p>

         </div>

      </section>
   )
}

export default Hero