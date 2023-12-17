import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='flex-1 flex w-full h-full'>
            <div className='w-3/5'>
                <h1>Hi,</h1>
                <h1 className='text-8xl font-bold'>
                    Hello World.
                </h1>
                <h1>Goodbye World.</h1>
            </div>
            <div className='flex flex-col w-2/5 '>
                <div className='overflow-hidden rounded-2xl'>
                    <Image src='/img/my_image_1.jpg' alt='My image' width={600} height={400}/>
                </div>
                <div>
                    back pagination forward
                </div>
            </div>
        </div>
    )
}

export default Hero