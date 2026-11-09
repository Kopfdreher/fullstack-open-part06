import { useAnecdoteActions } from '../store'

const AnecdoteForm = () => {
  const { add } = useAnecdoteActions()

  const getId = () => (100000 * Math.random()).toFixed(0)

  const addAnecdote = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    add({ id: getId(), content, votes: 0 })
    e.target.reset()
  }

  return (
    <form onSubmit={addAnecdote}>
      <input name='anecdote' />
      <button>create</button>
    </form>
  )
}

export default AnecdoteForm
