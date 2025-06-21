import { ReactNode } from 'react'
import { Button as PrimaryButton } from 'antd'
import { ButtonSkeleton } from './skeletons'

interface ButtonProps
{
    text: string
    type?: "default" | "primary" | "link" | "text" | "dashed"
    color?: "default" | "primary" | "danger" | "blue" | "purple" | "cyan" | "green" | "magenta" | "pink" | "red" | "orange" | "yellow" | "volcano" | "geekblue" | "lime" | "gold"
    size?: "large" | "middle" | "small"
    onClick: ( event: React.MouseEvent<HTMLElement, MouseEvent> ) => void
    icon?: ReactNode
    iconPosition?: "start" | "end"
    fullWidth?: boolean
    variant?: "link" | "text" | "dashed" | "solid" | "outlined" | "filled"
    skeleton?: boolean
}

export function Button ( props: ButtonProps )
{
    if ( props.skeleton )
    {
        return <ButtonSkeleton />
    }

    return (
        <PrimaryButton variant={ props.variant } size={ props.size } block={ props.fullWidth || true } icon={ props.icon } iconPosition={ props.iconPosition } onClick={ props.onClick } type={ props.type || "default" } color={ props.color || 'default' }  >
            { props.text }
        </PrimaryButton>
    );
}
