import React , {useContext} from "react";
import SWContext from "../SWContext.jsx";
import { Link, useParams } from "react-router-dom";
import detailLabels from "../components/detailLabels.jsx";

export default function Detail() {
    const { id, category } = useParams();
    const { tasks } = useContext(SWContext);
    const task = tasks.find((task) => task.path === `${category}/${id}/`);
    const labels = detailLabels[category.replace('people', 'characters')].detail

    return (
        <div className="container">
        <div className="row">
            <div className="col-12">
                <div className="row align-items-center">
                    <img src={task.image} className="col-4" alt={task.name}/>
                    <div className="col-8">
                        <h1>{task.name}</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi nostrum repudiandae harum sed consequuntur iusto, illo labore, at veniam perferendis provident obcaecati. A consequuntur minus placeat mollitia quo, ex sequi.</p>
                    </div>
                </div>
                <div className="row">
                    {
                        labels.label.map(
                            (x,i) => (
                                <div key={category+'/'+i+'/'} className="col-3">
                                    <h6>
                                        {labels.label[i]}
                                    </h6>
                                    <p>
                                        {task[labels.name[i]]}
                                    </p>
                                </div>
                                
                            )
                        )
                    }
                </div>
            </div>
        </div>
        </div>
    );
}