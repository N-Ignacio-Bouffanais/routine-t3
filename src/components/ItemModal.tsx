import { Dispatch, FC, SetStateAction } from "react"
import { api } from "~/utils/api";
import { useAppStore } from "~/store/App_state";
import { useSession } from "next-auth/react";

interface ItemModalProps{
  setmodalOpen: Dispatch<SetStateAction<boolean>>
}

const ItemModal: FC<ItemModalProps> = () => {
  const [modalOpen, setmodalOpen] = useAppStore((state) => [state.modal, state.toggleModal])
  const [email, setEmail] = useAppStore((state) => [state.email, state.updateEmail])

  const { data: sessionData } = useSession();
  const addItem = api.exercise.create.useMutation()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const name = (e.currentTarget.elements[0] as HTMLInputElement).value
    const reps = Number((e.currentTarget.elements[1] as HTMLInputElement).value)
    const weight = Number((e.currentTarget.elements[2] as HTMLInputElement).value)
    const sets = Number((e.currentTarget.elements[3] as HTMLInputElement).value)
    const day = (e.currentTarget.elements[4] as HTMLInputElement).value
    if (sessionData?.user.email != null) {
      const author = sessionData.user.email
      setEmail(author)
    }
    
    addItem.mutate({
      nameEx: name,
      reps: reps,
      weight: weight,
      sets: sets,
      day: day,
      authorEmail: email,
    })
    console.log(name,reps,sets)
  } 
  
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-dark-blue">
      <div className="space-y-5 p-3 w-4/5 flex flex-col mx-auto items-center">
        <h3 className="text-slate-300 text-2xl font-semibold">How you gonna do?</h3>
        <form onSubmit={handleSubmit} className="space-y-5">
          <select className="outline-none flex rounded-md h-9 w-80 px-4 font-medium" autoFocus >
            <option value="Biceps-Curl">Biceps curl</option>
            <option value="Squat">Squat</option>
            <option value="Bench-press">Bench press</option>
            <option value="Deadlift">Deadlift</option>
            <option value="Bulgarian-Squat">Bulgarian squat</option>
          </select>
          <input className="outline-none flex rounded-md h-9 w-80 px-4 font-medium" type="number" placeholder="Reps" />
          <input className="outline-none flex rounded-md h-9 w-80 px-4 font-medium" type="number" placeholder="Weight" />
          <input className="outline-none flex rounded-md h-9 w-80 px-4 font-medium" type="number" placeholder="Sets" />
          <select className="outline-none flex rounded-md h-9 w-80 px-4 font-medium">
            <option value="lunes">Lunes</option>
            <option value="martes">Martes</option>
            <option value="miercoles">Miercoles</option>
            <option value="jueves">Jueves</option>
            <option value="viernes">Viernes</option>
            <option value="sabado">Sabado</option>
            <option value="domingo">Domingo</option>
          </select>
          <button onClick={() => setmodalOpen()} className="h-9 w-80 rounded-md bg-sky-600 text-slate-50 font-semibold">Done</button>
          <button onClick={() => setmodalOpen()} className="h-9 w-80 rounded-md bg-pink-700 text-slate-50 font-semibold">Cancel</button>
        </form>
        
      </div>
    </div>
  )
}

export default ItemModal
