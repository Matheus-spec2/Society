const pagamentos = document.querySelectorAll(".pagamento");

pagamentos.forEach(celula => {

    celula.addEventListener("keydown", function(event){
        if (event.key === "Enter"){
            event.preventDefault();
            celula.blur();
        }


    });

    celula.addEventListener("blur", function(){
        let valor = Number(celula.textContent);
        if (valor > 0){
            celula.style.backgroundColor = "green";
              celula.style.color = "white";
        } else{
            celula.style.backgroundColor = "red";
            celula.style.color = "white";
        }
        

    });

});