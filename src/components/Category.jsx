import React, { useState, useEffect, useContext } from "react";
import Card from "./Card.jsx";
import getData from "./getData.jsx";
import SWContext from "../SWContext.jsx";

export default function Category({category}) {
    const {tasks, taskActions} = useContext(SWContext);
    
    return  (
        <div className="accordian-item" id={category+'Accordian'}>
            <h2 className="accordian-header text-danger" 
                id={'heading'+category}>
                <button className="accordion-button fs-1" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target={'#'+'collapse'+category}
                    aria-expanded="true" 
                    aria-controls={'collapse'+category}>
                    {category}
                </button>
            </h2>
            <div id={'collapse'+category}
                className="accordion-collapse collapse show" 
                aria-labelledby={'heading'+category} 
                data-bs-parent={'#'+category+'Accordian'}>
                <div className="accordian-body d-flex flex-nowrap overflow-scroll">
                    {tasks.filter(x => x.category == category.toLowerCase()).map((task, index) => (
                        <Card key={index} data={task}/>
                    ))
                    }
                </div>
            </div>
        </div>
       
    )
}