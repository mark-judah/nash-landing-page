import React from "react";
import iPhone13 from '../assets/iPhone13.svg'
import play from '../assets/play.svg'


const IntroMobile = () => {
    return (
        <div className="p-2">
            <div className="">
                <div className="text-center">
                    <p className="font-bold text-2xl md:text-4xl text-[#0E2954] dark:text-white">Fast, Secure and</p>
                    <p className="font-bold text-2xl md:text-4xl text-[#0E2954] dark:text-white mt-1.5">Affordable</p>

                </div>
                <p className="text-[#0E2954] dark:text-white mt-5 text-sm md:text-lg md:text-balance text-center">Whether you need to split a bill with friends,
                    pay for goods and services, or send money to loved ones across the globe, Nash ensures
                    a secure and hassle-free experience.</p>

                
            </div>

            <div className="flex justify-center items-center">
                <img src={iPhone13} alt=""className="h-84 ml-24" />
            </div>

            <div className="mt-5 flex items-center justify-evenly">
                    <div>
                        <button className="rounded-3xl bg-[#0E2954] dark:bg-[#59D6F1] dark:text-black text-white p-3 px-4">
                            Get App
                        </button>
                    </div>

                    <div className="flex items-center">
                    <div className="rounded-full outline outline-1 p-2 outline-[#51C1F9]">
                            <img src={play}></img>
                        </div>

                        <div>
                            <p className="text-[#0E2954] dark:text-white ml-3">See how it Works</p>
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default IntroMobile;