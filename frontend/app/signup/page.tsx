"use client"

import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faPhone, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { Input } from '../ui/input';
import { PasswordInput } from '../ui/inputPassword';
import { Button } from '../ui/button';
import { Divider, Form } from 'antd/es';
import toast from 'react-hot-toast';
import { useAuthStore } from '../store/useAuthStore';

interface FormData
{
    fullname: string;
    email: string;
    mobileno: string;
    password: string;
    confirmPass: string;
}

export default function page ()
{

    const [ fromData, setFormData ] = useState<FormData>( {
        fullname: '',
        email: '',
        mobileno: '',
        password: '',
        confirmPass: ''
    } )

    const [ confirmPasswordVisible, setConfirmPasswordVisible ] =
        useState<boolean>( false );

    const { signup } = useAuthStore()

    const onChangeFormData = ( e: React.ChangeEvent<HTMLInputElement>, type: string ) =>
    {
        if ( type === "fullname" )
        {
            if ( !e.target.value.trim() ) toast.error( "Enter the fullName" );
            setFormData( { ...fromData, fullname: e.target.value } );
        }
        else if ( type === "email" )
        {
            if ( !e.target.value.trim() ) toast.error( "Enter the fullName" );
            setFormData( { ...fromData, email: e.target.value } );
        }
        else if ( type === "mobileno" )
        {
            if ( !e.target.value.trim() ) toast.error( "Enter the fullName" );
            setFormData( { ...fromData, mobileno: e.target.value } );
        }
        else if ( type === "password" )
        {
            if ( !e.target.value.trim() ) toast.error( "Enter the fullName" );
            setFormData( { ...fromData, password: e.target.value } );
        }
        else if ( type === "confPassword" )
        {
            if ( !e.target.value.trim() ) toast.error( "Enter the fullName" );
            setFormData( { ...fromData, confirmPass: e.target.value } );
        }
    }

    console.log( fromData )

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
                        <Input size="large" prefix={ <FontAwesomeIcon icon={ faUser } className="text-gray-400 mr-2" /> } placeholder='Full Name' onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onChangeFormData( e, "fullname" ) } />
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
                        <Input prefix={ <FontAwesomeIcon icon={ faEnvelope } className="text-gray-400 mr-2" /> }
                            placeholder="Email Address"
                            size="large" onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onChangeFormData( e, "email" ) } />
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
                        <Input prefix={ <FontAwesomeIcon icon={ faPhone } className="text-gray-400 mr-2" /> }
                            placeholder="Mobile Number"
                            size="large" onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onChangeFormData( e, "mobileno" ) } />
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
                        <PasswordInput prefix={ <FontAwesomeIcon icon={ faLock } className="text-gray-400 mr-2" /> }
                            placeholder="Password"
                            size="large" onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onChangeFormData( e, "password" ) } />
                    </Form.Item>
                    <Form.Item
                        name="confirmPassword"
                        dependencies={ [ "password" ] }
                        rules={ [
                            { required: true, message: "Please confirm your password!" },
                            ( { getFieldValue }: any ) => ( {
                                validator ( _: any, value: any )
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
                            <PasswordInput prefix={ <FontAwesomeIcon icon={ faLock } className="text-gray-400 mr-2" /> }
                                placeholder="Confirm Password"
                                size="large" onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onChangeFormData( e, "confPassword" ) } />
                            <div
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
                                onClick={ () =>
                                    setConfirmPasswordVisible( !confirmPasswordVisible )
                                }
                            >
                            </div>
                        </div>
                    </Form.Item>

                    <Button type="primary" fullWidth size="large" text="Sign Up" onClick={ ( e: any ) => { e.preventDefault(), signup( fromData ) } } />

                    <Divider className="my-6">
                        <span className="text-gray-500 text-sm px-2">OR</span>
                    </Divider>

                    <Button text="Continue with Google" fullWidth icon={ <FontAwesomeIcon icon={ faGoogle } className="!text-red-500 mr-3 w-5" /> } onClick={ () => { } } />

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
                            <Link
                                href="#"
                                className="text-blue-600 hover:text-blue-800 mx-1"
                            >
                                Terms of Service
                            </Link>
                            and
                            <Link
                                href="#"
                                className="text-blue-600 hover:text-blue-800 mx-1"
                            >
                                Privacy Policy
                            </Link>
                        </p>
                    </div>
                </Form>
            </div>
        </div>
    )
}