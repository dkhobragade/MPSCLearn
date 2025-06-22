"use client"

import { useState } from "react";
import { Tabs } from "antd";
import Overview from "../components/staticPages/Prelims/Overview";
import Syllabus from "../components/staticPages/Prelims/Syllabus";
import Course from "../components/staticPages/Prelims/Course";
import FAQs from "../components/staticPages/Prelims/FAQs";
import CTA from "../components/staticPages/Prelims/CTA";

export default function Prelims ()
{
    const [ activeTab, setActiveTab ] = useState<string>( "overview" );

    const handleTabChange = ( key: string ) =>
    {
        setActiveTab( key );
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Main Content */ }
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Tabs
                    activeKey={ activeTab }
                    onChange={ handleTabChange }
                    className="prelims-tabs"
                    tabBarStyle={ { marginBottom: "24px" } }
                >
                    <Tabs.TabPane tab="Overview" key="overview">
                        <Overview />
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Syllabus" key="syllabus">
                        <Syllabus />
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="Course Details" key="course">
                        <Course />
                    </Tabs.TabPane>

                    <Tabs.TabPane tab="FAQs" key="faqs">
                        <FAQs />
                    </Tabs.TabPane>
                </Tabs>
            </div>
            {/* CTA Section */ }
            <CTA />
        </div>
    )
}