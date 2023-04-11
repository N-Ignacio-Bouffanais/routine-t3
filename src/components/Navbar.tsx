
const Navbar = () => {
    const isLoggedIn = false;
    return (
        <nav className="bg-dark-blue h-16 flex items-center">
            <ul className="flex w-4/5 mx-auto justify-end">
                {isLoggedIn && <li>
                    <button className="rounded-full bg-gray-600 mx-2 px-4 py-2 font-semibold text-white no-underline transition hover:bg-white/20">SignOut</button>
                </li>}
                {!isLoggedIn && <li><button className="rounded-full border-solid border-yellow-400 border-2 mx-2 px-4 py-1.5 font-semibold text-white no-underline transition hover:bg-gray-800">SignUp</button></li>}
                {!isLoggedIn && <li><button className="rounded-full border-solid border-yellow-400 border-2 mx-2 px-4 py-1.5 font-semibold text-white no-underline transition hover:bg-gray-800">SignIn</button></li>}
            </ul>
        </nav>

    )
}

export default Navbar