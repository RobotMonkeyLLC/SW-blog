import React from "react";
import { Link, useParams } from "react-router-dom";

export default function Detail() {
    const { id } = useParams();
    return (
        <div className="container">
        <div className="row">
            <div className="col-12">
            <h1>Detail {id}</h1>
            </div>
        </div>
        </div>
    );
}