import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './components/screens/home/Home'
import MovieDetails from './components/screens/movie/MovieDetails'
import WishList from './components/screens/wishlist/WishList'

function Router () {
  return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
                exact
                path="/movie-details/:category/:id"
                element={<MovieDetails />}
            />
            <Route exact path="/wish-list" element={<WishList />} />
        </Routes>
  )
}

export default Router
