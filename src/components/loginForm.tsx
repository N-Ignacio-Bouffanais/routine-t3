
const loginForm = () => {
  return (
      <form className="flex flex-col mx-auto items-center my-5 w-4/5">
          <input className="outline-none rounded-md w-96 p-3 mt-6 bg-black text-gray-300" type="text" placeholder="Enter your name" />
          <input className="outline-none rounded-md w-96 p-3 mt-6 bg-black text-gray-300" type="email" placeholder="Enter your email" />
          <button className="py-2.5 text-white bg-blue-600 rounded-2xl mt-5 px-5 font-semibold hover:bg-blue-700">Login</button>
      </form>
  )
}

export default loginForm