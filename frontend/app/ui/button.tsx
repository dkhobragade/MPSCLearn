import { ReactNode } from 'react'
import { Button as PrimaryButton } from 'antd'

interface ButtonProps
{
    text: string
    type?: "default" | "primary" | "link" | "text" | "dashed"
    color?: "default" | "primary" | "danger" | "blue" | "purple" | "cyan" | "green" | "magenta" | "pink" | "red" | "orange" | "yellow" | "volcano" | "geekblue" | "lime" | "gold"
    size?: "large" | "middle" | "small"
    onClick: ( event: React.MouseEvent<HTMLElement, MouseEvent> ) => void
    icon?: ReactNode
    iconPosition?: "start" | "end"
}

export function Button ( props: ButtonProps )
{
    return (
        <PrimaryButton size={ props.size } block icon={ props.icon } iconPosition={ props.iconPosition } onClick={ props.onClick } type={ props.type || "default" } color={ props.color || 'default' }  >
            { props.text }
        </PrimaryButton>
    );
}
