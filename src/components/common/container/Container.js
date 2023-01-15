import React, { useContext } from 'react'
import { AppContext } from '../../../context/app-context'
import { Header } from '../header/Header'
import './container.scss'
import { Spinner } from '../spinner/Spinner'

export const Container = (props) => {
  const appCtx = useContext(AppContext)
  const state = appCtx?.rootState

  return (
    <>
      <div>
        <Header />
        <div className="container">
          {state.isLoading ? <Spinner /> : props.children}
        </div>
      </div>
    </>
  )
}
