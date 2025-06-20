import { Input as PrimaryInput } from "antd"

interface InputProps
{
    placeholder?: string
    value?: string
    onChange: () => void
    size?: "large" | "middle" | "small"
}

export function Input ( props: InputProps )
{
    return (
        <PrimaryInput autoComplete="new-password" size={ props.size } value={ props.value } placeholder={ props.placeholder } onChange={ props.onChange } />
    )
}