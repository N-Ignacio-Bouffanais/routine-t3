import { AiFillHome } from 'react-icons/ai'


const Footer = () => {
    return (
        <footer className="bg-dark-blue pb-6">
            <ul className="flex rounded-2xl bg-gray-600 h-16 w-4/5 mx-auto p-5 items-center">
                <li>
                    <AiFillHome className='text-white w-8 h-8'/>
                </li>
            </ul>
        </footer>
    )
}

export default Footer