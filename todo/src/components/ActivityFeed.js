import React from 'react'
import Avatarmale from '../Assets/Avatar-1.svg'
import Avatarfemale from '../Assets/Avatar-2.svg'

export default function ActivityFeed() {
    return (
        <div
            id="Bg2"
            className="border-solid border-[#d0d5dd] bg-white flex flex-col justify-center gap-4 w-[442px] items-start py-4 border rounded-lg"
        >
            <div
                id="HeaderName2"
                className="font-['Inter'] font-medium leading-[24px] ml-4"
            >
                Activity Feed
            </div>

            <div className="self-stretch flex flex-col gap-1">
                <div id="Divider12" className="bg-[#e4e7ec] h-px shrink-0" />
                <div className="flex flex-row gap-2 items-start ml-4 mr-1">
                    <div className="self-end flex flex-col justify-between mt-3 gap-4 w-[408px]">
                        <div className="flex flex-row mr-2 gap-2 items-start">
                            <img
                                src={Avatarmale}
                                alt='user1'
                            />
                            <div className="flex flex-col w-[358px] items-start">
                                <div className="text-sm font-['Inter'] font-semibold leading-[24px] w-full">
                                    Kushantha Charuka<div className="contents"> created </div>
                                    <div className="text-[#bc006d] contents">
                                        Contract #00124 need John Beige’s signature
                                    </div>
                                </div>
                                <div className="text-xs font-['Inter'] leading-[22px] text-[#757575]">
                                    Sep 16, 2022 at 11:30 AM
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row mr-2 gap-2 items-start">
                            <img
                                src={Avatarfemale}
                                alt='user2'
                            />
                            <div className="flex flex-col w-[358px] items-start">
                                <div className="text-sm font-['Inter'] leading-[24px] w-full">
                                    Lorem ipsum <span className='font-semibold'>dolor sit amet</span>, consectetur adipiscing elit.<span className='font-semibold'>Maecenas</span> pretium neque
                                </div>
                                <div className="text-xs font-['Inter'] leading-[22px] text-[#757575]">
                                    Sep 16, 2022 at 11:45 AM
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-row mr-2 gap-2 items-start">
                            <img
                                src={Avatarfemale}
                                alt='user2'
                            />
                            <div className="flex flex-col w-[358px] items-start">
                                <div className="text-sm font-['Inter'] leading-[24px] w-full">
                                    Lorem ipsum <span className='font-semibold'>dolor sit amet</span>, consectetur adipiscing elit.<span className='font-semibold'>Maecenas</span> pretium neque
                                </div>
                                <div className="text-xs font-['Inter'] leading-[22px] text-[#757575]">
                                    Sep 16, 2022 at 11:45 AM
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
