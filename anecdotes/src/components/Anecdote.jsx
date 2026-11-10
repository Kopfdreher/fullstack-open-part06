import { useAnecdoteActions } from '../store'
import { useMessageControls } from '../storeNotification'

const Anecdote = ({ anecdote }) => {
  const { addVote, removeOne } = useAnecdoteActions()
  const { setMessage } = useMessageControls()

  const vote = async () => {
    await addVote(anecdote.id)
    setMessage(`you voted '${anecdote.content}'`)
  }

  const remove = async () => {
    await removeOne(anecdote.id)
    setMessage('You removed an anecdote')
  }

  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={vote}>vote</button>
        {anecdote.votes === 0 && <button onClick={remove}>delete</button>}
      </div>
    </div>
  )
}

export default Anecdote
