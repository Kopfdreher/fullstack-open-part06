import { create } from 'zustand'

let timeoutId

const useNotificationStore = create(set => ({
  message: null,
  actions: {
    setMessage: (message) => {
      clearTimeout(timeoutId)
      set({ message })
      timeoutId = setTimeout(() => set({ message: null }), 5000)
    },
  },
}))

export const useMessage = () => useNotificationStore(state => state.message)
export const useMessageControls = () => useNotificationStore(state => state.actions)
