import Image from 'next/image'
import React from 'react'
import Logo from "../../../public/svg/image 54.svg"
import LanguageSelector from './LanguageSelector'
import Link from 'next/link'

const Header = () => {
  return (
    <>
      <section className='max-w-[1600px] mx-auto'>
        <div className='w-full px-[80px] mt-[40px] max-[769px]:mt-[30px] max-[431px]:mt-[26px] max-lg:px-[16px] max-[500px]:px-[10px]'>
          <div className='max-[431px]:py-[5px] w-full bg-gradient-to-r from-[#664AC1] to-[#30235B] rounded-[50px] shadow-[0_4px_100px_0_rgba(0,0,0,0.10)] flex flex-row items-center justify-between px-6 max-[500px]:px-3'>
            <Link href="/">
              <div className='flex flex-row items-center max-[500px]:gap-1'>
                <Image src={Logo} alt="logo" width={100} height={100} className='w-[80px] h-[80px] max-[500px]:w-[60px] max-[500px]:h-[60px] max-[430px]:w-[38px] max-[430px]:h-[38px]' />
                <h1 className='text-primary text-[36px] font-[500] max-[500px]:text-[30px] max-[430px]:text-[18px]'>Cervision</h1>
              </div>
            </Link>
            <LanguageSelector />
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
