"use client"

import { Calendar, Form, Input, Radio, Select } from 'antd'
import React, { useState } from 'react'
import { Dayjs } from 'dayjs'
import { ClockCircleOutlined } from '@ant-design/icons'
import { timeSlots } from '@/app/lib/constants'
import { Button } from '@/app/ui/button'

export default function Booking ()
{
    const [ selectedMentor, setSelectedMentor ] = useState<number | null>( null )
    const [ selectedPackage, setSelectedPackage ] = useState<number | null>( null )
    const [ selectedDate, setSelectedDate ] = useState<Dayjs | null>( null )
    const [ selectedTimeSlot, setSelectedTimeSlot ] = useState<string | null>( null )

    return (
        <section id="booking-section" className="bg-gray-50 py-16">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">
                        Book Your Session
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Select your preferred date and time for the counselling session.
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-3">
                        <div className="p-6 border-r border-gray-200">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Select Date
                            </h3>
                            <div className="calendar-container">
                                <Calendar
                                    fullscreen={ false }
                                    // onPanelChange={ onPanelChange }
                                    onSelect={ setSelectedDate }
                                />
                            </div>
                        </div>

                        <div className="p-6 border-r border-gray-200">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Select Time Slot
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                { timeSlots.map( ( slot, index ) => (
                                    <div
                                        key={ index }
                                        // onClick={ () => handleTimeSlotSelect( slot ) }
                                        className={ `p-3 rounded-lg border ${ selectedTimeSlot === slot ? "border-blue-500 bg-blue-50" : "border-gray-200" } hover:border-blue-500 cursor-pointer transition-colors` }
                                    >
                                        <div className="flex items-center">
                                            <ClockCircleOutlined
                                                className={ `mr-2 ${ selectedTimeSlot === slot ? "text-blue-500" : "text-gray-400" }` }
                                            />
                                            <span
                                                className={
                                                    selectedTimeSlot === slot
                                                        ? "text-blue-700 font-medium"
                                                        : "text-gray-600"
                                                }
                                            >
                                                { slot }
                                            </span>
                                        </div>
                                    </div>
                                ) ) }
                            </div>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-4">
                                Session Details
                            </h3>
                            <Form layout="vertical">
                                <Form.Item label="Topic/Doubt Description">
                                    <Input.TextArea
                                        rows={ 4 }
                                        placeholder="Describe the topics or doubts you want to discuss in the session..."
                                        className="rounded-lg"
                                    />
                                </Form.Item>

                                <Form.Item label="Preferred Language">
                                    <Select
                                        placeholder="Select language"
                                        className="w-full rounded-lg"
                                    >
                                        {/* <Option value="english">English</Option>
                                        <Option value="hindi">Hindi</Option>
                                        <Option value="marathi">Marathi</Option>
                                        <Option value="gujarati">Gujarati</Option> */}
                                    </Select>
                                </Form.Item>

                                <Form.Item label="Communication Method">
                                    <Radio.Group defaultValue="video">
                                        <Radio value="video">Video Call</Radio>
                                        <Radio value="audio">Audio Call</Radio>
                                    </Radio.Group>
                                </Form.Item>
                            </Form>

                            <div className="mt-6">
                                <Button disabled={ !selectedPackage ||
                                    !selectedMentor ||
                                    !selectedDate ||
                                    !selectedTimeSlot }
                                    text="Proceed to Payment" type="primary" fullWidth onClick={ () => { } } />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}