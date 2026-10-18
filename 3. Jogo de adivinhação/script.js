let numeroSecreto = Math.floor(Math.random() * 20) + 1;
let numeroUsuario = Number(prompt("Digite Um Número entre 1 e 20:"));
let tentativas = 1;

while (numeroSecreto !== numeroUsuario) {
    tentativas += 1;
    if (numeroSecreto > numeroUsuario) {
        alert("O número secreto é Maior.");
    }
    else {alert("O número secreto e Menor.");}

    numeroUsuario = Number(prompt("Digite Um Número entre 1 e 20:"));
}

alert(`Parabéns!! Você acertou \n Quantidades de tentativas: ${tentativas}`)