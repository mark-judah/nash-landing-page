import React from "react";
import Slanted from '../assets/slanted.svg'
const AboutMobile = () => {
    return (
        <div className="mt-10">
            <div className="flex items-center p-4">
                <hr class="w-12 h-0.5 bg-[#51C1F9] border-0 rounded mr-3" />
                <p className="text-[#0E2954] dark:text-white text-2xl">About Us</p>
            </div>

            <div>
                <div className=" inset-0 bg-opacity-10 backdrop-filter backdrop-blur-md rounded-3xl mx-4 shadow-2xl h-fit outline outline-2 outline-offset-2 outline-[#51C1F9] bg-[#BECFDC]">
                    <p className="text-center  p-6 text-sm leading-normal text-[#0E2954] dark:text-white">
                        Our innovative platform seamlessly connects users across the globe, 
                        enabling them to send and receive money with unparalleled ease.
                        Nash's state-of-the-art encryption and Cyber Security measures
                        ensure that every transaction is not only lightning-fast but also 
                        highly secure.  
                        Whether you're making international transfers, paying bills, or
                        simply splitting expenses with friends, Nash's user-friendly
                        interface and commitment
                        to transparency make them the go-to choice for anyone seeking a reliable and convenient
                        online money transfer solution.</p>
                </div>

            </div>
        </div>

    );
}

export default AboutMobile;
