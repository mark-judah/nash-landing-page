import React from "react";
import iPhone13 from '../assets/iPhone13.svg'
import play from '../assets/play.svg'


const Intro = () => {
    return (
        <div className="p-2 flex justify-between items-center">
            <div className="ml-36 ">
                <p className="font-bold text-8xl text-[#0E2954] dark:text-white">Fast, Secure</p>
                <p className="font-bold text-8xl text-[#0E2954] dark:text-white mt-5">and Affordable</p>

                <p className="text-[#0E2954] dark:text-white text-2xl mt-12">Whether you need to split a bill with friends, pay for goods and <br />
                    services, or send money to loved ones across the globe, Nash ensures<br />
                    a secure and hassle-free experience.</p>

                <div className="mt-12 flex items-center">
                    <button className="rounded-3xl bg-[#0E2954] dark:bg-[#59D6F1] text-white dark:text-black p-3 px-16">
                        Get App
                    </button>

                    <div className="flex items-center ml-10">
                        <div className="rounded-full outline outline-1 p-2 outline-[#51C1F9]">
                            <img src={play} className="dark:fill-[#51C1F9] outline-"></img>
                        </div>

                        <div>
                            <p className="text-[#0E2954] dark:text-white ml-3">See how it Works</p>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <img src={iPhone13} alt="" />
            </div>
        </div>
    );
}

export default Intro;