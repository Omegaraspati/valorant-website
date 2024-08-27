import React from 'react'
import reyna from '@/assets/reyna.png'
import rumah from '@/assets/rumah.png'
import Image from 'next/image'

const BackGroundRed = () => {
    return (
        <div>
            <section className="relative bg-[url(https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/b9f3efa9355803cc44e4c59d3f4437cab192bec3-5120x1616.png?auto=format&fit=fill&q=80&h=1616)] 
            bg-center bg-cover bg-no-repeat pt-52 lg:pt-1">
                <div className='lg:flex '>
                    <Image src={reyna} alt={'reyna'} width={800} height={800} className='py-24 ' />
                    <div className='lg:px-52 lg:py-52'>
                        <h1 className='text-9xl font-extrabold pb-10 tracking-tighter'>AGEN</h1>
                        <div className='space-y-5'>
                            <h3 className='text-lg font-semibold  '>KREATIVITAS ADALAH SENJATA TERBAIKMU</h3>
                            <p>Lebih dari sekadar senjata dan peluru, kamu akan memilih Agen bersenjatakan kemampuan yang adaptif, tangkas,
                                dan mematikan untuk membuktikan keahlian menembakmu. Sejalan dengan berbedanya kepiawaian dalam menembak,
                                begitu pula di sini; tak akan ada Agen dengan karakteristik</p>
                            <button type="button" className="text-black bg-white hover:text-white hover:bg-black  uppercase font-medium rounded-xs
                        text-lg px-5 py-5 text-center ">LIHAT SEMUA AGEN</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative bg-[url(https://cmsassets.rgpub.io/sanity/images/dsfx7636/news/3828b05489971b4715f673bc0e2db81f6c7afac7-5120x1616.png)] 
            bg-center bg-cover bg-no-repeat">
                <div className='lg:flex'>
                <div className='max-w-[1000px] lg:p-24 lg:pt-52 '>
                    <h1 className='text-9xl font-extrabold pb-10 text-black tracking-tighter'>PETA</h1>
                    <div className='space-y-5'>
                        <h3 className='text-lg font-semibold text-black  '>BERTEMPUR DI SELURUH BELAHAN DUNIA</h3>
                        <p className='text-black'>Tiap peta adalah panggung tersendiri untuk memamerkan kemampuan berpikir kreatifmu. Semua dirancang sesuai untuk strategi tim,
                            laga spektakuler, dan momen sengit. Perlihatkan kepiawaian yang akan ditiru oleh pemain lain sampai bertahun-tahun mendatang.</p>
                        <button type="button" className="text-white bg-red-500 hover:text-black hover:bg-white  uppercase font-medium rounded-xs
                        text-lg px-5 py-5 text-center ">LIHAT SEMUA AGEN</button>
                    </div>
                </div>
                    <div>
                        <Image src={rumah} alt={'reyna'} width={800} height={800} className='py-24 lg:pr-24 ' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BackGroundRed