export const validateName = (name) => {
    const regex = /[^a-zà-ú]/gi;
    let response = "";

    if (regex.test(name)) response = "Seu nome deve conter apenas letras";
    else if (name.length < 3) response = "Seu nome deve ter pelo menos 3 letras";
    else if (name.length > 100) response = "Seu nome deve ter no máximo 100 letras";

    return response;
};

export const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    return regex.test(email) ? "" : "Email Inválido!";
}

export const validatePassword = (password) => {
    let response = ""

    if (password.length < 6) response = "Sua senha deve conter pelo menos 6 caracteres";
    else if (password.length > 20) response = "Sua senha deve ter no máximo 20 caracteres";

    return response;
};
