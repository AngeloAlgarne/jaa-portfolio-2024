import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex gap-x-2 fixed top-5 text-white bg-indigo-950 px-1 py-1 rounded-2xl'>
            <a className='flex-auto px-4 py-2 rounded-2xl hover:bg-indigo-900 cursor-pointer transition-all duration-500'>Home</a>
            <a className='flex-auto px-4 py-2 rounded-2xl hover:bg-indigo-900 cursor-pointer transition-all duration-500'>Projects</a>
            <a className='flex-auto px-4 py-2 rounded-2xl hover:bg-indigo-900 cursor-pointer transition-all duration-500'>About</a>
            <a className='flex-auto px-4 py-2 rounded-2xl hover:bg-indigo-900 cursor-pointer transition-all duration-500'>Contact</a>
        </nav>
    )
}

export default Navbar