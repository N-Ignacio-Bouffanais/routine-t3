import { AiFillHome } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'


const Footer = () => {
    return (
        <footer className="bg-dark-blue pt-10">
            <ul className="flex bg-gray-blue h-20 mx-auto pt-2 pb-4 items-center justify-center">
                <li className='px-5'>
                    <AiFillHome className='text-white w-10 h-10'/>
                </li>
                <li className='px-5'>
                    <BsFillPersonFill className='text-white w-10 h-10' />
                </li>
            </ul>
        </footer>
    )
}

export default Footer