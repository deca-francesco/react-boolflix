import './App.css'

import MovieList from './components/MovieList.jsx'
import MovieCard from './components/MovieCard.jsx'
import AppHeader from './components/AppHeader.jsx'
import { useGlobalContext } from './contexts/GlobalContext.jsx'

function App() {

  const { movies } = useGlobalContext()

  return (
    <>
      <AppHeader />
      <MovieList >
        {movies?.filter(movie => movie.media_type !== "person").map(movie => (
          <MovieCard key={movie.id} data={movie} />
        ))}
      </MovieList>
    </>
  )
}

export default App
