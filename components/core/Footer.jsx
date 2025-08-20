'use client';

import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
 import CervisionLogo from "../../public/svg/image 54.svg";
import PhoneWhite from "../../public/svg/PhoneWhite.svg";
import MailWhite from "../../public/svg/MailWhite.svg";
import FooterArrow from "../../public/svg/FooterArrow.svg"
import FooterIcon from '../ui/FooterIcon';
import { FaFacebookF } from "react-icons/fa";
import { useMediaQuery } from "@/hooks/useMediaQuery";



const Footer = () => {
  const isMobile = useMediaQuery('(max-width: 430px)');

  return (
    <>
      {isMobile ? '' : <section className="mt-[120px] bg-gradient-to-r from-[#664AC1] to-[#30235B]">
        <div className="relative max-w-[1600px] w-full px-6 sm:px-10 lg:px-20 pt-16">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-[#4361EE] opacity-10 -z-10"></div>

          {/* Footer Container */}
          <div className="relative z-10 font-medium 
  grid grid-cols-1
  sm:grid-cols-2
  lg:grid-cols-4">

            {/* Logo and Contact Info */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center">
                <Image src={CervisionLogo} alt="Cervision" width={32} height={32} />
                <span className="text-primary font-semibold text-2xl/[70px] main-logo-style">Cervision</span>
              </div>
              <div className="flex flex-col gap-3 text-white">
                <div className="flex items-center gap-2">
                  <Image src={PhoneWhite} alt="Phone" width={20} height={20} />
                  <a href="tel:+994552224120">+994 55 971 17 67</a>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={MailWhite} alt="Mail" width={20} height={20} />
                  <a href="mailto:investhomaz@gmail.com">cervision.edu.az@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <span className="text-primary text-[24px] font-medium">Keçidlər</span>
              <ul className="flex flex-col gap-2 text-white text-[16px]/[26px]">
                {["Startup", "Eko sistem", "Hackathon", "Haqqımızda", "Xidmətlər", "Bloq", "Üzv ol"].map((place) => (
                  <li key={place}>
                    <Link href="/">{place}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col gap-8">
              <span className="text-primary text-[24px] font-medium">Komandalar</span>
              <ul className="flex flex-col gap-2 text-white text-[16px]/[26px]">
                {[
                  { name: "UX/UI Dizayn", href: "/" },
                  { name: "Qrafik Dizayn", href: "/" },
                  { name: "Motion Dizayn", href: "/" },
                  { name: "Front-end Development", href: "/" },
                  { name: "Back-end Development", href: "/" },
                  { name: "Kibertəhlükəsizlik", href: "/" },
                  { name: "Rəqəmsal Marketinq", href: "/" },
                  { name: "Hüquq", href: "/" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Email Subscription + Socials */}

            <div className="w-auto flex flex-col gap-6 ">
              <p className="text-primary text-[23px] font-medium">
                Təkliflərinizi bizimlə bölüşün!
              </p>
            
              <div className="relative self-end w-[302px] flex">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="w-full h-[60px] pl-5 pr-16 rounded-full bg-white shadow-md outline-none placeholder-gray-400"
                  />
                  <button className="absolute top-[9px] right-[12px] w-10.5 h-10.5 rounded-full bg-primary flex items-center justify-center">
                    <Image src={FooterArrow} alt="Submit" width={20} height={20} />
                  </button>
              </div>
            
              <div className="flex items-center justify-between mx-auto mt-[8px]">
                <div className='w-auto h-auto flex flex-row items-center justify-center gap-[20px]'>
                  <FooterIcon icon={<FaInstagram />} backgroundColor="linear-gradient(to right, #8a3ab9, #e95950, #fccc63)" />
                  <FooterIcon icon={<FaFacebookF />} backgroundColor="#0035BB" />
                  <FooterIcon icon={<FaLinkedinIn />} backgroundColor="#0073AF" />
                </div>
              </div>
            </div>
          </div>
             <div className="w-full h-[1px] bg-[rgba(255,248,231,0.20)] mx-auto mt-[130px]"></div>
             <div className="h-[64px] flex flex-row items-center justify-between text-white text-[16px]/[22px] font-medium text-center">
               <p>Gənclik plaza, Atatürk prospekti, AIM, Baku, Azerbaijan</p>
               <p>© 2025 Cervision. All Rights Reserved.</p>
             </div>
        </div>
      </section>}
    </>
  );
};

export default Footer;
