import { getSession } from 'next-auth/react'

const Home = () => {
  return (
    <div className='flex flex-col items-center sm:mx-auto bg-dark-blue sm:flex-wrap'>
      <div className="py-5">
        <button className="rounded-full bg-green-400 px-4 py-2 font-semibold text-black no-underline transition hover:bg-white/20">New routine</button>
      </div>
    </div>
  )
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



