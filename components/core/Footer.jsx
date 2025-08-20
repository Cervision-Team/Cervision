
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import CervisionLogo from "../../public/svg/image 54.svg";
import PhoneWhite from "../../public/svg/PhoneWhite.svg";
import MailWhite from "../../public/svg/MailWhite.svg";
import FooterIcon from '../ui/FooterIcon';
import EmailInput from "../ui/EmailInput";

const Footer = () => {

  return (
    <>
      <section className="mt-[80px] sm:mt-[100px] lg:mt-[120px] bg-gradient-to-r from-[#664AC1] to-[#30235B]">
        <div className="relative max-w-[1600px] w-full px-4 sm:px-8 lg:px-20 pt-10 sm:pt-14 lg:pt-16">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-[#4361EE] opacity-10 -z-10"></div>

          {/* Footer Container */}
          <div className="relative z-10 font-medium text-white 
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
            gap-10 sm:gap-12 lg:gap-0
            text-center sm:text-left
            items-center sm:items-start">

            {/* Logo and Contact Info */}
            <div className="flex flex-col gap-3 sm:gap-4 items-center sm:items-start">
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <Image src={CervisionLogo} alt="Cervision" width={32} height={32} />
                <span className="text-primary font-semibold text-xl sm:text-2xl/[70px] main-logo-style">Cervision</span>
              </div>
              <div className="flex flex-col gap-3 text-sm sm:text-base">
                <div className="flex items-center gap-2 justify-center sm:justify-start">
                  <Image src={PhoneWhite} alt="Phone" width={18} height={18} />
                  <a href="tel:+994552224120" className="break-words">+994 55 971 17 67</a>
                </div>
               <div className="flex items-start gap-2">
                 <Image src={MailWhite} alt="Mail" width={18} height={18} />
                 <a
                   href="mailto:cervision.edu.az@gmail.com"
                   className="break-all whitespace-normal text-sm sm:text-base leading-snug"
                 >
                   cervision.edu.az@gmail.com
                 </a>
               </div>
              </div>
            </div>

            {/* Keçidlər */}
            <div className="flex flex-col gap-6 sm:gap-8 mt-6 sm:mt-0 items-center sm:items-start">
              <span className="text-primary text-lg sm:text-xl lg:text-[24px] font-medium">Keçidlər</span>
              <ul className="flex flex-col gap-2 text-sm sm:text-base text-white">
                {["Startup", "Eko sistem", "Hackathon", "Haqqımızda", "Xidmətlər", "Bloq", "Üzv ol"].map((place) => (
                  <li key={place}>
                    <Link href="/">{place}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Komandalar */}
            <div className="flex flex-col gap-6 sm:gap-8 items-center sm:items-start">
              <span className="text-primary text-lg sm:text-xl lg:text-[24px] font-medium">Komandalar</span>
              <ul className="flex flex-col gap-2 text-sm sm:text-base text-white">
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
            <div className="w-full lg:w-auto flex flex-col gap-6 mt-6 sm:mt-8 lg:mt-0 items-center sm:items-start">
              <p className="text-primary text-lg sm:text-xl lg:text-[23px] font-medium text-center sm:text-left">
                Təkliflərinizi bizimlə bölüşün!
              </p>

              <EmailInput />

                  <div className="flex items-center justify-center sm:justify-start mt-4 sm:mt-[8px] lg:self-center">
                <div className='flex flex-row items-center justify-center gap-4 sm:gap-[20px]'>
                  <FooterIcon icon={<FaInstagram />} backgroundColor="linear-gradient(to right, #8a3ab9, #e95950, #fccc63)" />
                  <FooterIcon icon={<FaFacebookF />} backgroundColor="#0035BB" />
                  <FooterIcon icon={<FaLinkedinIn />} backgroundColor="#0073AF" />
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[rgba(255,248,231,0.20)] mx-auto mt-10 sm:mt-[60px] lg:mt-[130px]"></div>

          {/* Bottom Section */}
          <div className="h-auto py-4 flex flex-col md:flex-row items-center justify-center md:justify-between text-white text-xs sm:text-sm md:text-base font-medium text-center gap-2">
            <p className="max-w-[300px] sm:max-w-none">Gənclik plaza, Atatürk prospekti, AIM, Baku, Azerbaijan</p>
            <p>© 2025 Cervision. All Rights Reserved.</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
