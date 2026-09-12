import React from 'react';
import banner from "../../assets/banner-stack.png";

const Hero = () => {
    return (
        <div className='py-16 md:py-24 bg-white'>

            <div className="pb-15 max-w-6xl mx-auto px-5 flex flex-col md:flex-row justify-between items-center gap-12">


                <div className='md:w-1/2'>
                    <h1 className='text-3xl md:text-4xl font-bold text-gray-900 leading-tight'>
                        Build Your Ideal <br />
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-600 to-purple-600'>Development Stack</span>
                    </h1>

                    <p className='py-6 text-gray-600 text-lg max-w-lg leading-relaxed'>
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>
                    <div className='flex gap-4 py-2'>
                        <button className='rounded-lg py-2 px-3 bg-gradient-to-r from-orange-500 to-orange-500'>Explore Technologies</button>
                        <button className='rounded-lg border border-gray-200 py-2 px-5'>Learn More</button>
                    </div>
                </div>


                <div className='md:w-1/2 flex justify-center md:justify-end'>
                    <img className='w-full max-w-md object-contain'
                        src={banner} alt="Development Stack"
                    />
                </div>

            </div>

        </div>
    );
};

export default Hero;