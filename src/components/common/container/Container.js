import React, { useContext } from 'react'
import { AppContext } from '../../../context/app-context'
import { Header } from '../header/Header'
import './container.scss'
import { Spinner } from '../spinner/Spinner'

// Wrapped all children component to this to include header and spinner everywhere
export const Container = (props) => {
  const appCtx = useContext(AppContext)
  const state = appCtx?.rootState

  return (
    <>
      <div>
        <Header />
        <div className="container">
          {/* if API is in pending state then show spinner and hide all content */}
          {state.isLoading ? <Spinner /> : props.children}
        </div>
      </div>
    </>
  )
}
