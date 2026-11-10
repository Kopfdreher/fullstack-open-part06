import { create } from 'zustand'
import anecdoteService from './services/anecdotes'

const useAnecdoteStore = create((set) => ({
  anecdotes: [],
  filter: '',
  actions: {
    add: async (content) => {
      const newAnecdote = await anecdoteService.createNew(content)
      set(state => ({ anecdotes: state.anecdotes.concat(newAnecdote) }))
    },
    initialize: async () => {
      const anecdotes = await anecdoteService.getAll()
      set(() => ({ anecdotes }))
    },
    addVote: id => set(
      state => ({
        anecdotes: state.anecdotes.map(anecdote => anecdote.id === id
          ? { ...anecdote, votes: anecdote.votes + 1 }
          : anecdote
        )
      })
    ),
    setFilter: value => set(() => ({ filter: value }))
  },
}))

export const useAnecdotes = () => {
  const anecdotes = useAnecdoteStore(state => state.anecdotes)
  const filter = useAnecdoteStore(state => state.filter)

  if (filter !== '') return anecdotes.filter(a => a.content.includes(filter))

  return anecdotes
}
export const useAnecdoteActions = () => useAnecdoteStore((state) => state.actions)
