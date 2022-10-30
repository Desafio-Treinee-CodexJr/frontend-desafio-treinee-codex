import React from "react";
import "./styles.css";

const InvalidityMsg = (props) => {
    return(

        <div className="invalidityMessage">
            <span>{props.msg}</span>
        </div>

    );
};

export default InvalidityMsg;