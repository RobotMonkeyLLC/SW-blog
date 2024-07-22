import React, { useState, useEffect, useContext } from "react";
import Card from "./Card.jsx";
import getData from "./getData.jsx";
import SWContext from "../SWContext.jsx";

export default function People() {
    const {tasks, taskActions} = useContext(SWContext);
    
    return  (
        <div className="accordian-item" id="peopleAccordian">
            <h2 className="accordian-header text-danger" 
                id="headingOne">
                <button className="accordion-button" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseOne" 
                    aria-expanded="true" 
                    aria-controls="collapseOne">
                    People
                </button>
            </h2>
            <div id="collapseOne" 
                className="accordion-collapse collapse show" 
                aria-labelledby="headingOne" 
                data-bs-parent="#peopleAccordian">
                <div className="accordian-body row flex-nowrap overflow-scroll">
                    {tasks.filter(x => x.category == 'people').map((task, index) => (
                        <Card key={index} data={task}/>
                    ))
                    }
                </div>
            </div>
        </div>
       
    )
}