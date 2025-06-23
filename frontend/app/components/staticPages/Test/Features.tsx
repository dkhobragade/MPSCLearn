import { faBullseye, faChartPie, faBookOpen, faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Features ()
{
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Why Choose Our Test Series?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Designed by experts to give you the most realistic exam experience
                        and comprehensive preparation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-blue-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FontAwesomeIcon className='text-blue-600 w-5' icon={ faBullseye } />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                            Exam-Like Experience
                        </h3>
                        <p className="text-gray-600">
                            Tests designed to simulate the actual MPSC exam pattern, timing,
                            and difficulty level.
                        </p>
                    </div>

                    <div className="bg-purple-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FontAwesomeIcon className='text-purple-600 w-5' icon={ faChartPie } />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                            Detailed Analysis
                        </h3>
                        <p className="text-gray-600">
                            Comprehensive performance reports with section-wise analysis and
                            improvement suggestions.
                        </p>
                    </div>

                    <div className="bg-green-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FontAwesomeIcon icon={ faBookOpen } className='text-green-600 w-5' />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                            Extensive Coverage
                        </h3>
                        <p className="text-gray-600">
                            Tests covering all subjects and topics in the MPSC syllabus with
                            updated content.
                        </p>
                    </div>

                    <div className="bg-amber-50 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                        <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FontAwesomeIcon icon={ faLightbulb } className='text-amber-600 w-5' />
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">
                            Expert Solutions
                        </h3>
                        <p className="text-gray-600">
                            Detailed explanations for each question prepared by subject
                            matter experts.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}