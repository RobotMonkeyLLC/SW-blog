import React , {useContext} from "react";
import SWContext from "../SWContext.jsx";
import { Link, useParams } from "react-router-dom";
import detailLabels from "../components/detailLabels.jsx";

export default function Detail() {
    let { id, category } = useParams();
    const { tasks, taskActions } = useContext(SWContext);
    const task = tasks.find(x => x.path == (category + '/' + id + '/'));
    //const labels = detailLabels[category.replace('people','characters')].detail;

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="row align-items-center justify-content-center pb-5">
                        <img className="col-5" src={task.image} alt="" />
                        <div className="col-6">
                            <h1>{task.name}</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo facere nulla ratione deserunt autem eos? Eum incidunt quidem voluptatem blanditiis quia alias quisquam optio quam, voluptate consequuntur natus consectetur quis? Ullam eius aut excepturi ipsum atque quod ipsam vero aperiam provident ipsa culpa quo unde adipisci dignissimos deleniti voluptatibus inventore, error nemo necessitatibus soluta. Vitae, explicabo, eaque quibusdam eos porro recusandae dolorem dolorum, enim eligendi voluptatem voluptas magnam omnis suscipit commodi quod dignissimos atque sapiente mollitia provident cumque sit eius!</p>
                        </div>                        
                    </div>
                    
                    <div className="row border-top border-danger flex-nowrap overflow-scroll">
                        {
                            Object.keys(task).slice(0,-7).map((x,i) => (
                                <div key={category + '/' + i} className="col-3">
                                    <h4 className="py-4 text-danger">{x.split('_').reduce(
                                        (acc, cur) => acc + ' ' + cur.charAt(0).toUpperCase() + cur.slice(1),
                                        ''
                                    )}</h4>
                                    <p>{task[x]}</p>
                                </div>
                            ))
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    );
}