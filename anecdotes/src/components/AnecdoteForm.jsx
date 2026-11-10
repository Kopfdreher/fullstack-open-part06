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
    <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name='anecdote' />
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
