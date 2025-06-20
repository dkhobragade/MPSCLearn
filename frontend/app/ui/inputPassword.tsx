import { Input as PrimaryInput } from "antd"

interface InputProps
{
    placeholder?: string
    value?: string
    onChange: () => void
    size?: "large" | "middle" | "small"
}


export function PasswordInput ( props: InputProps )
{
    return (
        <PrimaryInput.Password autoComplete="new-password" size={ props.size } value={ props.value } placeholder={ props.placeholder } onChange={ props.onChange } />

    )
}