
import React from 'react';
import {MdLocationOn} from 'react-icons/md';


  export default function Card(props){
    return(<div className="container">
   <a href={props.cardData.location} className="side"><img className="image" src={props.cardData.image} alt /></a>
    <div className="detail-0">
    <div className="detail-1">
    <div ><MdLocationOn className="detail-2"/>{props.cardData.country}</div>
    <a href={props.cardData.link} className="map">View on Google Maps </a>
    </div>
    <h1 className="detail-3">{props.cardData.names}</h1>
    <p className="detail-4">{props.cardData.date}</p>
    <p className="detail-5">{props.cardData.paragraph}</p>
    </div>
    <hr className="line"/>
    </div>
    )
  }
