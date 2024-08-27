'use client'

import Image from 'next/image'
import React from 'react'
import logoval from '@/assets/riot-games-logo-1.png'
import logoval2 from '@/assets/valorant_games_riot_play_logo_icon_228460 copy.png'
import NavHover from './NavComponents/NavHover'
import NavHover2 from './NavComponents/NavHover2'
import { GoArrowUpRight } from 'react-icons/go'
import NavHover3 from './NavComponents/NavHover3'
import Search from './NavComponents/Search'
import { PiWarningDiamondFill } from 'react-icons/pi'
import { TbWorld } from 'react-icons/tb'
import { FaSearch } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div>
            <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-black text-sm py-5 z-10">
                <nav className="max-w-[100rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
                    <div className="flex items-center gap-5 justify-between">
                        <a className="flex-none " href="#" aria-label="Brand">
                            <Image src={logoval} alt={'logovalorant'} width={90} height={90} className='transition duration-300' />
                        </a>
                        <a className="flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80" href="/" aria-label="Brand">
                            <Image src={logoval2} alt={'logovalorant'} width={40} height={90} className='' />
                        </a>
                        <div className="sm:hidden">
                            <button type="button" className="hs-collapse-toggle relative size-7 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10" id="hs-navbar-example-collapse" aria-expanded="false" aria-controls="hs-navbar-example" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-example">
                                <svg className="hs-collapse-open:hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                                <svg className="hs-collapse-open:block hidden shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                                <span className="sr-only">Toggle navigation</span>
                            </button>
                        </div>
                    </div>
                    <div id="hs-navbar-example" className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block" aria-labelledby="hs-navbar-example-collapse">
                        <div className="flex flex-col gap-1 mt-5 sm:flex-row sm:items-center  sm:mt-0 sm:ps-10">

                            <NavHover />

                            <a className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold text-white shadow-sm hover:bg-gray-900 hover:text-red-600 hover:rounded-xl hover:border-b-4 hover:border-red-600  focus:outline-none disabled:pointer-events-none " href="#">
                                MEDIA
                            </a>
                            <a className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold text-white shadow-sm  hover:bg-gray-900 hover:text-red-600 hover:rounded-xl hover:border-b-4 hover:border-red-600  focus:outline-none disabled:pointer-events-none " href="#">
                                ARTIKEL
                            </a>
                            <a className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold text-white shadow-sm hover:bg-gray-900 hover:text-red-600 hover:rounded-xl hover:border-b-4 hover:border-red-600  focus:outline-none disabled:pointer-events-none " href="#">
                                PAPAN PERINGKAT
                            </a>
                            <NavHover2 />
                            <a className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold text-white shadow-sm hover:bg-gray-900 hover:text-red-600 hover:rounded-xl hover:border-b-4 hover:border-red-600  focus:outline-none disabled:pointer-events-none " href="#">
                                E-SPORTS<span><GoArrowUpRight /></span>
                            </a>
                            <NavHover3 />
                        <a href="#" className='pl-48'>
                            <FaSearch className='text-2xl hover:bg-gray-800 bg-gray-700'/>
                            </a>
                            <a href="">
                                <PiWarningDiamondFill className ="text-2xl text-purple-600 hover:bg-gray-700"/>
                            </a>
                            <a href="">
                                <TbWorld className='text-2xl text-white hover:bg-gray-700'/>
                            </a>
                            <button type="button" className=" text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Mainkan Sekarang</button>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Navbar