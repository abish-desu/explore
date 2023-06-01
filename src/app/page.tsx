import React from 'react'
import Image from 'next/image'
import Patan from './../../public/patan.jpg'
const page = () => {
  return (
    <div className='flex justify-between h-screen space-x-2'>
    <div>
      <Image alt='img' src={Patan} className='w-full h-full object-cover' />
    </div>
    <div>
      <Image alt='img' src={Patan} className='w-full h-full object-cover' />
    </div>
    <div>
      <Image alt='img' src={Patan} className='w-full h-full object-cover' />
    </div>
  </div>
  )
}

export default page