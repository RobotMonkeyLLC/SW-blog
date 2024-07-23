import { useContext } from "react";
import SWContext from "../SWContext.jsx";

export default function Card({ data }) {
    const { taskActions } = useContext(SWContext);

    function handleFavorite(url) {
        taskActions({ type: "toggleFav", payload: url });
    }
    
    return (
        <div className="card col-5">
            <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">Gender: {data.gender}</p>
                <p className="card-text">Hair Color: {data.hair_color}</p>
                <p className="card-text">Eye Color: {data.eye_color}</p>
                <div>
                    <a href="#" className="btn btn-primary">Learn More</a>
                    <button onClick={() => handleFavorite(data.name)} className={"btn " +( data.isFavorite ? 'active' : '')}>Favorite</button>
                </div>
                
            </div>
        </div>
    )
}