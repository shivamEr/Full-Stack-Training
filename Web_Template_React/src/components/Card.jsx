import React from 'react';
import { FaHeartbeat, FaAdn, FaAlipay, FaAtom } from 'react-icons/fa';

export const Card = () => {
  const cards = [
    { icon: <FaHeartbeat />, title: "Health Services", text: "Get access to top medical care and support." },
    { icon: <FaAdn />, title: "AI Integration", text: "Seamlessly blend AI into your workflow." },
    { icon: <FaAlipay />, title: "Payment Gateway", text: "Secure and fast online transactions." },
    { icon: <FaAtom />, title: "Atomic Design", text: "Build scalable design systems efficiently." },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="group relative w-full sm:w-[45%] md:w-[22%] overflow-hidden rounded-xl bg-white shadow-lg text-center p-5 transition duration-300"
        >
          {/* Blue background slide from bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-blue-400 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out z-0"></div>

          {/* Content */}
          <div className="relative z-10">
            <div className="text-4xl mb-3 text-blue-500 group-hover:text-white transition duration-300">
              {card.icon}
            </div>
            <h2 className="font-bold text-lg mb-2 group-hover:text-white transition duration-300">{card.title}</h2>
            <p className="text-sm text-gray-600 group-hover:text-white transition duration-300">
              {card.text}
            </p>
          </div>
        </div>
      ))}

      {/* Section of Appointment */}
      <div className="appointment bg-blue-300 h-[250px] w-full text-white text-center m-5">
        <h2 className="text-2xl font-bold pt-9 ">Book an Appointment</h2>
        <p className='text-center pt-5'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.</p>
        <button className='border-white text-white font-mono hover:bg-white hover:text-blue-300 p-3 mt-5 border-4'>Make An Appointment</button>
      </div>
    </div>
  );
};
