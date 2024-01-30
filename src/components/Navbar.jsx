import React from "react";
import Logo from '../assets/Logo.svg'
import { useEffect, useState } from 'react';


const Navbar = () => {
    const [theme, setTheme] = useState(localStorage.theme);
    const [ischecked, setchecked] = useState(false)
    const colorTheme = theme === 'dark' ? 'light' : 'dark';

    useEffect(() => {

        const root = window.document.documentElement;
        root.classList.remove(colorTheme);
        root.classList.add(theme);

        // save theme to local storage
        localStorage.setItem('theme', theme);
        window.dispatchEvent(new Event('storage'))

        if (theme === 'dark') {
            setchecked(true)
        }
    }, [theme, colorTheme]);


    const toggleDarkMode = () => {

        console.log(ischecked)
        setTheme(colorTheme);
        if (ischecked) {
            setchecked(false);
        } else {
            setchecked(true)
        }
    };

    return (
        <div className="flex justify-between items-center ml-8">
            <div className="flex items-center mt-8">
                <img src={Logo} ></img>
                <span className="text-4xl font-bold text-[#0E2954] ml-3 dark:text-white">Nash</span>

                <ul className="flex items-center text-[#0E2954] dark:text-white space-x-12 text-2xl ml-36">
                    <a href="#about-us"> <li>About Us</li> </a>
                    <a href="#services"> <li>Services</li></a>
                    <a href="#contact-us">  <li>Contact Us</li></a>
                    <a href="#about-us"> <li>Resources</li></a>

                </ul>


            </div>

            <div className="mr-24">
                <label class="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" value="" class="sr-only peer" checked={ischecked} onChange={toggleDarkMode} />
                    <div class="w-14 h-7 bg-[#B2C4D2]  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-[#0E2954] after:[#B2C4D2] after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-white"></div>
                </label>
            </div>
        </div>
    );
}

export default Navbar;