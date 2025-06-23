import { Tabs, Tag } from "antd";
import TabPane from "antd/es/tabs/TabPane";
import Searchbar from "../ui/searchBar";
import Dropdown from "../ui/dropdown";
import { YearFilter } from "../lib/constants";
import { DownloadBTN } from "../components/HomeButtons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faDownload, faEye, faFileAlt, faFileArchive, faInfoCircle, faKey, faLightbulb, faPenFancy, } from "@fortawesome/free-solid-svg-icons";

export default function Download ()
{
    return (
        <>
            <section className="relative overflow-hidden pt-5  bg-gradient-to-r from-blue-50 to-indigo-50 min-h-[50vh] flex items-center">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://readdy.ai/api/search-image?query=modern%20abstract%20background%20with%20floating%20papers%20and%20documents%2C%20light%20blue%20and%20white%20color%20scheme%2C%20minimalist%20design%20perfect%20for%20download%20page%2C%20ensuring%20text%20readability&width=1440&height=400&seq=15&orientation=landscape"
                        alt="Background"
                        className="w-full h-full object-cover object-center opacity-90"
                    />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                            Previous Year Question Papers
                        </h1>
                        <p className="text-xl text-gray-700 mb-8">
                            Access and download MPSC previous year question papers from 2015
                            to 2024. Complete with answer keys and detailed solutions.
                        </p>
                        <DownloadBTN />
                    </div>
                </div>
            </section>
            <section className="bg-white">
                <div className="container mx-auto px-6">
                    <div className="bg-blue-50 rounded-xl p-8 mt-12">
                        <div className="flex items-start space-x-6">
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                                    <FontAwesomeIcon icon={ faInfoCircle } className='text-blue-600 text-2xl' />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-4">
                                    How to Use These Papers
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div className="flex items-start space-x-3">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="font-semibold text-blue-600">1</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-2">
                                                Download Papers
                                            </h4>
                                            <p className="text-gray-600">
                                                Click on the download button to save the PDF files to
                                                your device.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="font-semibold text-blue-600">2</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-2">
                                                Practice Regularly
                                            </h4>
                                            <p className="text-gray-600">
                                                Solve papers in exam-like conditions to improve time
                                                management.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start space-x-3">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="font-semibold text-blue-600">3</span>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-2">
                                                Check Answers
                                            </h4>
                                            <p className="text-gray-600">
                                                Use answer keys to evaluate your performance and learn
                                                from mistakes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-12">
                        <div className="flex justify-between items-center mb-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-800 mb-2">
                                    MPSC Question Papers
                                </h2>
                                <p className="text-gray-600">
                                    Download question papers and answer keys for better
                                    preparation
                                </p>
                            </div>
                            <div className="flex gap-4">
                                <Searchbar placeholder="Search by year or subject..." />
                                <Dropdown options={ YearFilter } placeholder="Filter by Year" />
                            </div>
                        </div>
                        {/* Tabs */ }
                        <Tabs defaultActiveKey="prelims" className="custom-tabs">
                            <TabPane
                                tab={
                                    <span>
                                        <FontAwesomeIcon icon={ faBookOpen } className='mr-2' />
                                        Prelims
                                    </span>
                                }
                                key="prelims"
                            >
                                <div className="grid grid-cols-1 gap-6">
                                    { [ 2024, 2023, 2022, 2021, 2020 ].map( ( year ) => (
                                        <div
                                            key={ year }
                                            className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
                                        >
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-800">
                                                        MPSC Prelims { year }
                                                    </h3>
                                                    <p className="text-gray-600">
                                                        Examination Date: June 15, { year }
                                                    </p>
                                                </div>
                                                <Tag color="blue">Latest</Tag>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                                                { [ "A", "B", "C", "D" ].map( ( set ) => (
                                                    <div
                                                        key={ set }
                                                        className="bg-white rounded-lg p-4 border border-gray-200"
                                                    >
                                                        <div className="flex justify-between items-center mb-3">
                                                            <span className="font-medium text-gray-700">
                                                                Set { set }
                                                            </span>
                                                            <FontAwesomeIcon icon={ faFileAlt } className='text-blue-600' />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <button className="w-full py-2 text-left text-blue-600 hover:text-blue-800 font-medium flex items-center">
                                                                <FontAwesomeIcon icon={ faDownload } className='mr-2' />
                                                                <span>Question Paper</span>
                                                            </button>
                                                            <button className="w-full py-2 text-left text-green-600 hover:text-green-800 font-medium flex items-center">
                                                                <FontAwesomeIcon icon={ faKey } className='mr-2' />
                                                                <span>Answer Key</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                ) ) }
                                            </div>
                                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                                                <div className="flex items-center space-x-4">
                                                    <span className="text-gray-600">
                                                        <FontAwesomeIcon icon={ faDownload } className='mr-1' />
                                                        5k+ downloads
                                                    </span>
                                                    <span className="text-gray-600">
                                                        <FontAwesomeIcon icon={ faEye } className='mr-1' />
                                                        12k views
                                                    </span>
                                                </div>
                                                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer flex items-center">
                                                    <FontAwesomeIcon icon={ faFileArchive } className='mr-2' />
                                                    <span>Download All Sets</span>
                                                </button>
                                            </div>
                                        </div>
                                    ) ) }
                                </div>
                            </TabPane>
                            <TabPane
                                tab={
                                    <span>
                                        <FontAwesomeIcon icon={ faPenFancy } className='mr-2' />
                                        Mains
                                    </span>
                                }
                                key="mains"
                            >
                                <div className="grid grid-cols-1 gap-6">
                                    { [ 2024, 2023, 2022, 2021, 2020 ].map( ( year ) => (
                                        <div
                                            key={ year }
                                            className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
                                        >
                                            <div className="flex justify-between items-start mb-4">
                                                <div>
                                                    <h3 className="text-xl font-bold text-gray-800">
                                                        MPSC Mains { year }
                                                    </h3>
                                                    <p className="text-gray-600">
                                                        Examination Date: October 15, { year }
                                                    </p>
                                                </div>
                                                <Tag color="purple">Latest</Tag>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                                                { [ "Paper I", "Paper II", "Paper III" ].map( ( paper ) => (
                                                    <div
                                                        key={ paper }
                                                        className="bg-white rounded-lg p-4 border border-gray-200"
                                                    >
                                                        <div className="flex justify-between items-center mb-3">
                                                            <span className="font-medium text-gray-700">
                                                                { paper }
                                                            </span>
                                                            <FontAwesomeIcon icon={ faFileAlt } className='text-purple-600' />
                                                        </div>
                                                        <div className="space-y-2">
                                                            <button className="w-full py-2 text-left text-purple-600 hover:text-purple-800 font-medium flex items-center">
                                                                <FontAwesomeIcon icon={ faDownload } />
                                                                <span>Question Paper</span>
                                                            </button>
                                                            <button className="w-full py-2 text-left text-green-600 hover:text-green-800 font-medium flex items-center">
                                                                <FontAwesomeIcon icon={ faKey } className='mr-2' />
                                                                <span>Answer Key</span>
                                                            </button>
                                                            <button className="w-full py-2 text-left text-orange-600 hover:text-orange-800 font-medium flex items-center">
                                                                <FontAwesomeIcon icon={ faLightbulb } className='mr-2' />
                                                                <span>Model Answers</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                ) ) }
                                            </div>
                                            <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
                                                <div className="flex items-center space-x-4">
                                                    <span className="text-gray-600">
                                                        <FontAwesomeIcon icon={ faDownload } />3k+
                                                        downloads
                                                    </span>
                                                    <span className="text-gray-600">
                                                        <FontAwesomeIcon icon={ faEye } className='mr-1' /> 8k views
                                                    </span>
                                                </div>
                                                <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors !rounded-button whitespace-nowrap cursor-pointer flex items-center">
                                                    <FontAwesomeIcon icon={ faFileArchive } className='mr-2' />
                                                    <span>Download Complete Set</span>
                                                </button>
                                            </div>
                                        </div>
                                    ) ) }
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                </div>
            </section>
        </>
    )
}