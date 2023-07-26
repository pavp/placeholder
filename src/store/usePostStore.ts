import { create } from 'zustand'

interface IPostStore {
  favorites: string[]
  deleted: string[]
  setFavorites: (favorites: string[]) => void
  setDeleted: (deleted: string[]) => void
}

export const usePostStore = create<IPostStore>((set) => ({
  favorites: [],
  deleted: [],
  setFavorites: (favorites: string[]) => set(() => ({ favorites })),
  setDeleted: (deleted: string[]) => set(() => ({ deleted })),
}))
