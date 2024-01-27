import React from "react";
import Logo from '../assets/Logo.svg'
import Sidebar from '../assets/sidebar.svg'

const NavbarMobile = () => {
    return (
        <div className="flex justify-between p-4">
            <div className="flex items-center">
                <img src={Logo} className="w-12 md:w-24"></img>
                <span className="text-sm md:text-3xl font-bold text-[#0E2954] dark:text-white ml-3">Nash</span>

            </div>

            <div>
                <img src={Sidebar} className="w-12 md:w-24"></img>
            </div>
        </div>
    );
}

export default NavbarMobile;