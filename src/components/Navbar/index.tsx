
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";


export const Navbar = () => {

    const [nav, setNav] = useState(false);
    const [page, setPage] = useState(1);
    const pageShow = window.location.pathname;

    const handleClick = () => setNav(!nav);

    React.useEffect(() => {
        if (pageShow === "/") {
            setPage(1);
        } else if (pageShow === "/characters") {
            setPage(2);
        } else if (pageShow === "/other") {
            setPage(3);
        } else {
            setPage(1);
        }

    }, [])


    return (<>
        <nav className='flex p-5 items-center border-b bg-gray-800 nav fixed top-0 w-full'>
           
                <div>
                    <ul className='hidden  md:flex gap-6 text-gray-400' >
                        <Link onClick={() => setPage(1)} to='/'>
                            <li className={`${page === 1 ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} rounded-md px-3 py-2 text-sm font-medium`}>
                                Home
                            </li>
                        </Link>
                        <Link onClick={() => setPage(2)} to='/characters'>
                            <li className={`${page === 2 ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} rounded-md px-3 py-2 text-sm font-medium`}>
                                Personajes
                            </li>
                        </Link>
                        <Link onClick={() => setPage(3)} to='/contact'>
                            <li className={`${page === 3 ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} rounded-md px-3 py-2 text-sm font-medium`}>
                                Contact
                            </li>
                        </Link>

                    </ul>
                </div>



                {/* Hamburger or Close Icon */}
                <div className=' md:hidden z-10' onClick={handleClick}>
                    {nav ? <h1>hola</h1> : <RxHamburgerMenu size={25} />}
                </div>
                {/* Mobile Menu */}
                <ul
                    className={`${nav
                        ? 'text-white opacity-100 transform translate-x-0'
                        : 'opacity-0 transform -translate-y-full'
                        } transition-transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2xl`}
                    onClick={() => setNav(false)}
                >
                    <Link to='/'><li className='hover:text-teal-700'>Home</li></Link>
                    <Link to='/characters'><li className='hover:text-teal-700'>Personajes</li></Link>
                    <Link to='/other'><li className='hover:text-teal-700'>Products</li></Link>
                    <Link to='/contact'><li className='hover:text-teal-700'>Contact Us</li></Link>

                </ul>
        </nav>
    </>)
}