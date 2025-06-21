import { Skeleton } from "antd";

export function ButtonSkeleton ()
{
    return (
        <Skeleton.Button active size="default" shape="default" block />
    )
}

export default function CardSkeleton ()
{

    return (
        <Skeleton.Node active style={ { width: '300px', height: '400px' } } />
    )
}


export function MenuSkeleton ()
{
    return (
        <div className="flex space-x-6">
            <Skeleton.Button active size="default" shape="round" />
            <Skeleton.Button active size="default" shape="round" />
            <Skeleton.Button active size="default" shape="round" />
        </div>
    )
}