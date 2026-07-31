const formulario = document.querySelector("#form-login");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    let usuario = document.querySelector("#usuario").value;
    let senha = document.querySelector("#senha").value;


    if(usuario === "admin" && senha === "1234"){

        window.location.href = "painel.html";

    } else {

        document.querySelector("#mensagem").innerHTML =
        "Usuario ou senha incorretos";

    }

});