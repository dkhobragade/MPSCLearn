"use client"

import { Skeleton } from "antd";

export default function Loading ()
{
    return <div className="flex justify-center items-center min-h-screen">
        <Skeleton.Input active style={ { width: 300, height: 500 } } size="large" />
    </div>
}