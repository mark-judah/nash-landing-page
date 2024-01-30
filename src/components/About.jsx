import React from "react";
import Slanted from '../assets/slanted.svg'
const About = () => {
    return (
        <div id="about-us">
            <div className="flex items-center mx-24 p-4 mb-7">
                <hr class="w-36 h-0.5 bg-[#51C1F9] border-0 rounded mr-3" />
                <p className="text-2xl text-[#0E2954] dark:text-white">About Us</p>
            </div>

            <div className="relative">
                <div className="flex justify-between items-center h-fit overflow-hidden">
                    <img src={Slanted} alt="Your Image" className="object-fill transform -translate-x-1/2 h-fit" />
                </div>

                <div className="absolute inset-0 bg-opacity-10 backdrop-filter backdrop-blur-md rounded-3xl mx-24 shadow-2xl h-fit outline outline-1 outline-offset-2 outline-[#51C1F9] bg-[#505254]">
                    <p className="ml-36 text-justify  py-12 text-4xl leading-loose text-[#0E2954] dark:text-white">
                        Our innovative platform seamlessly connects users across the globe, <br />
                        enabling them to send and receive money with unparalleled ease.<br />
                        Nash's state-of-the-art encryption and Cyber Security measures<br />
                        ensure that every transaction is not only lightning-fast but also <br />
                        highly secure.<br /> <br /> 
                        Whether you're making international transfers, paying bills, or<br />
                        simply splitting expenses with friends, Nash's user-friendly<br />
                        interface and commitment
                        to transparency make them the go-to<br /> choice for anyone seeking a reliable and convenient
                        online money<br/> transfer solution.</p>
                </div>

            </div>
        </div>

    );
}

export default About;
