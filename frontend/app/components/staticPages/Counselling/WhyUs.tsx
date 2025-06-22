export default function WhyUs ()
{
    return (
        <section className='bg-white py-16'>
            <div className='container mx-auto px-6'>
                <div className='text-center mb-12'>
                    <h2 className='text-3xl font-bold text-gray-800 mb-4'>
                        Why Choose Our Counselling Service
                    </h2>
                    <p className='text-gray-600 max-w-2xl mx-auto'>
                        Our personalized counselling sessions are designed to address your
                        specific needs and help you overcome challenges in your MPSC
                        preparation journey.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-blue-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-blue-600 mb-4 text-4xl">
                            {/* <FontAwesomeIcon className='w-5' icon={ faUserGraduate } /> */ }
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            Expert Mentors
                        </h3>
                        <p className="text-gray-600">
                            Learn from experienced MPSC mentors who have guided hundreds of
                            successful candidates.
                        </p>
                    </div>

                    <div className="bg-purple-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-purple-600 mb-4 text-4xl">
                            {/* <FontAwesomeIcon className='w-5' icon={ faClipboardCheck } /> */ }
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            Personalized Approach
                        </h3>
                        <p className="text-gray-600">
                            Get customized strategies and study plans tailored to your
                            strengths and weaknesses.
                        </p>
                    </div>

                    <div className="bg-amber-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="text-amber-600 mb-4 text-4xl">
                            {/* <FontAwesomeIcon className='w-5' icon={ faChartLine } /> */ }
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            Proven Results
                        </h3>
                        <p className="text-gray-600">
                            Our counselling methodology has helped candidates achieve top
                            ranks in MPSC examinations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}