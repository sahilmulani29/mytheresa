import React, { useContext } from 'react'
import { CATEGORIES_API } from '../../../constants/data-constant'
import { AppContext } from '../../../context/app-context'
import Carousels from '../../common/carousel/Carousels'
import { Container } from '../../common/container/Container'

const Home = () => {
  // Get the context
  const appCtx = useContext(AppContext)
  const state = appCtx?.rootState

  return (
    <Container>
      {
        !state.isError
          ? <>
          {/* Displayed Now Playing movies */}
            <Carousels
              onMovieSelect={null}
              title="Now playing"
              data={state.nowPlaying}
              id={CATEGORIES_API[0]}
            />
          {/* Displayed Now Top Rated movies */}
            <Carousels
              onMovieSelect={null}
              title="Top Rated"
              data={state.topRated}
              id={CATEGORIES_API[1]}
            />
          {/* Displayed Now Upcoming movies */}
            <Carousels
              onMovieSelect={null}
              title="Upcoming"
              data={state.upComing}
              id={CATEGORIES_API[2]}
            />
          </>
          : <>
          {/* Displayed instruction message if API failed */}
            <div className="error-container">
              <h1>Data not found</h1>
            </div>
          </>
      }
    </Container>
  )
}

export default Home
