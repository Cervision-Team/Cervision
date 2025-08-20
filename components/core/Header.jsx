import Image from 'next/image'
import React from 'react'
import Logo from "../../public/svg/image 54.svg"
import LanguageSelector from './LanguageSelector'

const Header = () => {
  return (
    <>
      <div className='max-w-[1600px] w-full h-[100px] px-[80px] mt-[40px]'>
        <div className='w-full h-25 bg-gradient-to-r from-[#664AC1] to-[#30235B] rounded-[50px] shadow-[0_4px_100px_0_rgba(0,0,0,0.10)] flex flex-row items-center justify-between px-6'>
           <div className='flex flex-row items-center'>
            <Image src={Logo} alt="logo" width={100} height={100} />
             <h1 className='text-primary text-[40px]/[70px] font-medium'>Cervision</h1>
           </div>
          <LanguageSelector />
        </div>
      </div>
    </>
  )
}

export default Header
