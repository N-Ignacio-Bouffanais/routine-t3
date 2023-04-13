import { NextPage } from 'next';
import { getSession } from 'next-auth/react'
import { useState } from 'react';
import ItemModal from '~/components/ItemModal';
import { api } from "~/utils/api";
import exercises_images from '~/utils/exercises_img';

const Home: NextPage = () => {
  const [modalOpen, setmodalOpen] = useState<boolean>(false)

  //const routines = api.exercise.get.useQuery();

  return (
    <>{modalOpen && <ItemModal setmodalOpen={setmodalOpen} />}
      <div className='flex flex-col items-center bg-dark-blue sm:mx-auto sm:flex-wrap'>
        <div className="py-5 flex justify-center w-4/5">
          <div className='grid bg-gray-600 h-96 rounded-2xl w-40'>
            <p>Routine:</p>
          </div>
          <button onClick={() => setmodalOpen(true)} className="rounded-2xl bg-blue-500 px-2 w-40 py-2 font-semibold text-white no-underline transition hover:bg-white/20">New routine</button>
        </div>
      </div>
    </>
  )
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context)
  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }
  return {
    props: session
  }
}

export default Home



