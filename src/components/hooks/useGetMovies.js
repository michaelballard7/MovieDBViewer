import { useState, useEffect } from 'react'
import { POPULAR_BASE_URL } from '../../config'


export const useGetMovies = () => {

  const [state, setState] = useState({ movies: [] });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getMovies = async (endpoint) => {
    setError(false)
    setLoading(true)

    const isLoadMore = endpoint.search('page')

    try {
      const res = await (await fetch(endpoint,)).json();
      console.log(res)
      setState(prev => ({
        ...prev,
        movies: isLoadMore !== -1 ? [...prev.movies, ...res.results] : [...res.results],
        heroImage: prev.heroImage || res.results[getRandomImage(res.results)],
        currentPage: res.page,
        totalPages: res.total_pages
      }))
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const getRandomImage = (res) => {
    return Math.floor(Math.random() * res.length)
  }

  useEffect(() => {
    getMovies(POPULAR_BASE_URL)
  }, [])


  return [{ state, loading, error }, getMovies]

}
