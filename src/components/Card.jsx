import { useContext } from "react";
import SWContext from "../SWContext.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function Card({ data }) {
    const { taskActions } = useContext(SWContext);

    const navigate = useNavigate();

    function handleFavorite(name) {
        taskActions({ type: "toggleFav", payload: name });
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
                    <Link to="/details/1">Learn More</Link>
                    <button onClick={() => handleFavorite(data.name)} className={"btn " +( data.isFavorite ? 'active' : '')}>Favorite</button>
                </div>
                
            </div>
        </div>
    )
}