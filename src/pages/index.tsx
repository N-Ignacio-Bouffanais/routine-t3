import { type NextPage, GetServerSideProps } from "next";
import Head from "next/head";
import Image from 'next/image'
import { getProviders, signIn, useSession, getSession } from "next-auth/react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Routine App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex bg-dark-blue py-0 sm:py-6 w-full">
        <div className="grid grid-cols-1 w-4/5 mx-auto md:grid-cols-2 gap-7">
          <div className="flex flex-col mx-auto items-center">
            <h1 className="text-white font-semibold text-3xl py-3 w-auto">Make yours routines</h1>
            <picture className=''>
              <Image className="rounded-xl" src={"/running.jpg"} alt="Picture of a man doing workout" width={380} height={400} />
            </picture>
          </div>
          <div className="flex flex-col items-center mx-auto justify-center md:space-y-4 mt-6">
            <p className='text-gray-300 w-full px-4 text-center md:px-0'>Make your own training routines and edit them however you like.</p>
            <AuthShowcase/>
          </div>
        </div>
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


