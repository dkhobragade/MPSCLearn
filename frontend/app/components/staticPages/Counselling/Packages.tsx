import { Button } from "@/app/ui/button";
import { packages } from "@/app/lib/constants";
import { faCheck, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Packages ()
{
    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Counselling Packages
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Choose the package that best suits your preparation needs and
                        goals.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    { packages.map( ( pkg ) => (
                        <div
                            key={ pkg.id }
                            className={ `${ pkg.color } rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative` }
                        >
                            { pkg.popular && (
                                <div className="absolute top-0 right-0">
                                    <div className="bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                                        MOST POPULAR
                                    </div>
                                </div>
                            ) }
                            <div className={ `${ pkg.accent } h-2 w-full` }></div>
                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                                    { pkg.title }
                                </h3>
                                <div className="flex items-center mb-4">
                                    <FontAwesomeIcon icon={ faClock } className="mr-2" />
                                    <span className="text-gray-600">{ pkg.duration }</span>
                                </div>
                                <div className="text-3xl font-bold text-gray-800 mb-6">
                                    { pkg.price }
                                </div>
                                <ul className="mb-8">
                                    { pkg.features.map( ( feature, index ) => (
                                        <li key={ index } className="flex items-start mb-3">
                                            <FontAwesomeIcon icon={ faCheck } className="text-green-600 w-5 pr-1" />
                                            <span className="text-gray-600">{ feature }</span>
                                        </li>
                                    ) ) }
                                </ul>
                                <Button text="Book Now" onClick={ () => { } } fullWidth type="primary" />
                            </div>
                        </div>
                    ) ) }
                </div>
            </div>
        </section>
    )
}