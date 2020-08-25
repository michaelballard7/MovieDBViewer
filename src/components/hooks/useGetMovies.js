import { useState, useEffect } from 'react'

import { API_URL, API_KEY } from '../../config'

import axios from 'axios'


export const useGetMovies = () => {

  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getMovies = async (endpoint) => {

    setError(false)
    setLoading(true)

    try {
      const result = await (await axios.get(endpoint, {
        params: {
          api_key: API_KEY
        }
      })).data
      return result

    } catch (err) {
      setError(true)
      console.error(err)
    }

  }

  useEffect(() => {
    const result = getMovies(`${API_URL}movie/popular`)
    result.then(res => {
      setState((prev) => ({
        ...prev,
        movies: [...res.results],
        heroImage: prev.heroImage || res.results[0],
        currentPage: res.page,
        totalPages: res.total_pages
      }))
    })
  }, [])

 return [{state, loading, error}, getMovies]

}
