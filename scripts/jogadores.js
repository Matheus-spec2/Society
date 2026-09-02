
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
    "Alef"
];

const ano = 2026;

const tbody = document.querySelector("#lista-jogadores");

console.log("jogadores.js carregou");
console.log("tbody:", tbody);
console.log("supabaseClient:", supabaseClient);


// ==========================================
// CRIAR A TABELA
// ==========================================

function criarTabela() {

    jogadores.forEach(nome => {

        const tr = document.createElement("tr");

        // Nome
        const tdNome = document.createElement("td");

        tdNome.textContent = nome;

        tdNome.classList.add("nome-jogador");

        tr.appendChild(tdNome);


        // 12 meses
        for (let mes = 1; mes <= 12; mes++) {

            const td = document.createElement("td");

            td.classList.add("pagamento");

            td.contentEditable = true;

            td.textContent = "0";

            td.dataset.jogador = nome;
            td.dataset.mes = mes;

            atualizarCor(td);

            tr.appendChild(td);
        }

        tbody.appendChild(tr);
    });

    console.log("Tabela criada com sucesso!");

    configurarEventos();
}


// ==========================================
// CARREGAR PAGAMENTOS
// ==========================================

async function carregarPagamentos() {

    console.log("Buscando pagamentos...");

    const { data, error } = await supabaseClient
        .from("pagamentos")
        .select("*")
        .eq("ano", ano);

    if (error) {

        console.error("ERRO DO SUPABASE:", error);

        return;
    }

    console.log("Pagamentos encontrados:", data);


    data.forEach(pagamento => {

        const celula = document.querySelector(
            `.pagamento[data-jogador="${pagamento.jogador}"][data-mes="${pagamento.mes}"]`
        );

        if (celula) {

            celula.textContent = pagamento.valor;

            atualizarCor(celula);
        }
    });
}


// ==========================================
// CORES
// ==========================================

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


// ==========================================
// EVENTOS
// ==========================================

function configurarEventos() {

    const pagamentos = document.querySelectorAll(".pagamento");

    pagamentos.forEach(celula => {

        celula.addEventListener("keydown", function(event) {

            if (event.key === "Enter") {

                event.preventDefault();

                celula.blur();
            }
        });


        celula.addEventListener("blur", async function() {

            let valor = Number(
                celula.textContent.replace(",", ".")
            );

            if (isNaN(valor) || valor < 0) {

                valor = 0;
            }

            celula.textContent = valor;

            atualizarCor(celula);


            const jogador = celula.dataset.jogador;
            const mes = Number(celula.dataset.mes);


            console.log(
                "Salvando:",
                jogador,
                mes,
                valor
            );


            const { error } = await supabaseClient
                .from("pagamentos")
                .upsert(
                    {
                        jogador: jogador,
                        mes: mes,
                        valor: valor,
                        ano: ano
                    },
                    {
                        onConflict: "jogador,mes,ano"
                    }
                );


            if (error) {

                console.error(
                    "ERRO AO SALVAR:",
                    error
                );

                alert("Erro ao salvar pagamento.");

            } else {

                console.log("Pagamento salvo!");

            }
        });
    });
}


// ==========================================
// INICIAR
// ==========================================

criarTabela();

carregarPagamentos();

