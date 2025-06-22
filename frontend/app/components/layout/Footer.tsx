import Link from "next/link";
import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";

export default function Footer ()
{
    return (
        <footer className="bg-gray-800 text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div>
                        <h3 className="text-xl font-bold mb-4">MPSC Mentor</h3>
                        <p className="text-gray-400 mb-4">
                            Your trusted partner for MPSC preparation. We provide
                            personalized guidance to help you achieve your goals.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                            >
                                <FontAwesomeIcon icon={ faFacebook } />
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                            >
                                <FontAwesomeIcon icon={ faInstagram } />
                            </Link>
                            <Link
                                href="#"
                                className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                            >
                                <FontAwesomeIcon icon={ faYoutube } />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    Counselling
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    Resources
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Support</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    Terms & Conditions
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                                >
                                    Refund Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <FontAwesomeIcon icon={ faMapMarkerAlt } className='mt-1 mr-3 text-gray-400 w-5' />
                                <span className="text-gray-400 pl-2">
                                    123 Education Street, Mumbai, Maharashtra, India - 400001
                                </span>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={ faPhoneAlt } className='mr-3 text-gray-400 w-5' />
                                <span className="text-gray-400 pl-2">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon icon={ faEnvelope } className='mr-3 text-gray-400 w-5' />
                                <span className="text-gray-400 pl-2">support@mpscmentor.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-700 text-center">
                    <p className="text-gray-500 text-sm">
                        &copy; { new Date().getFullYear() } MPSC Mentor. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}