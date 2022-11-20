import Header from "../../components/Header";
import React from "react";

function Profile(props) {

    const user = JSON.parse(localStorage.getItem("user"));
    return (
        console.log(user),
        <Header />
    );
};

export default Profile;