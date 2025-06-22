"use client"

import { Typography } from "antd";
import { Button } from "../../../ui/button";
import { journeySteps } from "../../../lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faStar } from "@fortawesome/free-solid-svg-icons";

export default function Timeline ()
{
    const { Title } = Typography

    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-4">
                        Your MPSC Journey
                    </div>
                    <Title level={ 2 } >
                        How We Help You Succeed
                    </Title>
                    <Title level={ 4 } className="text-xl max-w-2xl mx-auto" >
                        From the beginning of your preparation to your final selection,
                        we're with you at every step of your MPSC journey.
                    </Title>
                </div>
                <div className="relative">
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>
                    <div className="space-y-12">
                        { journeySteps.map( ( step, index ) => (
                            <div key={ step.id } className="relative">
                                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
                                    <div
                                        className={ `w-8 h-8 rounded-full ${ step.color } flex items-center justify-center shadow-lg z-10` }
                                    >
                                        <FontAwesomeIcon icon={ step.icon } className='text-white w-4' />
                                    </div>
                                    { step.point === "high" && (
                                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-6">
                                            <div className="bg-red-100 text-red-700 w-8 h-8 rounded-full flex items-center justify-center">
                                                <FontAwesomeIcon icon={ faStar } className='w-3' />
                                            </div>
                                        </div>
                                    ) }
                                </div>
                                <div
                                    className={ `md:w-5/12 ${ index % 2 === 0 ? "md:ml-auto md:pl-16" : "md:mr-auto md:pr-16" } relative` }
                                >
                                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                                        <div
                                            className="md:hidden w-12 h-12 rounded-full mb-4 flex items-center justify-center shadow-md"
                                            style={ {
                                                backgroundColor:
                                                    step.color.replace( "bg-", "var(--tw-" ) + ")",
                                            } }
                                        >
                                            <FontAwesomeIcon icon={ step.icon } className='text-red w-4' />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center">
                                            <span>{ step.title }</span>
                                            { step.point === "high" && (
                                                <span className="md:hidden ml-2 bg-red-100 text-red-700 text-xs font-bold px-2 py-1 rounded-full">
                                                    HIGH IMPACT
                                                </span>
                                            ) }
                                        </h3>
                                        <p className="text-gray-600">{ step.description }</p>
                                        <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                                            <span className="text-gray-600 font-bold">
                                                { step.id }
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) ) }
                    </div>
                </div>
                <div className="w-sm justify-self-center p-2">
                    <Button size="large" variant="solid" color="danger" icon={ <FontAwesomeIcon icon={ faArrowRight } /> } iconPosition="end" fullWidth text="Start Your Journey Today" onClick={ () => { } } />
                </div>
            </div>
        </section>
    )
}