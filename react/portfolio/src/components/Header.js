import React, {useState} from 'react';
import { AiOutlineMenu, AIOutlineClose } from 'react-icons/ai'

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);
    return(
        <header className='flex justify-between px-5 py-2 bg-gray-600'>
        <a href='/' className='logo text-2xl text-white font-bold'>Jonathan Healy</a>   
            {/* Desktop Nav */}
            <nav className='hidden md:block'>
                <ul className='flex'>
                    <li><a href='/#'>About</a></li>
                    <li><a href='/#projects'>Projects</a></li>
                    <li><a href='/#blog'>Blog</a></li>
                    <li><a href='/#contact'>Contact</a></li>
                    <li><a href='/#resume'>Resume</a></li>
                </ul>
            </nav>

            {/* Mobile Nav */}
            <nav className='block md:hidden fixed left-0 right-0 top-10 py-2 h-full bg-gray-900'>
                {/* Desktop Nav */}
                <ul className='flex flex-col'>
                    <li><a href='/#'>About</a></li>
                    <li><a href='/#projects'>Projects</a></li>
                    <li><a href='/#blog'>Blog</a></li>
                    <li><a href='/#contact'>Contact</a></li>
                    <li><a href='/#resume'>Resume</a></li>
                </ul>
            </nav>
            {/* Toggle button */}
            <button onClick={handleToggle}></button>
        </header> 
    )
}
export default Header
