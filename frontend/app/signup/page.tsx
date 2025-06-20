"use client"

import { useState } from 'react';
import { GoogleOutlined, LockOutlined, MailOutlined, PhoneOutlined, UserOutlined } from '@ant-design/icons';
import { Divider, Form } from 'antd';
import { Button } from '../ui/button';
import Link from 'next/link';
import { Input } from '../ui/input';
import { PasswordInput } from '../ui/inputPassword';


export default function page ()
{
    const [ confirmPasswordVisible, setConfirmPasswordVisible ] =
        useState<boolean>( false );

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">
                        Create your account
                    </h2>
                    <p className="text-gray-600 mt-1">Join MPSC Coaching today</p>
                </div>

                <Form layout="vertical">
                    <Form.Item
                        name="fullName"
                        rules={ [
                            { required: true, message: "Please input your full name!" },
                        ] }
                        className="mb-4"
                    >
                        <Input size="large" prefix={ <UserOutlined className="text-gray-400 mr-2" /> } placeholder='Full Name' onChange={ () => { } } />
                    </Form.Item>

                    <Form.Item
                        name="email"
                        rules={ [
                            {
                                required: true,
                                message: "Please input your email address!",
                            },
                            {
                                type: "email",
                                message: "Please enter a valid email address!",
                            },
                        ] }
                        className="mb-4"
                    >
                        <Input prefix={ <MailOutlined className="text-gray-400 mr-2" /> }
                            placeholder="Email Address"
                            size="large" onChange={ () => { } } />
                    </Form.Item>

                    <Form.Item
                        name="mobile"
                        rules={ [
                            {
                                required: true,
                                message: "Please input your mobile number!",
                            },
                            {
                                pattern: /^[0-9]{10}$/,
                                message: "Please enter a valid 10-digit mobile number!",
                            },
                        ] }
                        className="mb-4"
                    >
                        <Input prefix={ <PhoneOutlined className="text-gray-400 mr-2" /> }
                            placeholder="Mobile Number"
                            size="large" onChange={ () => { } } />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={ [
                            { required: true, message: "Please input your password!" },
                            {
                                min: 8,
                                message: "Password must be at least 8 characters!",
                            },
                        ] }
                        className="mb-2"
                    >
                        <PasswordInput prefix={ <LockOutlined className="text-gray-400 mr-2" /> }
                            placeholder="Password"
                            size="large" onChange={ () => { } } />
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        dependencies={ [ "password" ] }
                        rules={ [
                            { required: true, message: "Please confirm your password!" },
                            ( { getFieldValue } ) => ( {
                                validator ( _, value )
                                {
                                    if ( !value || getFieldValue( "password" ) === value )
                                    {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error( "The two passwords do not match!" ),
                                    );
                                },
                            } ),
                        ] }
                        className="mb-6"
                    >
                        <div className="relative">
                            <PasswordInput prefix={ <LockOutlined className="text-gray-400 mr-2" /> }
                                placeholder="Confirm Password"
                                size="large" onChange={ () => { } } />
                            <div
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                                onClick={ () =>
                                    setConfirmPasswordVisible( !confirmPasswordVisible )
                                }
                            >
                            </div>
                        </div>
                    </Form.Item>

                    <Button type="primary" size="large" text="Sign Up" onClick={ () => { } } />

                    <Divider className="my-6">
                        <span className="text-gray-500 text-sm px-2">OR</span>
                    </Divider>

                    <Button text="Continue with Google" icon={ <GoogleOutlined className="!text-red-500 mr-3 w-5" color="red" /> } onClick={ () => { } } />

                    <div className="text-center mt-6">
                        <p className="text-gray-600 text-sm">
                            Already have an account?
                            <Link
                                href="/login"
                                key="/login"
                                className="text-blue-600 hover:text-blue-800 ml-1 font-medium"
                            >
                                Login
                            </Link>
                        </p>
                    </div>

                    <div className="text-center mt-4">
                        <p className="text-xs text-gray-500">
                            By signing up, you agree to our
                            <a
                                href="#"
                                className="text-blue-600 hover:text-blue-800 mx-1"
                            >
                                Terms of Service
                            </a>
                            and
                            <a
                                href="#"
                                className="text-blue-600 hover:text-blue-800 mx-1"
                            >
                                Privacy Policy
                            </a>
                        </p>
                    </div>
                </Form>
            </div>
        </div>
    )
}