import PrimaryCheckbox, { CheckboxChangeEvent } from "antd/es/checkbox/Checkbox"

interface CheckboxProps
{
    text: string
    isChecked?: boolean
    onChange: ( e: CheckboxChangeEvent ) => void
}

export function Checkbox ( props: CheckboxProps )
{
    return (
        <PrimaryCheckbox onChange={ props.onChange } checked={ props.isChecked }>
            { props.text }
        </PrimaryCheckbox>
    )
}