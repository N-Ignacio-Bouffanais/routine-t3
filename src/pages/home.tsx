import ItemModal from '~/components/ItemModal';
import { api } from "~/utils/api";
import { AiOutlinePlus } from 'react-icons/ai';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { useAppStore } from '~/store/App_state';
import { Exercise } from '@prisma/client';
import { getSession } from 'next-auth/react';
import Exercices from './exercices';

const Home: NextPage = () => {
  const [modalOpen, setmodalOpen] = useAppStore((state) => [state.modal, state.toggleModal])
  const { data, isError, isLoading, error } = api.exercise.get.useQuery()

  return (
    <>{modalOpen && <ItemModal setmodalOpen={setmodalOpen} />}
      <div className='flex justify-center bg-dark-blue w-full sm:mx-auto sm:flex-wrap'>
        <div className="py-5 flex flex-col justify-center w-4/5">
          <h1 className='text-slate-50 text-xl py-2 font-semibold'>My Routine:</h1>
          {isLoading && <p className='text-slate-50 text-xl py-2 font-semibold'>...Loading</p>}
          {(data || []).map((item: Exercise) => (
            <div key={item.id} className='grid grid-cols-4 gap-2 mx-auto h-24 w-full' >
              <div className='grid bg-gray-900 h-24 w-full rounded-2xl p-2 items-center'>
                <p className='text-center text-gray-400 font-medium' >Exercice</p>
                <p className='text-center text-white font-semibold text-xl' >{item.nameEx}</p>
              </div>
              <div className='grid bg-gray-900 h-24 w-full rounded-2xl p-2 items-center'>
                <p className='text-center text-gray-400 font-medium' >Reps</p>
                <p className='text-center text-white font-semibold text-xl' >{item.reps}</p>
              </div>
              <div className='grid bg-gray-900 h-24 w-full rounded-2xl p-2 items-center'>
                <p className='text-center text-gray-400 font-medium' >Sets</p>
                <p className='text-center text-white font-semibold text-xl' >{item.sets}</p>
              </div>
              <div className='grid bg-gray-900 h-24 w-full rounded-2xl p-2 items-center'>
                <p className='text-center text-gray-400 font-medium' >Weight</p>
                <p className='text-center text-white font-semibold text-xl' >{item.weight}</p>
              </div>
            </div>
          ))}
          <div className='flex w-full justify-end'>
            <button onClick={() => setmodalOpen()} className="flex items-center justify-center my-4 rounded-full bg-blue-500 h-10 w-10 font-bold text-lg text-white no-underline transition hover:bg-white/20"><AiOutlinePlus /></button>
          </div>
          <Exercices/>
        </div>
      </div>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) =>{
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



