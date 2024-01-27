import React from "react";
import Banking from '../assets/banking.svg'

const Why = () => {
    return (
        <div>
            <div className="flex items-center mx-24 p-4 mb-7 mt-12">
                <hr class="w-36 h-0.5 bg-[#51C1F9] border-0 rounded mr-3" />
                <p className="text-2xl text-[#0E2954] dark:text-white">Why Choose Us</p>
            </div>

            <div className="flex justify-between items-center mx-60">
                <div className="">
                    <div class="flex gap-x-3">

                        <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-[#59D6F1] dark:after:bg-[#59D6F1]">
                            <div class="relative z-10 w-7 h-7 flex justify-center items-center">
                                <div className="w-7 h-7 rounded-full bg-[#59D6F1]"></div>
                            </div>
                        </div>



                        <div class="grow pt-0.5 pb-12">
                            <h3 class="flex gap-x-1.5  text-[#0E2954] dark:text-white text-2xl">
                                Fast
                            </h3>
                            <p class="mt-1  text-[#0E2954] dark:text-white">
                                Enjoy our lightning-fast APIs that make<br/>
                                your user experience heaven on earth.<br/>
                                You don't have to feel extra pain paying<br/>
                                your bills.

                            </p>

                        </div>

                    </div>



                    <div class="flex gap-x-3">

                        <div class="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-[#59D6F1] dark:after:bg-[#59D6F1]">
                            <div class="relative z-10 w-7 h-7 flex justify-center items-center">
                                <div className="w-7 h-7 rounded-full bg-[#59D6F1]"></div>
                            </div>
                        </div>



                        <div class="grow pt-0.5 pb-12">
                            <h3 class="flex gap-x-1.5  text-[#0E2954] dark:text-white text-2xl">
                                Secure
                            </h3>
                            <p class="mt-1  text-[#0E2954] dark:text-white">
                                Your KYC and transaction information is securely<br/>
                                kept on our systems via modern and strong<br/>
                                encryption algorithms.

                            </p>
                        </div>

                    </div>



                    <div class="flex gap-x-3">

                        <div class="">
                            <div class="relative z-10 w-7 h-7 flex justify-center items-center">
                                <div className="w-7 h-7 rounded-full bg-[#59D6F1]"></div>
                            </div>
                        </div>



                        <div class="grow pt-0.5 pb-12">
                            <h3 class="flex gap-x-1.5  text-[#0E2954] dark:text-white text-2xl">
                                Affordable
                            </h3>
                            <p class="mt-1  text-[#0E2954] dark:text-white">
                                Enjoy at least a 50% reduction in transaction fees<br/>
                                by using our mobile money platform.

                            </p>
                        </div>
                    </div>

                </div>


                <div className="">
                    <img src={Banking} alt="" />
                </div>



            </div>
        </div>
    );
}

export default Why;