import { fireEvent, screen, render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { AppContext } from '../../context/app-context'
import { mockRootState, mockRootStateForEmptyWishList } from '../mock'
import React from 'react'
import WishList from '../../components/screens/wishlist/WishList'

const mockWishListComponent = () => {
  return (
    <AppContext.Provider
      value={{
        rootState: mockRootState,
        setRootStateHandler: jest.fn()
      }}
    >
      <BrowserRouter>
        <WishList />
      </BrowserRouter>
    </AppContext.Provider>
  )
}

describe('Wishlist component test cases', () => {
  test('Should remove from item from wishlist', async () => {
    render(mockWishListComponent(mockRootState))
    const btn = screen.getByRole('button', { name: /remove-wishlist/i })
    fireEvent.click(btn)
  })

  test('Should cover if Wish list is empty', async () => {
    render(mockWishListComponent(mockRootStateForEmptyWishList))
  })
})
