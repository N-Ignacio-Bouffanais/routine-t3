import { type NextPage, GetServerSideProps } from "next";
import { getProviders, signIn, getSession } from "next-auth/react";
import Image from "next/image";
import { BsFacebook, BsGoogle, BsGithub } from "react-icons/bs";


const Home: NextPage = () => {
  return (
    <>
      <main className="flex flex-col items-center bg-dark-blue w-full min-h-screen">
        <div className="grid grid-cols-1 gap-4 w-4/5 mx-auto items-center md:grid-cols-2 mb-10">
          <div className="max-md:hidden">
            <picture>
              <Image className="rounded-2xl" src={"/main.jpg"} alt="A men with dumbells in hands" width={300} height={450} />
            </picture>
          </div>
          <div className="flex flex-col items-center mx-auto justify-center max-md:space-y-4 mt-10">
            <h1 className="text-white text-center font-semibold text-4xl w-auto">Good day my friend</h1>
            <p className='text-gray-300 w-full px-4 py-2 text-center text-sm'>Create your routine with the exercises you want, with tips, a record of days worked and much more.</p>
            <AuthShowcase />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;

const RegisterShowcase = () => {
  return(
    <>
    <div className="flex flex-col"></div>
    </>
  )
}

const AuthShowcase: React.FC = () => {
  return (
    <>
      <div className="flex flex-col">
        <button
          className="py-2.5 text-white bg-black rounded-full my-3 w-60 font-semibold hover:bg-slate-800"
          onClick={() => void signIn('github')}
        ><p className="flex items-center justify-center">Sign In with Github <BsGithub className="ml-2" /></p> 
        </button>
        <button
          className="py-2.5 text-white bg-red-600 rounded-full my-3 w-60 font-semibold hover:bg-red-700"
          onClick={() => void signIn('google')}
        ><p className="flex items-center justify-center">Sign In with Google <BsGoogle className="ml-2" /></p> 
        </button>
        <button
          className="py-2.5 text-white bg-blue-600 rounded-full my-3 w-60 font-semibold hover:bg-blue-700"
          onClick={() => void signIn('google')}
        ><p className="flex items-center justify-center">Sign In with Facebook <BsFacebook className="ml-2" /></p> 
        </button>
      </div>

    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context)
  if (session) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      }
    }
  }
  return { props: { providers: await getProviders() } };
}


