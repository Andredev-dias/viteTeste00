import { useState } from "react"
import { Card } from "./components/Card"
import Menu from "./components/Menu"
 import {apiRMCharacters} from "./api/server"
import { useEffect } from "react"


export const RickAndMorty = () => {
const [data, setData] = useState([])
const [page, setPage] = useState("")

  useEffect(()=> {
    apiRMCharacters.get(`/character/?page=${page}`).then((response) => {
        setData(response.data.results)
        console.log(response.data.results)
    })
  }, [page])

    return(
        <div>
            <Menu/>
            <h1>Rick and Morty API</h1>

            <input 
                type="text" 
                placeholder="Digite uma página" 
                value={page}
                onChange={(event) => setPage(event.target.value)}
            />
            <br />
             <section>
                <Card 
                    name="lalala" 
                    desc="udhus" 
                    value="jdisdas" 
                    image="https://rickandmortyapi.com/api/character/avatar/414.jpeg"
                />
             </section>
        </div>
    )
}