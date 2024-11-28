import { useState } from 'react'


export default function SearchBar({ setData }) {

    const [searchQuery, setSearchQuery] = useState('')

    const searchMultiUrl = "https://api.themoviedb.org/3/search/multi?api_key=3fa2634bb79fb57492c1bba32539c4a9&query="

    // function SearchMovie(e) {
    //     e.preventDefault()

    //     fetch(`https://api.themoviedb.org/3/search/movie?api_key=3fa2634bb79fb57492c1bba32539c4a9&query=${searchQuery}`)

    //         .then(res => res.json())

    //         .then(data => {

    //             console.log(searchQuery)
    //             console.log(data.results);

    //             setData(data.results)

    //         }).catch(err => {
    //             console.error(err.message);
    //         })
    // }


    function SearchMulti(e) {
        e.preventDefault()

        fetch(`${searchMultiUrl}${searchQuery}`)

            .then(res => res.json())

            .then(data => {

                console.log(searchQuery)
                console.log(data.results.filter(movie => movie.media_type !== "person"));

                setData(data.results)

            }).catch(err => {
                console.error(err.message);
            })
    }


    return (
        <div className="searchBar mt-5">
            <form onSubmit={SearchMulti}>
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
    )
}