import getFlag from "./Flags"

export default function MovieCard({ data, index }) {


    return (
        <li>
            <h3>{data.title ? data.title : data.name}</h3>
            <p>{data.original_title ? data.original_title : data.original_name}</p>
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
            <p>{data.vote_average}</p>
        </li>
    )
}