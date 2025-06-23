import { categories, difficulties, types } from "@/app/lib/constants";
import Searchbar from "@/app/ui/searchBar";
import Dropdown from "@/app/ui/dropdown";

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
                        <Searchbar placeholder="Search tests..." />
                    </div>
                </div>

                {/* Filter Section */ }
                <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Dropdown options={ categories } placeholder="Select Category" />
                        <Dropdown options={ difficulties } placeholder="Select difficulties" />
                        <Dropdown options={ types } placeholder="Select types" />
                    </div>
                </div>
            </div>
        </section>
    )
}