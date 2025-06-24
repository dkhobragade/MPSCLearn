"use client"

import { Tabs, TabsProps } from "antd";
import Overview from "../components/staticPages/Prelims/Overview";
import Syllabus from "../components/staticPages/Prelims/Syllabus";
import Course from "../components/staticPages/Prelims/Course";
import FAQs from "../components/staticPages/Prelims/FAQs";
import CTA from "../components/staticPages/Prelims/CTA";

export default function Prelims ()
{
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Main Content */ }
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Tabs
                    tabBarStyle={ { marginBottom: "24px" } }
                    defaultActiveKey="overview"
                    items={ items }
                />
            </div>
            {/* CTA Section */ }
            <CTA />
        </div>
    )
}


const items: TabsProps[ 'items' ] = [
    {
        key: 'overview',
        label: 'Overview',
        children: <Overview />
    },
    {
        key: 'syllabus',
        label: 'Syllabus',
        children: <Syllabus />
    },
    {
        key: 'course',
        label: 'Course Details',
        children: <Course />
    },
    {
        key: 'faqs',
        label: 'FAQs',
        children: <FAQs />
    },
]