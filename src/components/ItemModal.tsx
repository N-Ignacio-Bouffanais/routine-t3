import { ChangeEvent, Dispatch, FC, FormEvent, SetStateAction, useState } from "react"
import { api } from "~/utils/api";

interface ItemModalProps{
  setmodalOpen: Dispatch<SetStateAction<boolean>>
}

const ItemModal: FC<ItemModalProps> = ({ setmodalOpen }) => {
  const[item, setItem] = useState({
    nameEx: "",
    reps: 0,
    weight: 0,
    sets: 0,
    day: "",
    authorEmail: "",
  })

  const addItem = api.exercise.create.useMutation()
  //console.log(setEmail)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(item)
    addItem.mutate(item)

  } 
  const handleChange = (e:ChangeEvent<HTMLInputElement>)=> {
    setItem({ ...item, [e.target.name]: e.target.value});
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-dark-blue">
      <div className="space-y-5 p-3 w-4/5 flex flex-col mx-auto items-center">
        <h3 className="text-slate-300 text-2xl font-semibold">How you gonna do?</h3>
        <form onSubmit={handleSubmit}>
          <input className="outline-none flex rounded-md h-9 w-80 px-4 font-medium" autoFocus type="text" placeholder="Name Exercise" />
          <input className="outline-none flex rounded-md h-9 w-80 px-4 font-medium" type="number" placeholder="Reps" />
          <input className="outline-none flex rounded-md h-9 w-80 px-4 font-medium" type="number" placeholder="Weight" />
          <input className="outline-none flex rounded-md h-9 w-80 px-4 font-medium" type="number" placeholder="Sets" />
          <button className="h-9 w-80 rounded-md bg-sky-600 text-slate-50 font-semibold">Done</button>
          <button onClick={() => setmodalOpen(false)} className="h-9 w-80 rounded-md bg-pink-700 text-slate-50 font-semibold">Cancel</button>
        </form>
      </div>
    </div>
  )
}

export default ItemModal
