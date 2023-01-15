import App from '../App'
import * as fetchHook from '../hooks/fetchHook'
import renderer from 'react-test-renderer'
import { APIResponse, mockFetch, mockRootState } from './mock'
import { AppContext, initialContext } from '../context/app-context'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

const useFetch = jest.spyOn(fetchHook, 'default')
global.fetch = mockFetch(APIResponse)

const mockAppComponent = (rootState) => {
  return (
    <AppContext.Provider
      value={{
        rootState,
        setRootStateHandler: jest.fn()
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppContext.Provider>
  )
}

describe('App component test cases', () => {
  beforeEach(() => {
    fetch.mockClear()
  })

  test('Should call useFetch -> API success', () => {
    renderer.create(mockAppComponent(mockRootState))
    expect(useFetch).toHaveBeenCalled()
  })

  test('Should call useFetch -> Loading state', () => {
    renderer.create(mockAppComponent({ ...initialContext, isLoading: true, isError: false }))
    expect(useFetch).toHaveBeenCalled()
  })

  test('Should call useFetch -> API fail', () => {
    renderer.create(mockAppComponent({ ...null, isError: false }))
    expect(useFetch).toHaveBeenCalled()
  })
})
