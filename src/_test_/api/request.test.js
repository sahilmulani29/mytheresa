import { fetchAllCatMovies, get } from '../../api/request'
import { APIResponse, mockFetch } from '../mock'

/* eslint-disable */

global.fetch = mockFetch(APIResponse)

describe('Request component Test Cases', () => {
  beforeEach(() => {
    fetch.mockClear()
  })

  test('Should call fetchAllCatMovies', () => {
    expect(fetchAllCatMovies()).not.toBeNull()
  })

  test('API fail', () => {
    global.fetch = mockFetch(null)
    expect(fetchAllCatMovies()).not.toBeNull
  })

})

/* eslint-disable */
