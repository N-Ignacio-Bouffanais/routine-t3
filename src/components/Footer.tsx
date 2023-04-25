import { AiFillHome } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'
import { useSession } from "next-auth/react";

//pt-10 md:pt-20
const Footer = () => {
    const { data: sessionData } = useSession();
    return (
        <>
            {sessionData && <footer className="bg-dark-blue w-full ">
                <ul className="flex bg-gray-blue h-20 mx-auto pt-2 pb-4 items-center justify-center">
                    <li className='px-5'>
                        <AiFillHome className='text-white w-10 h-10' />
                    </li>
                    <li className='px-5'>
                        <BsFillPersonFill className='text-white w-10 h-10' />
                    </li>
                </ul>
            </footer>}
        </>
    )
}

export default Footer