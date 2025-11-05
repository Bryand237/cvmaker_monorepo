import { create } from "zustand";

type TemplateStoreIndexProps = {
  index: 0 | 1 | 2 | 3;
  setIndex: (index: 0 | 1 | 2 | 3) => void;
};

export const useTemplateIndexStore = create<TemplateStoreIndexProps>((set) => ({
  index: 0,
  setIndex: (id) => set({ index: id }),
}));
