import React from "react";

function SignInput(props){
    return(
        <div>
            <label>{props.label}</label>
            <input onChange={props.onChange} value={props.value} type={props.type}></input>
        </div>
    )  
};

export default SignInput;