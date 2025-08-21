'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import FormArrow from "../../public/svg/FormArrow.svg";

const FormButton = () => {
  const [formLink, setFormLink] = useState('');

  useEffect(() => {
    fetch('/api/getFormLink')
      .then((res) => res.json())
      .then((data) => {
        setFormLink(data.link); 
      })
      .catch((err) => console.error(err));
  }, []);

  const handleClick = () => {
    if (!formLink) return alert('Form link is not ready yet!');
    window.open(formLink, '_blank'); 
  };

  return (
    <>
    
    <div className='w-[248px] h-[60px] relative bg-[#FFBF19] rounded-[12px] cursor-pointer mb-[80px] group overflow-hidden'>
<div
  className="absolute bottom-0 left-0 w-full h-0 transition-all duration-800 group-hover:h-full rounded-[12px]"
  style={{ background: "linear-gradient(90deg,  #FFBF19 0%, #30235B 100%)" }}
></div>
    <button
      className="relative z-10 w-full h-full  flex flex-row items-center justify-center gap-[10px] text-base text-white transition-colors duration-800 group-hover:text-white "
      onClick={handleClick}
      disabled={!formLink}
    >
      <span className="text-[20px] font-500">Formu Doldur</span>
      <Image src={FormArrow} alt="Form Arrow" width={22} height={22} />
    </button>
    </div>
    </>
  );
};

export default FormButton;
