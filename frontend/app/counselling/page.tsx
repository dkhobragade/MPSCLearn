"use client"

import { ElemsRow } from "../ui/row";
import { Button } from "../ui/button";
import Booking from "../components/staticPages/Counselling/Booking";
import FAQ from "../components/staticPages/Counselling/FAQ";
import Packages from "../components/staticPages/Counselling/Packages";
import WhyUs from "../components/staticPages/Counselling/WhyUs";


export default function counselling ()
{
    return (
        <>

            <section className="relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    {/* <Image src={ bg } alt="Background" className="w-full h-full object-cover object-top" /> */ }
                </div>
                <div className="container mx-auto px-6 py-16 relative z-10">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                                One-on-One MPSC Counselling
                            </h1>
                            <p className="text-lg text-gray-700 mb-8 max-w-lg">
                                Get personalized guidance from MPSC experts to optimize your
                                preparation strategy, clear your doubts, and increase your
                                chances of success.
                            </p>
                            <ElemsRow>
                                <Button size="large" fullWidth type="primary" text="Book a Session Now" onClick={ () => { } } />
                                <Button size="large" fullWidth color="danger" variant="solid" text="Learn More" onClick={ () => { } } />
                            </ElemsRow>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <img
                                src="https://readdy.ai/api/search-image?query=professional%20scene%20of%20a%20mentor%20counselling%20a%20student%2C%20Indian%20setting%2C%20modern%20office%20environment%2C%20discussion%20over%20study%20materials%20and%20laptop%2C%20professional%20attire%2C%20warm%20lighting%2C%20high%20quality%20realistic&width=600&height=400&seq=9&orientation=landscape"
                                alt="MPSC Counselling"
                                className="rounded-xl shadow-2xl max-w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>
            <WhyUs />
            <Packages />
            <Booking />
            <FAQ />
        </>
    )

}