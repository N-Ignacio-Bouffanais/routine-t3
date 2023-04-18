import { getSession } from 'next-auth/react'
import ItemModal from '~/components/ItemModal';
import { api } from "~/utils/api";
import exercises_images from '~/utils/exercises_img';
import { AiOutlinePlus } from 'react-icons/ai';
import { NextPage } from 'next';
import { useAppStore } from '~/store/App_state';

const Home: NextPage = () => {
  const [modalOpen, setmodalOpen] = useAppStore((state) => [state.modal, state.toggleModal])
  //const routines = api.exercise.get.useQuery();

  return (
    <>{modalOpen && <ItemModal setmodalOpen={setmodalOpen} />}
      <div className='flex justify-center bg-dark-blue sm:mx-auto sm:flex-wrap'>
        <div className="py-5 flex flex-col justify-center w-4/5">
          <h2 className='text-slate-50 text-xl py-2 font-semibold'>Routines:</h2>
          <div className='grid bg-gray-600 mx-auto h-24 rounded-2xl w-full sm:w-4/5'>
            
          </div>
          <div className='flex w-full justify-end'>
            <button onClick={() => setmodalOpen()} className="flex items-center justify-center my-4 rounded-full bg-blue-500 h-10 w-10 font-bold text-lg text-white no-underline transition hover:bg-white/20"><AiOutlinePlus /></button>
          </div>
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
    props: {session}
  }
}

export default Home



