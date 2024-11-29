import { useGlobalContext } from "../contexts/GlobalContext"


export default function AppHeader() {

    const { searchText, setSearchText, HandleSearchSubmit, refreshPage } = useGlobalContext()


    return (
        <header>
            <div className="container d-flex justify-content-between align-items-center my-2">
                <div className="logo"><img src="/images/logo.png" alt="" onClick={refreshPage} /></div>
                <form onSubmit={HandleSearchSubmit} className="w-25" >
                    <div className="input-group">
                        <input type="search"
                            placeholder="Cerca un titolo..."
                            className="form-control"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                        />
                        <button id='button-addon2' type='submit' className='btn btn-outline-light'>Cerca</button>
                    </div>
                </form>
            </div>
        </header>
    )
}