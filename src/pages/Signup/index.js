import SignButton from "../../components/SignButton";
import SignInput from "../../components/SignInput";
import React, { useState } from "react";
import InvalidityMsg from "../../components/InvalidityMsg";
import { validateEmail, validatePassword } from "../../util/validation";
import "./styles.css";
import api from "../../service"
import Header from "../../components/Header";
import { useNavigate } from 'react-router-dom';

function Signup(props) {

    const [name, setName] = useState("");
    const [sobrenome, SetName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState({ value: "", invalidity: "" });
    const [password, setPassword] = useState({ value: "", invalidity: "" });

    function changeEmail(e) {
        const value = e.target.value;
        setEmail({ ...email, value });
    };

    function changePassword(e) {
        const value = e.target.value;
        setPassword({ ...password, value });
    };

    function changeName(e) {
        const value = e.target.value;
        setName({ ...name, value });
    };

    function changeSobrenome(e) {
        const value = e.target.value;
        SetName({ ...sobrenome, value });
    };

    function changeGender(e) {
        const value = e.target.value;
        setGender({ ...gender, value });
    }

    function changeAge(e) {
        const value = e.target.value;
        setAge({ ...age, value });
    }

    const validateForm = () => {
        const invalidityEmail = validateEmail(email.value);
        const invalidityPassword = validatePassword(password.value);
        const invalidityName = validateName(name.value);

        setEmail({ ...email, invalidity: invalidityEmail });
        setPassword({ ...password, invalidity: invalidityPassword });
        setName({ ...name, invalidity: invalidityName });

        return !invalidityEmail && !invalidityPassword && !invalidityName ? true : false;
    };

    const navigate = useNavigate();

    const submit = () => {
        if (validateForm()) {
            api.post(
                "/users/create",
                { email: email.value, password: password.value, name: name.value , sobrenome: sobrenome.value, gender: gender.value, age: age.value},
                { headers: { "Content-Type": "application/json" } },
            )
                .then((response) => {
                    const token = response.data.token;
                    localStorage.setItem("token", token);
                    localStorage.setItem("user", JSON.stringify(response));
                    navigate('/home');
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    };

    return (
        <div>
            <Header />
            <div id="signup">
                <div id="loginInputs">

                    <span
                        id="signupTitle">Cadastre-se
                    </span>

                    <SignInput
                        label="Nome"
                        type="name"
                        placeholder="Escreva seu nome" />

                    <SignInput
                        label="Sobrenome"
                        type="name"
                        placeholder="Escreva seu sobrenome" />

                    <div className="estilizavel">
                        <label>Genero</label>
                        <select name="genero">
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>

                    <SignInput
                        label="Idade"
                        type="number"
                        placeholder="Informe sua idade" />

                    <SignInput
                        label="Email"
                        type="email"
                        onChange={changeEmail}
                        placeholder="Escreva seu email" />

                    <InvalidityMsg
                        msg={email.invalidity} />

                    <SignInput
                        label="Senha"
                        onChange={changePassword}
                        type="password" />

                    <SignInput
                        label="Repita sua senha"
                        type="password" />

                    <InvalidityMsg
                        msg={password.invalidity} />    

                    <SignButton
                        onClick={submit}
                        text="Realizar Cadastro" />

                    <a
                        className="redirectLinks"
                        href="/">Já possui uma conta?</a>

                </div>
            </div>
        </div>
    );
};

export default Signup;