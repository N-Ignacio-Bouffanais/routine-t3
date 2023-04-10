
const Navbar = () => {
    return (
        <nav className="bg-dark-blue h-16 flex items-center">
            <ul className="flex w-4/5 mx-auto justify-end">
                <li>
                    <button className="rounded-full bg-gray-600 mx-2 px-4 py-2 font-semibold text-white no-underline transition hover:bg-white/20">Sign Out</button>
                </li>
                <li><button className="rounded-full bg-gray-600 mx-2 px-4 py-2 font-semibold text-white no-underline transition hover:bg-white/20">Login</button></li>
            </ul>
        </nav>

    )
}

export default Navbar