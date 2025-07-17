import React from 'react';
import image from '../assets/about.png';

export const About = () => {
    return (
        <div className="about px-6 py-10 bg-white">
            <h1 className="text-3xl font-bold text-center mb-2">
                About Us
            </h1>
            <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
                Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit
            </p>

            <div className="details flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto bg-gray-50 shadow-lg rounded-xl p-6">
                <div className="image w-full md:w-1/2">
                    <img src={image} alt="About" className="w-full h-auto rounded-lg shadow-md" />
                </div>

                <div className="description w-full md:w-1/2 space-y-4">
                    <h2 className="text-2xl font-semibold text-gray-800">
                        Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
                    </h2>
                    <p className="text-gray-600">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <ul className="list-disc pl-5 text-gray-700 space-y-2">
                        <li>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                        <li>Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                        <li>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};
