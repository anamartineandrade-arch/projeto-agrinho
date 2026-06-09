let sustentabilidade = 50;
let producao = 50;
let lucro = 50;
let impacto = 50;

function atualizar(){
    document.getElementById("sust").textContent = sustentabilidade;
    document.getElementById("prod").textContent = producao;
    document.getElementById("lucro").textContent = lucro;
    document.getElementById("impacto").textContent = impacto;
}

function agua(){
    sustentabilidade += 10;
    impacto -= 5;
    atualizar();
}

function maquinas(){
    producao += 10;
    lucro += 10;
    sustentabilidade += 5;
    atualizar();
}

function polinizadores(){
    sustentabilidade += 15;
    producao += 5;
    atualizar();
}

function agrotoxicos(){
    sustentabilidade += 10;
    impacto -= 10;
    atualizar();
}

function quizCerto(){
    document.getElementById("resultadoQuiz").innerHTML =
    "✅ Correto! A irrigação inteligente economiza água.";
}

function quizErrado(){
    document.getElementById("resultadoQuiz").innerHTML =
    "❌ Errado! O desmatamento prejudica o meio ambiente.";
}

function finalizar(){

    if(sustentabilidade >= 80){
        document.getElementById("mensagemFinal").innerHTML =
        "🏆 Parabéns! Sua fazenda é sustentável e produtiva!";
    }else{
        document.getElementById("mensagemFinal").innerHTML =
        "⚠️ Sua fazenda pode melhorar. Tente fazer escolhas mais sustentáveis.";
    }

}
