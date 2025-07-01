'use client'
import { useState } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <nav className="flex items-center justify-between px-10 py-6 bg-gray-900 text-white relative">
      <h3 className="text-yellow-500 font-bold text-xl">
        <Link href="#">Chinyemba</Link>
      </h3>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-lg">
        <li className="hover:underline decoration-yellow-400 underline-offset-4">
          <Link href="#">Home</Link>
        </li>
        <li className="hover:underline decoration-yellow-400 underline-offset-4">
          <Link href="#about">About</Link>
        </li>
        <li className="hover:underline decoration-yellow-400 underline-offset-4">
          <Link href="#services">Services</Link>
        </li>
        <li className="hover:underline decoration-yellow-400 underline-offset-4">
          <Link href="#contact">Contact</Link>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div className="md:hidden text-2xl ml-4 z-50 cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="absolute top-[100%] left-0 w-full bg-gray-900 text-white text-center py-6 space-y-4 md:hidden z-40">
          <li><Link href="#" onClick={toggleMenu}>Home</Link></li>
          <li><Link href="#about" onClick={toggleMenu}>About</Link></li>
          <li><Link href="#services" onClick={toggleMenu}>Services</Link></li>
          <li><Link href="#footer" onClick={toggleMenu}>Contact</Link></li>
        </ul>
      )}
    </nav>
  )
}

export default NavBar
