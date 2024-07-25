import React , {useContext} from "react";
import SWContext from "../SWContext";
import { Link, useParams } from "react-router-dom";
import detailLabels from "../components/detailLabels.jsx";

export default function Detail() {
    const { id, category } = useParams();
    const { tasks, taskActions } = useContext(SWContext);

    /* const taskSubset =  tasks.find(x => x.category == category.replace('people', 'characters').toLowerCase() && x.path == (category + '/' + id + '/'));
    const detailSubset = detailLabels[category.replace('people', 'characters')].detail.name;
    const detailContent = detailSubset.map(x=>taskSubset[x]); */

    const taskSubset = (tasks) => {
        return tasks.find(x => x.category == category.replace('people', 'characters').toLowerCase() && x.path == (category + '/' + id + '/'));
    }
    const detailSubset = detailLabels[category.replace('people', 'characters')].detail.name;

    const detailContent = (tasks) => {
        return detailSubset.map(x=>tasks[x]);
    }

    const _reduced = (f, g) => (args) => f(g(args));
    const pipe = (...fns) => fns.reduce(_reduced);

    return (
        <div className="container">
        <div className="row">
            <div className="col-12">
                <h1>Detail {id} {category}</h1>
                <div className="row">
                    {
                        detailLabels[category.replace('people', 'characters')].detail.label.map((x,i) => (
                            <div key={i} className="card-text col-3">
                                <h5>{x}</h5>
                                <p>
                                    {
                                        // too complicated, find a way to simplify this
                                     
                                    }
                                </p>
                            </div>
                            
                        ))

                    }
                </div>
            </div>
        </div>
        </div>
    );
}