import React from 'react'
import VectorSvg from '../Assets/Vector.svg';
import Close from '../Assets/Close.svg';

export default function Banner() {
  return (
    <div class="border-solid border-[#d0d5dd] overflow-hidden bg-white flex md:flex-row justify-center gap-6 md:gap-20 items-center mx-6 border rounded-lg md:w-[1120px] p-3 md:p-0">
  <div class="md:w-[800px] w-auto items-start">
    <div class="text-2xl font-['Inter'] font-semibold leading-[32px]">
      Welcome back, John Doe
    </div>
    <div class="text-sm font-['Inter'] leading-[24px] text-[#757575] w-full">
      The end of the year is coming. Are you planning your performance
      interviews? You can do this super efficiently with Acmy.
      <br />
      <span class="solid 1px underline text-[#bc006d] cursor-pointer ">
        Look here for more information
      </span>
    </div>
  </div>
  <div class="flex flex-row gap-6 items-start">
    <img src={VectorSvg} alt='circles' class="hidden md:block" />
    <img src={Close} class="mt-4" alt='cross' />
  </div>
</div>

  )
}
