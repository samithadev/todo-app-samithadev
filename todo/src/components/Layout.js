import React from 'react'
import Header from './Header'
import Sidebar from './Sidebar'

import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <div id="DashboardRoot" className="overflow-hidden bg-[#fafafa] flex flex-col w-full items-start md:flex-row">
            <div className="hidden md:flex fixed left-0 top-0 h-full ">
                <Sidebar />
            </div>
            <div className="fixed md:w-[1268px] md:ml-[272px] ml-0 w-full">
                <Header />
            </div>

            <Outlet />

        </div>
    )
}
