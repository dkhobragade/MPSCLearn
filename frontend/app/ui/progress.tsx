import { Progress as PrimaryProgress } from "antd"
import { ProgressGradient } from "antd/es/progress/progress"


interface ProgressProps
{
    percentage: number
    showInfo: boolean
    strokeColor: string | string[] | ProgressGradient
    trailColor: string
}

export default function Progress ( props: ProgressProps )
{
    return (
        <PrimaryProgress percent={ props.percentage } showInfo={ props.showInfo } strokeColor={ props.strokeColor } trailColor={ props.trailColor } />
    )
}