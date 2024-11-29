import { useGlobalContext } from "../contexts/GlobalContext"

export default function MovieList({ children }) {

    const { sectionTitle } = useGlobalContext()

    return (
        <section className='movieList'>
            <div className="container">
                <h2 className="my-5">{sectionTitle}</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                    {children}
                </div>
            </div>
        </section>
    )
}