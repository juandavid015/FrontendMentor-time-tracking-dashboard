import React from "react";
import ProfileCard from "./ProfileCard";
import TimeBar from "./TimeBar";


export default function LeftBar() {
    return (
        <div className="grid-leftbar">
            <ProfileCard />
            <TimeBar />
        </div>
    )
}