import Header from "../../components/Header";
import "./styles.css";

function Signup(){
    return(
        <div>
            <h1>Cadastro</h1>
            <div class="box">
            <form action="form.php" method="POST" class="main-form">
                <div class="form-group">
                    <label>Primeiro Nome: </label>
                    <input type="text" placeholder="Escreva seu primeiro nome."/>
                </div>

                <div class="form-group">
                    <label>Sobrenome: </label>
                    <input type="text" placeholder="Escreva o seu sobrenome."/>
                </div>

                <div class="form-group">
                    <label>Gênero: </label>
                    <select name="genero">
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                        <option value="outro">Outro</option>
                    </select>
                </div>

                <div class="form-group">
                    <label>Idade: </label>
                    <input type="number" name="idade" placeholder="Escreva sua idade."/>
                </div>

                <div class="form-group">
                    <label>Primeiro Nome:</label>
                    <input type="text" placeholder="Escreva seu primeiro nome."/>
                </div>

                <div class="form-group">
                    <label>email:</label>
                    <input type="email" placeholder="Ex email@gmail.com."/>
                </div>

                <div class="form-group">
                    <label>Senha:</label>
                    <input type="password" placeholder="Informe uma senha."/>
                </div>

                <div class="form-group">
                    <label>Repete Senha:</label>
                    <input type="password" placeholder="\por favor, repita sua senha."/>
                </div>

                <div class="buttom">
                    <input type = "submit" name="submit" value="Submit"/>
                </div>

            </form>
            </div>
        </div>
    );
};

export default Signup;
