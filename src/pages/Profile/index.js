import Header from "../../components/Header";
import React from "react";
import api from "../../service/index";
import { useState, useEffect } from "react";
import "./styles.css";
import { useNavigate } from 'react-router-dom';

function Profile() {
    const [profileInfo, setProfileInfo] = useState([]);
    const [name, setName] = useState();
    const [age, setAge] = useState();
    const [photo, setPhoto] = useState();

    async function changeName(e) {
        let name = e.target.value;

        const response = await api.put("/users/info", { name: name }, {
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + localStorage.getItem("token")
            }
        });
        name = response.data.name;
        setName(name);
    };

    async function changeAge(e) {
        let age = e.target.value;

        const response = await api.put("/users/info", { age: age }, {
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + localStorage.getItem("token")
            }
        });
        age = response.data.age;
        setAge(age);
    };

    async function changePhoto(e) {
        let photo = e.target.value;
        setPhoto(photo);
        console.log(photo)
    };

    async function getUserInfo() {
        const response = await api.get(
            "/users/info",
            { headers: { "Content-Type": "application/json", "authorization": "Bearer " + localStorage.getItem("token") } },
        );
        setProfileInfo(response)
    }

    const navigate = useNavigate();

    async function sendPhoto() {
        const response = await api.put("/users/info", { photo: photo }, {
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + localStorage.getItem("token")
            }
        });
        window.location.reload(false)
    }

    useEffect(() => {
        getUserInfo();
    }, [])

    return (
        <>
            <Header />
            <div id='profile-infos'>
                <img id='profile-photo' src={profileInfo.data && profileInfo.data.photo}></img>
                <input type="text" id="photo-input" placeholder="Coloque a URL de sua foto" onChange={changePhoto}></input>
                <button id="send-photo-button" onClick={sendPhoto}>Enviar foto</button>
                <div id='profile-inputs'>
                    <label>Nome do usuário:</label>
                    <input type='text' className='profile-input' defaultValue={profileInfo.data && profileInfo.data.name} onChange={changeName}></input>
                    <label>Idade do usuário:</label>
                    <input type='number' className='profile-input' defaultValue={profileInfo.data && profileInfo.data.age} onChange={changeAge}></input>
                </div>
            </div>
        </>
    );
};

export default Profile;