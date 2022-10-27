import React from "react";

function SignButton(props){
    return(
        <button onClick={props.onClick}>
            {props.text}
        </button>
    )
};

export default SignButton;