import React from 'react'
import ProfileImg from '../Assets/Profile.svg'
import NotificationsImg from '../Assets/Notifications.svg'
import ChevrondownImg from '../Assets/Chevron-down.svg'

export default function Header() {
  return (
    <div>
        <div className="bg-white flex flex-col justify-end mb-px gap-5 h-[80px] ">
            <div className="flex flex-row justify-between items-center mx-6 ">
              <div
                id="HeaderTitle"
                className="text-xl font-['Inter'] font-semibold tracking-[-0.4] leading-[32px]"
              >
                Dashboard
              </div>
              <div className="self-start flex flex-row gap-6 items-center">
                <img
                  src={NotificationsImg}
                  alt='bell'
                />
                <div className="self-start flex flex-row gap-2 items-center">
                  <img
                    src={ProfileImg}
                    alt='Userphoto'
                  />
                  <img
                    src={ChevrondownImg}
                    alt='downarrow'
                  />
                </div>
              </div>
            </div>
            <div
              id="Divider"
              className="shadow-[0px_1px_4px_0px_rgba(0,_0,_0,_0.08)] bg-[#eaecf0] h-px shrink-0"
            />
          </div>
    </div>
  )
}
