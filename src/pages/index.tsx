import { type NextPage, GetServerSideProps } from "next";
import Image from 'next/image'
import { getProviders, signIn, useSession, getSession } from "next-auth/react";
import Exercices from '../components/exercices';

const Home: NextPage = () => {
  return (
    <>
      <main className="flex flex-col items-center bg-dark-blue w-full min-h-screen">
        <h1 className="text-white font-semibold text-3xl py-8 w-auto">Good day my friend</h1>
        <div className="grid grid-cols-1 w-4/5 mx-auto md:grid-cols-2 gap-4 items-center">
          <div className="flex flex-col mx-auto items-center">
            <picture>
              <Image className="rounded-xl" src={"/running.jpg"} alt="Picture of a man doing workout" width={450} height={300} />
            </picture>
          </div>
          <div className="flex flex-col items-center mx-auto justify-center md:space-y-4 mt-10">
            <p className='text-gray-300 w-full px-4 text-center md:px-0 text-sm'>Here you can create your routine with the exercises you want, with tips, a record of days worked and much more.</p>
            <AuthShowcase/>
          </div>
        </div>
        <Exercices />
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <>
      {!sessionData && <div className="flex flex-col">
        <button
          className="py-2.5 text-white bg-black rounded-full my-3 w-48 font-semibold hover:bg-slate-800"
          onClick={() => void signIn('github')}
        >Sign In with GitHub
        </button>
        <button
          className="py-2.5 text-white bg-blue-600 rounded-full my-3 w-48 font-semibold hover:bg-blue-700"
          onClick={() => void signIn('google')}
        >Sign In with Google
        </button>
      </div>}
      
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


