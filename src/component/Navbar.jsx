import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div className="bg-slate-800 w-full h-20 flex px-20 items-center justify-between">
            <div className="flex items-center">
                <img src='https://flowbite.com/docs/images/logo.svg'></img>
                <h1 className="text-white text-2xl font-bold">GookFoods</h1>
            </div>
            <ul className="flex items-center gap-8 text-white text-xl">
            <NavLink to='/'  className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }><li>Home</li></NavLink>


             <NavLink to='/quote'  className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }> <li>Qoute</li></NavLink>    


             <NavLink to='/resturants'  className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }> <li>Resturants</li></NavLink>   


            <NavLink to='/foods'  className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }> <li>Foods</li></NavLink>    


            <NavLink to='/contacts'  className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-white"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }><li>Contact</li></NavLink>    
                
            </ul>
            <div>
                <h1 className="bg-blue-500 text-white rounded px-3 py-2">Get started</h1>
            </div>
        </div>
    </div>
  )
}

export default Navbar