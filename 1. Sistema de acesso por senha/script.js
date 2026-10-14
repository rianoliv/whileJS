let senhaDigitada = Number(prompt("Digite a senha:"));

while (senhaDigitada !== 1234) {
    alert("Senha incorreta! Tente novamente");
     senhaDigitada = Number(prompt("Digite a senha:"));
}

 alert("Senha correta!")
