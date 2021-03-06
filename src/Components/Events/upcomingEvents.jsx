//jshint esversion:6
import React from "react";
import {comingEvents} from "./EventDetails";
import {Eventpic} from "../Image";
import NoEvent from "./noEvent";

function eachEvent({src,name, rlink,details,fblink,instalink},index){
  const imgAddress="images/events/"+src+".jpeg";
  return(
    <div key={index} className="row">
      <div className="col-lg-5 col-md-10 events-pic">
        <Eventpic src={imgAddress} />
      </div>
      <div className="col-lg-7 col-md-10">
        <h1 className="event-name">{name}</h1>
        <br />
        {details.map((detail,index)=>{  // content is in details array so looping 
           return <h5 key={index}>{detail}</h5>
        })}
        <br />
        <h4>For Registration :- <a href={rlink}>Click here</a><a href={instalink}><i className="fab fa-instagram event-icon"></i></a>
        <a href={fblink}><i className="fab fa-facebook-f event-icon"></i></a></h4>
      </div>
      <hr />
    </div>
  )
}

function UpcomingEvents(){
  let eventSize=comingEvents.length;
  let listevents=comingEvents.map(eachEvent);
  return (
    eventSize ? listevents : <NoEvent prop="Upcoming" />
  )}

export default UpcomingEvents;
