import React, {useState} from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Header = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => setToggle(!toggle);
    return(
        <header className='flex justify-between px-5 py-2 bg-primary'>
        <a href='/' className='logo text-2xl font-bold text-accent'>Jonathan Healy</a>   
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
            <nav className={ 
                !toggle 
                    ? "mobile-nav left-[-100%]"
                    : "mobile-nav left-0"
                }>
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
            <button onClick={handleToggle} className="block md:hidden">
                {
                    !toggle ? <AiOutlineMenu size={30}/> : <AiOutlineClose size={30}/>
                }
            </button>
        </header> 
    )
}
export default Header
