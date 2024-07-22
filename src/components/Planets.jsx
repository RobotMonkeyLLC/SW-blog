import React, { useState, useEffect, useContext } from "react";
import Card from "./Card.jsx";
import getData from "./getData.jsx";
import SWContext from "../SWContext.jsx";

export default function Planets() {
    const {tasks, taskActions} = useContext(SWContext);
    
    return  (
        <div className="accordian-item" id="planetsAccordian">
            <h2 className="accordian-header text-danger" 
                id="headingTwo">
                <button className="accordion-button" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseTwo" 
                    aria-expanded="true" 
                    aria-controls="collapseTwo">
                    Planets
                </button>
            </h2>
            <div id="collapseTwo" 
                className="accordion-collapse collapse show" 
                aria-labelledby="headingTwo" 
                data-bs-parent="#planetsAccordian">
                <div className="accordian-body row flex-nowrap overflow-scroll">
                    {tasks.filter(x => x.category == 'planets').map((task, index) => (
                        <Card key={index} data={task}/>
                    ))
                    }
                </div>
            </div>
        </div>
       
    )
}