import SignButton from "../../components/SignButton";
import SignInput from "../../components/SignInput";

function Login(){
    return(
        <div>
            <div class="Login">
                <span>Login</span>
                <div class="Login-Inputs">
                    <SignInput label="Email" type="email"/>
                    <SignInput label="Senha" type="password"/>
                    <a href="/">Esqueceu a senha?</a>
                    <SignButton text="Entrar"/>
                    <a href="/signup">Cadastre-se</a>
                </div>
            </div>
        </div>
    );
};

export default Login