import { API_KEY, BASE_API, CATEGORIES_API } from '../constants/data-constant'

export const fetchRequest = async (method, url) => {
  const response = await fetch(url, {
    method
  })
  // Added success true or false based on API response
  if (response) {
    return { data: await response.json(), success: true }
  } else {
    return { data: null, success: false }
  }
}

export const fetchAllCatMovies = async () => {
  // Mapped all categories to fetch movies
  const fetchArr = CATEGORIES_API.map((cat) =>
    fetch(`${BASE_API}/${cat}?api_key=${API_KEY}`)
  )
  return Promise.all(fetchArr)
    .then((resArr) => Promise.all(resArr.map((res) => res.json())))
    .then((res) => {
      const state = {
        topRated: res[1].results,
        upComing: res[2].results,
        nowPlaying: res[0].results
      }
      return { state, success: true }
    })
    .catch((err) => {
      return { state: err, success: false }
    })
}

export const get = async (url) => {
  const response = await fetchRequest('GET', url)
  return response
}
