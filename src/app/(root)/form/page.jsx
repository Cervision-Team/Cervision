"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import lines from '../../../../public/images/shapes/lines.svg'
import stars from '../../../../public/images/shapes/stars.svg'
import yellowStar from '../../../../public/images/shapes/yellow-star.svg'
import arrow from "../../../../public/icons/arrow.svg"
import IndividualInfo from './forms/IndividualInfo'
import AdditionalInfo from './forms/AdditionalInfo'
import TeamInfo from './forms/TeamInfo'

const page = () => {

    const [page, setPage] = useState(0)

    const nextPage = () => {
        if (page < 2) {
            setPage(page + 1)
        }
    }

    const previousPage = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }

    return (
        <section className='relative max-w-[1600px] mx-auto pb-[40px]'>
            <div className='px-[80px] max-lg:px-[16px] max-[500px]:px-[10px]'>
                <div className='z-0 absolute right-0 bottom-[0]'>
                    <div className='max-[550px]:w-[253px] max-[550px]:h-[338px]'>
                        <Image
                            alt='image'
                            src={lines}
                            width={452}
                            height={603}
                        />
                    </div>
                </div>
                <div className="relative z-10 w-[100%] overflow-hidden flex flex-col gap-[40px] mt-[40px] text-[#1A1A1A] px-[92px] max-[560px]:px-[8px] max-[768px]:px-[40px] pt-[40px] max-[431px]:pt-[20px] pb-[68px]">
                    <div className='flex flex-col max-[431px]:items-center gap-[10px]'>
                        <h1 className='max-[431px]:text-center max-[431px]:text-[20px] max-[500px]:text-[32px] text-[36px] font-[600] max-[431px]:max-w-[216px]'>Cervision Hackathon Qeydiyyat Formu</h1>
                        <span className='block max-[431px]:text-center max-[431px]:text-[14px] max-[500px]:text-[18px] text-[20px] italic'>Fikirlərini kodla, gələcəyi yarat!</span>
                    </div>
                    <div className='flex'>
                        <div className='min-[1300px]:basis-[60%] w-full'>
                            <div className='flex flex-col gap-[40px]'>
                                {page === 0 ?
                                    <IndividualInfo />
                                    : page === 1 ? <AdditionalInfo /> : <TeamInfo />
                                }
                                {
                                    page === 2 ?
                                        <button 
                                        // onClick={() => { nextPage() }} 
                                        className=' cursor-pointer rounded-[12px] h-[68px] flex justify-center bg-[#FFBF19] w-full min-[1300px]:max-w-[556px]'>
                                            <div className='text-[#FFF8E7] flex items-center gap-[10px]'>
                                                <span>Tamamla</span>
                                            </div>
                                        </button>
                                        :
                                        <button onClick={() => { nextPage() }} className='cursor-pointer rounded-[12px] h-[68px] flex justify-center bg-[#FFBF19] w-full min-[1300px]:max-w-[556px]'>
                                            <div className='text-[#FFF8E7] flex items-center gap-[10px]'>
                                                <span>Növbəti</span>
                                                <Image
                                                    alt='image'
                                                    src={arrow}
                                                    width={22}
                                                    height={22}
                                                />
                                            </div>
                                        </button>
                                }
                            </div>
                        </div>
                        <div className='max-[1300px]:hidden relative basis-[40%] w-full'>
                            <div className='absolute left-[5%] bottom-[10%]'>
                                <Image
                                    alt='image'
                                    src={stars}
                                    width={171.87}
                                    height={171.87}
                                />
                            </div>
                            <div className='absolute right-[30%] top-0'>
                                <Image
                                    alt='image'
                                    src={yellowStar}
                                    width={72.58}
                                    height={72.58}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default page