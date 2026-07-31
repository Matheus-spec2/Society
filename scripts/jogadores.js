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
    "Miguel",

];

const tbody = document.querySelector("#lista-jogadores");

jogadores.forEach(nome => {

    const tr = document.createElement("tr");

    // Coluna do nome
    const tdNome = document.createElement("td");
    tdNome.textContent = nome;
    tr.appendChild(tdNome);

    // 12 meses
    for (let i = 0; i < 12; i++) {

        const td = document.createElement("td");
        td.textContent = "0";
        td.classList.add("pagamento");
        td.contentEditable = true;

        tr.appendChild(td);
    }

    tbody.appendChild(tr);

});