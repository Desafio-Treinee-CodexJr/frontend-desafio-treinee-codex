import React from "react";
import "./styles.css";

function SignButton(props){
    return(
        <button onClick={props.onClick} id="signin-button">
            {props.text}
        </button>
    )
};

export default SignButton;