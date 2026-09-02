const formulario = document.querySelector("#form-login");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const usuario = document.querySelector("#usuario").value.trim();
    const senha = document.querySelector("#senha").value;

    const mensagem = document.querySelector("#mensagem");


    if (usuario === "admin" && senha === "1234") {

        window.location.href = "painel.html";

    } else {

        mensagem.textContent = "Usuário ou senha incorretos";

    }

});