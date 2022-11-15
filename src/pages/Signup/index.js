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

    const [name, setName] = useState({ value: "" });
    const [gender, setGender] = useState({ value: "" });
    const [age, setAge] = useState({ value: "", invalidity: "" });
    const [email, setEmail] = useState({ value: "", invalidity: "" });
    const [password, setPassword] = useState({ value: "", invalidity: "" });
    const [secondPassword, setSecondPassword] = useState({ value: "", invalidity: "" });

    function changeEmail(e) {
        const value = e.target.value;
        setEmail({ ...email, value });
    };

    function changePassword(e) {
        const value = e.target.value;
        setPassword({ ...password, value });
    };

    function changeAge(e) {
        const value = e.target.value;
        setAge({ ...age, value })
    }

    function changeName(e) {
        const value = e.target.value;
        setName({ ...name, value })
    }

    function changeGender(e) {
        const value = e.target.value;
        setGender({ ...gender, value })
    }

    const validateForm = () => {
        const invalidityEmail = validateEmail(email.value);
        const invalidityPassword = validatePassword(password.value);

        setEmail({ ...email, invalidity: invalidityEmail });
        setPassword({ ...password, invalidity: invalidityPassword });

        return !invalidityEmail && !invalidityPassword ? true : false;
    };

    function changeSecondPassword(e) {
        const value = e.target.value;
        setSecondPassword({ ...secondPassword, value });
    };

    function passwordConfer() {
        if (secondPassword.value != password.value) {
            setPassword({ ...password, invalidity: "As senhas não coincidem" });
            return false;
        };
        return true;
    };

    const navigate = useNavigate();

    const submit = () => {
        if (validateForm() && passwordConfer()) {
            api.post(
                "/users/create",
                { email: email.value, password: password.value, age: age.value, name: name.value, gender: gender.value },
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
                        onChange={changeName}
                        placeholder="Escreva seu nome completo" />

                    <SignInput
                        label="Idade"
                        type="number"
                        onChange={changeAge}
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
                        onChange={changeSecondPassword}
                        type="password" />

                    <InvalidityMsg
                        msg={password.invalidity} />

                    <select name="genero" onChange={changeGender} id="selection-box" alt="Seleção de Gênero">
                        <option value="">Selecione o seu gênero</option>
                        <option value="Outro">Outro</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </select>

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