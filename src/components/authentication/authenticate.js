import React from "react";
import { Link } from "react-router-dom";   
export default function LogIn(){
    return (
        <div className="alert alert-warning"> 
             <h3>Segment non construit.</h3>       
             <p> Merci de patienter jusqu'à la v2.</p>     
            <Link className="btn btn-primary" to="/">
                Retour
            </Link>
        </div>
    )
       
}