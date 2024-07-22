import React, { useState, useEffect, useContext } from "react";
import Card from "./Card.jsx";
import getData from "./getData.jsx";
import SWContext from "../SWContext.jsx";

export default function People() {
    const {tasks, taskActions} = useContext(SWContext);
    
    return  (
        <div className="row">
            {tasks.map((task, index) => (
                <Card key={index} data={task}/>
            ))
            }
        </div>
       
    )
}