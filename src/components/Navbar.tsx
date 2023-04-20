import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-dark-blue h-16 flex items-center mx-auto w-full">
            <ul className="flex w-full mx-auto justify-evenly items-center">
                <li className="text-white font-semibold">
                    <Link href={"/profile"}>
                        <p className="w-16 text-center">〱</p>
                    </Link>
                </li>
                <li className="text-white font-semibold">
                    <Link href={"/profile"}>
                        <p className="w-14 text-center ml-6">Profile</p>
                    </Link>
                </li>
                <li><AuthShowcase /></li>
            </ul>
        </nav>
    )
}

export default Navbar

const AuthShowcase: React.FC = () => {
    const { data: sessionData } = useSession();

    return (
        <div className="flex items-center justify-center gap-4">
            <button
                className="rounded-full border-solid border-yellow-400 border-2 px-4 py-1.5 font-semibold text-white no-underline transition hover:bg-gray-800"
                onClick={sessionData ? () => void signOut() : () => void signIn()}
            >
                {sessionData ? "Sign out" : "Sign in"}
            </button>
        </div>
    );
};