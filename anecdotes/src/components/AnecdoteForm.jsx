import { useAnecdoteActions } from '../store'

const AnecdoteForm = () => {
  const { add } = useAnecdoteActions()

  const addAnecdote = (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    add(content)
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
