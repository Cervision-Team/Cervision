"use client"

import React, { useState } from 'react'

const AdditionalInfo = () => {

  const [statusRadio, setStatusRadio] = useState()
  const [experienceRadio, setExperienceRadio] = useState()
  const [projectRadio, setProjectRadio] = useState()

  return (
    <>
      <div className='flex flex-col gap-[17px]'>
        <span className='text-[18px] text-[#1A1A1A] font-[500]'>1. Təhsil/İş statusu</span>
        <div className='grid gap-[20px] grid-cols-[160px_160px_160px] max-[769px]:grid-cols-3 max-[600px]:grid-cols-2'>

          <div onClick={() => { setStatusRadio("Tələbə") }} className='bg-[#FFF8E7] cursor-pointer flex gap-[15px] border-[1px] rounded-[12px] border-[#30235B] radio-container pl-[20px] py-[13px]'>
            <div className='flex items-center justify-center radio-outline border-[2px] border-[#30235B] rounded-full w-[24px] h-[24px]'>
              {statusRadio === "Tələbə" ? <div className='radio bg-[#30235B] w-[14px] h-[14px] rounded-full'></div> : ""}
            </div>
            <span className='text-[16px] text-[#1A1A1A] font-[500]'>Tələbə</span>
          </div>

          <div onClick={() => { setStatusRadio("Məzun") }} className='bg-[#FFF8E7] cursor-pointer flex gap-[15px] border-[1px] rounded-[12px] border-[#30235B] radio-container pl-[20px] py-[13px]'>
            <div className='flex items-center justify-center radio-outline border-[2px] border-[#30235B] rounded-full w-[24px] h-[24px]'>
              {statusRadio === "Məzun" ? <div className='radio bg-[#30235B] w-[14px] h-[14px] rounded-full'></div> : ""}
            </div>
            <span className='text-[16px] text-[#1A1A1A] font-[500]'>Məzun</span>
          </div>

          <div onClick={() => { setStatusRadio("Digər") }} className='bg-[#FFF8E7] cursor-pointer flex gap-[15px] border-[1px] rounded-[12px] border-[#30235B] radio-container pl-[20px] py-[13px]'>
            <div className='flex items-center justify-center radio-outline border-[2px] border-[#30235B] rounded-full w-[24px] h-[24px]'>
              {statusRadio === "Digər" ? <div className='radio bg-[#30235B] w-[14px] h-[14px] rounded-full'></div> : ""}
            </div>
            <span className='text-[16px] text-[#1A1A1A] font-[500]'>Digər</span>
          </div>

        </div>
      </div>

      <div className='flex flex-col gap-[17px]'>
        <span className='text-[18px] text-[#1A1A1A] font-[500]'>2. Daha əvvəl Hackathon tədbirlərində iştirak etmisinizmi?</span>
        <div className='grid gap-[20px] grid-cols-[160px_160px_160px] max-[769px]:grid-cols-3 max-[600px]:grid-cols-2'>

          <div onClick={() => { setExperienceRadio(true) }} className='bg-[#FFF8E7] cursor-pointer flex gap-[15px] border-[1px] rounded-[12px] border-[#30235B] radio-container pl-[20px] py-[13px]'>
            <div className='flex items-center justify-center radio-outline border-[2px] border-[#30235B] rounded-full w-[24px] h-[24px]'>
              {experienceRadio ? <div className='radio bg-[#30235B] w-[14px] h-[14px] rounded-full'></div> : ""}
            </div>
            <span className='text-[16px] text-[#1A1A1A] font-[500]'>Bəli</span>
          </div>

          <div onClick={() => { setExperienceRadio(false) }} className='bg-[#FFF8E7] cursor-pointer flex gap-[15px] border-[1px] rounded-[12px] border-[#30235B] radio-container pl-[20px] py-[13px]'>
            <div className='flex items-center justify-center radio-outline border-[2px] border-[#30235B] rounded-full w-[24px] h-[24px]'>
              {!experienceRadio ? <div className='radio bg-[#30235B] w-[14px] h-[14px] rounded-full'></div> : ""}
            </div>
            <span className='text-[16px] text-[#1A1A1A] font-[500]'>Xeyr</span>
          </div>

        </div>
      </div>

      <div className='flex flex-col gap-[17px]'>
        <span className='text-[18px] text-[#1A1A1A] font-[500]'>3. Hazır Layihəniz varmı?</span>
        <div className='grid gap-[20px] grid-cols-[160px_160px_160px] max-[769px]:grid-cols-3 max-[600px]:grid-cols-2'>

          <div onClick={() => { setProjectRadio(true) }} className='bg-[#FFF8E7] cursor-pointer flex gap-[15px] border-[1px] rounded-[12px] border-[#30235B] radio-container pl-[20px] py-[13px]'>
            <div className='flex items-center justify-center radio-outline border-[2px] border-[#30235B] rounded-full w-[24px] h-[24px]'>
              {projectRadio ? <div className='radio bg-[#30235B] w-[14px] h-[14px] rounded-full'></div> : ""}
            </div>
            <span className='text-[16px] text-[#1A1A1A] font-[500]'>Bəli</span>
          </div>

          <div onClick={() => { setProjectRadio(false) }} className='bg-[#FFF8E7] cursor-pointer flex gap-[15px] border-[1px] rounded-[12px] border-[#30235B] radio-container pl-[20px] py-[13px]'>
            <div className='flex items-center justify-center radio-outline border-[2px] border-[#30235B] rounded-full w-[24px] h-[24px]'>
              {!projectRadio ? <div className='radio bg-[#30235B] w-[14px] h-[14px] rounded-full'></div> : ""}
            </div>
            <span className='text-[16px] text-[#1A1A1A] font-[500]'>Xeyr</span>
          </div>

        </div>
      </div>

      {projectRadio ?
        <>
          <div className="flex flex-col gap-[5px]">
            <span className='text-[#1A1A1A]'>Zəhmət olmasa Layihənizlə bağlı məlumat qeyd edin.</span>
            <textarea
              className='h-[115px] min-[769px]:w-[520px] scrollbar-hidden outline-none resize-none bg-[#FFF8E7] text-[16px] border-[1px] border-[#30235B] py-[18px] px-[30px] rounded-[14px] text-[#30235B]'
              name=""
              id="" placeholder='Buraya yazın...'>
            </textarea>
          </div>
        </>
        : ""}
    </>
  )
}

export default AdditionalInfo