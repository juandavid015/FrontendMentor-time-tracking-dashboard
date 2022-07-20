import React from "react";
import excerciseIcon from "../../images/icon-exercise.svg";
import workIcon from "../../images/icon-work.svg";
import studyIcon from "../../images/icon-study.svg";
import socialIcon from "../../images/icon-social.svg";
import selfcareIcon from "../../images/icon-self-care.svg";
import playIcon from "../../images/icon-play.svg"
export default function TimeCard (props) {
 
    const handleMore = () => {
    {/*alert("button press")*/} 
    }
    return (
        <div className = {`card-activity ${
            props.title === "Work" ? "work-layout":
            props.title === "Play" ? "play-layout":
            props.title === "Study" ? "study-layout":
            props.title === "Exercise" ? "exercise-layout":
            props.title === "Social" ? "social-layout":
            props.title === "Self Care" ? "selfcare-layout"
            :""}`} >
            <div className={`card-top-layout `}>

                <img className = "card-icon"src={
                    props.title === "Work" ? workIcon:
                    props.title === "Play" ? playIcon:
                    props.title === "Study" ? studyIcon:
                    props.title === "Exercise" ? excerciseIcon:
                    props.title === "Social" ? socialIcon:
                    props.title === "Self Care" ? selfcareIcon
                    :"#"
                } alt= {`icon ${props.title}`}>

                </img>
            
            </div>

            <div className="card-body">
                <div className="card-body-header">
                    <h3 className="title-activity">{props.title}</h3>
                    <button className="btn-more" onClick={handleMore} aria-label="More info">
                        <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fillRule="evenodd"/></svg>
                    </button>
                    
                </div>
                <div className="card-body-time">
                    <p className="current-time">{`${props.current}hrs`}</p>
                    <span className="previous-time">{`Last week ${props.previous}hrs`}</span>
                </div>
                
            </div>
            
        </div>
        
    )
}