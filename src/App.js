import React from 'react'
import useFetch from './hooks/fetchHook'
import Router from './Router'
import './main.scss'

function App () {
  useFetch()

  return <Router />
}

export default App
