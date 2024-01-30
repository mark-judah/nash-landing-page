import React from "react";
import Logo from '../assets/Logo.svg'
import Sidebar from '../assets/sidebar.svg'
import { useEffect, useState } from 'react';
import 'flowbite-react';

const NavbarMobile = () => {
    const [theme, setTheme] = useState(localStorage.theme);
    const [ischecked, setchecked] = useState(false)
    const [drawer, setOpen] = useState(false)

    const colorTheme = theme === 'dark' ? 'light' : 'dark';


    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);

        // save theme to local storage
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
            setchecked(true)
        }
    }, [theme, colorTheme]);


    const toggleDarkMode = () => {
        window.dispatchEvent(new Event('storage'))

        console.log(ischecked)
        setTheme(colorTheme);
        if (ischecked) {
            setchecked(false);
        } else {
            setchecked(true)
        }
    };

    const toggleDrawer = () => {
        if (drawer) {
            setOpen(false);
        } else {
            setOpen(true)
        }
    }
    return (
        <div className="flex justify-between p-4 items-center">
            <div className="flex items-center">
                <img src={Logo} className="w-12 md:w-24"></img>
                <span className="text-sm md:text-3xl font-bold text-[#0E2954] dark:text-white ml-3">Nash</span>

            </div>


            <div className="flex justify-center items-center">
                <div className="mr-4">
                    <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer" checked={ischecked} onChange={toggleDarkMode} />
                        <div class="w-14 h-7 bg-[#B2C4D2]  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#0E2954] after:[#B2C4D2] after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-white"></div>
                    </label>
                </div>

                <div>
                    <img src={Sidebar} onClick={toggleDrawer} className="w-12 md:w-24"></img>
                </div>

                <div className="flex">

                    <div class={`${drawer ? "w-64 fixed top-20  z-40 h-fit p-4 overflow-y-auto transition-transform -translate-x-full bg-white" : "hidden"} `}>
                        <div className="flex justify-end items-end p-1.5">
                            <p onClick={toggleDrawer}>X</p>
                        </div>

                        <a href="#about-us" class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-[#51C1F9]">
                            <span>About Us</span>
                        </a>

                        <a href="#services" class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-[#51C1F9]">
                            <span>Services</span>
                        </a>

                        <a href="#contact-us" class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-[#51C1F9]">
                            <span>Contact us</span>
                        </a>

                        <a href="#" class="flex items-center space-x-1 rounded-md px-2 py-3 hover:bg-gray-100 hover:text-[#51C1F9]">
                            <span class="text-2xl"></span>
                            <span>Resources</span>
                        </a>


                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarMobile;