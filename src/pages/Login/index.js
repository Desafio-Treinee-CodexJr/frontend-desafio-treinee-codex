import SignButton from "../../components/SignButton";
import SignInput from "../../components/SignInput";
import React, { useState, useEffect } from "react";
import InvalidityMsg from "../../components/InvalidityMsg";
import { validateEmail, validatePassword } from "../../util/validation";
import "./styles.css";
import api from "../../service"
import Header from "../../components/Header";
import axios from "axios";

function Login() {
    useEffect(() => {
        axios.get("https://backend-desafio-treinee-codex.herokuapp.com")
        .then((response) => {
            console.log(response.data)
        })
        .catch(() => {
            console.log("Erro ao conectar")
        })
    }, [])

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

    const submit = () => {
        if (validateForm()) {
            /*             api.post(
                            "/user/signIn",
                            { email: email.value, password: password.value},
                            {headers: { "Content-Type": "application/json"}},
                        )
                        .then((response) => {
                            const token = response.data.token;
                            localStorage.setItem("token", token);
                            localStorage.setItem("user", JSON.stringify(response));
                            this.props.history.push("/home");
                        })
                        .catch((error) => {
                            console.log(error.response);
                            const msg = error.response.data;
            
                            if (msg.indexOf("email não cadastrado") !== -1) setEmail({ ...email, invalidity: "Emeial não cadastrado" });
                            else if (msg == "Senha inválida") setPassword({ ...password, invalidity: msg })
                        }) */
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