import React from 'react'
import { useNavigate } from 'react-router-dom'
import './header.scss'

export const Header = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="header-bar">
        <div className='headercover'>
          <div className="row header-container">
            <div data-testid="home-click" onClick={() => navigate('/')} className="title">
              Watch & Relax..!!
            </div>
            <div data-testid="wishlist-click" onClick={() => navigate('/wish-list')} className="wish-list">
              Wish List
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
