import { useAnecdotes } from '../store'
import Anecdote from './Anecdote'

const AnecdoteList = () => {
  const anecdotes = useAnecdotes()

  return (
    <ul>
      {anecdotes
        .toSorted((a, b) => b.votes - a.votes)
        .map(anecdote => (<Anecdote key={anecdote.id} anecdote={anecdote} />))}
    </ul>
  )
}

export default AnecdoteList
