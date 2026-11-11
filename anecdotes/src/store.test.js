import { describe, it, expect, beforeEach, vi } from 'vitest'
import { renderHook, act } from '@testing-library/react'

vi.mock('./services/anecdotes', () => ({
  default: {
    getAll: vi.fn(),
  }
}))

import anecdoteService from './services/anecdotes'
import useAnecdoteStore, { useAnecdotes, useAnecdoteActions } from './store'

beforeEach(() => {
  useAnecdoteStore.setState({ anecdotes: [], filter: '' })
  vi.clearAllMocks()
})

describe('useAnecdoteStore', () => {
  it('initialize loads anecdotes from service', async () => {
    const mockAnecdotes = [{ id: 1, content: 'Test 1', votes: 0 }]
    anecdoteService.getAll.mockResolvedValue(mockAnecdotes)

    const { result } = renderHook(() => useAnecdoteActions())

    await act(async () => {
      await result.current.initialize()
    })

    const { result: anecdotesResult } = renderHook(() => useAnecdotes())
    expect(anecdotesResult.current).toEqual(mockAnecdotes)
  })

  it('sorts anecdotes by votes descending', () => {
    const unsortedAnecdotes = [
      { id: 1, content: 'Anecdote with two votes', votes: 2 },
      { id: 2, content: 'Anecdote with ten votes', votes: 10 },
      { id: 3, content: 'Anecdote with three votes', votes: 3 },
    ]

    useAnecdoteStore.setState({ anecdotes: unsortedAnecdotes })

    const { result } = renderHook(() => useAnecdotes())

    expect(result.current).toEqual([
      { id: 2, content: 'Anecdote with ten votes', votes: 10 },
      { id: 3, content: 'Anecdote with three votes', votes: 3 },
      { id: 1, content: 'Anecdote with two votes', votes: 2 },
    ])
  })
})

describe('useAnecdotes filtering', () => {
  const anecdotes = [
    { id: 1, content: 'Anecdote with two votes', votes: 2 },
    { id: 2, content: 'Anecdote with ten votes', votes: 10 },
  ]

  beforeEach(() => {
    useAnecdoteStore.setState({ anecdotes })
  })

  it('returns all anecdotes with no filter', () => {
    const { result } = renderHook(() => useAnecdotes())
    expect(result.current).toHaveLength(2)
  })

  it('filters anecdotes containing two', () => {
    useAnecdoteStore.setState({ filter: 'two' })
    const { result } = renderHook(() => useAnecdotes())
    expect(result.current).toEqual([anecdotes[0]])
  })

  it('filters anecdotes containing nothing', () => {
    useAnecdoteStore.setState({ filter: 'nothing' })
    const { result } = renderHook(() => useAnecdotes())
    expect(result.current).toHaveLength(0)
  })
})
