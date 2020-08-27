import {useEffect, useState, useCallback} from 'react';
import {API_URL, API_KEY} from '../../config'


export const useGetMovie = movieId => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const getMovie = useCallback(async ()=> {

    setError(false)
    setLoading(true)

    try {
      
      const endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}`
      const result = await(await fetch(endpoint)).json()
      const creditsEndpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`
      const creditResults =  await(await fetch(creditsEndpoint)).json()
      const directors = creditResults.crew.filter((member => member.job === 'Director'))
      setMovie({
        ...result,
        actors: creditResults.cast,
        directors
      })

    } catch(error) {
      console.log(error)
      setError(true);
    } finally {
      setLoading(false)
    }

  }, [movieId])

  useEffect( () => {
    getMovie()
  },[getMovie])

  return [movie, loading, error]

}