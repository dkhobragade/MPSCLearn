"use client"

import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { ElemsRow } from "../ui/row"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faCrown, faFileDownload, faInfoCircle, faPlayCircle } from "@fortawesome/free-solid-svg-icons"
import { useRouter } from "next/navigation"
import { CoursesButtonProps } from "../lib/definitions"

export function HomeButtons ()
{
    const [ isMounted, setIsMounted ] = useState( false )
    const router = useRouter()

    useEffect( () =>
    {
        setIsMounted( true )
    }, [] )

    return (
        <ElemsRow>
            <Button skeleton={ !isMounted } fullWidth size="large" type="primary" icon={ <FontAwesomeIcon icon={ faArrowRight } /> } iconPosition="end" text="Start Learning" onClick={ () => { } } />
            <Button skeleton={ !isMounted } fullWidth size="large" icon={ <FontAwesomeIcon icon={ faPlayCircle } /> } iconPosition="end" text="Watch Demo" onClick={ () => router.push( '/freeinitiative' ) } />
        </ElemsRow>
    )
}

export function CoursesBTN ( props: CoursesButtonProps )
{
    const router = useRouter()

    return (

        <Button text={ props.text } variant="solid" color="danger" size="large" icon={ <FontAwesomeIcon icon={ faArrowRight } /> } iconPosition="end" fullWidth onClick={ () => router.push( '/prelims' ) } />
    )
}


export function DownloadBTN ()
{
    const [ isMounted, setIsMounted ] = useState( false )

    useEffect( () =>
    {
        setIsMounted( true )
    }, [] )

    return (
        <ElemsRow>
            <Button fullWidth skeleton={ !isMounted } size="middle" type="primary" text="Download All Papers" icon={ <FontAwesomeIcon icon={ faFileDownload } className='mr-2' /> } onClick={ () => { } } />
            <Button fullWidth skeleton={ !isMounted } size="middle" variant="solid" color="danger" text="How to Use" icon={ <FontAwesomeIcon icon={ faInfoCircle } className='mr-2' /> } onClick={ () => { } } />
        </ElemsRow>
    )
}


export function TestBTN ()
{
    const [ isMounted, setIsMounted ] = useState( false )

    useEffect( () =>
    {
        setIsMounted( true )
    }, [] )

    return (
        <ElemsRow>
            <Button fullWidth skeleton={ !isMounted } size="middle" type="primary" text="Explore Free Tests" icon={ <FontAwesomeIcon icon={ faArrowRight } className='mr-2' /> } onClick={ () => { } } />
            <Button fullWidth skeleton={ !isMounted } size="middle" variant="solid" color="danger" text="View Premium Plans" icon={ <FontAwesomeIcon icon={ faCrown } className='mr-2' /> } onClick={ () => { } } />
        </ElemsRow>
    )
}


export function CounsellingBTN ()
{
    const [ isMounted, setIsMounted ] = useState( false )

    useEffect( () =>
    {
        setIsMounted( true )
    }, [] )

    return (
        <ElemsRow>
            <Button size="large" skeleton={ !isMounted } fullWidth type="primary" text="Book a Session Now" onClick={ () => { } } />
            <Button size="large" skeleton={ !isMounted } fullWidth color="danger" variant="solid" text="Learn More" onClick={ () => { } } />
        </ElemsRow>
    )
}