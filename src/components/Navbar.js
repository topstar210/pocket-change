import React, { useState } from "react";
import OutsideClickHandler from 'react-outside-click-handler';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <OutsideClickHandler
      onOutsideClick={() => setIsOpen(false)}
    >
      <nav className="px-2 lg:px-11 relative z-20 flex items-center justify-between bg-[#110d0b] h-36">
        <div className="mark">
          <img src="/images/logo.png" className="w-[150px]" alt="logo" />
        </div>
        <ul className={`w-full text-[#ffd89d] xl:w-auto absolute xl:relative top-36 xl:top-0 left-0 ${isOpen ? `flex` : `hidden`} xl:flex flex-col gap-3 xl:mb-0 xl:mt-0 xl:flex-row xl:items-center xl:gap-8 bg-[#110d0b] py-5 xl:py-0`}>
          <li className="hover:text-[#ff6d00] hover:border-b hover:border-[#ff6d00] text-3xl leading-loose xl:leading-[135px] cursor-pointer">
            <div className="flex items-center justify-center">
              Audit
            </div>
          </li>
          <li className="hover:text-[#ff6d00] hover:border-b hover:border-[#ff6d00] text-3xl leading-loose xl:leading-[135px] cursor-pointer">
            <div className="flex items-center justify-center">
              Contract
            </div>
          </li>
          <li className="hover:text-[#ff6d00] hover:border-b hover:border-[#ff6d00] text-3xl leading-loose xl:leading-[135px] cursor-pointer">
            <div className="flex items-center justify-center">
              Whitepaper
            </div>
          </li>
          <li className="hover:text-[#ff6d00] hover:border-b hover:border-[#ff6d00] text-3xl leading-loose xl:leading-[135px] cursor-pointer">
            <div className="flex items-center justify-center">
              Twiter
            </div>
          </li>
          <li className="hover:text-[#ff6d00] hover:border-b hover:border-[#ff6d00] text-3xl leading-loose xl:leading-[135px] cursor-pointer">
            <div className="flex items-center justify-center">
              Telegram
            </div>
          </li>
        </ul>
        <div className="flex items-center">
          <button className="uppercase text-[#ff6d00] text-xl px-5 py-2 lg:text-3xl lg:px-16 lg:py-5 border border-[#624016] rounded-full bg-[#ffd89d05]">
            connect
          </button>
          <button className="w-12 flex items-center justify-center xl:hidden invert ml-5 p-0" onClick={handleToggle}>
            {
              isOpen ? <img src="/images/close.png" alt="close" className="w-8" />
                : <img src="/images/menu.png" alt="hamburguer menu" className="w-full" />
            }
          </button>
        </div>
      </nav>
    </OutsideClickHandler>
  );
}