import SignButton from "../../components/SignButton";
import SignInput from "../../components/SignInput";

function Login(){
    return(
        <div>
            <div class="login">
                <div class="loginInputs">
                    <span>Login</span>
                    <SignInput label="Email" type="email"/>
                    <SignInput label="Senha" type="password"/>
                    <SignButton text="Entrar"/>
                    <a href="/">Esqueceu a senha?</a>
                    <a href="/signup">Cadastre-se</a>
                </div>
            </div>
        </div>
    );
};

export default Login