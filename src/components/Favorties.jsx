import { useContext } from "react"
import SWContext from "../SWContext"

export default function Favorties() {
    const {favorites} = useContext(SWContext)
    return (
        <button onClick={() => console.log(favorites)}>Favorites
            <span>{favorites}</span>
        </button>
    )
}