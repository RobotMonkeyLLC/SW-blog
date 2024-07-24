import React , {useContext} from "react";
import SWContext from "../SWContext";
import { Link, useParams } from "react-router-dom";
import detailLabels from "../components/detailLabels";

export default function Detail() {
    const { id, category } = useParams();
    const { tasks } = useContext(SWContext);
    return (
        <div className="container">
        <div className="row">
            <div className="col-12">
                <h1>Detail {id} {category}</h1>
                {/* {
                    detailLabels[category].detail.label.map((x,i) => (
                        <p key={i} className="card-text">
                            {x}
                        </p>
                    ))
                } */}
            </div>
        </div>
        </div>
    );
}