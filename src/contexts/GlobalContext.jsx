import { createContext, useState, useEffect, useContext } from "react";

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {

    const [searchText, setSearchText] = useState("")
    const [movies, setMovies] = useState([])
    const api_key = import.meta.env.VITE_MOVIE_DB_API_KEY;
    const base_movies_api_url = `https://api.themoviedb.org/3/search/multi?api_key=${api_key}&query=${searchText}`
    const [sectionTitle, setSectionTitle] = useState("Film in tendenza")



    function HandleSearchSubmit(e) {
        e.preventDefault()
        console.log(base_movies_api_url);

        setSearchText("")

        fetch(`${base_movies_api_url}`)
            .then((res) => res.json())
            // destruttura e prende solo l'array
            .then(({ results }) => {
                console.log(results.filter(movie => movie.media_type !== "person"));
                setSectionTitle(`Risultati per "${searchText}"`)
                setMovies(results)
            })


    }

    function getTrendingMovies() {

        fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`)
            .then((res) => res.json())
            .then(({ results }) => {
                console.log(results);
                setMovies(results)
            })
    }

    useEffect(getTrendingMovies, [])


    function refreshPage() {
        window.location.reload()
    }


    const values = {
        movies,
        setMovies,
        searchText,
        setSearchText,
        HandleSearchSubmit,
        sectionTitle,
        getTrendingMovies,
        refreshPage
    }


    return (
        <GlobalContext.Provider value={values} >
            {children}
        </GlobalContext.Provider>
    )

}



function useGlobalContext() {
    return useContext(GlobalContext);
}


export { GlobalContextProvider, useGlobalContext }