import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
    return (
        <header>
            <nav className="bg-dark-blue h-16 pt-2 flex items-center mx-auto w-full">
                <AuthShowcase />
            </nav>
        </header>
    )
}

export default Navbar

const AuthShowcase: React.FC = () => {
    const { data: sessionData } = useSession();

    return (
        <>
        { sessionData && <ul className="flex w-full mx-auto justify-evenly items-center">
            <li className="text-white font-semibold">
                <Link href={"/home"}>
                        <p className="rounded-full p-2 w-10 text-center hover:bg-gray-800">〱</p>
                </Link>
            </li>
            <li className="text-white font-semibold pl-14">
                <Link href={"/profile"}>
                    <p className="rounded-2xl p-2 w-20 text-center text-lg hover:bg-gray-800">Profile</p>
                </Link>
            </li>
            <li>
                <div>
                    <button
                        className="rounded-full border-solid border-yellow-400 border-2 px-4 py-1.5 font-semibold text-white no-underline transition hover:bg-gray-800"
                        onClick={sessionData ? () => void signOut() : () => void signIn()}
                    >
                        Sign Out
                    </button>
                </div>
            </li>
        </ul>}
        </>
    );
};