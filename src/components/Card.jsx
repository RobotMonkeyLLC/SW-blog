import { useContext } from "react";
import SWContext from "../SWContext.jsx";

export default function Card({ data }) {
    const { taskActions } = useContext(SWContext);

    function handleFavorite(url) {
        taskActions({ type: "toggleFav", payload: url });
    }
    
    return (
        <div className="card col-3">
            <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.text}</p>
                <div>
                    <a href="#" className="btn btn-primary">Learn More</a>
                    <button onClick={() => handleFavorite(data.url)} className={"btn " +( data.isFavorite ? 'active' : '')}>Favorite</button>
                </div>
                
            </div>
        </div>
    )
}