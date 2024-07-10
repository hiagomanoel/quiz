function calcularPontuacao() {
    console.log("A função calcularPontuacao foi chamada.");

    var respostas = document.querySelectorAll('select');
    var pontos = 0;
    var todasRespondidas = true;

    var respostasCorretas = ['a', 'a', 'c'];

    for (var i = 0; i < respostas.length; i++) {
        var respostaSelecionada = respostas[i].value;
        console.log("Pergunta " + (i + 1) + ": resposta selecionada = " + respostaSelecionada);
        
        if (respostaSelecionada === '') {
            todasRespondidas = false;
            break;
        }
        
        if (respostaSelecionada === respostasCorretas[i]) {
            pontos += 1;
        }
    }
        
    if (todasRespondidas) {
        document.getElementById('pontuacao').value = pontos.toString();
        
        alert("Quiz Finalizado! Confira sua pontuação: " + pontos);
        
        if (pontos === 3) {
            alert("Parabéns! Você acertou todas as perguntas e fez a pontuação máxima!");
        }
    } else {
        document.getElementById('aviso').textContent = "Por favor, responda todas as perguntas!";
    }
}
