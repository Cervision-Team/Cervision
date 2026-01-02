'use client';

import Image from "next/image";
import SchoolSvg from "../../../../public/svg/schoolSvg.svg";
import PointTop from "../../../../public/svg/PointTop.svg";
import PointRight from "../../../../public/svg/PointRight.svg";
import { useMediaQuery } from "@/src/hooks/useMediaQuery"; 
import FormButton from "@/src/components/ui/FormButton";

const Hackathon = () => {
  const isLargeScreen = useMediaQuery("(min-width: 1100px)");

  return (
    <>
      <section className="max-w-[1600px] mx-auto w-full h-auto px-[80px] flex flex-col lg:flex-row items-center justify-between mt-[70px] text-center lg:text-left max-lg:px-[16px] relative">
        <div className="flex flex-col items-center lg:items-start justify-center relative">
          {isLargeScreen && (
            <Image src={PointTop} alt="Point Top" width={248} height={18} className="absolute top-[-38px] left-0" />
          )}
          <h2 className="text-[#30235B] text-[32px]/[40px] md:text-[50px]/[70px] font-semibold mb-[28px] max-sm:text-[28px]/[36px]">Halloo! <br />Hackathon İdeyan Var?<br /> Onu Gerçəyə Çevir!</h2>
          <p className="text-[#30235B] text-[18px]/[28px] md:text-[24px]/[36px] font-medium mb-[52px] text-start max-sm:text-[16px]/[24px]">
            Sənin İdeyan Dəyişiklik Yaratmağa Hazırdır.
            <br />
            <span className="font-semibold">Cervision</span> Bu Yolda
            Sənin Yanındadır!
          </p>
          <FormButton />
        </div>
        {isLargeScreen && <Image src={PointRight} alt="Point Right" width={248} height={38} className="absolute bottom-[-28px] right-20" />}
        <Image
          src={SchoolSvg}
          alt="School"
          className="w-full max-w-[684px] h-auto mt-8 lg:mt-0 max-[1100px]:h-[50%]"
        />
      </section>
    </>
  )
}

export default Hackathon
