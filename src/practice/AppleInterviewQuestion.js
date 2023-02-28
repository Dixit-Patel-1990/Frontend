import React from "react";
import './csspractice/appleInterviewQuestion.css'

const AppleInterviewQuestion = () => {

    return (
        <div className="container">
            <div className="parent">
                <input type={"radio"} name="circle" id="c1"/>
                <label htmlFor="c1" className="circle circle1"> </label>
                <input type={"radio"} name="circle" id="c2"/>
                <label htmlFor="c2" className="circle circle2"></label>
                <input type={"radio"} name="circle" id="c3"/>
                <label htmlFor="c3" className="circle circle3"></label>
             </div>
        </div>
    );
}
export default AppleInterviewQuestion;