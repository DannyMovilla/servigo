import { create } from "zustand";
// import { deleteCookie } from "cookies-next";
import { User } from "@/types/user";

type AuthState = {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,

  setUser: (user) => {
    set({ user });
  },

  logout: () => {
    // deleteCookie("user"); // Eliminar el token al cerrar sesión
    set({ user: null });
  },
}));
