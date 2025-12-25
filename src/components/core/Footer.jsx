import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaFacebookF } from "react-icons/fa";
import CervisionLogo from "../../../public/svg/image 54.svg";
import PhoneWhite from "../../../public/svg/PhoneWhite.svg";
import MailWhite from "../../../public/svg/MailWhite.svg";
import FooterIcon from '../ui/FooterIcon';
import EmailInput from "../ui/EmailInput";

const Footer = () => {

  return (
    <>
      <section className="bg-gradient-to-r from-[#664AC1] to-[#30235B]">
        <div className="max-w-[1600px] mx-auto relative w-full px-4 sm:px-8 lg:px-20 pt-10 sm:pt-14 lg:pt-16">
          {/* Background overlay */}
          <div className="absolute inset-0 bg-[#4361EE] opacity-10 -z-10"></div>

          {/* Footer Container */}
          <div className="relative z-10 font-medium text-white 
            grid grid-cols-2 lg:grid-cols-4
            gap-4 xs:gap-6 sm:gap-8 lg:gap-12">

            {/* Logo and Contact Info */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <div className="flex items-center gap-2">
                <Image src={CervisionLogo} alt="Cervision" width={28} height={28} className="sm:w-8 sm:h-8" />
                <span className="text-primary font-semibold text-lg sm:text-xl lg:text-2xl main-logo-style">Cervision</span>
              </div>
              <div className="flex flex-col gap-2 sm:gap-3 text-xs sm:text-sm lg:text-base">
                <div className="flex items-center gap-2">
                  <Image src={PhoneWhite} alt="Phone" width={16} height={16} className="flex-shrink-0 sm:w-[18px] sm:h-[18px]" />
                  <a href="tel:+994559711767" className="hover:text-primary transition-colors text-xs sm:text-sm lg:text-base">
                    +994 55 971 17 67
                  </a>
                </div>
                <div className="flex items-start gap-2">
                  <Image src={MailWhite} alt="Mail" width={16} height={16} className="flex-shrink-0 mt-0.5 sm:w-[18px] sm:h-[18px] sm:mt-1" />
                  <a
                    href="mailto:cervision.edu.az@gmail.com"
                    className="break-all text-xs sm:text-sm lg:text-base leading-snug hover:text-primary transition-colors"
                  >
                    cervision.edu.az@gmail.com
                  </a>
                </div>

                <div className="flex items-center mt-1 sm:mt-2">
                  <div className='flex flex-row items-center gap-2 sm:gap-4'>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/cervision.az?igsh=MTh6MGQxNnJhZG03MA==">
                      <FooterIcon icon={<FaInstagram />} backgroundColor="linear-gradient(to right, #8a3ab9, #e95950, #fccc63)" />
                    </a>
                    <FooterIcon icon={<FaFacebookF />} backgroundColor="#0035BB" />
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/106264282/admin/dashboard/">
                      <FooterIcon icon={<FaLinkedinIn />} backgroundColor="#0073AF" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Keçidlər */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <span className="text-primary text-base sm:text-lg lg:text-xl xl:text-[24px] font-medium">Keçidlər</span>
              <ul className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm lg:text-base text-white">
                {["Startup", "Eko sistem", "Hackathon", "Haqqımızda", "Xidmətlər", "Bloq", "Üzv ol"].map((place) => (
                  <li key={place} className="hover:text-primary transition-colors">
                    <Link href="/">{place}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Komandalar */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <span className="text-primary text-base sm:text-lg lg:text-xl xl:text-[24px] font-medium">Komandalar</span>
              <ul className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm lg:text-base text-white">
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
                  <li key={link.name} className="hover:text-primary transition-colors">
                    <Link href={link.href}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Email Subscription */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <p className="text-primary text-base sm:text-lg lg:text-xl xl:text-[23px] font-medium">
                Təkliflərinizi bizimlə bölüşün!
              </p>
              <div className="w-full max-w-[320px]">
                <EmailInput />
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[rgba(255,248,231,0.20)] mx-auto mt-10 sm:mt-[60px] lg:mt-[80px]"></div>

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