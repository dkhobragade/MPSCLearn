import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/app/ui/button";
import { ElemsRow } from "@/app/ui/row";
import { Menu, MenuProps } from "antd";
import { MenuSkeleton } from "@/app/ui/skeletons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";

export default function Header ()
{
    const [ currentMenu, setCurrentMenu ] = useState( '' );
    const [ isMounted, setIsMounted ] = useState( false )

    useEffect( () =>
    {
        setIsMounted( true )
    }, [] )


    const router = useRouter()

    const onMenuClick: MenuProps[ 'onClick' ] = ( e ) =>
    {
        setCurrentMenu( e.key );
        switch ( e.key )
        {
            case 'pre':
                router.push( '/prelims' );
                break;
            case 'mains':
                router.push( '/mains' );
                break;
            case 'download':
                router.push( '/download' );
                break;
            case 'test':
                router.push( '/test' );
                break;
            case 'freeinitiative':
                router.push( '/freeinitiative' );
                break;
            case 'counselling':
                router.push( '/counselling' );
                break;
            default:
                break;
        }
    };

    return (
        <header className="bg-white shadow-md fixed w-full z-50">
            <div className="hidden lg:flex container mx-auto px-6 py-1 justify-between items-center">
                <div className="flex items-center">
                    <div className="text-2xl font-bold text-blue-700 mr-8 flex items-center cursor-pointer" onClick={ () => { router.push( '/' ), setCurrentMenu( " " ) } }>
                        DKMPSC
                    </div>
                    { isMounted ?
                        <Menu items={ HeaderItems } selectedKeys={ [ currentMenu ] } mode="horizontal" onClick={ onMenuClick } />
                        : <MenuSkeleton />
                    }
                </div>
                <ElemsRow>
                    <Button skeleton={ !isMounted } type="primary" size="middle" text="Sign In" onClick={ () => router.push( '/login' ) } />
                    <Button skeleton={ !isMounted } text="Register" size="middle" onClick={ () => router.push( '/signup' ) } />
                </ElemsRow>
                <FontAwesomeIcon icon={ faBars } className="lg:!hidden text-gray-500 bg-amber-400 hover:text-red-700 cursor-pointer" />
            </div>
            {/* Mobile Menu */ }
            <div className="lg:hidden p-5">
                { isMounted ?
                    <Menu items={ HeaderItems } selectedKeys={ [ currentMenu ] } mode="inline" onClick={ onMenuClick } />
                    : <MenuSkeleton />
                }
                <ElemsRow>
                    <Button type="primary" size="middle" text="Sign In" onClick={ () => router.push( '/login' ) } />
                    <Button text="Register" size="middle" onClick={ () => router.push( '/signup' ) } />
                </ElemsRow>
            </div>
        </header>
    )
}


export const HeaderItems = [
    {
        label: (
            <>
                Courses <FontAwesomeIcon icon={ faChevronDown } />
            </>
        ),
        key: "courses",
        children: [
            {
                label: "Prelims",
                key: 'pre',
            },
            {
                label: "Mains",
                key: 'mains',
            },
        ],
    },
    {
        label: (
            <>
                PYQs <FontAwesomeIcon icon={ faChevronDown } />
            </>
        ),
        key: "pyq",
        children: [
            {
                label: "Download",
                key: 'download',
            },
            {
                label: "Test",
                key: 'test',
            },
        ],
    },
    {
        label: "Free Initiative",
        key: 'freeinitiative',
    },
    {
        label: "Counselling",
        key: 'counselling',
    },
];