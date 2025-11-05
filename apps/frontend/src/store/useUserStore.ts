import { create } from "zustand";
import { type User } from "@cv-maker-app/utils";

type UserStore = {
  user?: User;
  setUser: (user: User) => void;
  removeUser: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: {
    id: "1",
    email: "",
    accesToken: "",
    expireIn: 12,
  },
  setUser: (user) => set({ user }),
  removeUser: () => set({ user: undefined }),
}));
