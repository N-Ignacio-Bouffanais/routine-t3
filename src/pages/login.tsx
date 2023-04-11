import Image from 'next/image'

const login = () => {
  return (
    <div className='flex flex-col items-center sm:mx-auto bg-dark-blue sm:flex-wrap'>
      <picture className='my-2'>
        <Image className="rounded-xl" src={"/running.jpg"} alt="Picture of a man doing workout" width={380} height={400} />
      </picture>
      <p className='text-gray-400 my-3 w-96 text-center text-sm'>Make your own workout routines and define how and when do it.</p>
      <button className="py-2.5 text-white bg-blue-600 rounded-full my-3 w-32 font-semibold hover:bg-blue-700">Join</button>
      <button className="py-2.5 text-white bg-blue-600 rounded-full my-3 w-32 font-semibold hover:bg-blue-700">Sign In</button>
    </div>
  )
}

export default login