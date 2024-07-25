import React , {useContext} from "react";
import SWContext from "../SWContext.jsx";
import { Link, useParams } from "react-router-dom";
import detailLabels from "../components/detailLabels.jsx";

export default function Detail() {
    let { id, category } = useParams();
    const { tasks, taskActions } = useContext(SWContext);
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>Detail {id} {category}</h1>
                    {
                        ['','',''].map(
                            (x,i) => (
                                <p key={i}>
                                    {i}
                                </p>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    );
}