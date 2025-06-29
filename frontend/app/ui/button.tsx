import { ReactNode } from 'react'
import { ButtonSkeleton } from './skeletons'
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
    fullWidth?: boolean
    variant?: "link" | "text" | "dashed" | "solid" | "outlined" | "filled"
    skeleton?: boolean
    disabled?: boolean
    loading?: boolean
}

export function Button ( props: ButtonProps )
{
    if ( props.skeleton )
    {
        return <ButtonSkeleton />
    }

    return (
        <PrimaryButton loading={ props.loading } disabled={ props.disabled } variant={ props.variant } size={ props.size } block={ props.fullWidth } icon={ props.icon } iconPosition={ props.iconPosition } onClick={ props.onClick } type={ props.type || "default" } color={ props.color || 'default' }  >
            { props.text }
        </PrimaryButton>
    );
}
