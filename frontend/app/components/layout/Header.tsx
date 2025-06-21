
import { useRouter } from "next/navigation";
import { Button } from "@/app/ui/button";
import { ElemsRow } from "@/app/ui/row";
import { MenuOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import { HeaderItems } from "@/app/lib/constants";
import { useState } from "react";

export default function Header ()
{
    const [ currentMenu, setCurrentMenu ] = useState( 'mail' );

    const router = useRouter()

    const onMenuClick: MenuProps[ 'onClick' ] = ( e ) =>
    {
        setCurrentMenu( e.key )
        console.log( 'click', e );
    };

    return (
        <header className="bg-white shadow-md fixed w-full z-50">
            <div className="hidden lg:flex container mx-auto px-6 py-1 justify-between items-center">
                <div className="flex items-center">
                    <div className="text-2xl font-bold text-blue-700 mr-8 flex items-center">
                        <i className="fas fa-graduation-cap text-3xl mr-2"></i> DKMPSC
                    </div>
                    <Menu items={ HeaderItems } mode="horizontal" onClick={ onMenuClick } />
                </div>
                <ElemsRow>
                    <Button type="primary" size="middle" text="Sign In" onClick={ () => router.push( '/login' ) } />
                    <Button text="Register" size="middle" onClick={ () => router.push( '/signup' ) } />
                </ElemsRow>
                <MenuOutlined className="lg:!hidden text-gray-500 bg-amber-400 hover:text-red-700 cursor-pointer" />
            </div>
            {/* Mobile Menu */ }
            <div className="lg:hidden p-5">
                <Menu items={ HeaderItems } selectedKeys={ [ currentMenu ] } mode="inline" onClick={ onMenuClick } />
                <ElemsRow>
                    <Button type="primary" size="middle" text="Sign In" onClick={ () => router.push( '/login' ) } />
                    <Button text="Register" size="middle" onClick={ () => router.push( '/signup' ) } />
                </ElemsRow>
            </div>
        </header>
    )
}