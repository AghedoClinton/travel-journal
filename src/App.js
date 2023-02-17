
import React from 'react';
import {MdLocationOn} from 'react-icons/md';


  export default function Nav(props){
    return(<div className="contain">
   <a href={props.navs.location} className="side"><img className="image" src={props.navs.image} alt /></a>
    <div className="detail">
    <div className="detail-1">
    <div ><MdLocationOn className="detail-1-1"/>{props.navs.country}</div>
    <a href={props.navs.link} className="side">View on Google Maps </a>
    </div>
    <h1 className="detail-2">{props.navs.names}</h1>
    <p className="detail-4">{props.navs.date}</p>
    <p className="detail-3">{props.navs.paragraph}</p>
    </div>
    <hr className="line"/>
    </div>
    )
  }
