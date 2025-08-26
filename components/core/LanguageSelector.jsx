"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { routing } from "@/i18n/navigation";
import ArrowDown from "../../public/svg/ArrowDown.svg";
import AzeFlag from "../../public/svg/AZ.svg";
import EnFlag from "../../public/svg/US.svg";
import RuFlag from "../../public/svg/RU.svg";

const flags = [
  { name: "az", label: "AZE", flag: AzeFlag },
  { name: "en", label: "ENG", flag: EnFlag },
  { name: "ru", label: "RUS", flag: RuFlag },
];

const LanguageSelector = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const detectedLang = routing.locales.includes(pathname.split("/")[1])
    ? pathname.split("/")[1]
    : routing.defaultLocale;
  const [currentLang, setCurrentLang] = useState(detectedLang);

  const currentFlag =
    flags.find((f) => f.name === currentLang)?.flag || flags[0].flag;

  const currentLabel =
    flags.find((f) => f.name === currentLang)?.label || flags[0].label;

const handleSelect = (lang) => {
  setCurrentLang(lang);

  const segments = pathname.split("/").filter(Boolean);

  if (routing.locales.includes(segments[0])) {
    segments[0] = lang; 
  } else {
    segments.unshift(lang);
  }

  const newPath = "/" + segments.join("/");
  router.push(newPath);
  setIsOpen(false);
};

  return (
    <div className="flex">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex flex-row items-center text-[21px] text-white dark:text-[var(--main-color)] rounded-md focus:outline-none"
        >
          <Image
            src={currentFlag}
            alt={currentLang}
            width={32}
            height={32}
            className="mr-[8px]"
          />
          <span className="max-[500px]:hidden">{currentLabel}</span>
          <Image
            src={ArrowDown}
            alt="Arrow Down"
            width={32}
            height={32}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {isOpen && (
          <ul className="absolute z-50 bg-white text-center right-0 mt-1 border border-gray-300 rounded-md shadow-lg">
            {flags.map((flag) => (
              <li
                key={flag.name}
                onClick={() => handleSelect(flag.name)}
                className={`${
                  currentLang === flag.name
                    ? "text-[var(--primary-color)]"
                    : "text-gray-400"
                } px-3 py-1 rounded-md cursor-pointer hover:bg-[#f3f4f6]`}
              >
                {flag.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;
