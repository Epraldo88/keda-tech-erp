import { create } from "zustand";

type Mode = "login" | "register";

interface AuthModalState {
  isOpen: boolean;
  mode: Mode;
  openModal: (mode?: Mode) => void;
  closeModal: () => void;
  switchMode: (mode: Mode) => void;
}

export const useAuthModalStore = create<AuthModalState>((set) => ({
  isOpen: false,
  mode: "login",
  openModal: (mode = "login") => set({ isOpen: true, mode }),
  closeModal: () => set({ isOpen: false }),
  switchMode: (mode) => set({ mode }),
}));
