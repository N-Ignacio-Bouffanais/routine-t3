import { signIn, signOut, useSession } from "next-auth/react";
import { redirect } from "next/dist/server/api-utils";

const Navbar = () => {
    return (
        <nav className="bg-dark-blue h-16 flex items-center mx-auto">
            <ul className="flex w-4/5 mx-auto justify-end">
                <AuthShowcase />
            </ul>
        </nav>
    )
}

export default Navbar

const AuthShowcase: React.FC = () => {
    const { data: sessionData } = useSession();

    const image = sessionData?.user.image;

    return (
        <div className="flex items-center justify-center gap-4">
            {image && <picture>
                <img className="rounded-full" src={image} alt="profile image" width={50} height={50} />
            </picture>}
            <button
                className="rounded-full border-solid border-yellow-400 border-2 mx-2 px-4 py-1.5 font-semibold text-white no-underline transition hover:bg-gray-800"
                onClick={sessionData ? () => void signOut() : () => void signIn()}
            >
                {sessionData ? "Sign out" : "Sign in"}
            </button>
        </div>
    );
};