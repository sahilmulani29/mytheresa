import React from 'react'
import useFetch from './hooks/fetchHook'
import Router from './Router'
import './main.scss'

function App () {
  // Call API and set data in context
  useFetch()

  return <Router />
}

export default App
