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

  it('anecdotes are sorted by votes descending', () => {
    const unsortedAnecdotes = [
      { id: '1', content: 'Anecdote with two votes', votes: 2 },
      { id: '2', content: 'Anecdote with ten votes', votes: 10 },
      { id: '3', content: 'Anecdote with three votes', votes: 3 },
    ]

    useAnecdoteStore.setState({ anecdotes: unsortedAnecdotes })

    const { result } = renderHook(() => useAnecdotes())

    expect(result.current).toEqual([
      { id: '2', content: 'Anecdote with ten votes', votes: 10 },
      { id: '3', content: 'Anecdote with three votes', votes: 3 },
      { id: '1', content: 'Anecdote with two votes', votes: 2 },
    ])
  })
})
