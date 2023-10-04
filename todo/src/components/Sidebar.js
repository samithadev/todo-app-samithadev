import React from 'react'
import DashboardImage from '../Assets/Dashboard.svg';
import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
        <div className="bg-[#33074f] flex flex-col gap-16  items-center w-[272px] h-[900px] ">
          <div className="bg-[rgba(235,_230,_237,_0.1)] self-start flex flex-col justify-center w-[272px] h-20 items-center">
            <div className="text-2xl font-['Inter'] font-semibold tracking-[-0.48] leading-[32px] text-white">
              Acmy Solutions
            </div>
          </div>
          <div className="bg-[rgba(235,_230,_237,_0.1)] flex flex-row gap-3 w-[240px] h-10 shrink-0 items-center px-3 rounded-[24px] cursor-pointer">
            <img
              src={DashboardImage}
              alt='dash'
            />
            <Link to={"/"} id="Text1" className="font-['Inter'] leading-[24px] text-white">
              Dashboard
            </Link>
          </div>
        </div>
  )
}
