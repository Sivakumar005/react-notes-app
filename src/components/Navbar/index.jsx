import React from "react"
import logo from "../../assets/images.jpeg"
export const Navbar = () => {
    return (
        <header className="flex p-3 gap-3 border-b-2 border-gray-200">
            <div className="w-12 h-12">
                <img src={logo} alt="logo" className="w-full h-full" />
            </div>
            <h1 className="text-4xl text-indigo-800 font-bold">ViteNotes</h1>
        </header>

    )
}