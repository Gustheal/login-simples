// Seleciona os elementos da página

const formulario = document.getElementById("formLogin");

const email = document.getElementById("email");

const senha = document.getElementById("senha");

const resultado = document.getElementById("resultado");

// Quando clicar no botão Entrar

formulario.addEventListener("submit", function(event){

    // Impede o envio do formulário

    event.preventDefault();

    // Remove espaços em branco

    let emailValor = email.value.trim();

    let senhaValor = senha.value.trim();

    // Verifica se os campos foram preenchidos

    if(emailValor === "" || senhaValor === ""){

        resultado.textContent = "Preencha todos os campos.";

        resultado.style.color = "red";

        return;

    }

    // Verifica se o e-mail possui @ e .

    if(emailValor.indexOf("@") === -1 || emailValor.indexOf(".") === -1){

        resultado.textContent = "Digite um e-mail válido.";

        resultado.style.color = "red";

        return;

    }

    // Login simulado

    alert("Login realizado com sucesso!");

    // Limpa o formulário

    formulario.reset();

    // Remove mensagens anteriores

    resultado.textContent = "";

});