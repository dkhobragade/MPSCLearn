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
