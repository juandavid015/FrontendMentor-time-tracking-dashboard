import React, { useState, useEffect } from "react";
import TimeCard from "./TimeCard";

export default function Monthly (props) {
    
    const [month, setMonth] = useState(
           [
            //     {      title: "Work",
            //         timeframes: {
            //         current: 103,
            //         previous: 128
            //     }},
            //     {   title: "Play",
            //         timeframes: {
            //         current: 23,
            //         previous: 29
            //     }}, 
            //     {   title: "Study",
            //         timeframes: {
            //         current: 13, 
            //         previous: 19
            //     }},
            //     {   title: "Exercise",
            //         timeframes: {
            //         current: 11,
            //         previous: 18
            //     }},
            //     {   title: "Social",
            //         timeframes: {
            //         current: 21,
            //         previous: 23
            //     }},
            //     {   title: "Self Care",
            //         timeframes: {
            //         current: 7,
            //         previous: 11
            //     }
            // }
           ]
    )
    useEffect(()=> {
        if (props.data) {
            setMonth(props.data)
        } 
    })
    
    return (
        <div className="monthly-container timecards-grid">
        
            { month.map && month.map(activity => {
                return(
                <TimeCard 
                    title = {activity.title}
                    current = {activity.timeframes.current}
                    previous = {activity.timeframes.previous}
                    key = {activity.title}
                />
                )
            })}
          
        </div>
    )
}