import React from 'react'

export const Navbar = () => {
    return (
        <nav className='bg-white flex justify-around p-5 sticky'>
            <h1 className="font-medium text-2xl">MEDICIO</h1>
            <ul className="list flex uppercase">
                <li className='pl-5 font-mono cursor-pointer hover:text-blue-300'>About</li>
                <li className='pl-5 font-mono cursor-pointer hover:text-blue-300'>Services</li>
                <li className='pl-5 font-mono cursor-pointer hover:text-blue-300'>Departments</li>
                <li className='pl-5 font-mono cursor-pointer hover:text-blue-300'>Doctors</li>
                <li className='pl-5 font-mono cursor-pointer hover:text-blue-300'>Dropdown</li>
                <li className='pl-5 font-mono cursor-pointer hover:text-blue-300'>Home</li>
                <li className='pl-5 font-mono cursor-pointer hover:text-blue-300'>Contact</li>
            </ul>
            <button className='bg-blue-300 cursor-pointer rounded-md text-white font-medium p-2'>Make an Appointment</button>
        </nav>
    )
}
