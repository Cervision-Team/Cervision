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
    <button
      className="w-[248px] h-[60px] bg-[#FFBF19] flex flex-row items-center justify-center gap-[10px] rounded-[12px] cursor-pointer mb-[80px]"
      onClick={handleClick}
      disabled={!formLink}
    >
      <span className="text-[20px] font-500">Formu Doldur</span>
      <Image src={FormArrow} alt="Form Arrow" width={22} height={22} />
    </button>
  );
};

export default FormButton;
