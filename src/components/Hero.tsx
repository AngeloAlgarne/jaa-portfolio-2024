import React from 'react'
import Image from 'next/image'

const Hero = () => {
    return (
        <div className='flex-1 flex flex-row w-full h-full'>
            <div>
                <h1>Hi,</h1>
                <h1 className='text-8xl font-bold'>
                    Hello World.
                </h1>
                <h1>Goodbye World.</h1>
            </div>
            <div className=''>
                <Image src='' alt='My image'/>
            </div>
        </div>
    )
}

export default Hero