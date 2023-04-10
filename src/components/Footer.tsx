import { AiFillHome } from 'react-icons/ai'
import { BsFillPersonFill } from 'react-icons/bs'


const Footer = () => {
    return (
        <footer className="bg-dark-blue pb-6">
            <ul className="flex rounded-3xl bg-gray-600 h-14 w-4/5 mx-auto py-2 items-center justify-center">
                <li className='px-5'>
                    <AiFillHome className='text-white w-8 h-10'/>
                </li>
                <li className='px-5'>
                    <BsFillPersonFill className='text-white w-8 h-10' />
                </li>
            </ul>
        </footer>
    )
}

export default Footer