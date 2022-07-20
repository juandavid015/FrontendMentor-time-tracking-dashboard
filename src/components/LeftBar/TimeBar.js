import React from "react";
import { NavLink } from "react-router-dom";
export default function TimeBar () {
    let activeClassName = "active";
    let nonActiveClassName = "title-time-lapsus"
    return (
        <div className="grid-leftbar-timebar"> 
            <NavLink to={"/daily"} className={({isActive})=>
                isActive ? activeClassName: nonActiveClassName  
            }>
                <h2>Daily</h2>
            </NavLink>
            <NavLink to={"/weekly"} className={({isActive})=>
                isActive ? activeClassName: nonActiveClassName  
            }>
                <h2>Weekly</h2>
            </NavLink>
            <NavLink to={"/monthly"} className={({isActive})=>
                isActive ? activeClassName: nonActiveClassName  
            }>
                <h2>Monthly</h2>
            </NavLink>
        </div>
    )
}