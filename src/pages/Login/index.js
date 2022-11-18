import SignButton from "../../components/SignButton";
import SignInput from "../../components/SignInput";
import React, { useState, useEffect } from "react";
import InvalidityMsg from "../../components/InvalidityMsg";
import { validateEmail, validatePassword } from "../../util/validation";
import "./styles.css";
import api from "../../service"
import Header from "../../components/Header";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Login() {
/*     useEffect(() => {
        axios.get("https://backend-desafio-treinee-codex.herokuapp.com/users")
            .then((response) => {
                console.log(response.data)
            })
            .catch(() => {
                console.log("Erro ao conectar")
            })
    }, []) */

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

    const validateForm = () => {
        const invalidityEmail = validateEmail(email.value);
        const invalidityPassword = validatePassword(password.value);

        setEmail({ ...email, invalidity: invalidityEmail });
        setPassword({ ...password, invalidity: invalidityPassword });

        return !invalidityEmail && !invalidityPassword ? true : false;
    };

    const navigate = useNavigate()

    const submit = () => {
        if (validateForm()) {
            api.post(
                "/users/auth",
                { email: email.value, password: password.value },
                { headers: { "Content-Type": "application/json" } },
            )
                .then((response) => {
                    const token = response.data.token;
                    localStorage.setItem("token", token);
                    localStorage.setItem("user", JSON.stringify(response));
                    localStorage.setItem("logged", "true");
                    const usertest = response.data; 
                    navigate('/home');
                })
                .catch((error) => {
                    console.log(error.response);
                    const msg = error.response.data.error;

                    if (msg.indexOf("Usuário não registrado!") !== -1) setEmail({ ...email, invalidity: "Email não cadastrado" });
                    else if (msg === "Erro ao autenticar usuário!") setPassword({ ...password, invalidity: "Senha incorreta" })
                })
        }
    };

    return (
        <div>
            <Header />
            <div id="login">
                <div id="loginInputs">

                    <span
                        id="loginTitle">Login
                    </span>

                    <SignInput
                        label="Email"
                        type="email"
                        value={email.value}
                        onChange={changeEmail} />

                    <InvalidityMsg
                        msg={email.invalidity} />

                    <SignInput
                        label="Senha"
                        type="password"
                        value={password.value}
                        onChange={changePassword} />

                    <InvalidityMsg
                        msg={password.invalidity} />

                    <SignButton
                        onClick={submit}
                        text="Entrar" />

                    <a
                        className="redirectLinks"
                        href="/">Esqueceu a senha?</a>

                    <a
                        className="redirectLinks"
                        href="/login">Cadastre-se</a>
                </div>
            </div>
        </div>

    );
};

export default Login;