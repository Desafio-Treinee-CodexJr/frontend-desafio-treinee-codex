import SignupButton from "../../components/SignButton";
import SignupInput from "../../components/SignInput";
import React, { useState } from "react";
import InvalidityMsg from "../../components/InvalidityMsg";
import { validateEmail, validatePassword } from "../../util/validation";
import "./styles.css";
import api from "../../service"
import Header from "../../components/Header";

function Signup() {

    const [name, setName] = useState("");
    const [sobrenome, SetName] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState({ value: "", invalidity: "" });
    const [password, setPassword] = useState({ value: "", invalidity: "" });

    return (
        <div id="signup">
            <div id="signup">
                <div id="loginInputs">

                    <span
                        id="signupTitle">Cadastre-se
                    </span>

                    <SignupInput
                        label="Nome"
                        type="name"
                        placeholder="Escreva seu nome" />

                    <SignupInput
                        label="Sobrenome"
                        type="name"
                        placeholder="Escreva seu sobrenome" />

                    <div class="estilizavel">
                        <label>Genero</label>
                        <select name="genero">
                            <option value="masculino">Masculino</option>
                            <option value="feminino">Feminino</option>
                            <option value="outro">Outro</option>
                        </select>
                    </div>

                    <SignupInput
                        label="Idade"
                        type="number"
                        placeholder="Informe sua idade" />

                    <SignupInput
                        label="Email"
                        type="email"
                        placeholder="Escreva seu email" />

                    <SignupInput
                        label="Senha"
                        type="password" />

                    <SignupInput
                        label="Repita sua senha"
                        type="password" />

                    <SignupButton
                        onClick={SignupButton}
                        text="Realizar Cadastro" />
                    
                    <a
                        className="redirectLinks"
                        href="/signup">Já possui uma conta?</a>
                    
                </div>
            </div>
        </div>
    );
};

export default Signup;