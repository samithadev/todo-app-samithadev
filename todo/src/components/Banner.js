import React from 'react'
import VectorSvg from '../Assets/Vector.svg';
import Close from '../Assets/Close.svg';

export default function Banner() {
  return (
        <div className="border-solid border-[#d0d5dd] overflow-hidden bg-white flex flex-row justify-center gap-20 items-center mx-6 border rounded-lg w-[1120px] h-[120px]">
            <div className="flex flex-col gap-1 w-[800px] items-start">
              <div className="text-2xl font-['Inter'] font-semibold tracking-[-0.48] leading-[32px]">
                Welcome back, John Doe
              </div>
              <div className="text-sm font-['Inter'] leading-[24px] text-[#757575] w-[849px] h-[48]">
                The end of the year is coming. Are you planning your performance
                interviews? You can do this super efficiently with Acmy.
                <br />
                <span className="solid 1px underline text-[#bc006d] cursor-pointer ">
                  Look here for more information
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start">
              <img
                src={VectorSvg}
                alt='circles'
              />
              <img
                src={Close}
                className="mt-4"
                alt='cross'
              />
            </div>
          </div>
  )
}
