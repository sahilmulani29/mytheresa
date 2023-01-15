import { fireEvent, screen, render, waitFor } from '@testing-library/react'
import { BrowserRouter, Router } from 'react-router-dom'
import { AppContext } from '../../context/app-context'
import {
  mockFetch,
  mockRootState,
  mockRootStateWishList,
  mockMovieDetails
} from '../mock'
import React from 'react'
import MovieDetails from '../../components/screens/movie/MovieDetails'
import { act } from 'react-test-renderer'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: '238',
    category: 'topRated'
  }),
  useRouteMatch: () => ({ url: '/company/company-id1/team/team-id1' })
}))

global.fetch = mockFetch(mockMovieDetails)

const mockMovieDetailsComponent = (rootState) => {
  return (
    <AppContext.Provider
      value={{
        rootState: mockRootState,
        setRootStateHandler: jest.fn()
      }}
    >
      <BrowserRouter>
        <MovieDetails />
      </BrowserRouter>
    </AppContext.Provider>
  )
}

describe('Movie Detail component test cases', () => {
  test('Should remove movie from wishlist', async () => {
    await act(async () => {
      render(mockMovieDetailsComponent(mockRootState))
    })

    await waitFor(() => {
      const btn = screen.getByRole('button', { name: /add-wishlist/i })
      fireEvent.click(btn)
    })
  })

  test('Should add movie from wishlist', async () => {
    await act(async () => {
      render(mockMovieDetailsComponent(mockRootStateWishList))
    })

    await waitFor(() => {
      const btn = screen.getByRole('button', { name: /add-wishlist/i })
      fireEvent.click(btn)
    })
  })
})
