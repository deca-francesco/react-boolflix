import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
    const [data, setData] = useState({})


    function fetchData(url = ``) {
        fetch(url)

            .then(res => res.json())

            .then(data => {

                console.log(data);

                // setData(data)

            }).catch(err => {
                console.error(err.message);
            })
    }

    useEffect(fetchData, [])

}


export default GlobalProvider