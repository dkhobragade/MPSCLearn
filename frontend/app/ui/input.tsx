import { ReactNode } from "react"
import { Input as PrimaryInput } from "antd"

interface InputProps
{
    placeholder?: string
    value?: string
    onChange: () => void
    size?: "large" | "middle" | "small"
    prefix?: ReactNode
}

export function Input ( props: InputProps )
{
    return (
        <PrimaryInput prefix={ props.prefix } autoComplete="new-password" size={ props.size } value={ props.value } placeholder={ props.placeholder } onChange={ props.onChange } />
    )
}