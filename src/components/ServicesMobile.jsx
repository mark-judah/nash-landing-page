import React from "react";
import Image1 from '../assets/online_payment.svg'
import Image2 from '../assets/on_ramp.svg'
import Image3 from '../assets/savings.svg'
import Image4 from '../assets/p2p.svg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false

};

const ServicesMobile = () => {
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
            "caption": "Users can send funds to each other in stablecoins.",
            "footer": "Request Invoice..."
        },
    ]
    return (
        <div className="mt-10">
            <div className="flex items-center p-4">
                <hr class="w-12 h-0.5 bg-[#51C1F9] border-0 rounded mr-3" />
                <p className="text-[#0E2954] dark:text-white text-2xl">Our Services</p>
            </div>

            <Slider {...settings}>
                {cards.map((card) =>
                    <div className="flex flex-col group justify-center  items-center   hover:px-10 hover:h-full hover:rounded-3xl hover:outline-none hover:bg-[#0E2954] hover:w-120 hover:h-120 hover:text-white">
                        <div className="flex justify-center">
                            <img src={card.image} className="w-48 h-48 group-hover:w-72 group-hover:h-72"></img>
                        </div>
                        <p className="text-xl text-center text-[#0E2954] dark:text-white group-hover:text-white group-hover:text-2xl font-bold">{card.title}</p>
                        <p className="text-sm text-center text-balance text-[#0E2954] dark:text-white group-hover:text-white m-4">{card.caption}</p>
                        <p className="text-sm p-5 text-[#F15A59] hidden group-hover:block">{card.footer}</p>
                    </div>

                )}
            </Slider>

        </div>

    );
}

export default ServicesMobile;