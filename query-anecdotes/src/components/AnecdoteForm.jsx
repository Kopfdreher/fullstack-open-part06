import { useAnecdotes } from '../hooks/useAnecdotes'
import useNotification from '../hooks/useNotification'

const AnecdoteForm = () => {
  const { addAnecdote } = useAnecdotes()
  const { notify } = useNotification()

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    if (content.length < 5) {
      notify('too short anecdote, must have length 5 or more')
      return
    }
    event.target.reset()
    addAnecdote(content)
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name="anecdote" />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
