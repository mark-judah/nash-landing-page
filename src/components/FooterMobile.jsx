import React from "react";
import CopyrightLight from '../assets/copyright_light.svg'
import CopyrightDark from '../assets/copyrigh_dark.svg'
import Fb from '../assets/facebook.svg'
import Insta from '../assets/instagram.svg'
import Linkedin from '../assets/linkedin.svg'

const FooterMobile = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div id="contact-us" className="bg-[#0E2954] dark:bg-white text-white dark:text-[#0E2954] mt-5">
            <div className="flex justify-between items-center p-5">
                <div>
                    <ul className="text-sm space-y-6">
                        <li className="hover:text-[#59D6F1]"> <a href="#">Nash</a></li>
                        <li className="hover:text-[#59D6F1]"> <a href="#about-us"> About Us</a></li>
                        <li className="hover:text-[#59D6F1]"> <a href="#services"> Services</a></li>
                        <li className="hover:text-[#59D6F1]"><a href="#contact-us"> Contact Us</a></li>
                    </ul>
                </div>

                <div>
                    <div className="flex flex-col items-center text-sm space-y-3">
                        <div className="bg-[#59D6F1] dark:bg-[#0E2954] rounded-xl text-black dark:text-white p-3">
                            <button className="flex justify-center items-center">
                                <svg width="30" height="30" viewBox="0 0 30 30" className="fill-black dark:fill-white" fill="current" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23.8792 15.938C23.9224 20.4781 27.9554 21.9889 28 22.0081C27.9658 22.1146 27.3556 24.1611 25.8753 26.2749C24.5956 28.1025 23.2674 29.9233 21.1751 29.961C19.1194 29.998 18.4583 28.7699 16.1079 28.7699C13.7582 28.7699 13.0237 29.9233 11.0777 29.998C9.05812 30.0727 7.52024 28.0219 6.23 26.201C3.59329 22.4764 1.57835 15.6762 4.28391 11.0859C5.62795 8.8063 8.03 7.36289 10.637 7.32586C12.6201 7.28894 14.492 8.62949 15.7043 8.62949C16.9158 8.62949 19.1905 7.01737 21.5818 7.25411C22.5828 7.29485 25.393 7.64915 27.1974 10.2299C27.0519 10.3179 23.8443 12.1425 23.8792 15.9381M20.0156 4.78998C21.0879 3.52185 21.8095 1.75659 21.6126 0C20.0671 0.0606871 18.1983 1.0063 17.0898 2.27367C16.0963 3.39609 15.2263 5.19247 15.461 6.91422C17.1837 7.04447 18.9434 6.05888 20.0156 4.78998Z" />
                                </svg>
                                <span className="ml-3">Get App</span>
                            </button>                        </div>

                        <div className="bg-[#59D6F1] dark:bg-[#0E2954] rounded-2xl text-black dark:text-white p-3">
                            <button className="flex justify-center items-center">
                                <svg width="30" height="30" viewBox="0 0 30 30" className="fill-black dark:fill-white" fill="current" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.8125 3.48592V26.5133C2.81265 26.5632 2.82756 26.612 2.85533 26.6535C2.88311 26.6951 2.92253 26.7275 2.96865 26.7467C3.01477 26.7659 3.06553 26.7711 3.11458 26.7615C3.16362 26.752 3.20876 26.7282 3.24434 26.6931L15.2344 15.0002L3.24434 3.30603C3.20876 3.27096 3.16362 3.24717 3.11458 3.23764C3.06553 3.22812 3.01477 3.23329 2.96865 3.2525C2.92253 3.27171 2.88311 3.30411 2.85533 3.34563C2.82756 3.38716 2.81265 3.43596 2.8125 3.48592ZM20.2617 10.1955L5.22773 1.91267L5.21836 1.9074C4.95937 1.76678 4.71328 2.11717 4.92539 2.32107L16.7104 13.5898L20.2617 10.1955ZM4.92656 27.6793C4.71328 27.8832 4.95938 28.2336 5.21953 28.0929L5.22891 28.0877L20.2617 19.8049L16.7104 16.4094L4.92656 27.6793ZM26.3309 13.5353L22.1326 11.2232L18.1852 15.0002L22.1326 18.7754L26.3309 16.465C27.4729 15.834 27.4729 14.1664 26.3309 13.5353Z" />
                                </svg>
                                <span className="ml-3">Get App</span>                                </button>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <hr className="bg-white dark:bg-[#0E2954] h-0.5"></hr>
            </div>

            <div className=" p-5 text-sm">
                <div>
                    <div className="flex justify-start items-center space-x-5">
                        <img src={Fb} className="w-8" />
                        <img src={Insta} className="w-8" />
                        <img src={Linkedin} className="w-8" />
                        <div className="dark:hidden">
                            <svg width="50" height="50" className="w-8" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M37.9271 4.6875H44.8187L29.7625 21.8958L47.475 45.3125H33.6042L22.7417 31.1104L10.3125 45.3125H3.41667L19.5208 26.9062L2.53125 4.6875H16.75L26.5687 17.6687L37.9229 4.6875H37.9271ZM35.5083 41.1875H39.3271L14.6771 8.59583H10.5792L35.5083 41.1875Z" fill="white" />
                            </svg>
                        </div>

                        <div className="hidden dark:block">
                            <svg width="50" height="50" className="w-8" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M37.9271 4.6875H44.8187L29.7625 21.8958L47.475 45.3125H33.6042L22.7417 31.1104L10.3125 45.3125H3.41667L19.5208 26.9062L2.53125 4.6875H16.75L26.5687 17.6687L37.9229 4.6875H37.9271ZM35.5083 41.1875H39.3271L14.6771 8.59583H10.5792L35.5083 41.1875Z" fill="black" />
                            </svg>
                        </div>

                    </div>
                </div>
            </div>

            <div className="flex flex-col space-y-3 p-2">
                <div className="flex items-center">
                    <img src={CopyrightLight} className="w-5 dark-hidden"></img>
                    <img src={CopyrightDark} className="w-5 hidden dark:block"></img>
                    <p> <span className="dark:pl-0 dark:pr-2 px-2">{currentYear}</span>Nash. All Rights Reserved</p>
                </div>

            </div>
        </div>
    );
}

export default FooterMobile;