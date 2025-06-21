"use client"

import { useEffect, useState } from "react"
import { Button } from "../ui/button"
import { ElemsRow } from "../ui/row"
import { CaretRightOutlined, RightCircleFilled } from "@ant-design/icons"

export function HomeButtons ()
{
    const [ isMounted, setIsMounted ] = useState( false )

    useEffect( () =>
    {
        setIsMounted( true )
    }, [] )

    return (
        <ElemsRow>
            <Button skeleton={ !isMounted } size="large" type="primary" icon={ <CaretRightOutlined /> } iconPosition="end" text="Start Learning" onClick={ () => { } } />
            <Button skeleton={ !isMounted } size="large" icon={ <RightCircleFilled /> } iconPosition="end" text="Watch Demo" onClick={ () => { } } />
        </ElemsRow>
    )
}