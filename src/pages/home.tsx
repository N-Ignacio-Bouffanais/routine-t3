import { getSession } from 'next-auth/react'
import { api } from "~/utils/api";
import exercises_images from '~/utils/exercises_img';

const Home = () => {
  const routines = api.exercise.get.useQuery();
  console.log(routines.data)

  return (
    <div className='flex flex-col items-center sm:mx-auto bg-dark-blue sm:flex-wrap'>
      <div className="py-5">
        <button onClick={Select} className="rounded-full bg-green-400 px-4 py-2 font-semibold text-black no-underline transition hover:bg-white/20">New routine</button>
      </div>
    </div>
  )
}
const Select = () => {
  console.log(exercises_images[2])
}

export async function getServerSideProps(context: any) {
  const session = await getSession(context)
  if(!session){
    return{
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



