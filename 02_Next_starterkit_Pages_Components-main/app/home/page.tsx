"use client"

import { useState } from "react"
import SidebarSlider from "@/components/SidebarSlider"
import { GiHamburgerMenu } from "react-icons/gi"
import Link from "next/link" // We voegen Link toe voor snellere navigatie

export default function GlobalNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      {/* Hamburger menu icoon */}
      <button
        className="fixed top-4 left-4 z-50 p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded bg-white/80 backdrop-blur-sm shadow-sm"
        onClick={() => setIsSidebarOpen(true)}
      >
        <GiHamburgerMenu size={24} />
      </button>

      {/* SidebarSlider component */}
      <SidebarSlider isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
        <nav className="flex flex-col space-y-4 pt-10">
          <Link href="/" onClick={() => setIsSidebarOpen(false)} className="hover:underline text-lg font-semibold border-b pb-2 font-serif">
            Home
          </Link>
          
          {/* Sectie voor de schoolopdracht artikelen */}
          <div className="pt-4 flex flex-col space-y-4">
            <p className="text-xs text-blue-600 uppercase tracking-widest font-bold font-sans">
              Analyses De Standaard
            </p>
            
            <Link href="/artikel1" onClick={() => setIsSidebarOpen(false)} className="hover:underline text-gray-800 text-sm leading-tight">
              1. AI-slop & Sociale Media
            </Link>
            
            <Link href="/artikel2" onClick={() => setIsSidebarOpen(false)} className="hover:underline text-gray-800 text-sm leading-tight">
              2. Vibecoding: Apps maken
            </Link>
            
            <Link href="/artikel3" onClick={() => setIsSidebarOpen(false)} className="hover:underline text-gray-800 text-sm leading-tight">
              3. Het Spartacus-moment
            </Link>
          </div>

          <hr className="my-4 border-gray-100" />

          {/* Overige links */}
          <div className="flex flex-col space-y-2 text-sm text-gray-500 font-sans">
            <Link href="/about" onClick={() => setIsSidebarOpen(false)} className="hover:underline">About</Link>
            <Link href="/contact" onClick={() => setIsSidebarOpen(false)} className="hover:underline">Contact</Link>
            <Link href="/login" onClick={() => setIsSidebarOpen(false)} className="hover:underline">Login</Link>
          </div>
        </nav>
      </SidebarSlider>
    </>
  )
}
