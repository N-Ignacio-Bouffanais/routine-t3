import { Dispatch, FC, SetStateAction } from "react"
import { api } from "~/utils/api";
import { useAppStore } from "~/store/App_state";
import { useSession } from "next-auth/react";

interface RoutineModalProps {
    setmodalOpen: Dispatch<SetStateAction<boolean>>
}

const RoutineModal: React.FC<RoutineModalProps> = () => {
    const [modalOpen, setmodalOpen] = useAppStore((state) => [state.modal, state.toggleModal])

    const {mutate} = api.routine.post.useMutation();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const day = (e.currentTarget.elements[0] as HTMLInputElement).value
        const name = (e.currentTarget.elements[1] as HTMLInputElement).value
        const Item = {
            day: day,
            routine_name: name,
        }
        console.log(Item)
        mutate(Item)

    } 
  return (

      <div className="absolute inset-0 flex items-center justify-center bg-dark-blue">
          <div className="space-y-5 p-3 w-4/5 flex flex-col mx-auto items-center">
              <h3 className="text-slate-300 text-2xl font-semibold">How you gonna do?</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                  <select className="outline-none flex rounded-md h-9 w-80 px-4 font-medium">
                      <option value="lunes">Lunes</option>
                      <option value="martes">Martes</option>
                      <option value="miercoles">Miercoles</option>
                      <option value="jueves">Jueves</option>
                      <option value="viernes">Viernes</option>
                      <option value="sabado">Sabado</option>
                      <option value="domingo">Domingo</option>
                  </select>
                  <input className="outline-none flex rounded-md h-9 w-80 px-4 font-medium" type="text" placeholder="nameRoutine" />
                  <button type="button" onClick={() => setmodalOpen()} className="h-9 w-80 rounded-md bg-sky-600 text-slate-50 font-semibold">Done</button>
                  <button type="button" onClick={() => setmodalOpen()} className="h-9 w-80 rounded-md bg-pink-700 text-slate-50 font-semibold">Cancel</button>
              </form>

          </div>
      </div>
  )
}

export default RoutineModal