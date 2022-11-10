import { Link } from "react-router-dom";
import { useState } from "react";
import { LayoutComponents } from "../../components/LayoutComponents"


export const Register = () => {
  const [genero, setGenero] = useState("");
  const [idade, setIdade] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [sobrenome, setSobrenome] = useState("");

  return (
    <LayoutComponents >
      <form className="login-form">
        <span className="login-form-title"> Crie a sua conta </span>

        <div className="wrap-input">
          <input
            className={name !== "" ? "has-val input" : "input"}
            type="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Escreva seu nome"></span>
        </div>

        <div className="wrap-input">
          <input
            className={name !== "" ? "has-val input" : "input"}
            type="sobrename"
            value={name}
            onChange={(e) => setSobrenome(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Escreva seu sobrenome"></span>
        </div>

        <div class="wrap-input">
          <label>Gênero: </label>
          <select name="genero">
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="outro">Outro</option>
          </select>
          <input>
          type="number"
          name="genero"
          onChange={(e) => setGenero(e.target.value)}
          </input>
        </div>

        <div class="wrap-input">
          <label>Idade: </label>
          <input
            type="number"
            name="idade"
            placeholder="Escreva sua idade."
            onChange={(e) => setIdade(e.target.value)} />
        </div>

        <div className="wrap-input">
          <input
            className={email !== "" ? "has-val input" : "input"}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Escreva seu email"></span>
        </div>

        <div className="wrap-input">
          <input
            className={password !== "" ? "has-val input" : "input"}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="focus-input" data-placeholder="Escreva sua senha"></span>
        </div>

        <div className="container-login-form-btn">
          <button className="login-form-btn">Login</button>
        </div>

        <div className="text-center">
          <span className="txt1">Já possui conta? </span>
          <Link className="txt2" to="/login">
            Acessar com Email e Senha.
          </Link>
        </div>
      </form>
    </LayoutComponents>
  )
}