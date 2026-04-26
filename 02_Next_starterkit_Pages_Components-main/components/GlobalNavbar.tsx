"use client"

import { useState } from "react"
import SidebarSlider from "@/components/SidebarSlider"
import { GiHamburgerMenu } from "react-icons/gi"

export default function GlobalNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <>
      {/* Hamburger menu icon button */}
      <button
        className="fixed top-4 left-4 z-50 p-2 text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded"
        onClick={() => setIsSidebarOpen(true)}
      >
        <GiHamburgerMenu size={24} />
      </button>

      {/* SidebarSlider component */}
      <SidebarSlider isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)}>
        <nav className="flex flex-col space-y-4">
          <a href="/" className="hover:underline text-lg font-semibold border-b pb-2">
            Home
          </a>
          
          {/* Sectie voor de schoolopdracht artikelen */}
          <div className="pt-4 flex flex-col space-y-4">
            <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">
              Recent
            </p>
            <a href="/artikel1" className="hover:underline text-gray-700">
              Artikel 1
            </a>
            <a href="/artikel2" className="hover:underline text-gray-700">
              Artikel 2
            </a>
            <a href="/artikel3" className="hover:underline text-gray-700">
              Artikel 3
            </a>
          </div>

          <hr className="my-4 border-gray-100" />

          {/* Overige links */}
          <a href="/about" className="hover:underline text-gray-600">About</a>
          <a href="/contact" className="hover:underline text-gray-600">Contact</a>
          <a href="/login" className="hover:underline text-gray-600">Login</a>
        </nav>
      </SidebarSlider>
    </>
  )
}