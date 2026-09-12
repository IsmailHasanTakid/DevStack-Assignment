import { FaBars } from 'react-icons/fa';
import logo from "../../assets/logo-text.png";



const Navbar = () => {

    return (
        <header className='fixed top-0 left-0 z-50 w-full border-slate-100 bg-white'>

            <div className='mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-2 py-4 '>
                <div className='flex h-9 w-9 items-center md:hidden'>
                    <FaBars />
                </div>
                <a href='#home' className='flex items-center gap-3 md:flex-none'>
                    <img src={logo} alt='dev stack logo' />
                </a>
                <nav className='hidden md:flex'>
                    <ul className='flex items-center gap-6'>
                        <li>
                            <a href='home' className='text-sm font-medium text-pink-600'>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href='technologies' className='text-sm font-medium text-slate-600 hover:text-pink-600'>
                                Technologies

                            </a>
                        </li>
                        <li>
                            <a href='projects' className='text-sm font-medium text-slate-600 hover:text-pink-600'>
                                Projects

                            </a>
                        </li>
                        <li>
                            <a href='about' className='text-sm font-medium text-slate-600 hover:text-pink-600'>
                                About

                            </a>
                        </li>
                        <li>
                            <a href='contact' className='text-sm font-medium text-slate-600 hover:text-pink-600'>
                                Contact

                            </a>
                        </li>

                    </ul>

                </nav>
                <div className='flex items-center gap-4'>
                    <a href='#sign in' className='text-sm font-semibold text-slate-700 hover:text-slate-900 hover:font-extrabold'>
                        Sign in
                    </a>
                    <a href='#sign up' className='rounded-full bg-pink-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-opacity hover:opacity-90'>
                        Sign Up
                    </a>

                </div>
            </div>

        </header>

    );
};

export default Navbar;