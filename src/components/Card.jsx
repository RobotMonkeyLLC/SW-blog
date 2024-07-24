import { useContext } from "react";
import SWContext from "../SWContext.jsx";
import { Link } from "react-router-dom";

export default function Card({ data }) {
    const { taskActions } = useContext(SWContext);

    function handleFavorite(name) {
        taskActions({ type: "toggleFav", payload: name });
    }
    
    const detailLabels = {
        people: {
            name: ['gender', 'hair_color', 'eye_color'],
            label: ['Gender:', 'Hair Color:', 'Eye Color:']
        },
        planets: {
            name: ['terrain', 'population', 'climate'],
            label: ['Terrain:', 'Population:', 'Climate:']
        },
        vehicles: {
            name: ['model', 'manufacturer', 'cost_in_credits'],
            label: ['Model:', 'Manufacturer:', 'Cost in Credits:']
        }
    }

    return (
        <div className="card col-5">
            <img className="card-img-top" src="..." alt="Card image cap"/>
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                {/* <p className="card-text">Gender: {data.gender}</p>
                <p className="card-text">Hair Color: {data.hair_color}</p>
                <p className="card-text">Eye Color: {data.eye_color}</p> */
                detailLabels[data.category].label.map((x,i) => (
                    <p key={i} className="card-text">
                        {x} {data[detailLabels[data.category].name[i]]}
                    </p>
                ))
                }
                <div>
                    <Link to="/details/1">Learn More</Link>
                    <button onClick={() => handleFavorite(data.name)} className={"btn " +( data.isFavorite ? 'active' : '')}>Favorite</button>
                </div>
                
            </div>
        </div>
    )
}