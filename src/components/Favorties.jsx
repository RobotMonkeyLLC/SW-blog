import { useContext } from "react"
import SWContext from "../SWContext"
import { Link } from "react-router-dom";

export default function Favorties() {
    const {tasks, taskActions} = useContext(SWContext)
    return (
        <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle" 
                    type="button" 
                    data-bs-toggle="dropdown" 
                    aria-expanded="false" 
                    >
                        Favorites -
                <span className="px-1">
                    {
                        tasks.filter(x => x.isFavorite == true).length
                    }
                </span>
            </button>
            <ul className="dropdown-menu">
                {
                    tasks.filter(x => x.isFavorite == true).map(x => (
                        <li key={x.path} className="dropdown-item d-flex justify-content-between">
                           <Link to={`/${x.path}`} className="pe-1">
                                {x.name}
                           </Link>
                           <button className="bi bi-trash"
                                      onClick={() => taskActions({type: "toggleFav", payload: x.name})}
                           ></button>
                        </li>
                    ))
                }
            </ul>
        </div>
        
    )
}