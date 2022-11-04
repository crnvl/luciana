import { useState } from "react";

export default function Navbar() {

    const [hamClass, setHamClass] = useState("mobile-menu hidden");

    const toggleHam = () => {
        if (hamClass === "mobile-menu hidden") {
            setHamClass("mobile-menu");
        } else {
            setHamClass("mobile-menu hidden");
        }
    }

    return <>
        <nav className="fixed text-md font-bold w-full">
            <div className="max-w-7xl mx-auto px-4 py-4 md:py-2">
                <div className="flex justify-between">
                    <div className="flex items-center space-x-4">
                        <a href="#" className="flex space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z" clipRule="evenodd" />
                            </svg>
                            <span>angelsflyinhell</span>
                        </a>
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="py-3 px-3">Sandbox</a>
                        <a href="#" className="py-3 px-3">Projects</a>
                        <a href="#" className="py-3 px-3">Blog</a>
                        <a href="#" className="py-3 px-3">About</a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button className="mobile-menu-button" onClick={toggleHam}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

            {/* mobile view */}
            <div className={hamClass}>
                <div className="border-solid border-0 border-b border-white">
                    <a href="" className="block py-2 px-4">Sandbox</a>
                    <a href="#" className="block py-2 px-4">Projects</a>
                    <a href="#" className="block py-2 px-4">Blog</a>
                    <a href="#" className="block py-2 px-4">About</a>
                </div>
            </div>
        </nav>
    </>
}