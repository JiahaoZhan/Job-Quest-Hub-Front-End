import React from "react";
import { ReactComponent as bgdots } from "../../assets/images/.svg";
export const Testimony = () => {
    return (<>
        <section id="download">
            <div className="container mx-auto px-6">
                <h2 className="mb-6 text-3xl font-semibold text-center md:text-4xl">
                Inspiring Success Stories<br/>
                </h2>
                <h3 className="mb-6 text-2xl text-grayishBlue text-center">Testimonials from Job Seeker</h3>
                <p className="center text-grayishBlue">
                    We've got more browsers in the pipeline. Please do let us know if
                    you've got a favourite you'd like us to prioritize.
                </p>
            </div>
        </section>

        <section id="download-boxes" className="py-32">
            {/* <!-- Boxes Container --> */}
            <div
                className="relative flex flex-col items-center max-w-5xl mx-auto space-y-10 px-10 md:px-6 md:space-y-0 md:space-x-7 md:flex-row"
            >
                {/* <!-- Box 1 --> */}
                <div
                    className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:w-1/3"
                >
                    

                    {/* <!-- Dots --> */}
                    <div className=" bg-repeat-x px-6 pt-6 capitalize">
                       
                    </div>
                </div>

                {/* <!-- Box 2 --> */}
                <div className="w-full md:w-1/3">
                    <div
                        className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-8"
                    >
                        

                        {/* <!-- Dots --> */}
                        <div className=" bg-repeat-x px-6 pt-6 capitalize">
                         
                        </div>
                    </div>
                </div>

                {/* <!-- Box 3 --> */}
                <div className="w-full md:w-1/3">
                    <div
                        className="flex flex-col w-full py-6 space-y-4 text-center rounded-lg shadow-lg md:mt-16"
                    >
                        

                        {/* <!-- Dots --> */}
                        <div className=" bg-repeat-x px-6 pt-6 capitalize">
                            
                        </div>
                    </div>
                </div>
            </div>
        </section></>
    )
}