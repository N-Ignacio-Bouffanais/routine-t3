import { create } from 'zustand'

type State = {
  loginModal: boolean;
  email: string;
  modal: boolean;
  nameEx: string;
  reps: number;
  weight: number;
  sets: number;
  day: string;
};

type Actions = {
  toggleLoginModal: () => void;
  updateEmail: (email: State["email"]) => void;
  toggleModal: () => void;
};

const initialState: State = {
  email: "",
  loginModal: false,
  modal: false,
  nameEx: "",
  reps: 0,
  weight: 0,
  sets: 0,
  day: "lunes",
};

export const useAppStore = create<State & Actions>()((set) => ({
  ...initialState,
  modal: false,
  email: "",
  updateEmail: (email) => set(() => ({ email: email })),
  toggleModal: () => set((state) => ({ modal: !state.modal })),
  toggleLoginModal: () => set((state) => ({loginModal: !state.loginModal}))
}));