import getFlag from "./Flags"
import getVoteStars from "./VoteStars"

export default function MovieCard({ data }) {


    return (
        <div className="col">
            <div className="movie_card">
                <img src={data.poster_path ? `https://image.tmdb.org/t/p/w300${data.poster_path}` : ""} alt={data.title || data.name} />
                <h3>{data.title || data.name}</h3>
                <p>{data.original_title || data.original_name}</p>
                <div>
                    <span className="me-2">
                        {getFlag(data.original_language) === 'unknown' ? (
                            `${data.original_language} nazionalità non trovata`
                        ) : (
                            <img src={`https://flagcdn.com/w20/${getFlag(data.original_language)}.png`} />)
                        }
                    </span>
                    {data.original_language}
                </div>
                <p>{getVoteStars(data.vote_average)}</p>
            </div>
        </div>
    )
}
