import { fireEvent, screen, render, waitFor } from '@testing-library/react'
import { BrowserRouter, Router } from 'react-router-dom'
import { Header } from '../../components/common/header/Header'
import React from 'react'

// Mock naviagte
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    navigation: {navigate:jest.fn()}
}))


describe('Movie Detail component test cases', () => {
    test('Should navigate to home', async () => {
        render(<BrowserRouter><Header/></BrowserRouter>)
        const btn = screen.getByTestId("home-click")
        // Event to redirect on Home page
        fireEvent.click(btn)
    })

    test('Should navigate to wish list', async () => {
        render(<BrowserRouter><Header/></BrowserRouter>)
        const btn = screen.getByTestId("wishlist-click")
        // Event to redirect on Wish List Page page
        fireEvent.click(btn)
    })
})
