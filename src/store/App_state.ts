import { create } from 'zustand'

type State = {
  email: string;
  modal: boolean;
  nameEx: string;
  reps: number;
  weight: number;
  sets: number;
  day: string;
};

type Actions = {
  updateEmail: (email: State["email"]) => void;
  toggleModal: () => void;
};

const initialState: State = {
  email: "",
  modal: false,
  nameEx: "",
  reps: 0,
  weight: 0,
  sets: 0,
  day: "lunes",
};

export const useAppStore = create<State & Actions>()((set, get) => ({
  ...initialState,
  modal: false,
  email: "",
  updateEmail: (email) => set(() => ({ email: email })),
  toggleModal: () => set((state) => ({ modal: !state.modal })),
}));