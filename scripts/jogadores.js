const jogadores = [
    "Fernando",
    "Demir",
    "Daniel",
    "Raimundinho",
    "Denner",
    "Ronaldinho",
    "Jonathan",
    "Emerson",
    "João Lucas",
    "João Gutão",
    "Mané",
    "Roberto",
    "Marcio",
    "Cobrinha",
    "Rodolfo",
    "Adilson",
    "Gutão",
    "Thiaguinho",
    "Deivid",
    "Branco",
    "Alan",
    "Dário",
    "Rato",
    "Teo",
    "Sapão",
    "Bebe",
    "Lucas",
    "Thiago",
    "Robson",
    "Miguel"
];

const tbody = document.querySelector("#lista-jogadores");

jogadores.forEach((nome, jogadorIndex) => {

    const tr = document.createElement("tr");

    // Nome
    const tdNome = document.createElement("td");
    tdNome.textContent = nome;
    tdNome.classList.add("nome-jogador");
    tr.appendChild(tdNome);

    // 12 meses
    for (let mes = 0; mes < 12; mes++) {

        const td = document.createElement("td");

        td.classList.add("pagamento");

        td.contentEditable = true;

        td.dataset.jogador = jogadorIndex;
        td.dataset.mes = mes;

        // Recupera o pagamento salvo
        const chave = `pagamento-${jogadorIndex}-${mes}`;

        const valorSalvo = localStorage.getItem(chave);

        td.textContent = valorSalvo !== null ? valorSalvo : "0";

        atualizarCor(td);

        tr.appendChild(td);
    }

    tbody.appendChild(tr);
});


const pagamentos = document.querySelectorAll(".pagamento");


pagamentos.forEach(celula => {

    // Enter confirma a alteração
    celula.addEventListener("keydown", function(event) {

        if (event.key === "Enter") {

            event.preventDefault();

            celula.blur();
        }

    });


    // Quando termina de editar
    celula.addEventListener("blur", function() {

        let valor = Number(
            celula.textContent.replace(",", ".")
        );

        // Impede valores inválidos
        if (isNaN(valor) || valor < 0) {
            valor = 0;
        }

        celula.textContent = valor;

        const jogador = celula.dataset.jogador;
        const mes = celula.dataset.mes;

        const chave = `pagamento-${jogador}-${mes}`;

        // Salva no navegador
        localStorage.setItem(chave, valor);

        atualizarCor(celula);
    });

});


function atualizarCor(celula) {

    const valor = Number(
        celula.textContent.replace(",", ".")
    );

    if (valor > 0) {

        celula.style.backgroundColor = "green";
        celula.style.color = "white";

    } else {

        celula.style.backgroundColor = "red";
        celula.style.color = "white";
    }
}