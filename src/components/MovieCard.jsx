import getFlag from "./Flags"
import getVoteStars from "./VoteStars"

export default function MovieCard({ data }) {


    return (
        <div className={data.poster_path ? "col" : "d-none"}>
            <div className="movie_card">
                <img className="poster" src={data.poster_path ? `https://image.tmdb.org/t/p/w300${data.poster_path}` : ""} alt={data.title || data.name} height={441} />
                <div className="movie_details">
                    <p><strong className="movie_title">Titolo: </strong>{data.title || data.name}</p>
                    <p><strong>Titolo originale: </strong>{data.original_title || data.original_name}</p>
                    <p>
                        <strong>Lingua originale: </strong>
                        <span className="me-2">
                            {getFlag(data.original_language) === 'unknown' ? (
                                `${data.original_language} nazionalità non trovata`
                            ) : (
                                <img src={`https://flagcdn.com/w20/${getFlag(data.original_language)}.png`} />)
                            }
                        </span>
                    </p>
                    <p><strong>Voto: </strong>{getVoteStars(data.vote_average)}</p>
                    <p><strong>Sinossi: </strong>{data.overview}</p>
                </div>
            </div>
        </div>
    )
}
