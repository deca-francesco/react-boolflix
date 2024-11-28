

export default function MovieList({ children }) {

    return (
        <section className='movieList'>
            <h2>Movie list</h2>
            <ul>
                {children}
            </ul>
        </section>
    )
}