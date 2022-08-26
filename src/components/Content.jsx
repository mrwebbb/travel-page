import React from "react"

export default function Content(props){
    return(
        <div className="container-cont">
            <div className="travels">
                <img src={props.item.imageUrl} alt="" className="tr-img" /> 
                <div className="side-text">
                        <div className="line-map">
                             <div className="location">
                                <img src="../loc-logo.png" alt="" className="loco-img" />
                                <p><strong>{props.item.location}</strong></p>
                             </div>
                             <a  href="">View on Google Maps</a>
                        </div>
                       <h1>{props.item.title}</h1>
                       <p className="date"><strong>{props.item.startDate} - {props.item.endDate}</strong></p>
                       <p>{props.item.description}</p>
                </div>
            </div>
        </div>
    )
}