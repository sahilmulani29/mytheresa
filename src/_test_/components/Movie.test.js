import { fireEvent, screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { AppContext } from '../../context/app-context'
import { mockRootState, mockMovieInfo } from '../mock'
import React from 'react'
import Movies from '../../components/screens/movie/Movie'

const mockMovieComponent = (isView) => {
  const props = {
    category: 'nowPlaying',
    movieInfo: { mockMovieInfo },
    isView,
    onMovieClick: jest.fn()
  }

  return (
    <AppContext.Provider
      value={{
        rootState: mockRootState,
        setRootStateHandler: jest.fn()
      }}
    >
      <BrowserRouter>
        <Movies {...props} />
      </BrowserRouter>
    </AppContext.Provider>
  )
}

describe('Movie component test cases', () => {
  test('Should redirect to movie details component', () => {
    render(mockMovieComponent(true))
    const btn = screen.getAllByTestId('movie')
    fireEvent.click(btn[0])
  })

  test('Should remove movie from wishlist callback', () => {
    render(mockMovieComponent(false))
    const btn = screen.getAllByTestId('movie')
    fireEvent.click(btn[0])
  })
})
