export default function Navbar(){
    return(
        <>
        <nav className="flex justify-between px-10 py-6 bg-white shadow-md">
            <h1>Blog</h1>
            <ul className="flex gap-5 text-gray-500">
                <li className="hover:text-black cursor-pointer">Home</li>
                <li className="hover:text-black cursor-pointer">Blog</li>
                <li className="hover:text-black cursor-pointer">About</li>
            </ul>
        </nav>
        </>
    )
}