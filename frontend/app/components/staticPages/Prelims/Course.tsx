import { courseFeatures, testimonials } from "@/app/lib/constants";
import { Button } from "@/app/ui/button";
import { Tag } from "antd";

export default function Course ()
{
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
                <div className="bg-white shadow rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        MPSC Prelims Foundation Course
                    </h2>
                    <div className="flex flex-wrap gap-3 mb-6">
                        <Tag color="blue" className="px-3 py-1 text-sm">
                            Comprehensive Coverage
                        </Tag>
                        <Tag color="green" className="px-3 py-1 text-sm">
                            Expert Faculty
                        </Tag>
                        <Tag color="orange" className="px-3 py-1 text-sm">
                            Bilingual Teaching
                        </Tag>
                        <Tag color="purple" className="px-3 py-1 text-sm">
                            Regular Assessment
                        </Tag>
                        <Tag color="cyan" className="px-3 py-1 text-sm">
                            Doubt Resolution
                        </Tag>
                    </div>

                    <p className="text-gray-600 mb-6">
                        Our MPSC Prelims Foundation Course is meticulously designed
                        to provide aspirants with a structured and comprehensive
                        preparation strategy. The course covers the entire syllabus
                        of both Paper I (General Studies) and Paper II (CSAT) with a
                        focus on conceptual clarity and application-based learning.
                    </p>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Course Highlights
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        { courseFeatures.map( ( feature, index ) => (
                            <div
                                key={ index }
                                className="bg-blue-50 rounded-lg p-4 flex"
                            >
                                <div className="ml-3">
                                    <p className="font-medium text-gray-900">
                                        { feature.title }
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        { feature.description }
                                    </p>
                                </div>
                            </div>
                        ) ) }
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Course Duration & Schedule
                    </h3>
                    <div className="bg-blue-50 rounded-lg p-4 mb-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm text-gray-500">Duration</p>
                                <p className="font-medium">4 Months (16 Weeks)</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">
                                    Classes Per Week
                                </p>
                                <p className="font-medium">5 Days (Monday to Friday)</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">Class Duration</p>
                                <p className="font-medium">3 Hours per day</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500">
                                    Mode of Instruction
                                </p>
                                <p className="font-medium">Classroom & Online Live</p>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                        Course Fee Structure
                    </h3>
                    <div className="border border-gray-200 rounded-lg overflow-hidden mb-6">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Course Type
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Fee
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Duration
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Classroom Program
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        ₹45,000
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        4 Months
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Online Live Program
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        ₹35,000
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        4 Months
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                        Weekend Batch
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        ₹40,000
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        5 Months
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                        <div className="flex">
                            <div className="flex-shrink-0">
                                <i className="fas fa-info-circle text-yellow-400"></i>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-yellow-700">
                                    Early bird discount of 10% available for registrations
                                    before July 15, 2025. EMI options available.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="lg:col-span-1">
                <div className="bg-white shadow rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Faculty Experts
                    </h3>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                <img
                                    src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20an%20Indian%20male%20professor%20in%20his%2040s%20with%20glasses%20and%20formal%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait%20with%20warm%20lighting&width=100&height=100&seq=faculty1&orientation=squarish"
                                    alt="Dr. Rajesh Sharma"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-sm font-medium text-gray-900">
                                    Dr. Rajesh Sharma
                                </h4>
                                <p className="text-xs text-gray-500">
                                    History & Polity Expert
                                </p>
                                <p className="text-xs text-gray-500">
                                    15+ years experience
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                <img
                                    src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20an%20Indian%20female%20professor%20in%20her%2030s%20with%20formal%20business%20attire%2C%20neutral%20background%2C%20high%20quality%20portrait%20with%20warm%20lighting&width=100&height=100&seq=faculty2&orientation=squarish"
                                    alt="Dr. Priya Desai"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-sm font-medium text-gray-900">
                                    Dr. Priya Desai
                                </h4>
                                <p className="text-xs text-gray-500">
                                    Economics Expert
                                </p>
                                <p className="text-xs text-gray-500">
                                    12+ years experience
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex-shrink-0 h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                                <img
                                    src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20an%20Indian%20male%20professor%20in%20his%2030s%20with%20formal%20shirt%2C%20neutral%20background%2C%20high%20quality%20portrait%20with%20warm%20lighting&width=100&height=100&seq=faculty3&orientation=squarish"
                                    alt="Prof. Amit Kulkarni"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="ml-4">
                                <h4 className="text-sm font-medium text-gray-900">
                                    Prof. Amit Kulkarni
                                </h4>
                                <p className="text-xs text-gray-500">
                                    CSAT & Aptitude Expert
                                </p>
                                <p className="text-xs text-gray-500">
                                    10+ years experience
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                        Success Stories
                    </h3>
                    <div className="space-y-4">
                        { testimonials.map( ( testimonial, index ) => (
                            <div
                                key={ index }
                                className="border-b border-gray-200 pb-4 last:border-b-0 last:pb-0"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <p className="font-medium text-gray-900">
                                        { testimonial.name }
                                    </p>
                                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                                        { testimonial.rank }
                                    </span>
                                </div>
                                <p className="text-sm text-gray-600 italic mb-1">
                                    "{ testimonial.content }"
                                </p>
                                <p className="text-xs text-gray-500 text-right">
                                    Batch of { testimonial.year }
                                </p>
                            </div>
                        ) ) }
                    </div>
                </div>

                <div className="bg-gradient-to-r from-blue-600 to-blue-800 shadow rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">
                        Get in Touch
                    </h3>
                    <p className="text-blue-100 mb-4">
                        Have questions about our MPSC Prelims course? Contact our
                        counselors for personalized guidance.
                    </p>
                    <div className="space-y-3 mb-4">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 text-white">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-white">+91 9876543210</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex-shrink-0 text-white">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-white">info@dkmpsc.com</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="flex-shrink-0 text-white">
                                <i className="fas fa-map-marker-alt"></i>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-white">
                                    123, Education Hub, Mumbai
                                </p>
                            </div>
                        </div>
                    </div>
                    <Button text="Request Callback" onClick={ () => { } } variant="solid" color="danger" fullWidth />
                </div>
            </div>
        </div>
    )
}