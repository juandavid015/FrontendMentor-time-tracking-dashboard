import React, { useState, useEffect } from "react";
import TimeCard from "./TimeCard";

export default function Weekly (props) {
 
    const [week, setWeek] = useState(
            [
                //{      title: "Work",
            //         timeframes: {
            //         current: 32,
            //         previous: 36
            //     }},
            //     {   title: "Play",
            //         timeframes: {
            //         current: 10,
            //         previous: 8
            //     }}, 
            //     {   title: "Study",
            //         timeframes: {
            //         current: 4, 
            //         previous: 7
            //     }},
            //     {   title: "Exercise",
            //         timeframes: {
            //         current: 4,
            //         previous: 5
            //     }},
            //     {   title: "Social",
            //         timeframes: {
            //         current: 5,
            //         previous: 10
            //     }},
            //     {   title: "Self Care",
            //         timeframes: {
            //         current: 2,
            //         previous: 2
            //     }
            // }
        ]
    )
    useEffect(()=> {
        if (props.data) {
            setWeek(props.data)
        } 
    })

    return (
        <div className="weekly-container timecards-grid">
        
            {week.map(activity => {
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