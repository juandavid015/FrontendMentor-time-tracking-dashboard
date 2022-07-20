import React from "react";
import image from "../../images/image-jeremy.png";

export default function ProfileCard () {
    return (
        <div className="grid-leftbar-profile">
            <img className="profile-img" src={image} alt="profile img"></img>
            <div className="profile-info">
                <span className="by-tag">Report for</span>
                <h1 className="name">Jeremy Robson</h1>
            </div>
            
        </div>
    )
}
