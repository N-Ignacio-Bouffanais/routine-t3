import Image from 'next/image'

const signIn = () => {
  return (
    <div className='flex flex-col items-center sm:mx-auto bg-dark-blue'>
      <picture className='my-2'>
        <Image className="rounded-xl" src={"/running.jpg"} alt="Picture of a man doing workout" width={380} height={400} />
      </picture>
      <form className="flex flex-col mx-auto items-center my-5">
        <input className="outline-none rounded-md w-96 p-3 mt-6 bg-black text-gray-300" type="text" placeholder="Enter your name"/>
        <input className="outline-none rounded-md w-96 p-3 mt-6 bg-black text-gray-300" type="email" placeholder="Enter your email" />
        <button className="py-2.5 text-white bg-blue-600 rounded-2xl my-4 px-5 font-semibold hover:bg-blue-700">Login</button>
      </form>
    </div>
  )
}

export default signIn