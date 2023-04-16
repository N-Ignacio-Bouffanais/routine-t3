import { create } from 'zustand'

type State = {
  email: string;
  modal: boolean;
}

type Actions = {
  updateEmail: (email: State["email"]) => void;
  toggleModal: () => void;
};

const initialState: State = {
  email: "",
  modal: false,
};

export const useAppStore = create<State & Actions>()((set, get) => ({
  ...initialState,
  modal: false,
  email: "",
  updateEmail: (email) => set(() => ({ email: email })),
  toggleModal: () => set((state) => ({ modal: !state.modal })),
}));