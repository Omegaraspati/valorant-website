import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import valkecil from '@/assets/valkecil.png'
import valogo from '@/assets/riot-games-logo-1.png'

const Footer = () => {
    return (
        <div>
            <div>
                <a className=" flex justify-center py-8 text-sm font-bold text-white shadow-sm  hover:bg-gray-900  focus:outline-none disabled:pointer-events-none " href="#">
                    UNDUH GAME
                </a>
            </div>
            <div className='flex justify-center text-2xl space-x-4 cursor-pointer'>
                <FaFacebook href='#' />
                <FaInstagram href='#' />
                <FaYoutube href='#' />
            </div>
            <div className=' flex justify-center gap-4 pt-4'>
                <Image src={valogo} alt={'valogo'} height={0} width={150} />
                <Image src={valkecil} alt={'valkecil'} />
            </div>
            <p className="text-xs text-gray-500 text-center pt-2">&copy; 2022-2024 Riot Games, Inc . RIOT GAMES,VALORANT dan semua logo terkait adalah merek dagang merk layanan,
                dan/atau merek dagang terdaftar Riot Games,Inc.
            </p>
            <div className='flex justify-center pt-2 '>
                <a className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold text-white shadow-sm hover:bg-gray-900  focus:outline-none disabled:pointer-events-none " href="#">
                    KEBIJAKAN PRIVASI
                </a>
                <a className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold text-white shadow-sm  hover:bg-gray-900  focus:outline-none disabled:pointer-events-none " href="#">
                    KETENTUAN PENGGUNAAN
                </a>
                <a className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold text-white shadow-sm hover:bg-gray-900  focus:outline-none disabled:pointer-events-none " href="#">
                    PREFERENSI COOKIE
                </a>
            </div>
        </div>
    )
}

export default Footer