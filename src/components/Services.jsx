import React from "react";
import Image1 from '../assets/online_payment.svg'
import Image2 from '../assets/on_ramp.svg'
import Image3 from '../assets/savings.svg'
import Image4 from '../assets/p2p.svg'

const Services = () => {
    const cards = [
        {
            "image": Image1,
            "title": "On-ramp/off-ramp",
            "caption": "We offer ramping services directly from bank accounts or M-Pesa.",
            "footer": "Request Invoice..."
        },
        {
            "image": Image2,
            "title": "P2P on-ramp/off-ramp",
            "caption": "Users can trade stablecoins to fiat amongst themselves on our platform.",
            "footer": "Request Invoice..."
        },
        {
            "image": Image3,
            "title": "Savings",
            "caption": "Save your money with us and earn passive income from our platform.",
            "footer": "Request Invoice..."
        },
        {
            "image": Image4,
            "title": "P2P transactions",
            "caption": "Users can send funds to each other  in stablecoins.",
            "footer": "Request Invoice..."
        },
    ]
    return (
        <div>
            <div className="flex items-center mx-24 p-4 mb-7">
                <hr class="w-36 h-0.5 bg-[#51C1F9] border-0 rounded mr-3" />
                <p className="text-2xl text-[#0E2954] dark:text-white">Our Services</p>
            </div>

            <div className="flex justify-between items-center mx-10 overflow  overflow-x-auto space-x-12 mb-24">
                {cards.map((card) =>
                    <div className="flex flex-col group rounded-2xl bg-white outline outline-1 outline-offset-1 outline-[#51C1F9]  items-center w-1/4 h-96 hover:px-10 hover:h-full hover:rounded-3xl hover:outline-none hover:bg-[#0E2954] hover:w-120 hover:h-120 hover:text-white">
                        <img src={card.image} className="w-48 h-48 group-hover:w-72 group-hover:h-72"></img>
                        <p className="text-xl text-[#0E2954] group-hover:text-white group-hover:text-2xl font-bold">{card.title}</p>
                        <p className="text-sm text-center text-balance text-[#0E2954] group-hover:text-white m-4">{card.caption}</p>
                        <p className="text-sm p-5 text-[#F15A59] hidden group-hover:block">{card.footer}</p>
                    </div>

                )}
            </div>
        </div>

    );
}

export default Services;