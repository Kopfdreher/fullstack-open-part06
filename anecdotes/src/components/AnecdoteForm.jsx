import { useAnecdoteActions } from '../store'
import { useMessageControls } from '../storeNotification'

const AnecdoteForm = () => {
  const { add } = useAnecdoteActions()
  const { setMessage } = useMessageControls()

  const addAnecdote = async (e) => {
    e.preventDefault()
    const content = e.target.anecdote.value
    await add(content)
    setMessage(`You added '${content}'`)
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
