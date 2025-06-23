import { List as PrimaryList } from "antd"

interface ListProps
{
    layout: 'horizontal' | 'vertical'
    bordered: boolean
    data: { title: string }[]
}

export default function List ( props: ListProps )
{
    return (
        <PrimaryList itemLayout={ props.layout } dataSource={ props.data } bordered={ props.bordered } renderItem={ ( item ) => <PrimaryList.Item>{ item.title }</PrimaryList.Item> } />
    )
}