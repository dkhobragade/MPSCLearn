import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Features from "../components/staticPages/Test/Features";
import Section from "../components/staticPages/Test/Section";
import { faChartLine, faFile } from "@fortawesome/free-solid-svg-icons";
import { TestBTN } from "../components/HomeButtons";

export default function Test ()
{
    return (
        <>
            <section className="pt-24 pb-16 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-6">
                                MPSC Test Series
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
                                Master Your Preparation: <br />
                                <span className="text-blue-700">Excel in MPSC Exams</span>
                            </h1>
                            <p className="text-xl text-gray-700 mb-8 max-w-lg">
                                Comprehensive test series designed by MPSC toppers to help you
                                evaluate your preparation and boost your performance in the
                                actual exam.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <TestBTN />
                            </div>
                        </div>
                        <div className="md:w-1/2 relative">
                            <img
                                src="https://readdy.ai/api/search-image?query=professional%20student%20studying%20for%20exam%20with%20digital%20tablet%20and%20books%2C%20focused%20concentration%20in%20modern%20study%20environment%2C%20clean%20organized%20desk%20with%20educational%20materials%2C%20high%20quality%20detailed%20image%20with%20soft%20lighting&width=600&height=500&seq=28&orientation=landscape"
                                alt="MPSC Test Series"
                                className="rounded-2xl shadow-2xl max-w-full h-auto object-cover"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                        <FontAwesomeIcon icon={ faFile } className='text-blue-600 w-5' />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">1500+</div>
                                        <div className="text-sm text-gray-600">
                                            Practice Questions
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                                        <FontAwesomeIcon icon={ faChartLine } className='text-green-600  w-5' />
                                    </div>
                                    <div>
                                        <div className="font-bold text-gray-900">Advanced</div>
                                        <div className="text-sm text-gray-600">
                                            Analytics Dashboard
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Features />
            <Section />
        </>
    )
}