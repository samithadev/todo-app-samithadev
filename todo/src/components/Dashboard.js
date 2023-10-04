import React from 'react'

import ActivityFeed from './ActivityFeed';
import Banner from './Banner';
import TaskPrior from './TaskPrior';
import Tasks from './Tasks';

export default function Dashboard() {
  return (
    
      <div className="flex flex-col gap-5 w-full max-w-screen-xl mx-auto ml-0 md:ml-[272px] mt-[104px] mb-6">
        <Banner />
        <div className="flex flex-col gap-5 md:flex-row ">
          <div id="Bg" className="border-solid border-[#d0d5dd] bg-white flex flex-col gap-6 w-full md:w-2/3 items-center pt-3 pb-6 md:ml-6 border rounded-lg">
            <Tasks />
          </div>
          <div className="flex flex-col gap-3 md:mr-12  w-full md:w-1/3 mr-6">
            <ActivityFeed />
            <TaskPrior />
          </div>
        </div>
      </div>
  )
}
