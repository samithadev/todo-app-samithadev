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
            <div className="fixed w-[1268px] ml-[272px]">
                <Header />
            </div>

            <Outlet />

        </div>
    )
}
