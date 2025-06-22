import { useEffect, useState } from "react";
import Link from "next/link";
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
        setCurrentMenu( e.key )
        console.log( 'click', e );
    };

    return (
        <header className="bg-white shadow-md fixed w-full z-50">
            <div className="hidden lg:flex container mx-auto px-6 py-1 justify-between items-center">
                <div className="flex items-center">
                    <div className="text-2xl font-bold text-blue-700 mr-8 flex items-center">
                        <Link href="/">
                            DKMPSC
                        </Link>
                    </div>
                    { isMounted ?
                        <Menu items={ HeaderItems } mode="horizontal" onClick={ onMenuClick } />
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
        icon: "",
        children: [
            {
                label: (
                    <Link href="/prelims" >
                        Prelims
                    </Link>
                ),
                key: 'pre',
                icon: '',
            },
            {
                label: (
                    <Link href="/mains">
                        Mains
                    </Link>
                ),
                key: 'mains',
                icon: '',
            },

        ],
    },
    {
        label: (
            <>
                PYQ <FontAwesomeIcon icon={ faChevronDown } />
            </>
        ),
        key: "pyq",
        icon: "",
        children: [
            {
                label: (
                    <Link href="download">
                        Download
                    </Link>
                ),
                key: 'download',
                icon: '',
            },
            {
                label: (
                    <Link href="/test">
                        Test
                    </Link>
                ),
                key: 'test',
                icon: '',
            },

        ],
    },
    {
        label: (
            <Link href="/freeinitiative">
                Free Initiative
            </Link>
        ),
        key: 'freeinitiative',
        icon: ""
    },
    {
        label: (
            <Link href="/counselling" >
                Counselling
            </Link>
        ),
        key: 'counselling',
        icon: ""
    },
]
