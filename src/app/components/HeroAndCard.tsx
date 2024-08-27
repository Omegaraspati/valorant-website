import React from 'react'
import backgroundjett from '@/assets/backgroundvalo1.png'
import backgroundmerah from '@/assets/backgroundmerah.png'
import Image from 'next/image'

const HeroAndCard = () => {
    return (
        <>
            <div className="relative lg:h-[600px]">
                <Image
                    src={backgroundjett}
                    alt="Background Image"
                    fill
                    style={{ objectFit: 'cover' }}
                    quality={100}
                    className='bg-cover'
                    priority />
                <div className="relative z-10 lg:h-full">
                    <h1 className="text-black text-4xl lg:text-8xl font-extrabold p-10 lg:max-w-[1000px] text-left tracking-tighter">KAMI VALORANT</h1>
                    <p className='text-lg text-black pl-14 font-semibold'>TANTANGAN BATAS</p>
                    <p className='max-w-[500px] text-black font-semibold pl-14 '>Padukan gaya dan pengalamanmu di panggung kompetitif global. Kamu memiliki 13 ronde untuk menyerang dan mempertahankan sisimu dengan keahlian tembak-menembak sengit serta kemampuan taktis. Dengan satu nyawa per ronde, kamu harus berpikir
                        lebih cepat daripada lawan jika ingin tetap hidup. Habisi musuh baik di mode Competitive maupun Unranked serta Deathmatch dan Spike Rush.</p>
                    <div className='pl-14 lg:pt-14'>
                        <button type="button" className="text-white bg-red-500 hover:text-black hover:bg-white  uppercase font-medium rounded-xs
                        text-lg px-5 py-5 text-center ">MAIN SEKARANG</button></div>
                    <video className="absolute lg:max-w-[700px] lg:right-20 lg:top-20 pt-5 bg-white " autoPlay muted loop>
                        <source src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/f6ccf20dfe3f6a24ea9216bb8afaaa66740c715d.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>

        </>
    )
}

export default HeroAndCard