import React, { useState, useEffect } from "react";
import TimeCard from "./TimeCard";

export default function Daily (props) {
    const [day, setDay] = useState(
            [
            //     {      title: "Work",
            //         timeframes: {
            //         current: 5,
            //         previous: 7
            //     }},
            //     {   title: "Play",
            //         timeframes: {
            //         current: 1,
            //         previous: 2
            //     }}, 
            //     {   title: "Study",
            //         timeframes: {
            //         current: 0, 
            //         previous: 1
            //     }},
            //     {   title: "Exercise",
            //         timeframes: {
            //         current: 1,
            //         previous: 1
            //     }},
            //     {   title: "Social",
            //         timeframes: {
            //         current: 1,
            //         previous: 3
            //     }},
            //     {   title: "Self Care",
            //         timeframes: {
            //         current: 0,
            //         previous: 1
            //     }
            // }
        ]
    )

    useEffect(()=> {
        if (props.data) {
            setDay(props.data)
        }
        
    })
    return (
        <div className="daily-container timecards-grid">
        
            {day.map(activity => {
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