import { useState } from 'react'
import './App.css'

import SearchBar from './components/SearchBar.jsx'
import MovieList from './components/MovieList.jsx'
import MovieCard from './components/MovieCard.jsx'


function App() {

  const [data, setData] = useState([])

  return (
    <>

      <div className="container">

        <SearchBar setData={setData} />

        <MovieList >
          {data?.filter(movie => movie.media_type !== "person").map((movie, index) => (
            <MovieCard key={movie.id} data={movie} />
          ))}
        </MovieList>

      </div>

    </>
  )
}

export default App
