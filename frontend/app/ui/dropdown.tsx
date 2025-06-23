import { Select } from "antd";
import { DefaultOptionType } from "antd/es/select";


interface DropdownProps
{
    options: DefaultOptionType[]
    onChange?: () => void;
    placeholder: string
}

export default function Dropdown ( props: DropdownProps )
{
    return (
        <Select showSearch placeholder={ props.placeholder } options={ props.options } onChange={ props.onChange } />
    )
}