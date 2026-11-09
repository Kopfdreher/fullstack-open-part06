import { useAnecdoteActions } from '../store'

const Anecdote = ({ anecdote }) => {
  const { addVote } = useAnecdoteActions()

  return (
    <div>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={() => addVote(anecdote.id)}>vote</button>
      </div>
    </div>
  )
}

export default Anecdote
