import users from "../../../public/svg/users.svg"
import location from "../../../public/svg/location.svg"
import projects from "../../../public/svg/projects.svg"
import Image from "next/image"

const Information = () => {
  return (
    <>
      <div className='w-full h-[200px] px-[16px] md:px-[80px] max-[1150px]:h-auto'>
        <div className='w-full h-full bg-gradient-to-r from-[#30235B] to-[#664AC1] flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-[110px] mt-[40px] lg:mt-[86px] rounded-[20px] lg:rounded-[40px] shadow-[0_4px_10px_0_rgba(0,0,0,0.10)] py-[20px] lg:py-[38px]'>
          
          <div className='w-full lg:w-auto h-full flex flex-row items-center justify-center lg:justify-start pr-0 lg:pr-[92px] border-r-0 lg:border-r-[2px] border-r-solid border-r-[#FFF8E7] mb-6 lg:mb-0'>
            <div className='flex flex-row items-center justify-center gap-5 lg:gap-[28px]'>
              <div className='w-[40px] h-[40px] lg:w-[56px] lg:h-[56px] bg-[#FFF8E7] rounded-full flex items-center justify-center'>
                <Image src={users} alt="users" width={24} height={24} />
              </div>
              <div className="flex flex-col">
                <p className="text-[#FFF8E7] text-[18px]/[24px] lg:text-[24px]/[30px] font-bold">20+</p>
                <p className="text-[#C4C4C4] text-[16px]/[24px] lg:text-[20px]/[30px]">Staff</p>
              </div>
            </div>
          </div>

          <div className='w-full lg:w-auto h-full flex flex-row items-center justify-center lg:justify-start pr-0 lg:pr-[92px] border-r-0 lg:border-r-[2px] border-r-solid border-r-[#FFF8E7] mb-6 lg:mb-0'>
            <div className='flex flex-row items-center justify-center gap-5 lg:gap-[28px]'>
              <div className='w-[40px] h-[40px] lg:w-[56px] lg:h-[56px] bg-[#FFF8E7] rounded-full flex items-center justify-center'>
                <Image src={location} alt="location" width={24} height={24} />
              </div>
              <div className="flex flex-col">
                <p className="text-[#FFF8E7] text-[18px]/[24px] lg:text-[24px]/[30px] font-bold">10+</p>
                <p className="text-[#C4C4C4] text-[16px]/[24px] lg:text-[20px]/[30px]">Location</p>
              </div>
            </div>
          </div>

          <div className='w-full lg:w-auto h-full flex flex-row items-center justify-center lg:justify-start pr-0 lg:pr-[92px]'>
            <div className='flex flex-row items-center justify-center gap-5 lg:gap-[28px]'>
              <div className='w-[40px] h-[40px] lg:w-[56px] lg:h-[56px] bg-[#FFF8E7] rounded-full flex items-center justify-center'>
                <Image src={projects} alt="projects" width={24} height={24} />
              </div>
              <div className="flex flex-col">
                <p className="text-[#FFF8E7] text-[18px]/[24px] lg:text-[24px]/[30px] font-bold">40+</p>
                <p className="text-[#C4C4C4] text-[16px]/[24px] lg:text-[20px]/[30px]">Project</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Information
