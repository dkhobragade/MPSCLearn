"use client"

import { Col, Row } from "antd"
import { Children, ReactNode } from "react"

interface ElemsRowProps
{
    children: ReactNode
}

export function ElemsRow ( props: ElemsRowProps )
{
    const count = Children.count( props.children )

    const span = Math.floor( 24 / count )

    const responsiveSpan = {
        xs: 24,
        sm: 24,
        md: Math.max( 8, span ),
        lg: span,
        xl: span,
    }

    return (
        <Row gutter={ [ 16, 16 ] }>
            { Children.map( props.children, ( child, index ) => (
                <Col key={ index } { ...responsiveSpan }>
                    { child }
                </Col>
            ) ) }
        </Row>
    )

}