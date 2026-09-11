import React from 'react';
import banner from "../../assets/banner-stack.png";

const Hero = () => {
    return (
        <div>

            <div className="flex justify-between items-center gap-5">

                {/* Left Side */}
                <div>
                    <h1>
                        Build Your Ideal <br />
                        Development Stack
                    </h1>

                    <p>
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that
                        fits your next project.
                    </p>
                </div>

                {/* Right Side */}
                <div>
                    <img
                        src={banner}
                        alt="Development Stack"
                    />
                </div>

            </div>

            {/* Buttons */}
            <div>
                <button>Explore Technologies</button>
                <button>Learn More</button>
            </div>

        </div>
    );
};

export default Hero;