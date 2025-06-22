import { courseFeatures, upcomingBatches } from "@/app/lib/constants";
import { Button } from "@/app/ui/button";
import { CheckCircleOutlined } from "@ant-design/icons";

export default function Overview ()
{
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <div className="bg-white shadow rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        MPSC Prelims Examination
                    </h2>
                    <p className="text-gray-600 mb-4">
                        The Maharashtra Public Service Commission (MPSC) conducts
                        the State Services Examination in three stages: Prelims,
                        Mains, and Interview. The Preliminary Examination serves as
                        a screening test for the Mains Examination.
                    </p>
                    <p className="text-gray-600 mb-4">
                        The Prelims consists of two papers: General Studies (Paper
                        I) and Civil Services Aptitude Test (CSAT - Paper II). While
                        both papers are compulsory, candidates need to score a
                        minimum of 33% in Paper II (CSAT) to qualify, but only Paper
                        I marks are considered for merit ranking.
                    </p>
                    <div className="bg-blue-50 rounded-lg p-4 mb-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Exam Pattern
                        </h3>
                        <ul className="list-disc pl-5 text-gray-600 space-y-1">
                            <li>Two compulsory papers (objective type)</li>
                            <li>
                                Paper I: General Studies - 100 marks (100 questions)
                            </li>
                            <li>Paper II: CSAT - 80 marks (80 questions)</li>
                            <li>Duration: 2 hours for each paper</li>
                            <li>
                                Negative marking: 1/4th mark deducted for each wrong
                                answer
                            </li>
                        </ul>
                    </div>
                    <div className="bg-blue-50 rounded-lg p-4">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            Important Dates (2025)
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-500">
                                    Application Start Date
                                </p>
                                <p className="font-medium">August 15, 2025</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">
                                    Application End Date
                                </p>
                                <p className="font-medium">September 5, 2025</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">
                                    Admit Card Release
                                </p>
                                <p className="font-medium">October 10, 2025</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">
                                    Examination Date
                                </p>
                                <p className="font-medium">October 25, 2025</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-1">
                <div className="bg-white shadow rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Why Choose Our Prelims Course?
                    </h3>
                    <ul className="space-y-3">
                        { courseFeatures.slice( 0, 4 ).map( ( feature, index ) => (
                            <li key={ index } className="flex">
                                <div className="flex-shrink-0 text-blue-500 mt-1">
                                    <CheckCircleOutlined />
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-900">
                                        { feature.title }
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        { feature.description }
                                    </p>
                                </div>
                            </li>
                        ) ) }
                    </ul>
                    <Button type="primary" text="View Full Course Details" onClick={ () => { } } fullWidth />
                </div>
                <div className="bg-white shadow rounded-lg p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Upcoming Batches
                    </h3>
                    <ul className="space-y-4">
                        { upcomingBatches.map( ( batch, index ) => (
                            <li
                                key={ index }
                                className="border-b border-gray-200 pb-3 last:border-b-0 last:pb-0"
                            >
                                <p className="font-medium text-gray-900">
                                    { batch.name }
                                </p>
                                <div className="flex justify-between text-sm text-gray-500 mt-1">
                                    <span>Starts: { batch.startDate }</span>
                                    <span>{ batch.duration }</span>
                                </div>
                                <div className="flex justify-between items-center mt-2">
                                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                        { batch.mode }
                                    </span>
                                    <span className="text-xs text-orange-600">
                                        { batch.seats }
                                    </span>
                                </div>
                            </li>
                        ) ) }
                    </ul>
                    <Button color="danger" variant="solid" fullWidth text="Enquire Now" onClick={ () => { } } />
                </div>
            </div>
        </div>
    )
}