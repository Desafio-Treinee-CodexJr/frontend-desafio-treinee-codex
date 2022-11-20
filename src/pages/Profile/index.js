import Header from "../../components/Header";
import React from "react";
import api from "../../service/index";
import { useState, useEffect } from "react";


function Profile(props) {
    let [profileInfo, setProfileInfo] = useState([]);

    async function getUserInfo() {
        const response = await api.get(
            "/users/info",
            { headers: { "Content-Type": "application/json", "authorization": "Bearer " + localStorage.getItem("token") } },
        );
        setProfileInfo(response)
    }

    useEffect(() => {
        getUserInfo();
    }, [])

    return (
        <>
            <Header />
            <button onClick={() => console.log(profileInfo.data)}></button>
            <img href=''></img>
        </>
    );
};

export default Profile;