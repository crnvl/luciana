export default function Navbar() {
    return <>
        <nav className="bg-gray-100 font-bold text-md">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between">
                    <div className="flex items-center space-x-4">
                        <a href="#" className="flex space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M3 6a3 3 0 013-3h12a3 3 0 013 3v12a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm14.25 6a.75.75 0 01-.22.53l-2.25 2.25a.75.75 0 11-1.06-1.06L15.44 12l-1.72-1.72a.75.75 0 111.06-1.06l2.25 2.25c.141.14.22.331.22.53zm-10.28-.53a.75.75 0 000 1.06l2.25 2.25a.75.75 0 101.06-1.06L8.56 12l1.72-1.72a.75.75 0 10-1.06-1.06l-2.25 2.25z" clipRule="evenodd" />
                            </svg>
                            <span>angelsflyinhell</span>
                        </a>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="#" className="py-3 px-3">Research</a>
                        <a href="#" className="py-3 px-3">Projects</a>
                        <a href="#" className="py-3 px-3">Blog</a>
                        <a href="#" className="py-3 px-3">About</a>
                    </div>
                </div>
            </div>
        </nav>

        <div className="py-32 text-center">
            <h2 className="font-extrabold text-6xl">Navbar</h2>
        </div>
    </>
}