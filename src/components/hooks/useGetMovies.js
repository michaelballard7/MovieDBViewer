import { useState, useEffect } from 'react'
import { API_URL, API_KEY } from '../../config'
import axios from 'axios'

export const useGetMovies = () => {

  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [loadSearch, setLoadSearch] = useState(0)
  const [endPoint, setEndPoint] = useState(`${API_URL}movie/popular?api_key=${API_KEY}`)

  const getMovies = async (endpoint,page) => {
    setEndPoint(endpoint)
    setError(false)
    setLoading(true)

    if(page){
      setState((prev)=>(
        {...prev, currentPage: prev.currentPage + 1}))
    }

    if(endpoint){
      setLoadSearch(endpoint.search('page'));
    }

    try {
      const result = await (await axios.get(endPoint, {
      })).data
      return result

    } catch (err) {
      setError(true)
      console.error(err)
    } finally {
      setLoading(false)
    }

  }

  const getRandomImage = (res) => {
    return Math.floor(Math.random() * res.length)
  }

  useEffect(() => {
    if (endPoint) {
      console.log('next request endpoint', endPoint)
      const result = getMovies(endPoint)
      result.then(res => {
        setState((prev) => ({
          ...prev,
          movies: loadSearch !== -1 ? [...prev.movies, ...res.results] : [...res.results],
          heroImage: prev.heroImage || res.results[getRandomImage(res.results)],
          currentPage: res.page,
          totalPages: res.total_pages
        }))
      })

    } else {
      setLoading(true)
    }
  }, [loadSearch, endPoint])

  return [{ state, loading, error }, getMovies]

}
