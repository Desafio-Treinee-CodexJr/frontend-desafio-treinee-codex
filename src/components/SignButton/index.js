import React from "react";

function SignButton(props){
    return(
        <button onClick={props.onClick} className="signButton">
            {props.text}
        </button>
    )
};

export default SignButton;