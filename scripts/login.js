const formulario = document.querySelector("#form-login");

formulario.addEventListener("submit", async function(event) {

    event.preventDefault();

    const usuario = document.querySelector("#usuario").value.trim();
    const senha = document.querySelector("#senha").value;

    const mensagem = document.querySelector("#mensagem");


    // Faz login no Supabase
    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: usuario,
        password: senha
    });


    if (error) {

        console.error("Erro no login:", error);

        mensagem.textContent = "Usuário ou senha incorretos";

        return;
    }


    console.log("Login realizado:", data.user);

    // Login deu certo
    window.location.href = "painel.html";

}); // 