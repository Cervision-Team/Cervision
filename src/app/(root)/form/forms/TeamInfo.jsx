"use client"

import React, { useState } from 'react'

const TeamInfo = () => {

  const [teamRadio, setTeamRadio] = useState()
  const [roleRadio, setRoleRadio] = useState()
  const [team, setTeam] = useState({})

  return (
    <>
      <div className='flex flex-col gap-[17px]'>
        <span className='text-[18px] text-[#1A1A1A] font-[500]'>4. Komandanız varmı?</span>
        <div className='grid gap-[20px] grid-cols-[160px_160px_160px] max-[769px]:grid-cols-3 max-[600px]:grid-cols-2'>

          <div onClick={() => { setTeamRadio(true) }} className='bg-[#FFF8E7] cursor-pointer flex gap-[15px] border-[1px] rounded-[12px] border-[#30235B] radio-container pl-[20px] py-[13px]'>
            <div className='flex items-center justify-center radio-outline border-[2px] border-[#30235B] rounded-full w-[24px] h-[24px]'>
              {teamRadio ? <div className='radio bg-[#30235B] w-[14px] h-[14px] rounded-full'></div> : ""}
            </div>
            <span className='text-[16px] text-[#1A1A1A] font-[500]'>Bəli</span>
          </div>

          <div onClick={() => { setTeamRadio(false) }} className='bg-[#FFF8E7] cursor-pointer flex gap-[15px] border-[1px] rounded-[12px] border-[#30235B] radio-container pl-[20px] py-[13px]'>
            <div className='flex items-center justify-center radio-outline border-[2px] border-[#30235B] rounded-full w-[24px] h-[24px]'>
              {!teamRadio ? <div className='radio bg-[#30235B] w-[14px] h-[14px] rounded-full'></div> : ""}
            </div>
            <span className='text-[16px] text-[#1A1A1A] font-[500]'>Xeyr</span>
          </div>

        </div>
      </div>

      {teamRadio ?
        <div className='flex flex-col gap-[17px]'>
          <span className='text-[18px] text-[#1A1A1A] font-[500]'>4. Komandanız varmı?</span>
          <div className='grid gap-[20px] grid-cols-2 max-[600px]:grid-cols-1'>

            <input placeholder='Ad Soyad' className='placeholder-[#30235B] text-[#1A1A1A] bg-[#FFF8E7] px-[30px] py-[18px] border-[1px] border-[#30235B] rounded-[14px] font-[16px] outline-0' id="name" type="text" />
            <input placeholder='Ad Soyad' className='placeholder-[#30235B] text-[#1A1A1A] bg-[#FFF8E7] px-[30px] py-[18px] border-[1px] border-[#30235B] rounded-[14px] font-[16px] outline-0' id="name" type="text" />
            <input placeholder='Ad Soyad' className='placeholder-[#30235B] text-[#1A1A1A] bg-[#FFF8E7] px-[30px] py-[18px] border-[1px] border-[#30235B] rounded-[14px] font-[16px] outline-0' id="name" type="text" />
            <input placeholder='Ad Soyad' className='placeholder-[#30235B] text-[#1A1A1A] bg-[#FFF8E7] px-[30px] py-[18px] border-[1px] border-[#30235B] rounded-[14px] font-[16px] outline-0' id="name" type="text" />
            <input placeholder='Ad Soyad' className='placeholder-[#30235B] text-[#1A1A1A] bg-[#FFF8E7] px-[30px] py-[18px] border-[1px] border-[#30235B] rounded-[14px] font-[16px] outline-0' id="name" type="text" />
            <input placeholder='Ad Soyad' className='placeholder-[#30235B] text-[#1A1A1A] bg-[#FFF8E7] px-[30px] py-[18px] border-[1px] border-[#30235B] rounded-[14px] font-[16px] outline-0' id="name" type="text" />

          </div>
        </div>
        : ""}

      <div className='flex flex-col gap-[17px]'>
        <span className='text-[18px] text-[#1A1A1A] font-[500]'>2. Daha əvvəl Hackathon tədbirlərində iştirak etmisinizmi?</span>
        <div className='flex flex-wrap gap-[20px]'>

          <div onClick={() => { setRoleRadio("Dizayn") }} className='basis-[160px] shrink-0 bg-[#FFF8E7] cursor-pointer flex gap-[15px] border-[1px] rounded-[12px] border-[#30235B] radio-container px-[20px] py-[13px]'>
            <div className='flex items-center justify-center radio-outline border-[2px] border-[#30235B] rounded-full w-[24px] h-[24px]'>
              {roleRadio === "Dizayn" ? <div className='radio bg-[#30235B] w-[14px] h-[14px] rounded-full'></div> : ""}
            </div>
            <span className='text-[16px] text-[#1A1A1A] font-[500] whitespace-nowrap'>Dizayn</span>
          </div>

          <div onClick={() => { setRoleRadio("Proqramlaşdırma") }} className='basis-[160px] shrink-0 bg-[#FFF8E7] cursor-pointer flex gap-[15px] border-[1px] rounded-[12px] border-[#30235B] radio-container px-[20px] py-[13px]'>
            <div className='flex items-center justify-center radio-outline border-[2px] border-[#30235B] rounded-full w-[24px] h-[24px]'>
              {roleRadio === "Proqramlaşdırma" ? <div className='radio bg-[#30235B] w-[14px] h-[14px] rounded-full'></div> : ""}
            </div>
            <span className='text-[16px] text-[#1A1A1A] font-[500] whitespace-nowrap'>Proqramlaşdırma</span>
          </div>


          <div onClick={() => { setRoleRadio("Rəqəmsal marketinq") }} className='basis-[160px] shrink-0 bg-[#FFF8E7] cursor-pointer flex gap-[15px] border-[1px] rounded-[12px] border-[#30235B] radio-container px-[20px] py-[13px]'>
            <div className='flex items-center justify-center radio-outline border-[2px] border-[#30235B] rounded-full w-[24px] h-[24px]'>
              {roleRadio === "Rəqəmsal marketinq" ? <div className='radio bg-[#30235B] w-[14px] h-[14px] rounded-full'></div> : ""}
            </div>
            <span className='text-[16px] text-[#1A1A1A] font-[500] whitespace-nowrap'>Rəqəmsal marketinq</span>
          </div>


          <div onClick={() => { setRoleRadio("Biznes inkişafı") }} className='basis-[160px] shrink-0 bg-[#FFF8E7] cursor-pointer flex gap-[15px] border-[1px] rounded-[12px] border-[#30235B] radio-container px-[20px] py-[13px]'>
            <div className='flex items-center justify-center radio-outline border-[2px] border-[#30235B] rounded-full w-[24px] h-[24px]'>
              {roleRadio === "Biznes inkişafı" ? <div className='radio bg-[#30235B] w-[14px] h-[14px] rounded-full'></div> : ""}
            </div>
            <span className='text-[16px] text-[#1A1A1A] font-[500] whitespace-nowrap'>Biznes inkişafı</span>
          </div>

          <div onClick={() => { setRoleRadio("Data analizi") }} className='basis-[160px] shrink-0 bg-[#FFF8E7] cursor-pointer flex gap-[15px] border-[1px] rounded-[12px] border-[#30235B] radio-container px-[20px] py-[13px]'>
            <div className='flex items-center justify-center radio-outline border-[2px] border-[#30235B] rounded-full w-[24px] h-[24px]'>
              {roleRadio === "Data analizi" ? <div className='radio bg-[#30235B] w-[14px] h-[14px] rounded-full'></div> : ""}
            </div>
            <span className='text-[16px] text-[#1A1A1A] font-[500] whitespace-nowrap'>Data analizi</span>
          </div>

          <div onClick={() => { setRoleRadio("Süni intellekt") }} className='basis-[160px] shrink-0 bg-[#FFF8E7] cursor-pointer flex gap-[15px] border-[1px] rounded-[12px] border-[#30235B] radio-container px-[20px] py-[13px]'>
            <div className='flex items-center justify-center radio-outline border-[2px] border-[#30235B] rounded-full w-[24px] h-[24px]'>
              {roleRadio === "Süni intellekt" ? <div className='radio bg-[#30235B] w-[14px] h-[14px] rounded-full'></div> : ""}
            </div>
            <span className='text-[16px] text-[#1A1A1A] font-[500] whitespace-nowrap'>Süni intellekt</span>
          </div>

          <div onClick={() => { setRoleRadio("Kibertəhlükəsizlik") }} className='basis-[160px] shrink-0 bg-[#FFF8E7] cursor-pointer flex gap-[15px] border-[1px] rounded-[12px] border-[#30235B] radio-container px-[20px] py-[13px]'>
            <div className='flex items-center justify-center radio-outline border-[2px] border-[#30235B] rounded-full w-[24px] h-[24px]'>
              {roleRadio === "Kibertəhlükəsizlik" ? <div className='radio bg-[#30235B] w-[14px] h-[14px] rounded-full'></div> : ""}
            </div>
            <span className='text-[16px] text-[#1A1A1A] font-[500] whitespace-nowrap'>Kibertəhlükəsizlik</span>
          </div>

          <div onClick={() => { setRoleRadio("Layihə idarəçiliyi / Scrum / Agile") }} className='basis-[160px] shrink-0 bg-[#FFF8E7] cursor-pointer flex gap-[15px] border-[1px] rounded-[12px] border-[#30235B] radio-container px-[20px] py-[13px]'>
            <div className='flex items-center justify-center radio-outline border-[2px] border-[#30235B] rounded-full w-[24px] h-[24px]'>
              {roleRadio === "Layihə idarəçiliyi / Scrum / Agile" ? <div className='radio bg-[#30235B] w-[14px] h-[14px] rounded-full'></div> : ""}
            </div>
            <span className='text-[16px] text-[#1A1A1A] font-[500] whitespace-nowrap'>Layihə idarəçiliyi / Scrum / Agile</span>
          </div>

          <div onClick={() => { setRoleRadio("Digər") }} className='basis-[160px] shrink-0 bg-[#FFF8E7] cursor-pointer flex gap-[15px] border-[1px] rounded-[12px] border-[#30235B] radio-container px-[20px] py-[13px]'>
            <div className='flex items-center justify-center radio-outline border-[2px] border-[#30235B] rounded-full w-[24px] h-[24px]'>
              {roleRadio === "Digər" ? <div className='radio bg-[#30235B] w-[14px] h-[14px] rounded-full'></div> : ""}
            </div>
            <span className='text-[16px] text-[#1A1A1A] font-[500] whitespace-nowrap'>Digər</span>
          </div>

        </div>
      </div>
    </>
  )
}

export default TeamInfo