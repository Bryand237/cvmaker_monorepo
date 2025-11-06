import type { CV } from "@cv-maker-app/utils";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface SavedCV {
  id: string;
  cv: CV;
  thumbnail?: string; // Base64 image or URL
  createdAt: string;
  fileName: string;
}

interface SavedCVsStoreProps {
  savedCVs: SavedCV[];
  addSavedCV: (cv: CV, thumbnail?: string, fileName?: string) => void;
  removeSavedCV: (id: string) => void;
  getSavedCV: (id: string) => SavedCV | undefined;
}

export const useSavedCVsStore = create<SavedCVsStoreProps>()(
  persist(
    (set, get) => ({
      savedCVs: [],
      addSavedCV: (cv, thumbnail, fileName) => {
        const newSavedCV: SavedCV = {
          id: `cv-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
          cv,
          thumbnail,
          fileName: fileName || `CV_${cv.personalInfo.firstName}_${cv.personalInfo.lastName}_${new Date().toLocaleDateString('fr-FR')}.pdf`,
          createdAt: new Date().toISOString(),
        };
        set((state) => ({
          savedCVs: [...state.savedCVs, newSavedCV],
        }));
      },
      removeSavedCV: (id) => {
        set((state) => ({
          savedCVs: state.savedCVs.filter((cv) => cv.id !== id),
        }));
      },
      getSavedCV: (id) => {
        return get().savedCVs.find((cv) => cv.id === id);
      },
    }),
    {
      name: "saved-cvs-storage",
    }
  )
);
