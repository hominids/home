import {
    MenuIcon,
  } from "@heroicons/react/outline";

function Header() {
    return (
        <nav className="flex top-0 fixed w-full bg-white justify-between shadow py-1">
                <img src='hominid-logotype.svg' 
                    className="flex cursor-pointer mx-5 my-3 py-1 px-2"
                />

                <div className="flex space-x-4 items-center mx-5">
                    <button className="text-sm text-red-500 border-2 border-red-500 rounded-full bg-transparent py-2 px-4 hover:bg-red-500 hover:text-white transition duration-100 font-body">Demo</button>

                    <MenuIcon className="h-10 w-10 p-2"/>

            </div>

        </nav>
    )
}

export default Header
