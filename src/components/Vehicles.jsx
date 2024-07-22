import React, { useState, useEffect, useContext } from "react";
import Card from "./Card.jsx";
import getData from "./getData.jsx";
import SWContext from "../SWContext.jsx";

export default function Vehciles() {
    const {tasks, taskActions} = useContext(SWContext);
    
    return  (
        <div className="accordian-item" id="vehicleAccordian">
            <h2 className="accordian-header text-danger" 
                id="headingThree">
                <button className="accordion-button" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#collapseThree" 
                    aria-expanded="true" 
                    aria-controls="collapseThree">
                    Vehicles
                </button>
            </h2>
            <div id="collapseThree" 
                className="accordion-collapse collapse show" 
                aria-labelledby="headingThree" 
                data-bs-parent="#vehicleAccordian">
                <div className="accordian-body row flex-nowrap overflow-scroll">
                    {tasks.filter(x => x.category == 'vehicles').map((task, index) => (
                        <Card key={index} data={task}/>
                    ))
                    }
                </div>
            </div>
        </div>
       
    )
}