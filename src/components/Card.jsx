import { useContext } from "react";
import SWContext from "../SWContext.jsx";
import { Link } from "react-router-dom";
import detailLabels from "./detailLabels.jsx";

export default function Card({ data }) {
    const { taskActions } = useContext(SWContext);

    function handleFavorite(name) {
        taskActions({ type: "toggleFav", payload: name });
    }

    return (
        <div className="accordian card col-3 col-md-5 m-2 p-0">
            <img className="m-auto img-card-top" src={data.image} alt="Card image cap" style={{height:"20rem"}}/>
            <div className="card-body text-start">
                <h5 className="card-title fw-bold">{data.name}</h5>
                {/* <p className="card-text">Gender: {data.gender}</p>
                <p className="card-text">Hair Color: {data.hair_color}</p>
                <p className="card-text">Eye Color: {data.eye_color}</p> */
                detailLabels[data.category].card.label.map((x,i) => (
                    <p key={i} className="card-text">
                        {x} {data[detailLabels[data.category].card.name[i]]}
                    </p>
                ))
                }
                <div className="d-flex justify-content-between">
                    <Link className="btn btn-outline-primary" to={`/`+data.path}>Learn More</Link>
                    <button onClick={() => handleFavorite(data.name)} className={"btn btn-outline-warning bi bi-heart" +( data.isFavorite ? '-fill' : '')}></button>
                </div>
                
            </div>
        </div>
    )
}