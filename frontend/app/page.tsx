
import Image from "next/image";
import { HomeButtons } from "./components/HomeButtons";
import { CheckOutlined, StarFilled, UserOutlined } from "@ant-design/icons";

export default function Home ()
{
  return (
    <section className="relative overflow-hidden bg-gradient-to-r p-20 from-blue-50 to-indigo-50 min-h-[85vh] flex items-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full text-blue-700 font-medium mb-6">
              #BEST Platform for MPSC Preparation
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Master Your MPSC <br />
              <span className="text-blue-700">Journey</span> With Us
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-lg leading-relaxed">
              Join thousands of successful candidates who transformed their
              MPSC preparation with our expert guidance and comprehensive
              study resources.
            </p>
            <div className="p-1">
              <HomeButtons />
            </div>
            <div className="mt-12 flex items-center gap-8">
              <div className="flex items-center">
                <div className="flex -space-x-4">
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20young%20Indian%20person%20smiling%2C%20clean%20background&width=50&height=50&seq=11&orientation=squarish"
                    alt="User"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20middle%20aged%20Indian%20person%20smiling%2C%20clean%20background&width=50&height=50&seq=12&orientation=squarish"
                    alt="User"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                  <img
                    src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20young%20Indian%20woman%20smiling%2C%20clean%20background&width=50&height=50&seq=13&orientation=squarish"
                    alt="User"
                    className="w-12 h-12 rounded-full border-2 border-white"
                  />
                </div>
                <span className="ml-4">
                  <div className="font-bold text-gray-900">15,000+</div>
                  <div className="text-sm text-gray-600">Active Students</div>
                </span>
              </div>
              <div className="flex items-center">
                <div className="text-yellow-400 text-2xl mr-2">
                  <StarFilled />
                </div>
                <span>
                  <div className="font-bold text-gray-900">4.9/5</div>
                  <div className="text-sm text-gray-600">Student Rating</div>
                </span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <div className="relative">
              <Image
                src="/hero-desktop.jpg"
                width={ 600 }
                height={ 500 }
                alt="MPSC Learning"
                className="rounded-2xl shadow-2xl max-w-full h-auto transform hover:scale-105 transition duration-500 " />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <UserOutlined />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">
                      Success Stories
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckOutlined size={ 50 } className="text-green-600 w-5" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">100%</div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
