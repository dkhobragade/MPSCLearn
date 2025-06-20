"use client"

import Link from "next/link";
import GoogleOutlined from "@ant-design/icons/lib/icons/GoogleOutlined";
import { Divider, Form, Input } from "antd";
import Checkbox from "antd/es/checkbox/Checkbox";
import { Button } from "../ui/button";

export default function page ()
{
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
                    <p className="text-gray-600 mt-1">
                        Sign in to continue to your account
                    </p>
                </div>


                <Form layout="vertical" className="mt-6">
                    <Form.Item
                        name="email"
                        rules={ [
                            {
                                required: true,
                                message: "Please input your email or mobile number!",
                            },
                        ] }
                        className="mb-4"
                    >
                        <Input
                            placeholder="Email or Mobile Number"
                            size="large"
                            autoComplete='new-password'
                            className="rounded-md py-2 px-4 border-gray-300 text-sm"
                        />
                    </Form.Item>

                    <Form.Item
                        name="password"
                        rules={ [
                            { required: true, message: "Please input your password!" },
                        ] }
                        className="mb-2"
                    >
                        <Input.Password
                            placeholder="Password"
                            size="large"
                            autoComplete='new-password'
                            className="rounded-md py-2 px-4 border-gray-300 text-sm"

                        />
                    </Form.Item>

                    <div className="flex justify-between items-center mb-6">
                        <Form.Item name="remember" valuePropName="checked">
                            <Checkbox className="text-sm text-gray-600">
                                Remember me
                            </Checkbox>
                        </Form.Item>
                        <Link
                            href="#"
                            className="text-sm text-blue-600 hover:text-blue-800 whitespace-nowrap"
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    <Form.Item className="mb-4">
                        <Button type="primary" text="Login" size="large" onClick={ () => { } } />
                    </Form.Item>

                    <Divider className="my-6">
                        <span className="text-gray-500 text-sm px-2">OR</span>
                    </Divider>

                    <div className="space-y-3">
                        <Button text="Continue with Google" icon={ <GoogleOutlined className="!text-red-500 mr-3 w-5" color="red" /> } onClick={ () => { } } />
                    </div>

                    <div className="text-center mt-6">
                        <p className="text-gray-600 text-sm">
                            Don't have an account?
                            <Link
                                href="/signup"
                                key="/signup"
                                className="text-blue-600 hover:text-blue-800 ml-1 font-medium"
                            >
                                Sign Up
                            </Link>
                        </p>
                    </div>
                </Form>
            </div>
        </div>
    )
}