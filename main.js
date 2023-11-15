//Código feito na imersão
/*var numeroSecreto = parseInt(Math.random() * 1001);

while (chute != numeroSecreto) {

    var chute = prompt('Chute um número entre 0 e 1000');

    if (chute == numeroSecreto) {
        alert('Acertou');
    } else if (chute > numeroSecreto) {
        alert('Errou... O número secreto é menor');
    } else if (chute < numeroSecreto) {
        alert('Errou... O número secreto é maior');
    }
}
*/

//Desafio da imersão
var numeroSecreto = parseInt(Math.random() * 1000) + 1;
var chute;
var tentativas = 0;

while (chute != numeroSecreto && tentativas < 10) {

    tentativas++;
    chute = prompt('Chute um número entre 1 e 1000');

    if (chute == numeroSecreto) {
        alert('Acertou! Em ' + tentativas + ' tentativas.');
    } else if (chute > numeroSecreto) {
        alert('Errou... O número secreto é menor que ' + chute);
    } else if (chute < numeroSecreto) {
        alert('Errou... O número secreto é maior que ' + chute);
    }
}

if (chute >= 10) {
    alert('Você perdeu! O número secreto era ' + numeroSecreto);
}