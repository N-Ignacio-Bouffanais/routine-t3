import Image from 'next/image'

const login = () => {
  return (
    <div className='flex flex-col items-center sm:mx-auto bg-dark-blue sm:flex-wrap'>
      <picture className='my-2'>
        <Image className="rounded-xl" src={"/running.jpg"} alt="Picture of a man doing workout" width={380} height={400} />
      </picture>
      <p className='text-gray-400 my-3 w-96 text-center text-sm'>Make your own workout routines and define how and when do it.</p>
      <button className="py-2.5 text-white bg-blue-600 rounded-full my-3 w-32 font-semibold hover:bg-blue-700">Join</button>
      <form className="flex flex-col mx-auto items-center my-5 w-4/5">
        <input className="outline-none rounded-md w-96 p-3 mt-6 bg-black text-gray-300" type="text" placeholder="Enter your name" />
        <input className="outline-none rounded-md w-96 p-3 mt-6 bg-black text-gray-300" type="email" placeholder="Enter your email" />
        <button className="py-2.5 text-white bg-blue-600 rounded-2xl mt-5 px-5 font-semibold hover:bg-blue-700">Login</button>
      </form>
    </div>
  )
}

export default login