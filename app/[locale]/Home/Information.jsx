"use client"

import users from "../../../public/svg/users.svg"
import location from "../../../public/svg/location.svg"
import projects from "../../../public/svg/projects.svg"
import Image from "next/image"
import { useTranslations } from "next-intl"

const Information = () => {
  const t = useTranslations('Information');
  return (
    <>
      <div className='w-full h-[200px] px-[16px] md:px-[80px] max-[1150px]:h-[150px] max-[500px]:h-[100px]'>
        <div className='w-full h-full bg-gradient-to-r from-[#30235B] to-[#664AC1] px-[190px] max-[1033px]:px-[16px] flex flex-row lg:flex-row items-center justify-between mt-[40px] lg:mt-[86px] rounded-[20px] lg:rounded-[40px] shadow-[0_4px_10px_0_rgba(0,0,0,0.10)] py-[20px] lg:py-[38px] max-[1033px]:items-center'>
 
          <div className='w-full lg:w-auto h-full flex flex-row items-center justify-center lg:justify-start mb-6 lg:mb-0 max-[1033px]:justify-center max-[1033px]:mt-[20px]'>
            <div className='flex flex-row items-center justify-center gap-5 lg:gap-[28px]'>
              <div className='w-[76px] h-[76px] lg:w-[56px] lg:h-[56px] bg-[#FFF8E7] rounded-full flex items-center justify-center max-[1033px]:w-[50px] max-[1033px]:h-[50px] max-[768px]:w-[40px] max-[768px]:h-[40px] max-[500px]:w-[30px] max-[500px]:h-[30px]'>
                <Image src={users} alt="users" width={40} height={32} className="max-[1033px]:w-[25px] max-[1033px]:h-[20px] max-[500px]:w-[15px] max-[500px]:h-[12px]"/>
              </div>
              <div className="flex flex-col">
 <p className="text-[#FFF8E7] text-[36px]/[24px] lg:text-[24px]/[30px] font-bold max-[1033px]:text-[20px]/[24px] max-[500px]:text-[16px]/[20px]">20+</p>
 <p className="text-[#C4C4C4] text-[24px]/[24px] lg:text-[20px]/[30px] max-[1033px]:text-[16px]/[24px] max-[500px]:text-[12px]/[16px]">{t('staff')}</p>
              </div>
            </div>
          </div>

          <hr className="w-[2px] h-full bg-[#FFF8E7] max-[1033px]:hidden max-[500px]:hidden"/>

          <div className='w-full lg:w-auto h-full flex flex-row items-center justify-center lg:justify-start mb-6 lg:mb-0 max-[1033px]:justify-center  max-[1033px]:mt-[20px]'>
            <div className='flex flex-row items-center justify-center gap-5 lg:gap-[28px]'>
              <div className='w-[76px] h-[76px] lg:w-[56px] lg:h-[56px] bg-[#FFF8E7] rounded-full flex items-center justify-center max-[1033px]:w-[50px] max-[1033px]:h-[50px] max-[768px]:w-[40px] max-[768px]:h-[40px] max-[500px]:w-[30px] max-[500px]:h-[30px]'>
                <Image src={location} alt="location" width={40} height={40} className="max-[1033px]:w-[25px] max-[1033px]:h-[20px] max-[500px]:w-[15px] max-[500px]:h-[12px]"/>
              </div>
              <div className="flex flex-col">
                <p className="text-[#FFF8E7] text-[36px]/[24px] lg:text-[24px]/[30px] font-bold max-[1033px]:text-[20px]/[24px] max-[500px]:text-[16px]/[20px]">10+</p>
                <p className="text-[#C4C4C4] text-[24px]/[24px] lg:text-[20px]/[30px] max-[500px]:text-[12px]/[16px]">{t('location')}</p>
              </div>
            </div>
          </div>

          <hr className="w-[2px] h-full bg-[#FFF8E7] max-[1033px]:hidden max-[500px]:hidden"/>


          <div className='w-full lg:w-auto h-full flex flex-row items-center justify-center lg:justify-start'>
            <div className='flex flex-row items-center justify-center gap-5 lg:gap-[28px]'>
              <div className='w-[76px] h-[76px] lg:w-[56px] lg:h-[56px] bg-[#FFF8E7] rounded-full flex items-center justify-center max-[1033px]:w-[50px] max-[1033px]:h-[50px] max-[768px]:w-[40px] max-[768px]:h-[40px] max-[500px]:w-[30px] max-[500px]:h-[30px]'>
                <Image src={projects} alt="projects" width={40} height={40} className="max-[1033px]:w-[25px] max-[1033px]:h-[20px] max-[500px]:w-[15px] max-[500px]:h-[12px]"/>
              </div>
              <div className="flex flex-col">
                <p className="text-[#FFF8E7] text-[36px]/[24px] lg:text-[24px]/[30px] font-bold max-[1033px]:text-[20px]/[24px] max-[500px]:text-[16px]/[20px]">40+</p>
                <p className="text-[#C4C4C4] text-[24px]/[24px] lg:text-[20px]/[30px] max-[500px]:text-[12px]/[16px]">{t('project')}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Information
