import SignButton from "../../components/SignButton";
import SignInput from "../../components/SignInput";
import React, { useState } from "react";
import InvalidityMsg from "../../components/InvalidityMsg";
import { validateEmail, validatePassword } from "../../util/validation";
import "./styles.css";
import api from "../../service"
import Header from "../../components/Header";

function Login() {

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
        <LayoutComponents>
            <form className="login-form">
                <span className="login-form-title"> Bem vindo </span>

                <div className="wrap-input">
                    <input
                        className={email !== "" ? "has-val input" : "input"}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Email"></span>
                    <InvalidityMsg msg={email.invalidity}/>
                </div>

                <div className="wrap-input">
                    <input
                        className={password !== "" ? "has-val input" : "input"}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="focus-input" data-placeholder="Password"></span>
                    <InvalidityMsg msg={password.invalidity}/>
                </div>

                <div className="container-login-form-btn">
                    <button className="login-form-btn">Entrar</button>
                </div>

                <div className="text-center">
                    <span className="txt1">Não possui conta? </span>
                    <Link className="txt2" to="/register">
                        Criar conta.
                    </Link>
                </div>
            </form>
        </LayoutComponents>
    );
};

export default Login;