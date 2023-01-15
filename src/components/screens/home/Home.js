import React, { useContext } from 'react'
import { CATEGORIES_API } from '../../../constants/data-constant'
import { AppContext } from '../../../context/app-context'
import Carousels from '../../common/carousel/Carousels'
import { Container } from '../../common/container/Container'

const Home = () => {
  const appCtx = useContext(AppContext)
  const state = appCtx?.rootState

  return (
    <Container>
      {
        !state.isError
          ? <>
            <Carousels
              onMovieSelect={null}
              title="Now playing"
              data={state.nowPlaying}
              id={CATEGORIES_API[0]}
            />
            <Carousels
              onMovieSelect={null}
              title="Top Rated"
              data={state.topRated}
              id={CATEGORIES_API[1]}
            />
            <Carousels
              onMovieSelect={null}
              title="Upcoming"
              data={state.upComing}
              id={CATEGORIES_API[2]}
            />
          </>
          : <>
            <div className="error-container">
              <h1>Data not found</h1>
            </div>
          </>
      }
    </Container>
  )
}

export default Home
