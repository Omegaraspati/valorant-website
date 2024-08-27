import React from 'react'
import banner1 from '@/assets/banner1.png'
import banner2 from '@/assets/banner2.png'
import banner3 from '@/assets/banner3.png'
import backgroundjett from '@/assets/backgroundjett.png'
import Image from 'next/image'

const Card = () => {
    return (
        <div>
            <section className="relative bg-[url(https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/ece1d7a8a15c7f55cb3a09a8aca0fd5d5d93c9ac-5120x1140.png?auto=format&fit=fill&q=80&w=3360)] 
            bg-center bg-cover bg-no-repeat ">

                <h1 className='text-4xl font-extrabold p-10 pb-10 lg:p-21 text-black'>ARTIKEL TERBARU</h1>
                <div className="relative max-w-[1600px] sm:px-16 lg:flex lg:px-8 gap-10 lg:justify-center lg:mx-auto pb-20">
                    <a href="#" className=" relative max-w-xl overflow-hidden bg-cover bg-no-repeat">
                        <Image src={banner1} alt={'banner1'} width={1000} height={1000} className='transition-transform duration-300 ease-in-out hover:scale-110 ' />

                        <h3 className="mt-4 text-sm font-bold text-red-500 sm:text-sm">PEMBARUAN GAME <span className='text-black text-xs font-semibold'> | 2 minggu yang lalu</span></h3>
                        <h1 className='mt-4 text-xl font-bold text-black sm:text-xl'>Catatan Patch VALORANT 9.03</h1>
                        <p className="mt-2 max-w-sm text-gray-700">
                            Peningkatan pada ability yang menyebar ditanah, Pearl masuk ke mode Unrated dan Swift Play di Konsol.
                        </p>
                    </a>
                    <a href="#" className=" relative max-w-xl overflow-hidden bg-cover bg-no-repeat">
                        <Image src={banner2} alt={'banner2'} width={1000} height={1000} className='transition-transform duration-300 ease-in-out hover:scale-110 ' />

                        <h3 className="mt-4 text-sm font-bold text-red-500 sm:text-sm"> <span className='text-black text-xs font-semibold'> 10 bulan yang lalu</span></h3>
                        <h1 className='mt-4 text-xl font-bold text-black sm:text-xl'>Memperkenalkan VCT Challangers 2024</h1>
                        <p className="mt-2 max-w-sm text-gray-700">
                            Hari ini kami ingin membagikan detail awal tentang apa yang bisa di nantikan dari VALORANT Challangers pada tahun 2024
                        </p>
                    </a>
                    <a href="#" className=" relative max-w-xl overflow-hidden bg-cover bg-no-repeat">
                        <Image src={banner3} alt={'banner3'} width={1000} height={1000} className='transition-transform duration-300 ease-in-out hover:scale-110 ' />

                        <h3 className="mt-4 text-sm font-bold text-red-500 sm:text-sm"><span className='text-black text-xs font-semibold'>2 minggu yang lalu</span></h3>
                        <h1 className='mt-4 text-xl font-bold text-black sm:text-xl'>Semua yang kamu perlu ketahui: OFF//SEASON 2024</h1>
                        <p className="mt-2 max-w-sm text-gray-700">
                            Cari tahu ada apa lagi di VALORANT Esport sesudah Championship!
                        </p>
                    </a>
                </div>
                <div className="relative lg:h-[600px]">
                    <Image
                        src={backgroundjett}
                        alt="Background Image"
                        fill
                        style={{ objectFit: 'cover' }}
                        quality={100}
                        className='bg-cover'
                        priority/>
                    <div className="relative z-10  lg:h-full">
                        <h1 className="text-white text-4xl lg:text-8xl font-bold p-10 lg:max-w-[400px] text-left tracking-tighter">PELUNCURAN KONSOL</h1>
                        <p className='text-lg text-white p-10'>VALORANT // YR 4</p>
                        <div className='lg:pl-24'>
                        <button type="button" className="text-white bg-red-500 hover:text-black hover:bg-white  uppercase font-medium rounded-xs
                        text-lg px-5 py-5 text-center ">MAIN SEKARANG</button></div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Card