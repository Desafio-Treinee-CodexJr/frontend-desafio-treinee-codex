import React from "react";
import "./styles.css";

function SignButton(props){
    return(
        <button onClick={props.onClick} className="button">
            {props.text}
        </button>
    )
};

export default SignButton;