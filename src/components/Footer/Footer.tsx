import React from 'react';
import Logo from "../../assets/logo-text.png";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
    return (
        <section className='mt-16 border-t border-gray-100'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-45'>
                    <div className='flex flex-col items-center text-center md:items-start md:text-left gap-3 mx-auto mf:mx-0'>
                        <img src={Logo} alt="Footer Logo" className='h-7' />
                        <p className='text-gray-500 text-sm  max-w-xs'>Curated tools,technologies,and resources for developers building modern software</p>
                        <ul className='flex  items-center gap-4 text-sm text-gray-500 mt-1'>
                            <li className='hover:text-gray-900 cursor-pointer'>Github</li>
                            <li className="sm:hidden text-black">•</li>
                            <li className='hover:text-gray-900 cursor-pointer'>Twitter</li>
                            <li className="sm:hidden text-black">•</li>
                            <li className='hover:text-gray-900 cursor-pointer'>LinkedIn</li>
                        </ul>
                    </div>
                    <div className='hidden sm:flex  gap-45'>
                        <div>
                            <ul className='flex flex-col gap-2 text-sm'>
                                <li className='font-semibold text-gray-900 mb-1'>PRODUCT</li>
                                <li className='text-gray-500 hover:cursor-pointer'>Home</li>
                                <li className='text-gray-500 hover:cursor-pointer'>Technologies</li>
                                <li className='text-gray-500 hover:cursor-pointer'>Projects</li>
                            </ul>
                        </div>


                        <div>

                            <ul className='flex flex-col gap-2 text-sm'>
                                <li className='font-semibold text-gray-900 mb-1'>COMPANY</li>
                                <li className='text-gray-500 hover:cursor-pointer'>About</li>
                                <li className='text-gray-500 hover:cursor-pointer'>Contact</li>
                                <li className='text-gray-500 hover:cursor-pointer'>Careers</li>
                            </ul>

                        </div>


                        <div>
                            <ul className='flex flex-col gap-2 text-sm'>
                                <li className='font-semibold text-gray-900'>LEGAL</li>
                                <li className='text-gray-500 hover:cursor-pointer'>Privacy Policy</li>
                                <li className='text-gray-500 hover:cursor-pointer'>Terms of Service</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row justify-between items-center gap-3 border-gray-100 pt-6 mt-10 text-center text-sm text-gray-500 sm:text-left'>

                    <p className='flex items-center gap-1'><FaRegCopyright />2026 Dev Stack. All rights reserved.</p>
                    <ul className='flex gap-4'>
                        <li className='hover:text-gray-900 cursor-pointer'>Privacy</li>
                        <li>Terms</li>
                    </ul>
                </div>

            </div>
        </section>
    );
};

export default Footer;