"use client"

import { Suspense } from "react"
import { Button } from "../ui/button"
import { ElemsRow } from "../ui/row"
import { ButtonSkeleton } from "../ui/skeletons"
import { CaretRightOutlined, RightCircleFilled } from "@ant-design/icons"

export function HomeButtons ()
{
    return (
        <Suspense fallback={ <ButtonSkeleton /> }>
            <ElemsRow>
                <Button size="large" type="primary" icon={ <CaretRightOutlined /> } iconPosition="end" text="Start Learning" onClick={ () => { } } />
                <Button size="large" icon={ <RightCircleFilled /> } iconPosition="end" text="Watch Demo" onClick={ () => { } } />
            </ElemsRow>
        </Suspense>
    )
}