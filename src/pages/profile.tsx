import { api } from "~/utils/api";
import { useSession } from "next-auth/react";

//calendar, donde pondre los dias que se ha hecho ejercicio como gituhb

const Profile = () => {
  const { data } = api.exercise.get.useQuery()
  const { data: sessionData } = useSession();
  const name = sessionData?.user.name;
  const image = sessionData?.user.image;
  return (
    <>
      <div className="bg-dark-blue w-full min-h-screen flex justify-center">
        <div className="w-4/5 flex flex-col items-center mt-6">
          {image && <picture>
            <img className="rounded-full" src={image} alt="profile image" width={70} height={70} />
          </picture>}

          {name && <p className='text-white my-2'>{name}</p>}
          <div className='flex flex-col items-center mt-4'>
            <p className='text-white font-bold text-xl'>{data?.length}</p>
            <p className='text-slate-500'>Total Exercise</p>
          </div>
        </div>
      </div>
    </>
  )
}

// export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) =>{
//   const session = await getSession(context)
//   if (!session) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       }
//     }
//   }
//   return {
//     props: {session}
//   }
// }

export default Profile