export default function CTA ()
{
    return (
        <div className="bg-blue-600">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                    <span className="block">Ready to start your MPSC journey?</span>
                    <span className="block text-blue-200">
                        Join our next batch and transform your preparation.
                    </span>
                </h2>
                <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 !rounded-button whitespace-nowrap cursor-pointer"
                        >
                            Enroll Now
                        </a>
                    </div>
                    <div className="ml-3 inline-flex rounded-md shadow">
                        <a
                            href="#"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-700 !rounded-button whitespace-nowrap cursor-pointer"
                        >
                            Download Brochure
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}