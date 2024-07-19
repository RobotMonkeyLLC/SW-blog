import { useContext } from "react";
import SWContext from "../SWContext.jsx";

export default function Card({ data }) {
    const { taskActions } = useContext(SWContext);

    function handleFavorite(id) {
        console.log(id);
        taskActions({ type: "add", payload: id });
    }
    
    return (
        <div className="card">
            <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.text}</p>
                <div>
                    <a href="#" className="btn btn-primary">Learn More</a>
                    <button onClick={() => handleFavorite(data.id)} className="btn">Favorite</button>
                </div>
                
            </div>
        </div>
    )
}