import { Button, Input, Select } from "antd";
import { categories, difficulties, types } from "@/app/lib/constants";
import { faFilter, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Section ()
{
    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start mb-12">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Available Tests
                        </h2>
                        <p className="text-gray-600 max-w-2xl">
                            Choose from our collection of free and premium tests designed to
                            help you excel in your MPSC preparation.
                        </p>
                    </div>
                    <div className="mt-6 md:mt-0">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="relative">
                                <Input
                                    placeholder="Search tests..."
                                    prefix={ <FontAwesomeIcon icon={ faMagnifyingGlass } className="text-gray-400" /> }
                                    className="w-full md:w-64 rounded-lg"
                                />
                            </div>
                            <Button
                                icon={ <FontAwesomeIcon icon={ faFilter } /> }
                                className="bg-white border border-gray-300 rounded-lg hover:bg-gray-50 !rounded-button whitespace-nowrap cursor-pointer"
                            >
                                Filters
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Filter Section */ }
                <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Category
                            </label>
                            <Select
                                className="w-full rounded-lg"
                            >
                                { categories.map( ( category ) => (
                                    <Select.Option key={ category.id } value={ category.id }>
                                        { category.name }
                                    </Select.Option>
                                ) ) }
                            </Select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Difficulty Level
                            </label>
                            <Select
                                className="w-full rounded-lg"
                            >
                                { difficulties.map( ( difficulty ) => (
                                    <Select.Option key={ difficulty.id } value={ difficulty.id }>
                                        { difficulty.name }
                                    </Select.Option>
                                ) ) }
                            </Select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Test Type
                            </label>
                            <Select
                                className="w-full rounded-lg"
                            >
                                { types.map( ( type ) => (
                                    <Select.Option key={ type.id } value={ type.id }>
                                        { type.name }
                                    </Select.Option>
                                ) ) }
                            </Select>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}