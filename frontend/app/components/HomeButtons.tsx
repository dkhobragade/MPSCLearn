"use client"

import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { ElemsRow } from "../ui/row"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faPlayCircle } from "@fortawesome/free-solid-svg-icons"

export function HomeButtons ()
{
    const [ isMounted, setIsMounted ] = useState( false )

    useEffect( () =>
    {
        setIsMounted( true )
    }, [] )

    return (
        <ElemsRow>
            <Button skeleton={ !isMounted } fullWidth size="large" type="primary" icon={ <FontAwesomeIcon icon={ faArrowRight } /> } iconPosition="end" text="Start Learning" onClick={ () => { } } />
            <Button skeleton={ !isMounted } fullWidth size="large" icon={ <FontAwesomeIcon icon={ faPlayCircle } /> } iconPosition="end" text="Watch Demo" onClick={ () => { } } />
        </ElemsRow>
    )
}