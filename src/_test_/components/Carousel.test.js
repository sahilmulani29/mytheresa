import { fireEvent, screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Carousels from '../../components/common/carousel/Carousels'
import { AppContext } from '../../context/app-context'
import { mockRootState, mockMovieInfo } from '../mock'
import React from 'react'

const mockCarouselComponent = (movieResponse, isEmptyResponse) => {
  // Mock the Carousel component with props
  const props = {
    title: 'Now Playing',
    data: !isEmptyResponse ? [movieResponse] : [],
    id: '76660',
    onMovieSelect: jest.fn()
  }
  return (
    <AppContext.Provider
      value={{
        rootState: mockRootState,
        setRootStateHandler: jest.fn()
      }}
    >
      <BrowserRouter>
        <Carousels {...props} />
      </BrowserRouter>
    </AppContext.Provider>
  )
}

describe('Carousel component test cases', () => {
  test('Should move Carousel to left', () => {
    render(mockCarouselComponent({}, false))
    const btn = screen.getAllByTestId('pre-btn')
    // Add click fireevent on prev button to scroll carousel
    fireEvent.click(btn[0])
  })

  test('Shold Show list empty text if API fail', () => {
    render(mockCarouselComponent({}, true))
  })

  test('Should move Carousel to right', () => {
    render(mockCarouselComponent({}, false))
    const btn = screen.getAllByTestId('next-btn')
    // Add click fireevent on next button to scroll carousel
    fireEvent.click(btn[0])
  })

  test('Should render Movie details component', () => {
    render(mockCarouselComponent(mockMovieInfo, false))
    const btn = screen.getAllByTestId('movie')
    // Add click fireevent to redirect on Movie details page
    fireEvent.click(btn[0])
  })
})
