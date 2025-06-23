import Search from "antd/es/input/Search";

interface SearchBarProps
{
    placeholder: string
    onSearch?: ( value: string, event?: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>, info?: {
        source?: 'clear' | 'input';
    } ) => void;
    onPressEnter?: ( e: React.KeyboardEvent<HTMLInputElement> ) => void;
}

export default function Searchbar ( props: SearchBarProps )
{
    return (
        <Search placeholder={ props.placeholder } allowClear onSearch={ props.onSearch } onPressEnter={ props.onPressEnter } />
    )
}