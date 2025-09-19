// "use client";

// import React, { useState } from "react";
// import Image from "next/image";
// import { useRouter, usePathname } from "next/navigation";
// import ArrowDown from "../../../public/svg/ArrowDown.svg";
// import AzeFlag from "../../../public/svg/AZ.svg"
// import EnFlag from "../../../public/svg/US.svg";
// import RuFlag from "../../../public/svg/RU.svg";

// const flags = [
//   { name: "aze", flag: AzeFlag },
//   { name: "en", flag: EnFlag },
//   { name: "ru", flag: RuFlag },
// ];

// const LanguageSelector = () => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const [isOpen, setIsOpen] = useState(false);

//   // detect current lang from pathname
//   const currentLang = pathname.split("/")[1] || "aze";
//   const currentFlag =
//     flags.find((f) => f.name === currentLang)?.flag || flags[0].flag;

//   const handleSelect = (lang) => {
//     const segments = pathname.split("/");
//     segments[1] = lang; // replace the first part with the new lang
//     const newPath = segments.join("/");
//     // router.push(newPath);
//     setIsOpen(false);
//   };

//   return (
//     <div className="flex">
//       <div className="relative">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="cursor-pointer flex flex-row items-center text-[21px] text-white dark:text-[var(--main-color)] rounded-md focus:outline-none"
//         > 
//           <Image
//             src={currentFlag}
//             alt={currentLang}
//             width={32}
//             height={32}
//             className="mr-[8px]"
//           />
//           <span className="max-[500px]:hidden">{currentLang.toUpperCase()}</span>
//           <Image
//             src={ArrowDown}
//             alt="Arrow Down"
//             width={32}
//             height={32}
//             className={`transition-transform duration-300 ${
//               isOpen ? "rotate-180" : "rotate-0"
//             }`}
//           />
//         </button>

//         {isOpen && (
//           <ul className="absolute z-50 bg-white text-center right-0 mt-1 border border-gray-300 rounded-md shadow-lg">
//             {flags.map((flag) => (
//               <li
//                 key={flag.name}
//                 onClick={() => handleSelect(flag.name)}
//                 className={`${
//                   currentLang === flag.name
//                     ? "text-[var(--primary-color)]"
//                     : "text-gray-400"
//                 } px-3 py-1 rounded-md cursor-pointer hover:bg-[#f3f4f6]`}
//               >
//                 {flag.name.toUpperCase()}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LanguageSelector;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import ArrowDown from "../../../public/svg/ArrowDown.svg";
import AzeFlag from "../../../public/svg/AZ.svg";
import EnFlag from "../../../public/svg/US.svg";
import RuFlag from "../../../public/svg/RU.svg";

const flags = [
  { name: "aze", flag: AzeFlag },
  { name: "en", flag: EnFlag },
  { name: "ru", flag: RuFlag },
];

const LanguageSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // local state for current lang (fallback: detect from pathname)
  const detectedLang = pathname.split("/")[1] || "aze";
  const [currentLang, setCurrentLang] = useState(detectedLang);

  const currentFlag =
    flags.find((f) => f.name === currentLang)?.flag || flags[0].flag;

  const handleSelect = (lang) => {
    setCurrentLang(lang); // ✅ update UI immediately

    const segments = pathname.split("/");
    segments[1] = lang; // replace the first part with the new lang
    const newPath = segments.join("/");

    // 🚀 Routing action (disabled for now)
    // router.push(newPath);

    setIsOpen(false);
  };

  return (
    <div className="flex">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex flex-row min-[431px]:gap-[8px] items-center text-[21px] text-white dark:text-[var(--main-color)] rounded-md focus:outline-none"
        >
          <Image
            src={currentFlag}
            alt={currentLang}
            width={32}
            height={32}
            className="max-[500px]:w-[26px] max-[500px]:h-[26px] max-[431px]:w-[20px] max-[431px]:h-[20px]"
          />
          <div className="flex items-center">
            <span className="max-[431px]:hidden">{currentLang.toUpperCase()}</span>
            <Image
              src={ArrowDown}
              alt="Arrow Down"
              width={32}
              height={32}
              className={`max-[500px]:w-[26px] max-[500px]:h-[26px] max-[431px]:w-[24px] max-[431px]:h-[24px] transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"
                }`}
            />
          </div>
        </button>

        {isOpen && (
          <ul className="absolute z-50 bg-white text-center right-0 mt-1 border border-gray-300 rounded-md shadow-lg">
            {flags.map((flag) => (
              <li
                key={flag.name}
                onClick={() => handleSelect(flag.name)}
                className={`${currentLang === flag.name
                  ? "text-[var(--primary-color)]"
                  : "text-gray-400"
                  } px-3 py-1 rounded-md cursor-pointer hover:bg-[#f3f4f6]`}
              >
                {flag.name.toUpperCase()}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;

