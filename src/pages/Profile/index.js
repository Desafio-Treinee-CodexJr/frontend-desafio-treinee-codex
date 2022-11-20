import Header from "../../components/Header";
import React from "react";

function Profile(props) {

    const user = JSON.parse(localStorage.getItem("user"));
    const photo = user.data.user.photo;
    return (
        console.log(photo),
        //<Header />
        <img>
            src = {photo}
            alt="Foto de perfil"
        </img>
    );
};

export default Profile;