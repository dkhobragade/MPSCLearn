"use client"

import { useState } from "react";
import { Tag } from "antd";
import { Button } from "../ui/button";
import { courseVideos } from "../lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCirclePlay, faLock } from "@fortawesome/free-solid-svg-icons";

export default function freeinitiative ()
{

    const [ selectedVideo, setSelectedVideo ] = useState<number>( 0 );

    return (
        <div className="min-h-screen bg-gray-50 p-10">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Video Player Section */ }
                    <div className="lg:col-span-2">
                        <div className="bg-white shadow rounded-lg overflow-hidden">
                            <div className="aspect-w-16 aspect-h-9 relative">
                                <img
                                    src={ courseVideos[ selectedVideo ].thumbnail }
                                    alt={ courseVideos[ selectedVideo ].title }
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                                    <FontAwesomeIcon icon={ faCirclePlay } className="text-6xl text-white opacity-80 hover:opacity-100 cursor-pointer" />
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <h1 className="text-2xl font-bold text-gray-900">
                                        { courseVideos[ selectedVideo ].title }
                                    </h1>
                                    <Tag
                                        color={
                                            courseVideos[ selectedVideo ].isLocked
                                                ? "error"
                                                : "success"
                                        }
                                    >
                                        { courseVideos[ selectedVideo ].isLocked
                                            ? "Locked"
                                            : "Free Preview" }
                                    </Tag>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    { courseVideos[ selectedVideo ].description }
                                </p>
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <div className="flex items-center space-x-4">
                                        <span>
                                            <i className="fas fa-user-tie mr-2"></i>
                                            { courseVideos[ selectedVideo ].instructor }
                                        </span>
                                        <span>
                                            <i className="fas fa-clock mr-2"></i>
                                            { courseVideos[ selectedVideo ].duration }
                                        </span>
                                    </div>
                                    { courseVideos[ selectedVideo ].progress > 0 && (
                                        <span className="flex items-center text-green-600">
                                            <FontAwesomeIcon icon={ faCircleCheck } className="mr-1" />
                                            Completed
                                        </span>
                                    ) }
                                </div>
                            </div>
                        </div>
                        {/* Course Description */ }
                        <div className="mt-8 bg-white shadow rounded-lg p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">
                                About This Course
                            </h2>
                            <p className="text-gray-600 mb-4">
                                This comprehensive course covers all aspects of MPSC
                                examination preparation. Our expert faculty members provide
                                detailed insights and strategic approaches to help you master
                                the subjects effectively.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-book text-blue-600"></i>
                                    <span>24 Total Lectures</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-clock text-blue-600"></i>
                                    <span>40+ Hours Content</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-certificate text-blue-600"></i>
                                    <span>Certificate of Completion</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <i className="fas fa-mobile-alt text-blue-600"></i>
                                    <span>Mobile-Friendly</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Playlist Section */ }
                    <div className="lg:col-span-1">
                        <div className="bg-white shadow rounded-lg overflow-hidden">
                            <div className="p-4 bg-gray-50 border-b border-gray-200">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    Course Content
                                </h3>
                                <p className="text-sm text-gray-600">
                                    4 lectures • 3h 22m total length
                                </p>
                            </div>
                            <div className="divide-y divide-gray-200">
                                { courseVideos.map( ( video, index ) => (
                                    <div
                                        key={ video.id }
                                        className={ `p-4 cursor-pointer hover:bg-gray-50 ${ selectedVideo === index ? "bg-blue-50" : "" }` }
                                        onClick={ () => setSelectedVideo( index ) }
                                    >
                                        <div className="flex items-start space-x-3">
                                            <div className="flex-shrink-0 relative w-32 h-20">
                                                <img
                                                    src={ video.thumbnail }
                                                    alt={ video.title }
                                                    className="w-full h-full object-cover rounded"
                                                />
                                                { video.isLocked && (
                                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded">
                                                        <FontAwesomeIcon icon={ faLock } className="text-white text-lg" />
                                                    </div>
                                                ) }
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-sm font-medium text-gray-900 mb-1">
                                                    { video.title }
                                                </h4>
                                                <div className="flex items-center text-xs text-gray-500">
                                                    <span className="mr-2">{ video.duration }</span>
                                                    { video.progress === 100 && (
                                                        <Tag color="success" className="text-xs">
                                                            Completed
                                                        </Tag>
                                                    ) }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ) ) }
                            </div>
                            <div className="p-4 bg-gray-50 border-t border-gray-200">
                                <Button type="primary" text="Enroll Now to Access All Lectures" onClick={ () => { } } />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}