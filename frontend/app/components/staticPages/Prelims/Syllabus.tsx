import { Progress } from "antd";
import { syllabusData } from "@/app/lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

export default function Syllabus ()
{
    return (
        <>
            <div className="bg-white shadow rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Detailed Syllabus Breakdown
                </h2>

                { syllabusData.map( ( paper, paperIndex ) => (
                    <div key={ paperIndex } className="mb-8 last:mb-0">
                        <div className="flex flex-col md:flex-row md:items-center justify-between bg-blue-50 p-4 rounded-lg mb-4">
                            <h3 className="text-xl font-bold text-gray-900">
                                { paper.paper }
                            </h3>
                            <div className="flex flex-col md:flex-row md:items-center mt-2 md:mt-0">
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-0 md:mr-3 mb-2 md:mb-0">
                                    { paper.marks } Marks
                                </span>
                                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                                    { paper.duration }
                                </span>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            { paper.sections.map( ( section, sectionIndex ) => (
                                <div
                                    key={ sectionIndex }
                                    className="border border-gray-200 rounded-lg p-4"
                                >
                                    <div className="flex justify-between items-center mb-2">
                                        <h4 className="font-medium text-gray-900">
                                            { section.name }
                                        </h4>
                                        <span className="text-sm font-medium text-blue-600">
                                            { section.percentage }%
                                        </span>
                                    </div>
                                    <Progress
                                        percent={ section.percentage }
                                        showInfo={ false }
                                        strokeColor="#2563EB"
                                        trailColor="#EFF6FF"
                                    />
                                </div>
                            ) ) }
                        </div>
                    </div>
                ) ) }
            </div>

            <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Recommended Books & Resources
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            Paper I (General Studies)
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex">
                                <div className="flex-shrink-0 text-blue-500 mt-1">
                                    <FontAwesomeIcon icon={ faBook } />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">
                                        Indian Polity
                                    </p>
                                    <p className="text-sm text-gray-500">M. Laxmikanth</p>
                                </div>
                            </li>
                            <li className="flex">
                                <div className="flex-shrink-0 text-blue-500 mt-1">
                                    <FontAwesomeIcon icon={ faBook } />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">
                                        Indian Economy
                                    </p>
                                    <p className="text-sm text-gray-500">Ramesh Singh</p>
                                </div>
                            </li>
                            <li className="flex">
                                <div className="flex-shrink-0 text-blue-500 mt-1">
                                    <FontAwesomeIcon icon={ faBook } />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">
                                        History of Modern India
                                    </p>
                                    <p className="text-sm text-gray-500">Bipan Chandra</p>
                                </div>
                            </li>
                            <li className="flex">
                                <div className="flex-shrink-0 text-blue-500 mt-1">
                                    <FontAwesomeIcon icon={ faBook } />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">
                                        Geography of India
                                    </p>
                                    <p className="text-sm text-gray-500">Majid Husain</p>
                                </div>
                            </li>
                            <li className="flex">
                                <div className="flex-shrink-0 text-blue-500 mt-1">
                                    <FontAwesomeIcon icon={ faBook } />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">
                                        Maharashtra - History & Culture
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        DKMPSC Study Material
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">
                            Paper II (CSAT)
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex">
                                <div className="flex-shrink-0 text-blue-500 mt-1">
                                    <FontAwesomeIcon icon={ faBook } />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">
                                        Analytical Reasoning
                                    </p>
                                    <p className="text-sm text-gray-500">M.K. Pandey</p>
                                </div>
                            </li>
                            <li className="flex">
                                <div className="flex-shrink-0 text-blue-500 mt-1">
                                    <FontAwesomeIcon icon={ faBook } />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">
                                        Quantitative Aptitude
                                    </p>
                                    <p className="text-sm text-gray-500">R.S. Aggarwal</p>
                                </div>
                            </li>
                            <li className="flex">
                                <div className="flex-shrink-0 text-blue-500 mt-1">
                                    <FontAwesomeIcon icon={ faBook } />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">
                                        Logical Reasoning
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        DKMPSC Study Material
                                    </p>
                                </div>
                            </li>
                            <li className="flex">
                                <div className="flex-shrink-0 text-blue-500 mt-1">
                                    <FontAwesomeIcon icon={ faBook } />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">
                                        Comprehension & English Language
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        Plinth to Paramount
                                    </p>
                                </div>
                            </li>
                            <li className="flex">
                                <div className="flex-shrink-0 text-blue-500 mt-1">
                                    <FontAwesomeIcon icon={ faBook } />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">
                                        CSAT Solved Papers
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        DKMPSC Previous Years' Solutions
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}