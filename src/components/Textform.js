import React, { useState } from 'react';


export default function Textform(props) {
    const [text, setText] = useState("Enter Text Here");
    useState("Hey There");

    const handleOnClick = () => {
        console.log("Clicked");
    }
    const handleOnChange = () => {
        console.log("Clicked");
    }
    return (
        <div className='container'>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" onChange={handleOnChange} value={text} id="exampleFormControlTextarea1" rows="3"></textarea>
                <button className='btn btn-primary mt-3' onClick={handleOnClick}>Convert to Uppercase</button>
            </div>
        </div>
    );
}
