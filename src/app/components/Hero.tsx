'use client'

import Image from 'next/image'
import React from 'react'
import valorantvideo from '@/assets/valorantvideo.png'

const Hero = () => {
  return (
    <div>
        <section className="relative max-h-[600px] overflow-hidden  ">
            
  <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay muted loop>
    <source src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/409ab2fc369ba5e1fe50bac10c6676d7d1365a9f.mp4" type="video/mp4"/>
  </video>
  <div className="mx-auto max-w-screen-xl px-4 relative z-10 lg:flex lg:h-screen p-52 ">
    <div className="mx-auto max-w-sm  ">
      <p className="mt-4 sm:text-sm">
      Game tembak-menembak taktis berbasis karakter 5v5
      </p>
      <Image src={valorantvideo} alt='valorantvideo' height={1000} width={1000} className='mt-7'/>
      <div className="mt-8 mx-auto flex justify-center gap-4">
        <a
          className="block w-[600px] rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-[200px]"
          href="#">
          MAIN GRATIS
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default Hero