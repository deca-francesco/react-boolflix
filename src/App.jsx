import { useState, useEffect } from 'react'
import './App.css'


// import GlobalContext from './contexts/GlobalContext'

function App() {

  const [data, setData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  function SearchMovie(e) {
    e.preventDefault()

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=3fa2634bb79fb57492c1bba32539c4a9&query=${searchQuery}`)

      .then(res => res.json())

      .then(data => {

        console.log(searchQuery)
        console.log(data.results);

        setData(data.results)

      }).catch(err => {
        console.error(err.message);
      })
  }


  return (
    <>
      {/* <GlobalContext.Provider > */}


      <div className="container">

        <div className="serachBar mt-5">
          <form onSubmit={SearchMovie}>
            <div className="input-group mb-3">
              <input type="search"
                className="form-control"
                placeholder="Cerca un titolo"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)} />
              <button id='button-addon2' type='submit' className='btn btn-outline-light'>Cerca</button>
            </div>
          </form>
        </div>

        <section className='movieList'>
          <ul>
            {data?.map(movie => (
              <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.original_title}</p>
                <p>{movie.original_language}</p>
                <p>{movie.vote_average}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>



      {/* </GlobalContext.Provider> */}
    </>
  )
}

export default App
