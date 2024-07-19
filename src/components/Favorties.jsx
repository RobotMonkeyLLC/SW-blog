import { useContext } from "react"
import SWContext from "../SWContext"

export default function Favorties() {
    const {tasks, taskActions} = useContext(SWContext)
    return (
        <button onClick={() => console.log(tasks)}>Favorites
            <span>{tasks.filter(x => x.isFavorite == true).length}</span>
        </button>
    )
}