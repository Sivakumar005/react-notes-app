import { NavLink } from "react-router-dom"
import React from "react"
export const Sidebar = () => {
    const getStyles=({isActive})=>{
        return isActive?'text-slate-50 bg-indigo-500 flex align-center gap-1 px-3 py-3 rounded-tr-full rounded-br-full':'hover:bg-indigo-500 hover:text-slate-50 flex align-center gap-1 px-3 py-3 rounded-tr-full rounded-br-full'
    }
    return (
        <aside className="flex flex-col gap-3 border-r-2 border-gray-200 w-48 h-screen px-2">
            <NavLink className={getStyles} to="/">
                <span className="material-icons-outlined">
                    home
                </span>
                <span>Home</span>
            </NavLink>
            <NavLink className={getStyles} to="/archive">
                <span className="material-icons-outlined">
                    archive
                </span>
                Archive</NavLink>
            <NavLink className={getStyles} to="/important"><span className="material-icons-outlined">
                label_important
            </span>
            <span>Important</span></NavLink>
            <NavLink className={getStyles} to="/bin"><span className="material-icons-outlined">
                    delete
                </span>Bin</NavLink>
        </aside>
    )
}