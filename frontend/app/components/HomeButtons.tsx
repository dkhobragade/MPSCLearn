"use client"

import { CaretRightOutlined, RightCircleFilled } from "@ant-design/icons"
import { Button } from "../ui/button"
import { ElemsRow } from "../ui/row"

export function HomeButtons ()
{

    return (
        <ElemsRow>
            <Button size="large" type="primary" icon={ <CaretRightOutlined /> } iconPosition="end" text="Start Learning" onClick={ () => { } } />
            <Button size="large" icon={ <RightCircleFilled /> } iconPosition="end" text="Watch Demo" onClick={ () => { } } />
        </ElemsRow>
    )
}