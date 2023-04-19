import ItemModal from '~/components/ItemModal';
import { api } from "~/utils/api";
import exercises_images from '~/utils/exercises_img';
import { AiOutlinePlus } from 'react-icons/ai';
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next';
import { useAppStore } from '~/store/App_state';
import { Exercise } from '@prisma/client';
import { getSession } from 'next-auth/react';

const Home: NextPage = () => {
  const [modalOpen, setmodalOpen] = useAppStore((state) => [state.modal, state.toggleModal])
  const { data, isError, isLoading, error } = api.exercise.get.useQuery()

  return (
    <>{modalOpen && <ItemModal setmodalOpen={setmodalOpen} />}
      <div className='flex justify-center bg-dark-blue w-full sm:mx-auto sm:flex-wrap'>
        <div className="py-5 flex flex-col justify-center w-4/5">
          <h1 className='text-slate-50 text-xl py-2 font-semibold'>My Routines:</h1>
          {isLoading && <p>...Loading</p>}
          {(data || []).map((item: Exercise) => (
            <div key={item.id} className='grid bg-gray-600 mx-auto h-24 rounded-2xl w-full sm:w-4/5' >
              <span>{item.nameEx}</span>
            </div>
          ))}
          <div className=''>
            <h2 className='text-slate-50 text-xl py-2 font-semibold'>Exercises:</h2>
            <div className='grid'>
              {exercises_images.map<JSX.Element>((image: {id:number, src:string, alt:string, category: string} ) =>(
                <picture key={image.id}>
                  <img src={image.src} alt={image.alt} />
                </picture>
              ))}
            </div>
          </div>
          <div className='flex w-full justify-end'>
            <button onClick={() => setmodalOpen()} className="flex items-center justify-center my-4 rounded-full bg-blue-500 h-10 w-10 font-bold text-lg text-white no-underline transition hover:bg-white/20"><AiOutlinePlus /></button>
          </div>
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



