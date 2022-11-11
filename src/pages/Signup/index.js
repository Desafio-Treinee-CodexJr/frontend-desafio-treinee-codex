import SignButton from "../../components/SignButton";
import SignInput from "../../components/SignInput";
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
            <form id="signupInputs">

                <div id>
                    <label>Primeiro Nome: </label>
                    <input
                        type="text"
                        placeholder="Escreva seu primeiro nome." />
                </div>

                <div>
                    <label>Sobrenome: </label>
                    <input
                        type="text"
                        placeholder="Escreva o seu sobrenome." />
                </div>

                <div>
                    <label>Gênero: </label>
                    <select name="genero">
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="outro">Outro</option>
                    </select>
                </div>

                <div>
                    <label>Idade: </label>
                    <input
                        type="number"
                        name="idade"
                        placeholder="Escreva sua idade." />
                </div>

                <div>
                    <label>email:</label>
                    <input
                        type="email"
                        placeholder="Ex: email@gmail.com." />
                </div>

                <div>
                    <label>Senha:</label>
                    <input
                        type="password"
                        placeholder="Informe uma senha." />
                </div>

                <div>
                    <label>Repete Senha:</label>
                    <input
                        type="password"
                        placeholder="Por favor, repita sua senha."
                    />
                </div>

                <div>
                    <input
                        type="submit"
                        name="submit"
                        value="Submit" />
                </div>

            </form>
        </div>
    );
};

export default Signup;
