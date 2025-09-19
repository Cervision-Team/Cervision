"use client"

import React, { useRef, useState } from 'react'

const IndividualInfo = () => {

    const [number, setNumber] = useState("+994")

    return (
        <div className='grid grid-cols-2 max-[431px]:grid-cols-1 min-[431px]:grid-rows-2 gap-[20px] max-[431px]:gap-[23px]'>
            <div className='flex flex-col gap-[5px]'>
                <label className='text-[18px] text-[#1A1A1A] font-[500]' htmlFor="name">Ad Soyad*</label>
                <input className='text-[#1A1A1A] bg-[#FFF8E7] px-[30px] py-[18px] border-[1px] border-[#30235B] rounded-[14px] font-[16px] outline-0' id="name" type="text" />
            </div>

            <div className='flex flex-col gap-[5px]'>
                <label className='text-[18px] text-[#1A1A1A] font-[500]' htmlFor="email">Email*</label>
                <input className='text-[#1A1A1A] bg-[#FFF8E7] px-[30px] py-[18px] border-[1px] border-[#30235B] rounded-[14px] font-[16px] outline-0' id="email" type="email" />
            </div>

            <div className='flex flex-col gap-[5px]'>
                <label className='text-[18px] text-[#1A1A1A] font-[500]' htmlFor="number">Əlaqə nömrəsi*</label>
                <input
                    value={number}
                    onChange={(e) => { setNumber(e.target.value) }}
                    className='text-[#1A1A1A] bg-[#FFF8E7] px-[30px] py-[18px] border-[1px] border-[#30235B] rounded-[14px] font-[16px] outline-0' id="number" type="tel" />
            </div>
        </div>
    )
}

export default IndividualInfo